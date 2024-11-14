import React, { useState, useRef } from 'react';
import { Play, Pause, Music } from 'lucide-react';

interface AudioCardProps {
  title: string;
  description: string;
  audioUrl: string;
}

const AudioCard: React.FC<AudioCardProps> = ({ title, description, audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Erreur de lecture:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
            <Music className="h-6 w-6 text-purple-600" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex items-center space-x-2">
            <button
              onClick={togglePlay}
              className="inline-flex items-center px-3 py-2 border border-purple-600 rounded-md text-purple-600 hover:bg-purple-50 transition-colors"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
              <span className="ml-2">{isPlaying ? 'Pause' : 'Écouter'}</span>
            </button>
          </div>
          <audio
            ref={audioRef}
            src={audioUrl}
            onEnded={() => setIsPlaying(false)}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioCard;