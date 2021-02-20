import Link from "next/link";

export default function About() {
  return (
    <>
      <div>This is about page</div>
      <Link href="/">
        <button>Back</button>
      </Link>
    </>
  );
}
