import { Round, Team, Question, Category } from '@/types/game';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plus, Minus, Trophy, ArrowRight, Sparkles } from 'lucide-react';
import { PixelStar } from './PixelStar';
import { cn } from '@/lib/utils';

interface GameBoardProps {
  round: Round;
  teams: Team[];
  onSelectQuestion: (category: Category, question: Question) => void;
  onUpdateScore: (teamId: string, delta: number) => void;
  onNextRound: () => void;
  onFinalRound: () => void;
  onSwitchRound: (roundIndex: number) => void;
  onSwitchToFinal: () => void;
  currentRoundIndex: number;
  totalRounds: number;
}

export const GameBoard = ({
  round,
  teams,
  onSelectQuestion,
  onUpdateScore,
  onNextRound,
  onFinalRound,
  onSwitchRound,
  onSwitchToFinal,
  currentRoundIndex,
  totalRounds,
}: GameBoardProps) => {
  const allQuestionsPlayed = round.categories.every(cat => 
    cat.questions.every(q => q.isPlayed)
  );

  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);

  return (
    <div className="min-h-screen bg-background pattern-dots p-4 flex flex-col">
      {/* Round Navigation */}
      <div className="flex justify-center gap-2 mb-4 flex-wrap">
        {Array.from({ length: totalRounds }, (_, i) => (
          <Button
            key={i}
            variant={currentRoundIndex === i ? "default" : "outline"}
            size="sm"
            onClick={() => onSwitchRound(i)}
            className={cn(
              "font-display text-xs",
              currentRoundIndex === i && "gradient-christmas"
            )}
          >
            Раунд {i + 1}
          </Button>
        ))}
        <Button
          variant="outline"
          size="sm"
          onClick={onSwitchToFinal}
          className="font-display text-xs gap-1"
        >
          <Sparkles className="w-3 h-3" />
          Финал
        </Button>
      </div>

      {/* Header */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <PixelStar size="sm" className="animate-sparkle" />
          <h1 className="font-display text-lg md:text-2xl text-primary">
            {round.name.toUpperCase()}
          </h1>
          <PixelStar size="sm" className="animate-sparkle" />
        </div>
        <p className="text-muted-foreground text-sm">
          Множитель очков: x{round.pointMultiplier}
        </p>
      </div>

      {/* Game Board */}
      <div className="flex-1 flex flex-col lg:flex-row gap-4">
        {/* Board Grid */}
        <div className="flex-1">
          <div
            className="grid gap-2 md:gap-3 h-full"
            style={{
              gridTemplateColumns: `repeat(${round.categories.length}, minmax(100px, 1fr))`,
              gridTemplateRows: `auto repeat(4, 1fr)`,
            }}
          >
            {/* Category Headers */}
            {round.categories.map(category => (
              <div key={category.id} className="category-header">
                {category.name}
              </div>
            ))}

            {/* Question Cells */}
            {[0, 1, 2, 3].map(rowIndex => (
              round.categories.map(category => {
                const question = category.questions[rowIndex];
                const points = question.points * round.pointMultiplier;
                
                return (
                  <button
                    key={question.id}
                    className={cn(
                      'game-cell aspect-[4/3]',
                      question.isPlayed && 'game-cell-used'
                    )}
                    onClick={() => !question.isPlayed && onSelectQuestion(category, question)}
                    disabled={question.isPlayed}
                  >
                    {question.isPlayed ? '' : points}
                  </button>
                );
              })
            ))}
          </div>
        </div>

        {/* Teams Sidebar */}
        <div className="lg:w-72 space-y-3">
          <h2 className="font-display text-sm text-center text-primary mb-4">КОМАНДЫ</h2>
          
          {sortedTeams.map((team, index) => (
            <Card 
              key={team.id}
              className={cn(
                'team-card',
                index === 0 && teams.length > 1 && 'ring-2 ring-christmas-gold'
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {index === 0 && teams.length > 1 && (
                    <Trophy className="w-4 h-4 text-christmas-gold" />
                  )}
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: team.color }}
                  />
                  <span className="font-semibold truncate">{team.name}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 text-destructive border-destructive/30 hover:bg-destructive/10"
                  onClick={() => onUpdateScore(team.id, -100)}
                >
                  <Minus className="w-5 h-5" />
                </Button>
                
                <span 
                  className={cn(
                    'font-display text-xl',
                    team.score >= 0 ? 'text-primary' : 'text-destructive'
                  )}
                >
                  {team.score}
                </span>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 text-primary border-primary/30 hover:bg-primary/10"
                  onClick={() => onUpdateScore(team.id, 100)}
                >
                  <Plus className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          ))}

          {/* Next Round Button */}
          {allQuestionsPlayed && (
            <div className="pt-4">
              {currentRoundIndex < totalRounds - 1 ? (
                <Button
                  onClick={onNextRound}
                  className="w-full gap-2 gradient-christmas font-display text-xs"
                >
                  СЛЕДУЮЩИЙ РАУНД
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={onFinalRound}
                  className="w-full gap-2 bg-accent hover:bg-accent/90 font-display text-xs"
                >
                  <Sparkles className="w-4 h-4" />
                  ФИНАЛЬНЫЙ РАУНД
                  <Sparkles className="w-4 h-4" />
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
