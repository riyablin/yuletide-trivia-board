import { Question, Category, Team, Round } from '@/types/game';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Check, X, Eye, ArrowLeft } from 'lucide-react';
import { PixelStar } from './PixelStar';

interface QuestionModalProps {
  question: Question | null;
  category: Category | null;
  round: Round;
  teams: Team[];
  showAnswer: boolean;
  onShowAnswer: () => void;
  onCorrect: (teamId: string) => void;
  onWrong: (teamId: string) => void;
  onClose: () => void;
}

export const QuestionModal = ({
  question,
  category,
  round,
  teams,
  showAnswer,
  onShowAnswer,
  onCorrect,
  onWrong,
  onClose,
}: QuestionModalProps) => {
  if (!question || !category) return null;

  const points = question.points * round.pointMultiplier;

  return (
    <Dialog open={!!question} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden border-4 border-primary">
        {/* Header */}
        <div className="gradient-christmas p-4 md:p-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <PixelStar size="sm" />
            <span className="font-display text-primary-foreground text-sm md:text-base">
              {category.name}
            </span>
            <PixelStar size="sm" />
          </div>
          <div className="font-display text-3xl md:text-5xl text-christmas-gold animate-pulse">
            {points}
          </div>
        </div>

        {/* Question */}
        <div className="p-6 md:p-10 text-center min-h-[200px] flex items-center justify-center bg-card">
          <p className="text-xl md:text-3xl font-semibold text-foreground leading-relaxed">
            {question.question || 'Вопрос не указан'}
          </p>
        </div>

        {/* Answer (if shown) */}
        {showAnswer && (
          <div className="p-6 md:p-8 bg-primary/5 border-t-4 border-primary animate-fade-in">
            <p className="text-sm text-muted-foreground text-center mb-2">Ответ:</p>
            <p className="text-xl md:text-2xl font-bold text-primary text-center">
              {question.answer || 'Ответ не указан'}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="p-4 md:p-6 bg-muted/50 border-t">
          {!showAnswer ? (
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <Button
                onClick={onShowAnswer}
                className="gap-2 text-lg px-8"
                size="lg"
              >
                <Eye className="w-5 h-5" />
                Показать ответ
              </Button>
              <Button
                variant="outline"
                onClick={onClose}
                className="gap-2"
                size="lg"
              >
                <ArrowLeft className="w-5 h-5" />
                Вернуться к доске
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-center text-muted-foreground font-medium">
                Кто ответил правильно?
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {teams.map(team => (
                  <div key={team.id} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 justify-center">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: team.color }}
                      />
                      <span className="font-medium text-sm truncate">{team.name}</span>
                    </div>
                    <div className="flex gap-2 justify-center">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-primary border-primary/30 hover:bg-primary/10"
                        onClick={() => onCorrect(team.id)}
                      >
                        <Check className="w-4 h-4 mr-1" />
                        +{points}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-destructive border-destructive/30 hover:bg-destructive/10"
                        onClick={() => onWrong(team.id)}
                      >
                        <X className="w-4 h-4 mr-1" />
                        -{points}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center pt-2">
                <Button variant="outline" onClick={onClose} className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Закрыть без изменений
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
