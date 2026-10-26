import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.rajenterprise.surveystamp',
  appName: 'SurveyStamp',
  webDir: 'dist',
  server: { androidScheme: 'https' }
};
export default config;