import Link from "next/link";

export default async function Page() {
  return (
    <main className="h-screen w-screen">
      <Link href="/home">
        サインイン
      </Link>
    </main>
  );
}
