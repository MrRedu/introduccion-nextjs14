import Link from "next/link";

export function Header(): JSX.Element {
  return (
    <header className="text-xl font-bold leading-[3rem]">
      <Link href="/">
        <h1>Restaurancy</h1>
      </Link>
    </header>
  );
}
