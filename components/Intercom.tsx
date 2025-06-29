'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Intercom?: any;
  }
}

export function Intercom({ appId }: { appId: string }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.Intercom = function() {
      window.Intercom.c(arguments);
    };
    window.Intercom.q = [];
    window.Intercom.c = function(args: any) {
      window.Intercom.q.push(args);
    };

    window.Intercom('boot', { app_id: appId });

    // Load Intercom script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://widget.intercom.io/widget/' + appId;
    document.body.appendChild(script);

    return () => {
      if (window.Intercom) {
        window.Intercom('shutdown');
        delete window.Intercom;
      }
      script.remove();
    };
  }, [appId]);

  return null;
}
