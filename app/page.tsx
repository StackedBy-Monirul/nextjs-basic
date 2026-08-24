
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Link
        href="/todos"
        className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        View Todos
      </Link>
    </div>
  );
}
