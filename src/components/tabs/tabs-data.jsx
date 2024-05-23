import Tabs from "./tabs";

export default function TabsData() {
  const tabs = [
    {
      label: "home",
      content: <div>this is home page.. u can explain about urself..</div>,
    },
    {
      label: "project",
      content: <div>this is project page.. u can display ur projects..</div>,
    },
    {
      label: "contact",
      content: <div>this is contact page.. u can contact us using this page..</div>,
    },
  ];
  function handleOnchangeEvent(currentTab) {
    console.log(currentTab)
  }

  return (
    <div>
      <div>
        <Tabs tabData={tabs} onChange={handleOnchangeEvent} />
      </div>
    </div>
  );
}
