import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="font-semibold text-7xl text-center">
        AI <span className="text-purple-600 font-bold">assistant</span>{" "}
      </h1>
      <h2 className="max-w-lg font-semibold text-3xl text-center text-slate-700">
        Get your AI based writing assistant in your hand.
      </h2>
      <Link href="/dashboard" className="flex justify-center mt-4">
        <button className="bg-black hover:bg-transparent text-white hover:text-black duration-200 border-2 border-transparent hover:border-black px-4 py-2 rounded-lg">Get Started</button>
      </Link>
    </div>
  );
}
