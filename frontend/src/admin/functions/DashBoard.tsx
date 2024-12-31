export default function DashBoard() {
    return (
      <main className="p-6 flex-1 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded-md">
            <h3 className="text-xl">Total Users</h3>
            <p className="text-3xl font-bold">1200</p>
          </div>
          <div className="bg-white p-4 shadow rounded-md">
            <h3 className="text-xl">Total Revenue</h3>
            <p className="text-3xl font-bold">$15,000</p>
          </div>
          <div className="bg-white p-4 shadow rounded-md">
            <h3 className="text-xl">Active Orders</h3>
            <p className="text-3xl font-bold">340</p>
          </div>
        </div>
      </main>
    );
}