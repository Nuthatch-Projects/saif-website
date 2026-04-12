import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WiThermometer, WiDaySunny, WiCloud, WiRain, WiSnow } from 'react-icons/wi';

interface WeatherData {
  temp: number;
  description: string;
  icon: string;
}

function getBraaiMessage(temp: number): string {
  if (temp >= 25) return "Perfect braai weather, bru!";
  if (temp >= 18) return "Lekker day for a braai in the park!";
  if (temp >= 12) return "Still braai weather if you're brave enough!";
  if (temp >= 5) return "Potjie weather — time for something warm";
  if (temp >= -5) return "Eish, not even a potjie can fix this cold";
  return "Ag no, we didn't sign up for this!";
}

function getWeatherIcon(icon: string) {
  if (icon.startsWith('01') || icon.startsWith('02')) return WiDaySunny;
  if (icon.startsWith('03') || icon.startsWith('04')) return WiCloud;
  if (icon.startsWith('09') || icon.startsWith('10')) return WiRain;
  if (icon.startsWith('13')) return WiSnow;
  return WiCloud;
}

function getWeatherEmoji(temp: number): string {
  if (temp >= 25) return '\u{2600}\u{FE0F}';
  if (temp >= 18) return '\u{1F324}\u{FE0F}';
  if (temp >= 12) return '\u{26C5}';
  if (temp >= 5) return '\u{1F327}\u{FE0F}';
  return '\u{2744}\u{FE0F}';
}

export default function BraaiWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Freiburg,DE&units=metric&appid=${API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.main) {
          setWeather({
            temp: Math.round(data.main.temp),
            description: data.weather?.[0]?.description || 'Unknown',
            icon: data.weather?.[0]?.icon || '01d',
          });
        }
      })
      .catch(() => {
        // Fallback mock data for demo
        setWeather({ temp: 22, description: 'partly cloudy', icon: '02d' });
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-sa-green/10 to-sa-gold/10 dark:from-sa-green/20 dark:to-sa-gold/20 rounded-2xl p-6 animate-pulse">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto" />
      </div>
    );
  }

  if (!weather) return null;

  const WeatherIcon = getWeatherIcon(weather.icon);
  const emoji = getWeatherEmoji(weather.temp);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-sa-green/5 to-sa-gold/5 dark:from-sa-green/15 dark:to-sa-gold/15 border border-sa-green/20 rounded-2xl p-6 md:p-8"
    >
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="text-4xl md:text-5xl text-sa-green dark:text-sa-gold">
            <WeatherIcon />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <WiThermometer className="text-2xl text-sa-red" />
              <span className="font-heading text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {weather.temp}°C
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
              Freiburg — {weather.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-2xl">{emoji}</span>
          <p className="font-accent text-lg md:text-xl text-sa-green dark:text-sa-gold max-w-xs">
            {getBraaiMessage(weather.temp)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
