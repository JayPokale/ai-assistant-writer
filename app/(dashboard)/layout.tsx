import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Sidenav from "@/components/sidenav";

export const metadata: Metadata = {
  title: "AI Blog Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full mx-auto max-w-[1536px] min-h-screen">
      <Sidenav />
      <main className="flex-1 flex flex-col">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
