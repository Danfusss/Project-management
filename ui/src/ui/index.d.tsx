export {};

declare global {
  interface Window {
    currentTargetImage?: string;
  }
  namespace NodeJS {
    interface ProcessEnv {
      API_SERVER: string;
      API_PATH: string;
      FILE_SERVER: string;
      QUERY_FAKE: string;
      USE_CACHE: string;
      FOOTER_BANNER: string;
      USE_API_STABS: boolean;
    }
  }
}
