import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface PlantCardProps {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  difficulty: "Легко" | "Средне" | "Сложно";
  light: "Тень" | "Полутень" | "Солнце";
  watering: "Редко" | "Умеренно" | "Часто";
  price: number;
  isCompared?: boolean;
  onCompare?: (id: string) => void;
  onFavorite?: (id: string) => void;
}

const PlantCard = ({
  id,
  name,
  scientificName,
  image,
  difficulty,
  light,
  watering,
  price,
  isCompared,
  onCompare,
  onFavorite,
}: PlantCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Легко":
        return "bg-green-100 text-green-800";
      case "Средне":
        return "bg-yellow-100 text-yellow-800";
      case "Сложно":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 flex space-x-1">
          <Button
            size="sm"
            variant="secondary"
            className="w-8 h-8 p-0 bg-white/80 backdrop-blur-sm"
            onClick={() => onFavorite?.(id)}
          >
            <Icon name="Heart" size={14} />
          </Button>
          <Button
            size="sm"
            variant={isCompared ? "default" : "secondary"}
            className="w-8 h-8 p-0 bg-white/80 backdrop-blur-sm"
            onClick={() => onCompare?.(id)}
          >
            <Icon name="GitCompare" size={14} />
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
            {name}
          </h3>
          <p className="text-sm text-gray-500 italic">{scientificName}</p>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          <Badge variant="secondary" className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
          <Badge variant="outline" className="text-xs">
            <Icon name="Sun" size={12} className="mr-1" />
            {light}
          </Badge>
          <Badge variant="outline" className="text-xs">
            <Icon name="Droplets" size={12} className="mr-1" />
            {watering}
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">от {price} ₽</span>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            Подробнее
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlantCard;
