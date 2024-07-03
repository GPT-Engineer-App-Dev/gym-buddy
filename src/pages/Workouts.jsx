const Workouts = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Workouts</h1>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add New Workout</button>
        <div className="mt-4">
          <div className="border p-4 rounded mb-4">
            <h2 className="text-xl font-semibold">Morning Run</h2>
            <p>Duration: 30 mins</p>
            <p>Calories Burned: 300</p>
          </div>
          <div className="border p-4 rounded mb-4">
            <h2 className="text-xl font-semibold">Yoga</h2>
            <p>Duration: 45 mins</p>
            <p>Calories Burned: 200</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;