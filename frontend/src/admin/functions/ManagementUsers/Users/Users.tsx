// import { Timestamp } from "firebase/firestore";
import HandleListUser from "./Controllers/HandleListUser";

export default function Users() {
  const {
    currentData,
    currentPage,
    totalPages,
    rowsPerPage,
    handleNext,
    handlePrev,
  } = HandleListUser();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">List Users</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 absolute top-3 left-3 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 4a8 8 0 1 0 8 8A8 8 0 0 0 8 4Zm11 11-4.35-4.35"
            />
          </svg>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 bg-white rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b border-gray-200 text-left">
                NO
              </th>
              {/* <th className="py-2 px-4 border-b border-gray-200 text-left">
                Name
              </th> */}
              <th className="py-2 px-4 border-b border-gray-200 text-left">
                Email
              </th>
              {/* <th className="py-2 px-4 border-b border-gray-200 text-left">
                Role
              </th> */}
              <th className="py-2 px-4 border-b border-gray-200 text-left">
                Password
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={item.ID}>
                <td className="py-2 px-4 border-b border-gray-200">
                  {(currentPage - 1) * rowsPerPage + index + 1}
                </td>
                {/* <td className="py-2 px-4 border-b border-gray-200">
                  {item.Name}
                </td> */}
                <td className="py-2 px-4 border-b border-gray-200">
                  {item.Email}
                </td>
                {/* <td className="py-2 px-4 border-b border-gray-200">
                  {item.Roles}
                </td> */}
                <td className="py-2 px-4 border-b border-gray-200">
                  {item.Password}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {item.Date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrev}
          className={`px-4 py-2 rounded-lg bg-blue-500 text-white ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          className={`px-4 py-2 rounded-lg bg-blue-500 text-white ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}