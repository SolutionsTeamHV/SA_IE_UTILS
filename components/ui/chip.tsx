import { cn } from '@/lib/utils';

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'default' | 'red' | 'orange' | 'green';
}

export const Chip = ({ children, color = 'default', className, ...props }: ChipProps) => {
  const base = 'inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-medium';
  const colorClasses = {
    default: 'border-gray-300 text-gray-600',
    red: 'border-red-500 text-red-500',
    orange: 'border-orange-500 text-orange-500',
    green: 'border-green-500 text-green-500',
  };

  return (
    <div className={cn(base, colorClasses[color], className)} {...props}>
      {children}
    </div>
  );
};
