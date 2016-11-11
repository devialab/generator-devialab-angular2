// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare var ENV: string;
declare var HMR: boolean;
declare var HOST: string;
declare var PORT: number;
declare var APP_CONFIG: Object;

interface GlobalEnvironment {
  ENV;
  HMR;
  HOST;
  PORT;
  APP_CONFIG;
}
