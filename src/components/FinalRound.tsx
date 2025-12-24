import { useState } from 'react';
import { Team } from '@/types/game';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Check, X, Trophy, Sparkles } from 'lucide-react';
import { PixelStar } from './PixelStar';
import { cn } from '@/lib/utils';

interface FinalRoundProps {
  teams: Team[];
  onFinish: (updatedTeams: Team[]) => void;
}

type Phase = 'question' | 'wagers' | 'reveal' | 'scoring';

export const FinalRound = ({ teams, onFinish }: FinalRoundProps) => {
  const [phase, setPhase] = useState<Phase>('question');
  const [finalQuestion, setFinalQuestion] = useState('');
  const [finalAnswer, setFinalAnswer] = useState('');
  const [wagers, setWagers] = useState<Record<string, number>>(() => 
    Object.fromEntries(teams.map(t => [t.id, 0]))
  );
  const [results, setResults] = useState<Record<string, boolean | null>>(() =>
    Object.fromEntries(teams.map(t => [t.id, null]))
  );

  const handleWagerChange = (teamId: string, value: string) => {
    const team = teams.find(t => t.id === teamId);
    if (!team) return;
    
    const numValue = Math.max(0, Math.min(team.score > 0 ? team.score : 0, parseInt(value) || 0));
    setWagers({ ...wagers, [teamId]: numValue });
  };

  const handleResult = (teamId: string, correct: boolean) => {
    setResults({ ...results, [teamId]: correct });
  };

  const calculateFinalScores = () => {
    const updatedTeams = teams.map(team => {
      const wager = wagers[team.id] || 0;
      const correct = results[team.id];
      
      if (correct === true) {
        return { ...team, score: team.score + wager };
      } else if (correct === false) {
        return { ...team, score: team.score - wager };
      }
      return team;
    });
    
    onFinish(updatedTeams);
  };

  const allResultsIn = Object.values(results).every(r => r !== null);

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

        {/* Question Setup Phase */}
        {phase === 'question' && (
          <Card className="p-6 md:p-8 animate-fade-in">
            <h2 className="font-bold text-xl mb-6 text-center">Введите финальный вопрос</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Вопрос</label>
                <Textarea
                  value={finalQuestion}
                  onChange={(e) => setFinalQuestion(e.target.value)}
                  placeholder="Введите финальный вопрос..."
                  className="min-h-[120px]"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Ответ</label>
                <Input
                  value={finalAnswer}
                  onChange={(e) => setFinalAnswer(e.target.value)}
                  placeholder="Введите правильный ответ..."
                />
              </div>
              <Button 
                onClick={() => setPhase('wagers')} 
                className="w-full gradient-christmas font-display text-xs"
                disabled={!finalQuestion}
              >
                ДАЛЕЕ: СТАВКИ
              </Button>
            </div>
          </Card>
        )}

        {/* Wagers Phase */}
        {phase === 'wagers' && (
          <Card className="p-6 md:p-8 animate-fade-in">
            <h2 className="font-bold text-xl mb-6 text-center">Команды делают ставки</h2>
            <p className="text-muted-foreground text-center mb-6">
              Каждая команда может поставить от 0 до своего текущего счёта
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
                    min={0}
                    max={team.score > 0 ? team.score : 0}
                    value={wagers[team.id]}
                    onChange={(e) => handleWagerChange(team.id, e.target.value)}
                    className="w-32 font-display text-center"
                    placeholder="Ставка"
                  />
                </div>
              ))}
              <Button 
                onClick={() => setPhase('reveal')} 
                className="w-full gradient-christmas font-display text-xs"
              >
                ПОКАЗАТЬ ВОПРОС
              </Button>
            </div>
          </Card>
        )}

        {/* Reveal Phase */}
        {phase === 'reveal' && (
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
                {finalQuestion}
              </p>
            </Card>
            
            <Button 
              onClick={() => setPhase('scoring')} 
              className="w-full bg-accent hover:bg-accent/90 font-display text-xs"
              size="lg"
            >
              ПОКАЗАТЬ ОТВЕТ И ПОДВЕСТИ ИТОГИ
            </Button>
          </div>
        )}

        {/* Scoring Phase */}
        {phase === 'scoring' && (
          <div className="space-y-6 animate-fade-in">
            <Card className="p-6 bg-primary/5 border-2 border-primary">
              <p className="text-sm text-muted-foreground text-center mb-2">Правильный ответ:</p>
              <p className="text-2xl font-bold text-primary text-center">
                {finalAnswer}
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="font-bold text-xl mb-6 text-center">Оцените ответы команд</h2>
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
                        Ставка: {wagers[team.id]}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant={results[team.id] === true ? 'default' : 'outline'}
                        className={cn(
                          results[team.id] === true && 'bg-primary'
                        )}
                        onClick={() => handleResult(team.id, true)}
                      >
                        <Check className="w-4 h-4 mr-1" />
                        +{wagers[team.id]}
                      </Button>
                      <Button
                        size="sm"
                        variant={results[team.id] === false ? 'destructive' : 'outline'}
                        onClick={() => handleResult(team.id, false)}
                      >
                        <X className="w-4 h-4 mr-1" />
                        -{wagers[team.id]}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                onClick={calculateFinalScores} 
                className="w-full mt-6 gap-2 bg-accent hover:bg-accent/90 font-display text-xs"
                disabled={!allResultsIn}
                size="lg"
              >
                <Trophy className="w-5 h-5" />
                ПОКАЗАТЬ РЕЗУЛЬТАТЫ
              </Button>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
