import { useState } from "react";

export default function Tabs({ tabData, onChange }) {
  const [currentTab, setCurrentTab] = useState(0);
  function handleOnclick(getCurrentTabIndex) {
    setCurrentTab(getCurrentTabIndex);
    onChange(getCurrentTabIndex);
    //console.log(getCurrentTabIndex);
  }
  return (
    <div className="text-center bg-lime-900 text-green-200 w-screen h-screen capitalize
    m-3 p-3">
      <div className="flex justify-center m-3 p-3">
        {tabData.map((tabItem, index) => (
          <div className="m-3 p-3">
          <div className={`${currentTab === index ? 'active' : ""}`}
          onClick={()=>{handleOnclick(index)}} key={tabItem.label}>
            <span className=" text-green-100 hover:text-green-950 transition-transform:0.5">{tabItem.label}</span>
          </div>
          </div>
        ))}
      </div>
      <div className=" text-xl font-bold top-3">{tabData[currentTab] && tabData[currentTab].content}</div>
    </div>
  );
}
