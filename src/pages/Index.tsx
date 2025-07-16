import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [onlinePlayers] = useState(247);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className="border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-orange-500 rounded-lg"></div>
            <h1 className="text-xl font-bold">MineCraft Server</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-green-500 transition-colors">Главная</a>
            <a href="#rules" className="hover:text-green-500 transition-colors">Правила</a>
            <a href="#donate" className="hover:text-green-500 transition-colors">Донат</a>
            <a href="#contacts" className="hover:text-green-500 transition-colors">Контакты</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Switch 
              checked={isDarkMode}
              onCheckedChange={setIsDarkMode}
            />
            <span className="text-sm">Тёмная тема</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-green-500 to-orange-500 rounded-2xl mb-8">
            <div className={`px-8 py-6 rounded-xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text text-transparent mb-4">
                Survival Server
              </h2>
              <p className="text-xl mb-6 max-w-2xl mx-auto">
                Лучший сервер выживания в Minecraft Java Edition. 
                Присоединяйся к нашему сообществу и начинай своё приключение!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white border-0">
                  ▶️ Играть сейчас
                </Button>
                <Button variant="outline" size="lg">
                  ⬇️ Скачать лаунчер
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Онлайн: {onlinePlayers} игроков</span>
                </div>
                <span className="text-gray-400">|</span>
                <span>IP: play.server.ru</span>
                <span className="text-gray-400">|</span>
                <span>Версия: 1.20.4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Server Info */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} transition-transform hover:scale-105`}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">👥</span>
                </div>
                <CardTitle>Активное сообщество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  Более 1000 активных игроков, дружелюбная атмосфера и опытная администрация
                </p>
              </CardContent>
            </Card>

            <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} transition-transform hover:scale-105`}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">🛡️</span>
                </div>
                <CardTitle>Защита от гриферов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  Система приватов, защита территорий и строгая модерация
                </p>
              </CardContent>
            </Card>

            <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} transition-transform hover:scale-105`}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">⚡</span>
                </div>
                <CardTitle>Стабильная работа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  Мощные серверы, отсутствие лагов и 99.9% аптайм
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className={`py-16 px-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Правила сервера</h3>
          
          <div className="space-y-4">
            {[
              "Запрещены читы, дюпы и использование багов",
              "Уважительное общение с другими игроками",
              "Запрет на гриферство и воровство",
              "Не спамить в чате и не использовать мат",
              "Запрещена реклама других серверов"
            ].map((rule, index) => (
              <Card key={index} className={`${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white'} opacity-0 animate-fade-in`} style={{animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards'}}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-gradient-to-r from-green-500 to-orange-500 text-white">
                      {index + 1}
                    </Badge>
                    <span>{rule}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Поддержи сервер</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "VIP",
                price: "199₽",
                period: "/месяц",
                features: ["Приватные команды", "Цветной ник", "VIP префикс", "Доступ к /kit vip"]
              },
              {
                name: "PREMIUM",
                price: "499₽", 
                period: "/месяц",
                features: ["Все от VIP", "Флай на спавне", "Больше приватов", "/kit premium", "Премиум поддержка"],
                popular: true
              },
              {
                name: "DELUXE",
                price: "999₽",
                period: "/месяц", 
                features: ["Все от Premium", "Креативный режим", "WorldEdit", "Админ поддержка 24/7"]
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-green-500' : ''} ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} transition-transform hover:scale-105`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-orange-500 text-white">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="text-3xl font-bold">
                    {plan.price}
                    <span className="text-lg text-gray-600 dark:text-gray-400">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white border-0">
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className={`py-16 px-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Контакты и поддержка</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white'} transition-transform hover:scale-105`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <span className="mr-2">💬</span>
                  Discord
                </CardTitle>
                <CardDescription>Общайся с игроками и получай поддержку</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Присоединиться
                </Button>
              </CardContent>
            </Card>

            <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white'} transition-transform hover:scale-105`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <span className="mr-2">📱</span>
                  Telegram
                </CardTitle>
                <CardDescription>Новости сервера и быстрая связь</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Подписаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Minecraft Survival Server. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;