interface ImportMeta {
  glob<T = unknown>(
    pattern: string,
    options?: {
      as?: 'url';
      eager?: boolean;
      import?: string;
    }
  ): Record<string, T>;
}
