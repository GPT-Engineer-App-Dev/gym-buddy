const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to Fitness Tracker</h1>
      <p>Your personal companion to track and improve your fitness journey.</p>
      <div className="mt-4">
        <a href="/workouts" className="text-blue-500 hover:underline">Go to Workouts</a>
        <br />
        <a href="/progress" className="text-blue-500 hover:underline">View Progress</a>
        <br />
        <a href="/settings" className="text-blue-500 hover:underline">Settings</a>
      </div>
    </div>
  );
};

export default Index;