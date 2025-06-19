import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Icon from "@/components/ui/icon";

interface FilterState {
  categories: string[];
  difficulty: string[];
  light: string[];
  watering: string[];
  priceRange: [number, number];
  bloomingMonths: string[];
  plantingMonths: string[];
  size: string[];
}

interface FilterPanelProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onReset: () => void;
}

const FilterPanel = ({
  filters,
  onFiltersChange,
  onReset,
}: FilterPanelProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const categories = [
    "Комнатные растения",
    "Садовые цветы",
    "Деревья и кустарники",
    "Травы и специи",
    "Овощные культуры",
    "Суккуленты",
  ];

  const difficulties = ["Легко", "Средне", "Сложно"];
  const lightOptions = ["Тень", "Полутень", "Солнце"];
  const wateringOptions = ["Редко", "Умеренно", "Часто"];
  const sizeOptions = [
    "Мини (до 20 см)",
    "Маленькие (20-50 см)",
    "Средние (50-100 см)",
    "Большие (100+ см)",
  ];

  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const handleArrayFilter = (
    key: keyof FilterState,
    value: string,
    checked: boolean,
  ) => {
    const currentArray = filters[key] as string[];
    const newArray = checked
      ? [...currentArray, value]
      : currentArray.filter((item) => item !== value);

    onFiltersChange({ ...filters, [key]: newArray });
  };

  return (
    <Card className="sticky top-4">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Фильтры</CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={onReset}>
              Сбросить
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={16} />
            </Button>
          </div>
        </div>
      </CardHeader>

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleContent>
          <CardContent className="space-y-6">
            {/* Категории */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Категории
              </Label>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={filters.categories.includes(category)}
                      onCheckedChange={(checked) =>
                        handleArrayFilter(
                          "categories",
                          category,
                          checked as boolean,
                        )
                      }
                    />
                    <Label
                      htmlFor={category}
                      className="text-sm cursor-pointer"
                    >
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Сложность ухода */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Сложность ухода
              </Label>
              <div className="space-y-2">
                {difficulties.map((difficulty) => (
                  <div key={difficulty} className="flex items-center space-x-2">
                    <Checkbox
                      id={difficulty}
                      checked={filters.difficulty.includes(difficulty)}
                      onCheckedChange={(checked) =>
                        handleArrayFilter(
                          "difficulty",
                          difficulty,
                          checked as boolean,
                        )
                      }
                    />
                    <Label
                      htmlFor={difficulty}
                      className="text-sm cursor-pointer"
                    >
                      {difficulty}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Освещение */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Освещение
              </Label>
              <div className="space-y-2">
                {lightOptions.map((light) => (
                  <div key={light} className="flex items-center space-x-2">
                    <Checkbox
                      id={light}
                      checked={filters.light.includes(light)}
                      onCheckedChange={(checked) =>
                        handleArrayFilter("light", light, checked as boolean)
                      }
                    />
                    <Label htmlFor={light} className="text-sm cursor-pointer">
                      {light}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Полив */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Полив</Label>
              <div className="space-y-2">
                {wateringOptions.map((watering) => (
                  <div key={watering} className="flex items-center space-x-2">
                    <Checkbox
                      id={watering}
                      checked={filters.watering.includes(watering)}
                      onCheckedChange={(checked) =>
                        handleArrayFilter(
                          "watering",
                          watering,
                          checked as boolean,
                        )
                      }
                    />
                    <Label
                      htmlFor={watering}
                      className="text-sm cursor-pointer"
                    >
                      {watering}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Размер */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Размер растения
              </Label>
              <div className="space-y-2">
                {sizeOptions.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <Checkbox
                      id={size}
                      checked={filters.size.includes(size)}
                      onCheckedChange={(checked) =>
                        handleArrayFilter("size", size, checked as boolean)
                      }
                    />
                    <Label htmlFor={size} className="text-sm cursor-pointer">
                      {size}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Ценовой диапазон */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Цена: {filters.priceRange[0]} - {filters.priceRange[1]} ₽
              </Label>
              <Slider
                value={filters.priceRange}
                onValueChange={(value) =>
                  onFiltersChange({
                    ...filters,
                    priceRange: value as [number, number],
                  })
                }
                max={10000}
                min={0}
                step={100}
                className="w-full"
              />
            </div>

            {/* Время цветения */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Время цветения
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите месяц" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month} value={month}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default FilterPanel;
