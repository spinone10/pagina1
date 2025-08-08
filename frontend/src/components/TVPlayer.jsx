import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Users, Wifi, WifiOff } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const TVPlayer = ({ station, onBack }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  if (!station) return null;

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gray-900 p-4 flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="text-white hover:bg-gray-800">
          ← Back to Channels
        </Button>
        
        <div className="flex items-center space-x-4 text-white">
          <div className="flex items-center space-x-2">
            {station.isLive ? (
              <><Wifi className="w-4 h-4 text-green-400" />
              <span className="text-sm bg-red-600 px-2 py-1 rounded-full">LIVE</span></>
            ) : (
              <><WifiOff className="w-4 h-4 text-gray-400" />
              <span className="text-sm bg-gray-600 px-2 py-1 rounded-full">OFFLINE</span></>
            )}
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span className="text-sm">{station.viewers?.toLocaleString() || '0'}</span>
          </div>
        </div>
      </div>

      {/* Video Player */}
      <div className="relative bg-black">
        <div className="aspect-video">
          {station.streamUrl ? (
            <iframe
              src={station.streamUrl}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`${station.name} Live Stream`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
              <div className="text-center">
                <WifiOff className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold mb-2">Stream Not Available</h3>
                <p className="text-gray-400">This channel is currently offline</p>
              </div>
            </div>
          )}
        </div>

        {/* Video Controls Overlay */}
        {showControls && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-white hover:bg-white/20"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white hover:bg-white/20"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </Button>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
              >
                <Maximize className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Station Info */}
      <Card className="m-6 bg-gray-900 border-gray-700 text-white">
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <img
              src={station.logo}
              alt={station.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">{station.name}</h1>
              <p className="text-gray-400 mb-4">{station.description}</p>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Country:</span>
                  <span className="bg-blue-600 px-2 py-1 rounded-full">{station.country}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Language:</span>
                  <span className="bg-green-600 px-2 py-1 rounded-full">{station.language}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Genre:</span>
                  <span className="bg-purple-600 px-2 py-1 rounded-full">{station.genre}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TVPlayer;