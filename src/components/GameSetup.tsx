import { useState } from 'react';
import { Team, TEAM_COLORS } from '@/types/game';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Plus, Minus, Sparkles, TreePine } from 'lucide-react';
import { PixelStar } from './PixelStar';

interface GameSetupProps {
  onStartGame: (teams: Team[]) => void;
}

export const GameSetup = ({ onStartGame }: GameSetupProps) => {
  const [teamCount, setTeamCount] = useState(2);
  const [teamNames, setTeamNames] = useState<string[]>(['Игрок 1', 'Игрок 2']);

  const handleTeamCountChange = (delta: number) => {
    const newCount = Math.max(2, Math.min(6, teamCount + delta));
    setTeamCount(newCount);
    
    if (delta > 0) {
      setTeamNames([...teamNames, `Игрок ${newCount}`]);
    } else {
      setTeamNames(teamNames.slice(0, newCount));
    }
  };

  const handleNameChange = (index: number, name: string) => {
    const newNames = [...teamNames];
    newNames[index] = name;
    setTeamNames(newNames);
  };

  const handleStart = () => {
    const teams: Team[] = teamNames.map((name, i) => ({
      id: `team-${i}`,
      name: name || `Игрок ${i + 1}`,
      score: 0,
      color: TEAM_COLORS[i],
    }));
    onStartGame(teams);
  };

  return (
    <div className="min-h-screen bg-background pattern-dots flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 animate-float">
        <PixelStar size="lg" className="animate-sparkle" />
      </div>
      <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <PixelStar size="md" className="animate-sparkle" />
      </div>
      <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '0.5s' }}>
        <PixelStar size="sm" className="animate-sparkle" />
      </div>

      <div className="text-center mb-8 animate-slide-up">
        <div className="flex items-center justify-center gap-4 mb-4">
          <TreePine className="w-12 h-12 text-primary" />
          <h1 className="font-display text-2xl md:text-4xl text-primary text-shadow-glow">
            НОВОГОДНЯЯ
          </h1>
          <TreePine className="w-12 h-12 text-primary" />
        </div>
        <h2 className="font-display text-xl md:text-3xl text-accent">
          ВИКТОРИНА
        </h2>
      </div>

      <Card className="w-full max-w-lg p-6 md:p-8 animate-slide-up shadow-xl" style={{ animationDelay: '0.1s' }}>
        <div className="space-y-6">
          <div className="text-center">
            <label className="text-lg font-semibold text-foreground mb-4 block">
              Количество игроков
            </label>
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleTeamCountChange(-1)}
                disabled={teamCount <= 2}
                className="w-12 h-12"
              >
                <Minus className="w-6 h-6" />
              </Button>
              <span className="font-display text-3xl text-primary w-16 text-center">
                {teamCount}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleTeamCountChange(1)}
                disabled={teamCount >= 6}
                className="w-12 h-12"
              >
                <Plus className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-lg font-semibold text-foreground block text-center">
              Имена игроков
            </label>
            {teamNames.map((name, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-full shrink-0"
                  style={{ backgroundColor: TEAM_COLORS[index] }}
                />
                <Input
                  value={name}
                  onChange={(e) => handleNameChange(index, e.target.value)}
                  placeholder={`Игрок ${index + 1}`}
                  className="font-medium"
                />
              </div>
            ))}
          </div>

          <Button
            onClick={handleStart}
            className="w-full h-14 font-display text-sm gap-2 gradient-christmas"
            size="lg"
          >
            <Sparkles className="w-5 h-5" />
            НАЧАТЬ ИГРУ
            <Sparkles className="w-5 h-5" />
          </Button>
        </div>
      </Card>
    </div>
  );
};
