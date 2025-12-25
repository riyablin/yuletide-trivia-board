import { Team } from '@/types/game';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Trophy, Medal, Award, RotateCcw, Home } from 'lucide-react';
import { PixelStar } from './PixelStar';
import { cn } from '@/lib/utils';

interface GameResultsProps {
  teams: Team[];
  onPlayAgain: () => void;
  onNewGame: () => void;
}

export const GameResults = ({ teams, onPlayAgain, onNewGame }: GameResultsProps) => {
  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
  const maxScore = sortedTeams[0]?.score;
  const winners = sortedTeams.filter(team => team.score === maxScore);
  const isTie = winners.length > 1;

  const getPlaceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="w-8 h-8 text-christmas-gold" />;
      case 1:
        return <Medal className="w-7 h-7 text-muted-foreground" />;
      case 2:
        return <Award className="w-6 h-6 text-orange-600" />;
      default:
        return null;
    }
  };

  const getPlaceText = (index: number) => {
    const places = ['1-е МЕСТО', '2-е МЕСТО', '3-е МЕСТО'];
    return places[index] || `${index + 1}-е место`;
  };

  return (
    <div className="min-h-screen bg-background pattern-dots p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl text-center">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <div className="flex items-center justify-center gap-4 mb-4">
            <PixelStar size="lg" className="animate-sparkle" />
            <h1 className="font-display text-2xl md:text-4xl text-primary">
              РЕЗУЛЬТАТЫ
            </h1>
            <PixelStar size="lg" className="animate-sparkle" />
          </div>
          <p className="text-muted-foreground text-lg">
            Поздравляем всех участников!
          </p>
        </div>

        {/* Winner Highlight */}
        <Card
          className="p-8 mb-6 border-4 border-christmas-gold bg-gradient-to-br from-christmas-gold/10 to-transparent animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          <Trophy className="w-16 h-16 text-christmas-gold mx-auto mb-4 animate-float" />
          <h2 className="font-display text-xl md:text-2xl text-christmas-gold mb-2">
            {isTie ? 'НИЧЬЯ' : 'ПОБЕДИТЕЛЬ'}
          </h2>
          {isTie ? (
            <>
              <p className="text-muted-foreground mb-4">
                {winners.length} {winners.length === 2 ? 'игрока набрали' : 'игроков набрали'} одинаковое количество очков
              </p>
              <div className="space-y-3 mb-4">
                {winners.map(winner => (
                  <div key={winner.id} className="flex items-center justify-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: winner.color }}
                    />
                    <span className="text-xl md:text-2xl font-bold text-foreground">
                      {winner.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="font-display text-4xl md:text-5xl text-primary">
                {maxScore}
              </div>
              <p className="text-muted-foreground mt-2">очков</p>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div
                  className="w-5 h-5 rounded-full"
                  style={{ backgroundColor: sortedTeams[0]?.color }}
                />
                <span className="text-2xl md:text-3xl font-bold text-foreground">
                  {sortedTeams[0]?.name}
                </span>
              </div>
              <div className="font-display text-4xl md:text-5xl text-primary">
                {sortedTeams[0]?.score}
              </div>
              <p className="text-muted-foreground mt-2">очков</p>
            </>
          )}
        </Card>

        {/* All Teams */}
        <div className="space-y-3 mb-8">
          {sortedTeams.map((team, index) => {
            // Если ничья - скрываем всех победителей (они уже показаны в большой карточке)
            // Если не ничья - скрываем только первого
            const shouldHide = isTie ? team.score === maxScore : index === 0;

            return (
              <Card
                key={team.id}
                className={cn(
                  'p-4 flex items-center justify-between animate-slide-up',
                  shouldHide && 'hidden'
                )}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  {getPlaceIcon(index)}
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground font-display">
                      {getPlaceText(index)}
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: team.color }}
                      />
                      <span className="font-semibold">{team.name}</span>
                    </div>
                  </div>
                </div>
                <div className={cn(
                  'font-display text-xl',
                  team.score >= 0 ? 'text-primary' : 'text-destructive'
                )}>
                  {team.score}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <Button
            onClick={onPlayAgain}
            variant="outline"
            className="gap-2"
            size="lg"
          >
            <RotateCcw className="w-5 h-5" />
            Играть снова
          </Button>
          <Button
            onClick={onNewGame}
            className="gap-2 gradient-christmas font-display text-xs"
            size="lg"
          >
            <Home className="w-5 h-5" />
            НОВАЯ ИГРА
          </Button>
        </div>
      </div>
    </div>
  );
};
