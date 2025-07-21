import { FunctionComponent } from 'react';
import { FilterCheckboxProps } from './Filter-Checkbox';
type Item = FilterCheckboxProps;
interface FiltersProps {
  className?: string;
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValues?: string[];
}

const CheckboxFiltersGroup: FunctionComponent<FiltersProps> = ({
  className,
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  onChange,
  defaultValue,
}) => {
  return <div className={className}></div>;
};
export default CheckboxFiltersGroup;
