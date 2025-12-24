import { useState, useCallback } from 'react';
import { GameState, Team, Round, Question, Category, createEmptyRound } from '@/types/game';
import { GameSetup } from './GameSetup';
import { GameEditor } from './GameEditor';
import { GameBoard } from './GameBoard';
import { QuestionModal } from './QuestionModal';
import { FinalRound } from './FinalRound';
import { GameResults } from './GameResults';

const initialState: GameState = {
  teams: [],
  rounds: [
    createEmptyRound(1, 1),
    createEmptyRound(2, 2),
  ],
  currentRound: 0,
  currentQuestion: null,
  currentCategory: null,
  showAnswer: false,
  gamePhase: 'setup',
  finalWagers: {},
  finalAnswers: {},
};

export const JeopardyGame = () => {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const handleStartEditor = useCallback((teams: Team[]) => {
    setGameState(prev => ({
      ...prev,
      teams,
      gamePhase: 'editor',
    }));
  }, []);

  const handleUpdateRounds = useCallback((rounds: Round[]) => {
    setGameState(prev => ({ ...prev, rounds }));
  }, []);

  const handleStartGame = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      gamePhase: 'playing',
      currentRound: 0,
    }));
  }, []);

  const handleBackToSetup = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      gamePhase: 'setup',
    }));
  }, []);

  const handleSelectQuestion = useCallback((category: Category, question: Question) => {
    setGameState(prev => ({
      ...prev,
      currentQuestion: question,
      currentCategory: category,
      showAnswer: false,
    }));
  }, []);

  const handleShowAnswer = useCallback(() => {
    setGameState(prev => ({ ...prev, showAnswer: true }));
  }, []);

  const handleCorrectAnswer = useCallback((teamId: string) => {
    if (!gameState.currentQuestion) return;
    
    const currentRound = gameState.rounds[gameState.currentRound];
    const points = gameState.currentQuestion.points * currentRound.pointMultiplier;

    setGameState(prev => ({
      ...prev,
      teams: prev.teams.map(t => 
        t.id === teamId ? { ...t, score: t.score + points } : t
      ),
      rounds: prev.rounds.map((round, idx) => {
        if (idx !== prev.currentRound) return round;
        return {
          ...round,
          categories: round.categories.map(cat => {
            if (cat.id !== prev.currentCategory?.id) return cat;
            return {
              ...cat,
              questions: cat.questions.map(q => 
                q.id === prev.currentQuestion?.id ? { ...q, isPlayed: true } : q
              ),
            };
          }),
        };
      }),
      currentQuestion: null,
      currentCategory: null,
      showAnswer: false,
    }));
  }, [gameState.currentQuestion, gameState.currentRound, gameState.rounds]);

  const handleWrongAnswer = useCallback((teamId: string) => {
    if (!gameState.currentQuestion) return;
    
    const currentRound = gameState.rounds[gameState.currentRound];
    const points = gameState.currentQuestion.points * currentRound.pointMultiplier;

    setGameState(prev => ({
      ...prev,
      teams: prev.teams.map(t => 
        t.id === teamId ? { ...t, score: t.score - points } : t
      ),
    }));
  }, [gameState.currentQuestion, gameState.currentRound, gameState.rounds]);

  const handleCloseQuestion = useCallback(() => {
    if (!gameState.currentQuestion) return;

    setGameState(prev => ({
      ...prev,
      rounds: prev.rounds.map((round, idx) => {
        if (idx !== prev.currentRound) return round;
        return {
          ...round,
          categories: round.categories.map(cat => {
            if (cat.id !== prev.currentCategory?.id) return cat;
            return {
              ...cat,
              questions: cat.questions.map(q => 
                q.id === prev.currentQuestion?.id ? { ...q, isPlayed: true } : q
              ),
            };
          }),
        };
      }),
      currentQuestion: null,
      currentCategory: null,
      showAnswer: false,
    }));
  }, [gameState.currentQuestion, gameState.currentRound, gameState.currentCategory]);

  const handleUpdateScore = useCallback((teamId: string, delta: number) => {
    setGameState(prev => ({
      ...prev,
      teams: prev.teams.map(t => 
        t.id === teamId ? { ...t, score: t.score + delta } : t
      ),
    }));
  }, []);

  const handleNextRound = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      currentRound: prev.currentRound + 1,
    }));
  }, []);

  const handleFinalRound = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      gamePhase: 'final',
    }));
  }, []);

  const handleFinalFinish = useCallback((updatedTeams: Team[]) => {
    setGameState(prev => ({
      ...prev,
      teams: updatedTeams,
      gamePhase: 'results',
    }));
  }, []);

  const handlePlayAgain = useCallback(() => {
    // Reset scores and played questions, keep the game structure
    setGameState(prev => ({
      ...prev,
      teams: prev.teams.map(t => ({ ...t, score: 0 })),
      rounds: prev.rounds.map(round => ({
        ...round,
        categories: round.categories.map(cat => ({
          ...cat,
          questions: cat.questions.map(q => ({ ...q, isPlayed: false })),
        })),
      })),
      currentRound: 0,
      gamePhase: 'playing',
    }));
  }, []);

  const handleNewGame = useCallback(() => {
    setGameState(initialState);
  }, []);

  const currentRound = gameState.rounds[gameState.currentRound];

  return (
    <>
      {gameState.gamePhase === 'setup' && (
        <GameSetup onStartEditor={handleStartEditor} />
      )}

      {gameState.gamePhase === 'editor' && (
        <GameEditor
          rounds={gameState.rounds}
          teams={gameState.teams}
          onUpdateRounds={handleUpdateRounds}
          onStartGame={handleStartGame}
          onBack={handleBackToSetup}
        />
      )}

      {gameState.gamePhase === 'playing' && currentRound && (
        <>
          <GameBoard
            round={currentRound}
            teams={gameState.teams}
            onSelectQuestion={handleSelectQuestion}
            onUpdateScore={handleUpdateScore}
            onNextRound={handleNextRound}
            onFinalRound={handleFinalRound}
            currentRoundIndex={gameState.currentRound}
            totalRounds={gameState.rounds.length}
          />
          <QuestionModal
            question={gameState.currentQuestion}
            category={gameState.currentCategory}
            round={currentRound}
            teams={gameState.teams}
            showAnswer={gameState.showAnswer}
            onShowAnswer={handleShowAnswer}
            onCorrect={handleCorrectAnswer}
            onWrong={handleWrongAnswer}
            onClose={handleCloseQuestion}
          />
        </>
      )}

      {gameState.gamePhase === 'final' && (
        <FinalRound
          teams={gameState.teams}
          onFinish={handleFinalFinish}
        />
      )}

      {gameState.gamePhase === 'results' && (
        <GameResults
          teams={gameState.teams}
          onPlayAgain={handlePlayAgain}
          onNewGame={handleNewGame}
        />
      )}
    </>
  );
};
