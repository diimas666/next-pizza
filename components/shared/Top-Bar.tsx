import { cn } from '@/lib/utils';
import { FunctionComponent } from 'react';
import { Container } from './Container';
import Categories from './Categories';
import SortPopup from './Sort-popup';

interface Props {
  className?: string;
}

const TopBar: FunctionComponent<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'sticky top-0 bg-white shadow-lg shadow-black/5 z-10 pb-8',
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};

export default TopBar;
