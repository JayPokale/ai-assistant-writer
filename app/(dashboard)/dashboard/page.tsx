import SplineAnimation from "@/components/splineAnimation";

const Dashboard = () => {
  return (
    <main className="flex-1 flex flex-col gap-4 justify-center items-center relative">
      <div className="z-10">
        <h2 className="max-w-lg font-semibold text-3xl text-center text-slate-700">
          Welcome to our incredible
        </h2>
        <h1 className="font-semibold text-7xl text-center">
          AI Blog <span className="text-purple-600 font-bold">assistant</span>{" "}
        </h1>
      </div>
      <div className="absolute">
        <SplineAnimation />
      </div>
    </main>
  );
};

export default Dashboard;
