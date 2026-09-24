import React from 'react';
import { LIVE_APPS, LiveAppBox, LiveAppModal } from './LiveAppPreviews.tsx';

interface AgospherePreviewProps {
  isOpen?: boolean;
  onClose?: () => void;
  embedded?: boolean;
}

export const AgospherePreview: React.FC<AgospherePreviewProps> = ({ 
  isOpen = true, 
  onClose,
  embedded = false 
}) => {
  const agosphereApp = LIVE_APPS.find(app => app.id === 'agosphere')!;

  if (embedded) {
    return <LiveAppBox app={agosphereApp} />;
  }

  if (!isOpen) return null;

  return (
    <LiveAppModal 
      isOpen={isOpen} 
      onClose={onClose || (() => {})} 
      initialAppId="agosphere" 
    />
  );
};
