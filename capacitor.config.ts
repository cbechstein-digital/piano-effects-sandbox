import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bechstein.PianoEffectsSandbox',
  appName: 'piano-effects-sandbox',
  webDir: 'dist/piano-effects-sandbox/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
