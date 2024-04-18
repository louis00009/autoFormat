import React, { useState } from "react";

const TabComponent = ({ formats }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div>
        {formats.map((format, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={activeTab === index ? "active" : ""}
          >
            {format.name}
          </button>
        ))}
      </div>
      <div>{formats[activeTab].content}</div>
    </div>
  );
};

export default TabComponent;
