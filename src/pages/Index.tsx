import { useState } from "react";
import Header from "@/components/Header";
import PlantCard from "@/components/PlantCard";
import FilterPanel from "@/components/FilterPanel";
import PlantingCalendar from "@/components/PlantingCalendar";
import ComparePanel from "@/components/ComparePanel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

interface Plant {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  difficulty: "Легко" | "Средне" | "Сложно";
  light: "Тень" | "Полутень" | "Солнце";
  watering: "Редко" | "Умеренно" | "Часто";
  temperature: string;
  humidity: string;
  fertilizing: string;
  repotting: string;
  price: number;
  height: string;
  bloomingTime: string;
  toxicity: boolean;
}

const mockPlants: Plant[] = [
  {
    id: "1",
    name: "Монстера деликатесная",
    scientificName: "Monstera deliciosa",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    difficulty: "Легко",
    light: "Полутень",
    watering: "Умеренно",
    temperature: "18-24°C",
    humidity: "50-60%",
    fertilizing: "Раз в месяц",
    repotting: "Каждые 2 года",
    price: 1200,
    height: "100-200 см",
    bloomingTime: "Редко в комнатных условиях",
    toxicity: true,
  },
  {
    id: "2",
    name: "Сансевиерия трёхполосная",
    scientificName: "Sansevieria trifasciata",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&h=300&fit=crop",
    difficulty: "Легко",
    light: "Солнце",
    watering: "Редко",
    temperature: "16-30°C",
    humidity: "30-50%",
    fertilizing: "Раз в 2 месяца",
    repotting: "Каждые 3-4 года",
    price: 800,
    height: "30-120 см",
    bloomingTime: "Май-июнь (редко)",
    toxicity: false,
  },
  {
    id: "3",
    name: "Фикус лировидный",
    scientificName: "Ficus lyrata",
    image:
      "https://images.unsplash.com/photo-1586093648831-97b7e7709b32?w=400&h=300&fit=crop",
    difficulty: "Средне",
    light: "Солнце",
    watering: "Умеренно",
    temperature: "18-24°C",
    humidity: "50-65%",
    fertilizing: "Раз в месяц",
    repotting: "Каждые 2-3 года",
    price: 2500,
    height: "150-300 см",
    bloomingTime: "Не цветёт в комнатных условиях",
    toxicity: true,
  },
  {
    id: "4",
    name: "Потос золотистый",
    scientificName: "Epipremnum aureum",
    image:
      "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&h=300&fit=crop",
    difficulty: "Легко",
    light: "Полутень",
    watering: "Умеренно",
    temperature: "18-29°C",
    humidity: "40-60%",
    fertilizing: "Раз в месяц",
    repotting: "Каждые 2 года",
    price: 600,
    height: "200-300 см (вьющееся)",
    bloomingTime: "Не цветёт в комнатных условиях",
    toxicity: true,
  },
  {
    id: "5",
    name: "Замиокулькас",
    scientificName: "Zamioculcas zamiifolia",
    image:
      "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=400&h=300&fit=crop",
    difficulty: "Легко",
    light: "Полутень",
    watering: "Редко",
    temperature: "18-26°C",
    humidity: "40-60%",
    fertilizing: "Раз в 2 месяца",
    repotting: "Каждые 3-4 года",
    price: 1500,
    height: "60-100 см",
    bloomingTime: "Редко в комнатных условиях",
    toxicity: false,
  },
  {
    id: "6",
    name: "Спатифиллум",
    scientificName: "Spathiphyllum wallisii",
    image:
      "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=400&h=300&fit=crop",
    difficulty: "Средне",
    light: "Полутень",
    watering: "Часто",
    temperature: "18-25°C",
    humidity: "50-70%",
    fertilizing: "Раз в 2 недели",
    repotting: "Каждый год",
    price: 900,
    height: "30-60 см",
    bloomingTime: "Весна-лето",
    toxicity: true,
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [comparedPlants, setComparedPlants] = useState<Plant[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    categories: [],
    difficulty: [],
    light: [],
    watering: [],
    priceRange: [0, 10000],
    bloomingMonths: [],
    plantingMonths: [],
    size: [],
  });

  const handleCompare = (plantId: string) => {
    const plant = mockPlants.find((p) => p.id === plantId);
    if (!plant) return;

    if (comparedPlants.find((p) => p.id === plantId)) {
      setComparedPlants(comparedPlants.filter((p) => p.id !== plantId));
    } else {
      if (comparedPlants.length < 3) {
        setComparedPlants([...comparedPlants, plant]);
      }
    }
  };

  const handleFavorite = (plantId: string) => {
    if (favorites.includes(plantId)) {
      setFavorites(favorites.filter((id) => id !== plantId));
    } else {
      setFavorites([...favorites, plantId]);
    }
  };

  const resetFilters = () => {
    setFilters({
      categories: [],
      difficulty: [],
      light: [],
      watering: [],
      priceRange: [0, 10000],
      bloomingMonths: [],
      plantingMonths: [],
      size: [],
    });
  };

  const filteredPlants = mockPlants.filter((plant) => {
    const matchesSearch =
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty =
      filters.difficulty.length === 0 ||
      filters.difficulty.includes(plant.difficulty);
    const matchesLight =
      filters.light.length === 0 || filters.light.includes(plant.light);
    const matchesWatering =
      filters.watering.length === 0 ||
      filters.watering.includes(plant.watering);
    const matchesPrice =
      plant.price >= filters.priceRange[0] &&
      plant.price <= filters.priceRange[1];

    return (
      matchesSearch &&
      matchesDifficulty &&
      matchesLight &&
      matchesWatering &&
      matchesPrice
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            🌱 Каталог растений для дома и сада
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Найдите идеальные растения для вашего пространства
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Icon
                name="Search"
                size={24}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <Input
                type="text"
                placeholder="Поиск по названию растения..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-white text-gray-900 rounded-full border-0 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Комнатные растения",
              "Садовые цветы",
              "Суккуленты",
              "Травы",
              "Деревья",
            ].map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="px-4 py-2 text-sm cursor-pointer hover:bg-green-100"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="catalog" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger
              value="catalog"
              className="flex items-center space-x-2"
            >
              <Icon name="Grid3X3" size={16} />
              <span>Каталог</span>
            </TabsTrigger>
            <TabsTrigger
              value="compare"
              className="flex items-center space-x-2"
            >
              <Icon name="GitCompare" size={16} />
              <span>Сравнение ({comparedPlants.length})</span>
            </TabsTrigger>
            <TabsTrigger
              value="calendar"
              className="flex items-center space-x-2"
            >
              <Icon name="Calendar" size={16} />
              <span>Календарь</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="catalog">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Filters */}
              <div className="lg:col-span-1">
                <FilterPanel
                  filters={filters}
                  onFiltersChange={setFilters}
                  onReset={resetFilters}
                />
              </div>

              {/* Plants Grid */}
              <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Найдено растений: {filteredPlants.length}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Сортировка:</span>
                    <Button variant="outline" size="sm">
                      По популярности
                      <Icon name="ChevronDown" size={16} className="ml-1" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredPlants.map((plant) => (
                    <PlantCard
                      key={plant.id}
                      {...plant}
                      isCompared={comparedPlants.some((p) => p.id === plant.id)}
                      onCompare={handleCompare}
                      onFavorite={handleFavorite}
                    />
                  ))}
                </div>

                {filteredPlants.length === 0 && (
                  <Card className="text-center py-12">
                    <CardContent>
                      <Icon
                        name="Search"
                        size={48}
                        className="mx-auto text-gray-400 mb-4"
                      />
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">
                        Растения не найдены
                      </h3>
                      <p className="text-gray-500">
                        Попробуйте изменить критерии поиска или сбросить фильтры
                      </p>
                      <Button onClick={resetFilters} className="mt-4">
                        Сбросить фильтры
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="compare">
            <ComparePanel
              plants={comparedPlants}
              onRemove={(plantId) =>
                setComparedPlants(
                  comparedPlants.filter((p) => p.id !== plantId),
                )
              }
              onClear={() => setComparedPlants([])}
            />
          </TabsContent>

          <TabsContent value="calendar">
            <PlantingCalendar />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon name="Sprout" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">PlantHub</span>
              </div>
              <p className="text-gray-400">
                Ваш надёжный помощник в мире растений
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Комнатные растения</li>
                <li>Садовые растения</li>
                <li>Суккуленты</li>
                <li>Травы и специи</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сервис</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Календарь посадки</li>
                <li>Сравнение растений</li>
                <li>Советы по уходу</li>
                <li>Поддержка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@planthub.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PlantHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
