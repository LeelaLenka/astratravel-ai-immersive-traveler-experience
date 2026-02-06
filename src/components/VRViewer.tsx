
import React, { useEffect, useState } from 'react';

interface VRViewerProps {
  imageUrl: string;
  onClose: () => void;
}

const VRViewer: React.FC<VRViewerProps> = ({ imageUrl, onClose }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Small delay to ensure A-Frame can mount correctly in the React lifecycle
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col">
      <div className="absolute top-4 left-4 z-[110] flex gap-4">
        <button 
          onClick={onClose}
          className="bg-white/20 hover:bg-white/40 text-white px-6 py-2 rounded-full backdrop-blur-md transition-all font-medium border border-white/20"
        >
          ← Back to Map
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[110] bg-black/50 text-white px-6 py-3 rounded-full backdrop-blur-lg border border-white/10 text-center max-w-md">
        <p className="text-sm font-medium">Use mouse to drag & look around. Click the VR icon for headset mode.</p>
      </div>

      <div className="flex-1 relative">
        {isReady && (
          <>
            {/* @ts-ignore - a-scene is a web component from a-frame */}
            <a-scene embedded vr-mode-ui="enabled: true" loading-screen="enabled: false">
              {/* @ts-ignore */}
              <a-sky src={imageUrl} rotation="0 -90 0"></a-sky>
              {/* @ts-ignore */}
              <a-entity camera look-controls></a-entity>
              {/* @ts-ignore */}
            </a-scene>
            {/* @ts-ignore */}
          </>
        )}
        {!isReady && (
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VRViewer;
