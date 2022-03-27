import type { NextPage } from "next";
import Link from "next/link";
import { useFoo } from "./Foo";

const PageA: NextPage = () => {
  const { data, isLoading } = useFoo();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <p>Page A</p>
      <p>{data}</p>
      <Link href="/PageB">Page B</Link>
    </div>
  );
};

export default PageA;
