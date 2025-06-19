import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Categories = () => {
  const categories = [
    {
      id: "decorative",
      name: "Декоративные растения",
      slug: "dekorativnye-rasteniya",
      description:
        "Красивоцветущие и декоративнолиственные растения для украшения участка",
      count: 847,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      subcategories: [
        { name: "Многолетники", slug: "mnogoletniki", count: 234 },
        { name: "Однолетники", slug: "odnoletniki", count: 156 },
        {
          name: "Декоративные кустарники",
          slug: "dekorativnye-kustarniki",
          count: 178,
        },
        { name: "Хвойные растения", slug: "hvojnye-rasteniya", count: 89 },
      ],
    },
    {
      id: "fruit",
      name: "Плодовые растения",
      slug: "plodovye-rasteniya",
      description: "Фруктовые деревья, ягодные кустарники и плодовые лианы",
      count: 423,
      image:
        "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop",
      subcategories: [
        { name: "Плодовые деревья", slug: "plodovye-derevya", count: 156 },
        { name: "Ягодные кустарники", slug: "yagodnye-kustarniki", count: 134 },
        { name: "Виноград", slug: "vinograd", count: 67 },
        { name: "Орехоплодные", slug: "orehoplodnye", count: 66 },
      ],
    },
    {
      id: "vegetables",
      name: "Овощные культуры",
      slug: "ovoshhnye-kultury",
      description: "Семена и рассада овощей для вашего огорода",
      count: 312,
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

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
              <span className="text-gray-900" itemProp="name">
                Категории
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Каталог растений для приусадебного участка
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 1500 видов декоративных и плодовых растений от проверенных
            продавцов России
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 rounded-t-lg" />
                <Badge className="absolute top-4 right-4 bg-white/90 text-gray-900">
                  {category.count} растений
                </Badge>
              </div>

              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {category.name}
                </h2>
                <p className="text-gray-600 mb-4">{category.description}</p>

                {category.subcategories && (
                  <div className="space-y-2 mb-4">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub.slug}
                        to={`/katalog/${category.slug}/${sub.slug}`}
                        className="flex items-center justify-between text-sm text-gray-600 hover:text-green-600 transition-colors"
                      >
                        <span>{sub.name}</span>
                        <span>({sub.count})</span>
                      </Link>
                    ))}
                  </div>
                )}

                <Link
                  to={`/katalog/${category.slug}`}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Смотреть все
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SEO Content */}
        <section className="mt-16 bg-white rounded-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Растения для приусадебного участка: полный каталог с доставкой по
              России
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Декоративные растения
                </h3>
                <p className="text-gray-600 mb-4">
                  В нашем каталоге представлены лучшие сорта декоративных
                  растений для средней полосы России. Многолетники, однолетники,
                  декоративные кустарники и хвойные — всё для создания красивого
                  сада.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Морозостойкие сорта для климата России</li>
                  <li>• Подробные описания ухода и посадки</li>
                  <li>• Фото в разные сезоны</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Плодовые растения
                </h3>
                <p className="text-gray-600 mb-4">
                  Саженцы плодовых деревьев и ягодных кустарников от лучших
                  питомников. Районированные сорта с гарантией приживаемости и
                  урожайности.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Проверенные сорта для вашего региона</li>
                  <li>• Консультации по посадке и уходу</li>
                  <li>• Гарантия качества посадочного материала</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Categories;
