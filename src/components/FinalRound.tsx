import { useState } from 'react';
import { Team } from '@/types/game';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Plus, Minus, Trophy, Sparkles } from 'lucide-react';
import { PixelStar } from './PixelStar';
import { FINAL_QUESTION } from '@/data/quizData';

interface FinalRoundProps {
  teams: Team[];
  onFinish: (updatedTeams: Team[]) => void;
}

type Phase = 'category' | 'wagers' | 'question' | 'answer' | 'scoring';

export const FinalRound = ({ teams, onFinish }: FinalRoundProps) => {
  const [phase, setPhase] = useState<Phase>('category');
  const [wagers, setWagers] = useState<Record<string, number>>(() =>
    Object.fromEntries(teams.map(t => [t.id, 100]))
  );
  const [updatedTeams, setUpdatedTeams] = useState<Team[]>(teams);

  const handleWagerChange = (teamId: string, value: string) => {
    const numValue = Math.max(1, Math.min(1000, parseInt(value) || 1));
    setWagers({ ...wagers, [teamId]: numValue });
  };

  const handleAddWager = (teamId: string) => {
    const wager = wagers[teamId] || 0;
    setUpdatedTeams(prev =>
      prev.map(team =>
        team.id === teamId ? { ...team, score: team.score + wager } : team
      )
    );
  };

  const handleSubtractWager = (teamId: string) => {
    const wager = wagers[teamId] || 0;
    setUpdatedTeams(prev =>
      prev.map(team =>
        team.id === teamId ? { ...team, score: team.score - wager } : team
      )
    );
  };

  const handleFinish = () => {
    onFinish(updatedTeams);
  };

  return (
    <div className="min-h-screen bg-background pattern-dots p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Sparkles className="w-8 h-8 text-accent animate-pulse" />
            <h1 className="font-display text-2xl md:text-4xl text-accent">
              ФИНАЛЬНЫЙ РАУНД
            </h1>
            <Sparkles className="w-8 h-8 text-accent animate-pulse" />
          </div>
        </div>

        {/* Category Phase - Показываем только тему */}
        {phase === 'category' && (
          <div className="space-y-6 animate-fade-in">
            <Card className="p-12 md:p-16 text-center gradient-christmas">
              <div className="flex items-center justify-center gap-3 mb-6">
                <PixelStar size="md" />
                <span className="font-display text-primary-foreground text-sm">
                  ТЕМА ФИНАЛЬНОГО ВОПРОСА
                </span>
                <PixelStar size="md" />
              </div>
              <p className="text-3xl md:text-5xl font-bold text-primary-foreground">
                {FINAL_QUESTION.category}
              </p>
            </Card>

            <Button
              onClick={() => setPhase('wagers')}
              className="w-full gradient-christmas font-display text-xs"
              size="lg"
            >
              ДАЛЕЕ: СТАВКИ
            </Button>
          </div>
        )}

        {/* Wagers Phase - Ставки от 1 до 1000 */}
        {phase === 'wagers' && (
          <Card className="p-6 md:p-8 animate-fade-in">
            <h2 className="font-bold text-xl mb-6 text-center">Игроки делают ставки</h2>
            <p className="text-muted-foreground text-center mb-6">
              Каждый игрок может поставить от 1 до 1000 баллов
            </p>
            <div className="space-y-4">
              {teams.map(team => (
                <div key={team.id} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div
                    className="w-4 h-4 rounded-full shrink-0"
                    style={{ backgroundColor: team.color }}
                  />
                  <div className="flex-1">
                    <div className="font-semibold">{team.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Текущий счёт: {team.score}
                    </div>
                  </div>
                  <Input
                    type="number"
                    min={1}
                    max={1000}
                    value={wagers[team.id]}
                    onChange={(e) => handleWagerChange(team.id, e.target.value)}
                    className="w-32 font-display text-center"
                    placeholder="Ставка"
                  />
                </div>
              ))}
              <Button
                onClick={() => setPhase('question')}
                className="w-full gradient-christmas font-display text-xs"
                size="lg"
              >
                ПОКАЗАТЬ ВОПРОС
              </Button>
            </div>
          </Card>
        )}

        {/* Question Phase - Показываем вопрос */}
        {phase === 'question' && (
          <div className="space-y-6 animate-fade-in">
            <Card className="p-8 md:p-12 text-center gradient-christmas">
              <div className="flex items-center justify-center gap-3 mb-6">
                <PixelStar size="md" />
                <span className="font-display text-primary-foreground text-sm">
                  ФИНАЛЬНЫЙ ВОПРОС
                </span>
                <PixelStar size="md" />
              </div>
              <p className="text-2xl md:text-3xl font-semibold text-primary-foreground leading-relaxed">
                {FINAL_QUESTION.question}
              </p>
            </Card>

            <Button
              onClick={() => setPhase('answer')}
              className="w-full bg-accent hover:bg-accent/90 font-display text-xs"
              size="lg"
            >
              ПОКАЗАТЬ ОТВЕТ
            </Button>
          </div>
        )}

        {/* Answer Phase - Показываем ответ */}
        {phase === 'answer' && (
          <div className="space-y-6 animate-fade-in">
            <Card className="p-8 md:p-12 text-center gradient-christmas">
              <div className="flex items-center justify-center gap-3 mb-6">
                <PixelStar size="md" />
                <span className="font-display text-primary-foreground text-sm">
                  ФИНАЛЬНЫЙ ВОПРОС
                </span>
                <PixelStar size="md" />
              </div>
              <p className="text-2xl md:text-3xl font-semibold text-primary-foreground leading-relaxed mb-6">
                {FINAL_QUESTION.question}
              </p>
            </Card>

            <Card className="p-6 bg-primary/5 border-2 border-primary">
              <p className="text-sm text-muted-foreground text-center mb-2">Правильный ответ:</p>
              <p className="text-2xl md:text-3xl font-bold text-primary text-center">
                {FINAL_QUESTION.answer}
              </p>
            </Card>

            <Button
              onClick={() => setPhase('scoring')}
              className="w-full bg-accent hover:bg-accent/90 font-display text-xs"
              size="lg"
            >
              ПОДВЕСТИ ИТОГИ
            </Button>
          </div>
        )}

        {/* Scoring Phase - Прибавить/убрать баллы */}
        {phase === 'scoring' && (
          <Card className="p-6 md:p-8 animate-fade-in">
            <h2 className="font-bold text-xl mb-6 text-center">Подведение итогов</h2>
            <p className="text-muted-foreground text-center mb-6">
              Прибавьте или отнимите ставку у каждого игрока
            </p>
            <div className="space-y-4 mb-6">
              {updatedTeams.map(team => (
                <div key={team.id} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div
                    className="w-4 h-4 rounded-full shrink-0"
                    style={{ backgroundColor: team.color }}
                  />
                  <div className="flex-1">
                    <div className="font-semibold">{team.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Текущий счёт: {team.score} | Ставка: {wagers[team.id]}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 text-destructive border-destructive/30 hover:bg-destructive/10"
                      onClick={() => handleSubtractWager(team.id)}
                    >
                      <Minus className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 text-primary border-primary/30 hover:bg-primary/10"
                      onClick={() => handleAddWager(team.id)}
                    >
                      <Plus className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button
              onClick={handleFinish}
              className="w-full bg-accent hover:bg-accent/90 font-display text-xs"
              size="lg"
            >
              <Trophy className="w-5 h-5 mr-2" />
              ПОДВЕСТИ ИТОГИ
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};
