import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, TreePine } from 'lucide-react';
import { PixelStar } from './PixelStar';

// Хелпер для получения правильного пути к медиа файлам
const getAssetPath = (path: string) => {
  const base = import.meta.env.BASE_URL || '/';
  return base + path.replace(/^\//, '');
};

interface GameRulesProps {
  onStartPlaying: () => void;
}

export const GameRules = ({ onStartPlaying }: GameRulesProps) => {
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
            ПРАВИЛА ИГРЫ
          </h1>
          <TreePine className="w-12 h-12 text-primary" />
        </div>
      </div>

      <Card className="w-full max-w-3xl p-6 md:p-8 animate-slide-up shadow-xl" style={{ animationDelay: '0.1s' }}>
        <div className="space-y-6">
          <div className="space-y-4 text-foreground">
            <div>
              <h2 className="font-display text-xl text-primary mb-2">Как играть:</h2>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                <li>Игроки по очереди выбирают вопросы из разных категорий</li>
                <li>За правильный ответ игрок получает очки</li>
                <li>За неправильный ответ очки вычитаются</li>
                <li>После двух раундов начинается финальный раунд</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-primary mb-2">Как отвечать на вопросы:</h2>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                <li>На вопрос отвечает тот игрок, который <strong>быстрее нажмет на кнопку</strong> на своем телефоне с сайта</li>
                <li>Если первый игрок ответил <strong>неправильно</strong>, вопрос переходит к следующему игроку по порядку нажатия</li>
                <li>Игроки продолжают отвечать по очереди, пока кто-то не даст <strong>правильный ответ</strong></li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-primary mb-2">Раунды:</h2>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                <li><strong>Раунд 1:</strong> Вопросы стоимостью 100-400 очков</li>
                <li><strong>Раунд 2:</strong> Очки удваиваются (200-800)</li>
                <li><strong>Финальный раунд:</strong> Игроки делают ставки на финальный вопрос</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-primary mb-2">Специальные вопросы:</h2>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                <li><strong>БУСТЕР:</strong> Специальные вопросы с бонусными очками</li>
              </ul>
            </div>
          </div>

          <div className="border-4 border-primary rounded-lg p-6 bg-white">
            <h2 className="font-display text-2xl text-center text-primary mb-4">
              ВЕБ С КНОПКОЙ
            </h2>
            <div className="flex justify-center">
              <img
                src={getAssetPath('/qr-code.png')}
                alt="QR Code"
                className="w-48 h-48 md:w-64 md:h-64"
              />
            </div>
          </div>

          <Button
            onClick={onStartPlaying}
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
