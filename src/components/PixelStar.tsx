import { cn } from "@/lib/utils";

interface PixelStarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PixelStar = ({ className, size = 'md' }: PixelStarProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className={cn(sizeClasses[size], 'text-christmas-gold', className)}
      fill="currentColor"
    >
      <path d="M12 0h-1v4h-4v1h4v4h1v-4h4v-1h-4z" transform="translate(0.5 0.5)" />
      <path d="M12 15h-1v4h-4v1h4v4h1v-4h4v-1h-4z" transform="translate(0.5 0.5)" />
      <path d="M4 8h-4v1h4v4h1v-4h4v-1h-4v-4h-1z" transform="translate(0.5 3.5)" />
      <path d="M20 8h-4v1h4v4h1v-4h4v-1h-4v-4h-1z" transform="translate(-3.5 3.5)" />
    </svg>
  );
};

export const PixelSnowflake = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={cn('w-4 h-4 text-primary-foreground/30', className)} fill="currentColor">
    <rect x="7" y="0" width="2" height="16" />
    <rect x="0" y="7" width="16" height="2" />
    <rect x="3" y="3" width="2" height="2" />
    <rect x="11" y="3" width="2" height="2" />
    <rect x="3" y="11" width="2" height="2" />
    <rect x="11" y="11" width="2" height="2" />
  </svg>
);
