'use client';

import { useState } from 'react';
import { FunctionComponent } from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './Filter-Checkbox';
import { Input } from '../ui/input';

type Item = FilterCheckboxProps;

interface FiltersProps {
  className?: string;
  title: string;
  items: Item[];
  defaultItems: Item[];
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
  defaultValues = [],
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedValues, setSelectedValues] = useState<string[]>(defaultValues);

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems?.slice(0, limit);

  const handleCheckboxChange = (value: string, checked: boolean) => {
    const newValues = checked
      ? [...selectedValues, value]
      : selectedValues.filter((val) => val !== value);

    setSelectedValues(newValues);
    onChange?.(newValues);
  };

  const onChangeSearchInput = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            onChange={(e) => onChangeSearchInput(e.target.value)}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={selectedValues.includes(item.value)}
            onCheckedChange={(checked) =>
              handleCheckboxChange(item.value, checked)
            }
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-50 mt-4' : ''}>
          <button
            className="text-primary mt-3"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckboxFiltersGroup;
