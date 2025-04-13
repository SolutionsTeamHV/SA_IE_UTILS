import { cn } from '@/lib/utils';

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'default' | 'red' | 'orange' | 'green';
}

export const Chip = ({ children, color = 'default', className, ...props }: ChipProps) => {
  const base = 'inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-medium';
  const colorClasses = {
    default: 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300',
    red: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    orange: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    green: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  };

  return (
    <div className={cn(base, colorClasses[color], className)} {...props}>
      {children}
    </div>
  );
};
