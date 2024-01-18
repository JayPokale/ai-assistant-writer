import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="h-14 w-full px-4 border-b">
      <div className="h-full mx-auto max-w-7xl flex justify-between items-center">
        <div className="text-lg font-bold">AI-Blog-Assistant</div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default Navbar;
