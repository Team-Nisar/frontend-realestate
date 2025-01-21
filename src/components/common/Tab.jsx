import React from "react";

const Tab = ({ tabData, field, setField }) => {
  return (
    <div className="flex bg-rich-purple-50 p-1 gap-x-1 mt-7 mb-5 rounded-full max-w-max">
      {tabData.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setField(tab.type)}
          className={`${
            field === tab.type
              ? "bg-rich-purple-100 text-white"
              : "bg-transparent text-dark-blue"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          {tab?.tabName}
        </button>
      ))}
    </div>
  );
};

export default Tab;
