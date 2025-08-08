import React from 'react';
import { Play, Users, Wifi, WifiOff } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const TVStationCard = ({ station, onPlay }) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-white/80 backdrop-blur-sm border border-gray-200/50">
      <CardContent className="p-0">
        <div className="relative">
          {/* Station Logo/Thumbnail */}
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
            <img
              src={station.logo}
              alt={station.name}
              className="w-full h-full object-cover"
            />
            
            {/* Live Indicator */}
            <div className="absolute top-3 left-3">
              {station.isLive ? (
                <Badge className="bg-red-600 hover:bg-red-600 text-white flex items-center space-x-1">
                  <Wifi className="w-3 h-3" />
                  <span>LIVE</span>
                </Badge>
              ) : (
                <Badge variant="secondary" className="bg-gray-600 text-white flex items-center space-x-1">
                  <WifiOff className="w-3 h-3" />
                  <span>OFFLINE</span>
                </Badge>
              )}
            </div>

            {/* Viewer Count */}
            <div className="absolute top-3 right-3">
              <Badge variant="secondary" className="bg-black/60 text-white flex items-center space-x-1">
                <Users className="w-3 h-3" />
                <span>{station.viewers?.toLocaleString() || '0'}</span>
              </Badge>
            </div>

            {/* Play Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <Button
                onClick={() => onPlay(station)}
                size="lg"
                className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 bg-white/90 text-black hover:bg-white"
              >
                <Play className="w-6 h-6 mr-2" />
                Watch Live
              </Button>
            </div>
          </div>

          {/* Station Info */}
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
              {station.name}
            </h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{station.description}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                {station.country}
              </Badge>
              <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                {station.language}
              </Badge>
              <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">
                {station.genre}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TVStationCard;