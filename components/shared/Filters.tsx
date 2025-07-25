import { FunctionComponent } from 'react';
import { Title } from './Title';
import { FilterCheckbox } from './Filter-Checkbox';
import { Input } from '../ui/input';
import { RangeSlider } from './Range-Slider';
import CheckboxFiltersGroup from './Checkbox-filters-group';
interface FiltersProps {
  className?: string;
}

const Filters: FunctionComponent<FiltersProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      {/* вeрхние чекбоксі */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
      {/* цена */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" min={100} max={1000} placeholder="30000" />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup
        title={'Ингредиенты:'}
        items={[
          {
            text: 'Сырный соус',
            value: '1',
          },
          {
            text: 'Моццарелла',
            value: '2',
          },
          {
            text: 'Чеснок',
            value: '3',
          },
          {
            text: 'Солённые огурчики',
            value: '4',
          },
          {
            text: 'Красный лук',
            value: '5',
          },
          {
            text: 'Томаты',
            value: '6',
          },
           {
            text: 'Томаты',
            value: '7',
          },
           {
            text: 'Томаты',
            value: '8',
          },
           {
            text: 'Томаты',
            value: '9',
          },
        ]}
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: 'Сырный соус',
            value: '1',
          },
          {
            text: 'Моццарелла',
            value: '2',
          },
          {
            text: 'Чеснок',
            value: '3',
          },
          {
            text: 'Солённые огурчики',
            value: '4',
          },
          {
            text: 'Красный лук',
            value: '5',
          },
          {
            text: 'Томаты',
            value: '6',
          },
        ]}
      />
    </div>
  );
};

export default Filters;
