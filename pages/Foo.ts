import { useQuery } from "react-query";

export class Foo {
  x: number;

  constructor(x: number) {
    this.x = x;
  }
}

export async function computeFoo(): Promise<number> {
  console.warn("computeFoo");
  return 5;
}

export function useFoo() {
  return useQuery("foo", computeFoo, {
    cacheTime: Infinity,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}
