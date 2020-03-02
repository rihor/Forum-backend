declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: string;
      DB_TYPE: 'postgres' | 'mysql';
      DB_HOST: 'localhost' | string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_DATABASE: string;
      DB_PORT: 5432 | number;
      DB_SYNCHRONIZE: boolean;
      DB_LOGGING: boolean;
    }
  }
}

export {}
