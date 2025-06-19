import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Plant {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  difficulty: string;
  light: string;
  watering: string;
  temperature: string;
  humidity: string;
  fertilizing: string;
  repotting: string;
  price: number;
  height: string;
  bloomingTime: string;
  toxicity: boolean;
}

interface ComparePanelProps {
  plants: Plant[];
  onRemove: (plantId: string) => void;
  onClear: () => void;
}

const ComparePanel = ({ plants, onRemove, onClear }: ComparePanelProps) => {
  if (plants.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Icon name="GitCompare" size={48} className="text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Нет растений для сравнения
          </h3>
          <p className="text-gray-500 text-center">
            Добавьте растения в сравнение, нажав на иконку сравнения на
            карточках растений
          </p>
        </CardContent>
      </Card>
    );
  }

  const characteristics = [
    { key: "difficulty", label: "Сложность ухода", icon: "Target" },
    { key: "light", label: "Освещение", icon: "Sun" },
    { key: "watering", label: "Полив", icon: "Droplets" },
    { key: "temperature", label: "Температура", icon: "Thermometer" },
    { key: "humidity", label: "Влажность", icon: "Wind" },
    { key: "fertilizing", label: "Подкормка", icon: "Leaf" },
    { key: "repotting", label: "Пересадка", icon: "RotateCcw" },
    { key: "height", label: "Высота", icon: "Ruler" },
    { key: "bloomingTime", label: "Цветение", icon: "Flower2" },
    { key: "toxicity", label: "Токсичность", icon: "AlertTriangle" },
    { key: "price", label: "Цена", icon: "DollarSign" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Icon name="GitCompare" size={24} />
              <span>Сравнение растений ({plants.length})</span>
            </CardTitle>
            <Button variant="outline" size="sm" onClick={onClear}>
              <Icon name="X" size={16} className="mr-2" />
              Очистить всё
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 font-medium text-gray-600 w-40">
                    Характеристика
                  </th>
                  {plants.map((plant) => (
                    <th key={plant.id} className="text-left p-4 min-w-64">
                      <div className="space-y-3">
                        <div className="relative">
                          <img
                            src={plant.image}
                            alt={plant.name}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <Button
                            size="sm"
                            variant="secondary"
                            className="absolute top-2 right-2 w-6 h-6 p-0"
                            onClick={() => onRemove(plant.id)}
                          >
                            <Icon name="X" size={12} />
                          </Button>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {plant.name}
                          </h4>
                          <p className="text-sm text-gray-500 italic">
                            {plant.scientificName}
                          </p>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {characteristics.map((char, index) => (
                  <tr
                    key={char.key}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="p-4 font-medium text-gray-700">
                      <div className="flex items-center space-x-2">
                        <Icon
                          name={char.icon}
                          size={16}
                          className="text-gray-500"
                        />
                        <span>{char.label}</span>
                      </div>
                    </td>
                    {plants.map((plant) => (
                      <td key={plant.id} className="p-4">
                        {char.key === "price" ? (
                          <span className="font-semibold text-green-600">
                            от {plant[char.key]} ₽
                          </span>
                        ) : char.key === "toxicity" ? (
                          <Badge
                            variant={
                              plant[char.key] ? "destructive" : "default"
                            }
                            className="text-xs"
                          >
                            {plant[char.key] ? "Токсично" : "Безопасно"}
                          </Badge>
                        ) : (
                          <span className="text-gray-700">
                            {plant[char.key as keyof Plant]}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Recommendation Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Icon name="Sparkles" size={20} />
            <span>Рекомендация</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon
                name="CheckCircle"
                size={20}
                className="text-green-600 mt-0.5"
              />
              <div>
                <h4 className="font-medium text-green-800 mb-1">
                  Лучший выбор для начинающих
                </h4>
                <p className="text-sm text-green-700">
                  Исходя из сравнения, растения с уровнем сложности "Легко" и
                  умеренным поливом будут наиболее подходящими для начинающих
                  садоводов.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComparePanel;
