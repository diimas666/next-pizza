import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';
import { FunctionComponent } from 'react';

interface SortPopupProps {
  className?: string;
}

const SortPopup: FunctionComponent<SortPopupProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
        className
      )}
    >
        <ArrowUpDown size={16} />
        <b>Coртировка :</b>
        <b className="text-primary">популярное</b>
    </div>
  );
};

export default SortPopup;
