const Sidenav = () => {
  return (
    <aside className="w-60 h-screen border-r p-2 flex flex-col">
      <button className="hover:bg-slate-100 w-full py-1 rounded-md border-2 border-slate-300 hover:border-slate-200 duration-150">
        <span className="text-xl">+</span> Write new article
      </button>
      <div className="border-b-2 flex-1 flex flex-col my-2">
        <div className="p-2 rounded-md duration-150 hover:bg-slate-100">Hello</div>
        <div className="p-2 rounded-md duration-150 bg-transparent hover:bg-slate-100">Hello</div>
      </div>
      <div className="py-2">Jay Pokale</div>
    </aside>
  );
};

export default Sidenav;
