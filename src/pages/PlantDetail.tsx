import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const PlantDetail = () => {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock data - в реальном проекте загружается из API
  const plant = {
    id: "monstera-deliciosa",
    name: "Монстера деликатесная",
    scientificName: "Monstera deliciosa",
    category: "Комнатные растения",
    categorySlug: "komnatnye-rasteniya",
    description:
      "Эффектное тропическое растение с крупными резными листьями, идеально подходящее для украшения интерьера. Неприхотливо в уходе и быстро растёт.",
    fullDescription: `Монстера деликатесная — одно из самых популярных комнатных растений благодаря своим впечатляющим размерам и необычной форме листьев. В природе произрастает в тропических лесах Центральной Америки, где может достигать высоты до 20 метров.

Особенностью взрослых растений являются крупные перфорированные листья с характерными прорезями и отверстиями. Молодые листья цельные, а по мере роста на них появляются сначала прорези по краям, а затем и отверстия в центральной части.

Монстера отлично подходит для начинающих цветоводов, так как не требует сложного ухода и прощает многие ошибки. При хорошем уходе может цвести и даже плодоносить в комнатных условиях, хотя это происходит крайне редко.`,
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586093648831-97b7e7709b32?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555235067-f2b6853b2461?w=600&h=600&fit=crop",
    ],
    characteristics: {
      difficulty: "Легкий",
      light: "Яркий рассеянный свет",
      watering: "Умеренный, 1-2 раза в неделю",
      temperature: "18-25°C",
      humidity: "50-60%",
      height: "1-3 метра в комнатных условиях",
      growth: "Быстрый",
      flowering: "Редко в комнатных условиях",
      toxicity: "Токсично для животных и детей",
    },
    care: {
      planting:
        "Используйте рыхлую питательную почву с хорошим дренажем. Подойдёт готовый грунт для декоративнолиственных растений.",
      watering:
        "Поливайте когда верхний слой почвы подсохнет на 2-3 см. Летом чаще, зимой реже. Используйте отстоянную воду комнатной температуры.",
      fertilizing:
        "Подкармливайте жидким удобрением для декоративнолиственных растений каждые 2-3 недели весной и летом.",
      pruning:
        "Обрезайте повреждённые и старые листья. Для формирования куста можно прищипывать верхушки побегов.",
      repotting:
        "Пересаживайте молодые растения ежегодно, взрослые — каждые 2-3 года в горшок большего размера.",
    },
    price: {
      min: 800,
      max: 3500,
      currency: "₽",
    },
    rating: 4.8,
    reviewsCount: 156,
    inStock: true,
    sellers: [
      {
        id: "green-garden",
        name: "Зелёный Сад",
        rating: 4.9,
        location: "Москва",
        price: 1200,
        hasDelivery: true,
      },
      {
        id: "flower-world",
        name: "Мир Цветов",
        rating: 4.7,
        location: "СПб",
        price: 950,
        hasDelivery: true,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Schema.org микроразметка */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: plant.name,
          alternateName: plant.scientificName,
          description: plant.description,
          category: plant.category,
          image: plant.images,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: plant.rating,
            reviewCount: plant.reviewsCount,
          },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "RUB",
            lowPrice: plant.price.min,
            highPrice: plant.price.max,
            availability: "https://schema.org/InStock",
          },
        })}
      </script>

      {/* Breadcrumbs */}
      <nav
        className="bg-white border-b"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <Link
                to="/"
                className="text-gray-500 hover:text-green-600"
                itemProp="item"
              >
                <span itemProp="name">Главная</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <Icon name="ChevronRight" size={16} className="text-gray-400" />
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <Link
                to={`/katalog/${plant.categorySlug}`}
                className="text-gray-500 hover:text-green-600"
                itemProp="item"
              >
                <span itemProp="name">{plant.category}</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <Icon name="ChevronRight" size={16} className="text-gray-400" />
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <span className="text-gray-900" itemProp="name">
                {plant.name}
              </span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Галерея изображений */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-sm">
              <img
                src={plant.images[selectedImage]}
                alt={plant.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2">
              {plant.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-green-500"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Основная информация */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {plant.name}
              </h1>
              <p className="text-lg text-gray-600 italic mb-4">
                {plant.scientificName}
              </p>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={
                          i < Math.floor(plant.rating) ? "fill-current" : ""
                        }
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {plant.rating} ({plant.reviewsCount} отзывов)
                  </span>
                </div>
                <Badge variant={plant.inStock ? "default" : "destructive"}>
                  {plant.inStock ? "В наличии" : "Нет в наличии"}
                </Badge>
              </div>

              <p className="text-gray-700 mb-6">{plant.description}</p>

              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Цена от</p>
                    <p className="text-2xl font-bold text-green-600">
                      {plant.price.min} - {plant.price.max}{" "}
                      {plant.price.currency}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">
                      {plant.sellers.length} продавца
                    </p>
                    <Badge className="bg-green-100 text-green-800">
                      <Icon name="Truck" size={12} className="mr-1" />
                      Доставка
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Купить у продавца
                </Button>
                <Button variant="outline">
                  <Icon name="Heart" size={16} />
                </Button>
                <Button variant="outline">
                  <Icon name="GitCompare" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Подробная информация */}
        <Tabs defaultValue="description" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="care">Уход</TabsTrigger>
            <TabsTrigger value="characteristics">Характеристики</TabsTrigger>
            <TabsTrigger value="sellers">Продавцы</TabsTrigger>
          </TabsList>

          <TabsContent value="description">
            <Card>
              <CardContent className="p-6 prose max-w-none">
                <div className="whitespace-pre-line text-gray-700">
                  {plant.fullDescription}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="care">
            <div className="grid gap-6">
              {Object.entries(plant.care).map(([key, value]) => {
                const icons = {
                  planting: "Sprout",
                  watering: "Droplets",
                  fertilizing: "Leaf",
                  pruning: "Scissors",
                  repotting: "RotateCcw",
                };
                const titles = {
                  planting: "Посадка",
                  watering: "Полив",
                  fertilizing: "Подкормка",
                  pruning: "Обрезка",
                  repotting: "Пересадка",
                };

                return (
                  <Card key={key}>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-lg">
                        <Icon
                          name={icons[key]}
                          size={20}
                          className="mr-2 text-green-600"
                        />
                        {titles[key]}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{value}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="characteristics">
            <Card>
              <CardContent className="p-6">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(plant.characteristics).map(([key, value]) => {
                    const labels = {
                      difficulty: "Сложность ухода",
                      light: "Освещение",
                      watering: "Полив",
                      temperature: "Температура",
                      humidity: "Влажность",
                      height: "Высота",
                      growth: "Скорость роста",
                      flowering: "Цветение",
                      toxicity: "Токсичность",
                    };

                    return (
                      <div key={key} className="border-b border-gray-100 pb-2">
                        <dt className="font-medium text-gray-900">
                          {labels[key]}:
                        </dt>
                        <dd className="text-gray-700">{value}</dd>
                      </div>
                    );
                  })}
                </dl>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sellers">
            <div className="space-y-4">
              {plant.sellers.map((seller) => (
                <Card key={seller.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <Icon
                            name="Store"
                            size={20}
                            className="text-green-600"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {seller.name}
                          </h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Icon name="MapPin" size={14} />
                            <span>{seller.location}</span>
                            <div className="flex items-center">
                              <Icon
                                name="Star"
                                size={14}
                                className="text-yellow-400 fill-current"
                              />
                              <span className="ml-1">{seller.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-green-600">
                          {seller.price} ₽
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          {seller.hasDelivery && (
                            <Badge variant="secondary" className="text-xs">
                              <Icon name="Truck" size={10} className="mr-1" />
                              Доставка
                            </Badge>
                          )}
                          <Button size="sm">Купить</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PlantDetail;
