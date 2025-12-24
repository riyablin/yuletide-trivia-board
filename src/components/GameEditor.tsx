import { useState } from 'react';
import { Round, Category, Team, createEmptyCategory } from '@/types/game';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Trash2, Play, Save, ArrowLeft } from 'lucide-react';
import { PixelStar } from './PixelStar';

interface GameEditorProps {
  rounds: Round[];
  teams: Team[];
  onUpdateRounds: (rounds: Round[]) => void;
  onStartGame: () => void;
  onBack: () => void;
}

export const GameEditor = ({ rounds, teams, onUpdateRounds, onStartGame, onBack }: GameEditorProps) => {
  const [activeRound, setActiveRound] = useState('round-1');
  const [editingCell, setEditingCell] = useState<{ roundId: string; catId: string; qIndex: number } | null>(null);

  const updateCategory = (roundId: string, catId: string, updates: Partial<Category>) => {
    const newRounds = rounds.map(round => {
      if (round.id !== roundId) return round;
      return {
        ...round,
        categories: round.categories.map(cat => 
          cat.id === catId ? { ...cat, ...updates } : cat
        ),
      };
    });
    onUpdateRounds(newRounds);
  };

  const updateQuestion = (roundId: string, catId: string, qIndex: number, field: 'question' | 'answer', value: string) => {
    const newRounds = rounds.map(round => {
      if (round.id !== roundId) return round;
      return {
        ...round,
        categories: round.categories.map(cat => {
          if (cat.id !== catId) return cat;
          const newQuestions = [...cat.questions];
          newQuestions[qIndex] = { ...newQuestions[qIndex], [field]: value };
          return { ...cat, questions: newQuestions };
        }),
      };
    });
    onUpdateRounds(newRounds);
  };

  const addCategory = (roundId: string) => {
    const newRounds = rounds.map(round => {
      if (round.id !== roundId) return round;
      if (round.categories.length >= 8) return round;
      return {
        ...round,
        categories: [...round.categories, createEmptyCategory(round.categories.length)],
      };
    });
    onUpdateRounds(newRounds);
  };

  const removeCategory = (roundId: string, catId: string) => {
    const newRounds = rounds.map(round => {
      if (round.id !== roundId) return round;
      if (round.categories.length <= 3) return round;
      return {
        ...round,
        categories: round.categories.filter(cat => cat.id !== catId),
      };
    });
    onUpdateRounds(newRounds);
  };

  const currentRound = rounds.find(r => r.id === activeRound);

  return (
    <div className="min-h-screen bg-background pattern-dots p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="font-display text-lg md:text-xl text-primary flex items-center gap-2">
                <PixelStar size="sm" />
                РЕДАКТОР ИГРЫ
                <PixelStar size="sm" />
              </h1>
              <p className="text-muted-foreground text-sm">
                Команды: {teams.map(t => t.name).join(', ')}
              </p>
            </div>
          </div>
          <Button onClick={onStartGame} className="gap-2 gradient-christmas font-display text-xs">
            <Play className="w-4 h-4" />
            НАЧАТЬ ИГРУ
          </Button>
        </div>

        {/* Round Tabs */}
        <Tabs value={activeRound} onValueChange={setActiveRound}>
          <TabsList className="mb-6">
            {rounds.map(round => (
              <TabsTrigger key={round.id} value={round.id} className="font-semibold">
                {round.name} (x{round.pointMultiplier})
              </TabsTrigger>
            ))}
          </TabsList>

          {rounds.map(round => (
            <TabsContent key={round.id} value={round.id}>
              <div className="space-y-4">
                {/* Categories Grid */}
                <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${Math.min(round.categories.length, 6)}, minmax(150px, 1fr))` }}>
                  {round.categories.map(category => (
                    <Card key={category.id} className="p-3 space-y-3">
                      <div className="flex items-center gap-2">
                        <Input
                          value={category.name}
                          onChange={(e) => updateCategory(round.id, category.id, { name: e.target.value })}
                          className="font-bold text-center text-sm"
                          placeholder="Категория"
                        />
                        {round.categories.length > 3 && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="shrink-0 h-8 w-8 text-destructive"
                            onClick={() => removeCategory(round.id, category.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>

                      {category.questions.map((q, qIndex) => (
                        <div
                          key={q.id}
                          className={`p-2 rounded-lg border-2 cursor-pointer transition-all ${
                            editingCell?.roundId === round.id && 
                            editingCell?.catId === category.id && 
                            editingCell?.qIndex === qIndex
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                          onClick={() => setEditingCell({ roundId: round.id, catId: category.id, qIndex })}
                        >
                          <div className="font-display text-xs text-center text-primary mb-1">
                            {q.points * round.pointMultiplier}
                          </div>
                          <p className="text-xs text-muted-foreground text-center truncate">
                            {q.question || 'Нажмите для редактирования...'}
                          </p>
                        </div>
                      ))}
                    </Card>
                  ))}

                  {round.categories.length < 8 && (
                    <Button
                      variant="outline"
                      className="h-full min-h-[300px] border-dashed"
                      onClick={() => addCategory(round.id)}
                    >
                      <Plus className="w-6 h-6 mr-2" />
                      Добавить категорию
                    </Button>
                  )}
                </div>

                {/* Question Editor */}
                {editingCell && editingCell.roundId === round.id && (
                  <Card className="p-6 mt-6 border-2 border-primary animate-fade-in">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="font-display text-primary">
                        {round.categories.find(c => c.id === editingCell.catId)?.name}
                      </span>
                      <span className="text-muted-foreground">—</span>
                      <span className="font-display text-accent">
                        {(round.categories.find(c => c.id === editingCell.catId)?.questions[editingCell.qIndex]?.points || 0) * round.pointMultiplier} очков
                      </span>
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Вопрос</label>
                        <Textarea
                          value={round.categories.find(c => c.id === editingCell.catId)?.questions[editingCell.qIndex]?.question || ''}
                          onChange={(e) => updateQuestion(round.id, editingCell.catId, editingCell.qIndex, 'question', e.target.value)}
                          placeholder="Введите вопрос..."
                          className="min-h-[120px]"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Ответ</label>
                        <Textarea
                          value={round.categories.find(c => c.id === editingCell.catId)?.questions[editingCell.qIndex]?.answer || ''}
                          onChange={(e) => updateQuestion(round.id, editingCell.catId, editingCell.qIndex, 'answer', e.target.value)}
                          placeholder="Введите ответ..."
                          className="min-h-[120px]"
                        />
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => setEditingCell(null)}
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Готово
                    </Button>
                  </Card>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};
