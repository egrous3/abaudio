'use client';

import { useState, useRef } from 'react';

type AudioFile = {
  file: File;
  url: string;
  name: string;
};

export default function AudioComparison() {
  const [audioA, setAudioA] = useState<AudioFile | null>(null);
  const [audioB, setAudioB] = useState<AudioFile | null>(null);
  const [currentAudio, setCurrentAudio] = useState<'A' | 'B'>('A');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRefA = useRef<HTMLAudioElement>(null);
  const audioRefB = useRef<HTMLAudioElement>(null);

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'A' | 'B') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    
    if (type === 'A') {
      setAudioA({ file, url, name: file.name });
    } else {
      setAudioB({ file, url, name: file.name });
    }
  };

  // Handle play/pause
  const togglePlayPause = () => {
    const activeAudio = currentAudio === 'A' ? audioRefA.current : audioRefB.current;
    
    if (!activeAudio) return;
    
    if (isPlaying) {
      activeAudio.pause();
    } else {
      activeAudio.play();
    }
    
    setIsPlaying(!isPlaying);
  };

  // Switch between audio A and B
  const switchAudio = (type: 'A' | 'B') => {
    if (currentAudio === type) return;
    
    const currentRef = currentAudio === 'A' ? audioRefA.current : audioRefB.current;
    const targetRef = type === 'A' ? audioRefA.current : audioRefB.current;
    
    if (!currentRef || !targetRef) return;
    
    const wasPlaying = !currentRef.paused;
    const currentTime = currentRef.currentTime;
    
    currentRef.pause();
    targetRef.currentTime = currentTime;
    
    if (wasPlaying) {
      targetRef.play();
    }
    
    setCurrentAudio(type);
  };

  // Update time display
  const handleTimeUpdate = () => {
    const activeAudio = currentAudio === 'A' ? audioRefA.current : audioRefB.current;
    if (activeAudio) {
      setCurrentTime(activeAudio.currentTime);
    }
  };

  // Update duration when metadata is loaded
  const handleMetadataLoaded = () => {
    const activeAudio = currentAudio === 'A' ? audioRefA.current : audioRefB.current;
    if (activeAudio) {
      setDuration(activeAudio.duration);
    }
  };

  // Handle seeking
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    
    if (audioRefA.current) audioRefA.current.currentTime = newTime;
    if (audioRefB.current) audioRefB.current.currentTime = newTime;
    
    setCurrentTime(newTime);
  };

  // Handle audio ending
  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    
    if (audioRefA.current) audioRefA.current.currentTime = 0;
    if (audioRefB.current) audioRefB.current.currentTime = 0;
  };

  // Select preference
  const selectPreference = (preferred: 'A' | 'B') => {
    alert(`You preferred Audio ${preferred}!`);
    // Here you could send the preference to a backend API
  };

  // Format time display (MM:SS)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Audio A/B Testing</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-medium mb-2">Audio A</h3>
          <div className="w-full h-32 flex items-center justify-center border-2 border-dashed rounded-lg p-4 relative">
            {audioA ? (
              <div className="text-center">
                <p className="font-medium">{audioA.name}</p>
                <p className="text-sm text-gray-500">Upload a different file</p>
                <audio ref={audioRefA} src={audioA.url} onEnded={handleEnded} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleMetadataLoaded} />
              </div>
            ) : (
              <p className="text-gray-500">Drag & drop or click to upload</p>
            )}
            <input
              type="file"
              accept="audio/*"
              onChange={(e) => handleFileUpload(e, 'A')}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <button
            onClick={() => switchAudio('A')}
            className={`mt-4 px-4 py-2 rounded-full ${
              currentAudio === 'A' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
            }`}
          >
            Listen to A
          </button>
          <button
            onClick={() => selectPreference('A')}
            className="mt-2 px-4 py-2 rounded-full bg-green-600 text-white"
          >
            Prefer A
          </button>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-lg font-medium mb-2">Audio B</h3>
          <div className="w-full h-32 flex items-center justify-center border-2 border-dashed rounded-lg p-4 relative">
            {audioB ? (
              <div className="text-center">
                <p className="font-medium">{audioB.name}</p>
                <p className="text-sm text-gray-500">Upload a different file</p>
                <audio ref={audioRefB} src={audioB.url} onEnded={handleEnded} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleMetadataLoaded} />
              </div>
            ) : (
              <p className="text-gray-500">Drag & drop or click to upload</p>
            )}
            <input
              type="file"
              accept="audio/*"
              onChange={(e) => handleFileUpload(e, 'B')}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <button
            onClick={() => switchAudio('B')}
            className={`mt-4 px-4 py-2 rounded-full ${
              currentAudio === 'B' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
            }`}
          >
            Listen to B
          </button>
          <button
            onClick={() => selectPreference('B')}
            className="mt-2 px-4 py-2 rounded-full bg-green-600 text-white"
          >
            Prefer B
          </button>
        </div>
      </div>

      {/* Audio controls */}
      <div className="mt-8 border-t pt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm">{formatTime(currentTime)}</span>
          <button 
            onClick={togglePlayPause}
            disabled={!audioA && !audioB}
            className={`px-4 py-2 rounded-full ${
              (!audioA && !audioB) ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white'
            }`}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <span className="text-sm">{formatTime(duration)}</span>
        </div>
        
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="w-full"
          disabled={!audioA && !audioB}
        />
        
        <div className="text-center mt-4">
          <p className="text-sm font-medium">
            Currently playing: Audio {currentAudio}
          </p>
        </div>
      </div>
    </div>
  );
} 