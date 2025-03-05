import AudioComparison from '@/components/AudioComparison';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">ABaudio</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Upload and compare two audio files side by side
          </p>
        </header>
        
        <main>
          <AudioComparison />
        </main>
        
        <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>ABaudio - A simple tool for A/B testing audio files</p>
        </footer>
      </div>
    </div>
  );
}
