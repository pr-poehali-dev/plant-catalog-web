import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

interface CalendarEvent {
  id: string;
  plant: string;
  action: "посадка" | "цветение" | "обрезка" | "подкормка";
  month: number;
  description: string;
  color: string;
}

const PlantingCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

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

  const calendarEvents: CalendarEvent[] = [
    {
      id: "1",
      plant: "Розы",
      action: "обрезка",
      month: 2,
      description: "Санитарная обрезка после зимы",
      color: "bg-blue-500",
    },
    {
      id: "2",
      plant: "Томаты",
      action: "посадка",
      month: 3,
      description: "Посев семян на рассаду",
      color: "bg-green-500",
    },
    {
      id: "3",
      plant: "Тюльпаны",
      action: "цветение",
      month: 3,
      description: "Период активного цветения",
      color: "bg-pink-500",
    },
    {
      id: "4",
      plant: "Пионы",
      action: "подкормка",
      month: 4,
      description: "Весенняя подкормка комплексными удобрениями",
      color: "bg-yellow-500",
    },
    {
      id: "5",
      plant: "Лаванда",
      action: "посадка",
      month: 4,
      description: "Оптимальное время для посадки",
      color: "bg-purple-500",
    },
    {
      id: "6",
      plant: "Розы",
      action: "цветение",
      month: 5,
      description: "Первая волна цветения",
      color: "bg-pink-500",
    },
  ];

  const getEventsForMonth = (month: number) => {
    return calendarEvents.filter((event) => event.month === month);
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case "посадка":
        return "Sprout";
      case "цветение":
        return "Flower2";
      case "обрезка":
        return "Scissors";
      case "подкормка":
        return "Droplets";
      default:
        return "Calendar";
    }
  };

  const getActionColor = (action: string) => {
    switch (action) {
      case "посадка":
        return "bg-green-100 text-green-800";
      case "цветение":
        return "bg-pink-100 text-pink-800";
      case "обрезка":
        return "bg-blue-100 text-blue-800";
      case "подкормка":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Icon name="Calendar" size={24} />
            <span>Календарь садовода</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs
            value={selectedMonth.toString()}
            onValueChange={(value) => setSelectedMonth(parseInt(value))}
          >
            <TabsList className="grid grid-cols-6 mb-6">
              {months.slice(0, 6).map((month, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  className="text-xs"
                >
                  {month}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsList className="grid grid-cols-6 mb-6">
              {months.slice(6).map((month, index) => (
                <TabsTrigger
                  key={index + 6}
                  value={(index + 6).toString()}
                  className="text-xs"
                >
                  {month}
                </TabsTrigger>
              ))}
            </TabsList>

            {months.map((month, index) => (
              <TabsContent key={index} value={index.toString()}>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">{month}</h3>
                  <div className="grid gap-3">
                    {getEventsForMonth(index).length === 0 ? (
                      <p className="text-gray-500 text-center py-8">
                        На этот месяц нет запланированных мероприятий
                      </p>
                    ) : (
                      getEventsForMonth(index).map((event) => (
                        <div
                          key={event.id}
                          className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div
                            className={`w-3 h-3 rounded-full ${event.color}`}
                          ></div>
                          <Icon
                            name={getActionIcon(event.action)}
                            size={20}
                            className="text-gray-600"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-medium">{event.plant}</span>
                              <Badge
                                variant="secondary"
                                className={getActionColor(event.action)}
                              >
                                {event.action}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Quick Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            Советы на {months[selectedMonth]}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
              <Icon
                name="Lightbulb"
                size={20}
                className="text-green-600 mt-0.5"
              />
              <div>
                <p className="text-sm font-medium text-green-800">
                  Общий совет
                </p>
                <p className="text-sm text-green-600">
                  Следите за погодными условиями и корректируйте план ухода за
                  растениями
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <Icon
                name="Thermometer"
                size={20}
                className="text-blue-600 mt-0.5"
              />
              <div>
                <p className="text-sm font-medium text-blue-800">
                  Температурный режим
                </p>
                <p className="text-sm text-blue-600">
                  Учитывайте температурные колебания при планировании работ
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlantingCalendar;
