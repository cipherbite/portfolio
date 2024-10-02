import React, { createContext, useContext, useState } from "react";

// Create the context
const AnalyticsContext = createContext();

// Create a provider component
export const AnalyticsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  return (
    <AnalyticsContext.Provider value={{ data, addData }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Custom hook to use the AnalyticsContext
export const useAnalytics = () => {
  return useContext(AnalyticsContext);
};

// Example component using the context
const AnalyticsComponent = () => {
  const { data, addData } = useAnalytics();

  const handleAddData = () => {
    const newData = { id: data.length + 1, value: Math.random() * 100 };
    addData(newData);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Analytics Data</h2>
      <ul className="mb-4">
        {data.map((item) => (
          <li key={item.id} className="mb-2">
            ID: {item.id}, Value: {item.value.toFixed(2)}
          </li>
        ))}
      </ul>
      <button
        onClick={handleAddData}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Data
      </button>
    </div>
  );
};

export default AnalyticsComponent;
