import { useState } from "react";
import Users from "./Users";
import AddUser from "./AddUsers";

export default function Tabs(){
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["List Users", "Add User"];

  const content = [
    <Users/>,<AddUser/>,
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4">{content[activeTab]}</div>
    </div>
  );
};

