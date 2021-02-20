import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Hello Next.js!</div>
      <Link href="/about">
        <button>Click!</button>
      </Link>
    </>
  );
}
