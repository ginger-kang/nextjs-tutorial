import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Hello Next.js!</div>
      <Link href="/about">
        <button>Click!</button>
      </Link>
      <Link href="/post/1">
        <button>Post 1</button>
      </Link>
    </>
  );
}
