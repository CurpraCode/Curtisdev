export {};

declare global {
  interface Window {
    Tawk_API: any;
    gtag: (...args: any[]) => void;
  }
}
