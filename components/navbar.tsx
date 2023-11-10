import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="h-14 w-full px-4 border-b">
      <div className="h-full mx-auto max-w-7xl flex justify-between items-center">
        <div className="text-lg font-bold">AI-Assistant</div>
        <div className="flex gap-2 items-center">
          <button className="hover:bg-slate-100 px-2 py-1 rounded-md border-2 border-slate-300 hover:border-slate-200 duration-150">Save</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
