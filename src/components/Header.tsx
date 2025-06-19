import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Icon name="Sprout" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">PlantHub</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <Input
                type="text"
                placeholder="Поиск растений..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 w-full"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link
              to="/catalog"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Каталог
            </Link>
            <Link
              to="/compare"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Сравнение
            </Link>
            <Link
              to="/calendar"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Календарь
            </Link>
            <Button variant="outline" size="sm">
              <Icon name="Heart" size={16} className="mr-2" />
              Избранное
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
