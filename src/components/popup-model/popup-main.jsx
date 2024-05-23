import { useState } from "react";
import PopUp from "./popup";

export default function PopUpMain() {
  const [popUp, setPopUp] = useState(false);
  function handlePopUp() {
    setPopUp(!popUp);
  }
  return (
    <div>
      <div className="text-center">
        <button
          onClick={() => {
            handlePopUp();
          }}
          className="capitalize bg-black text-cyan-500 m-3 p-2"
        >
          model popup{" "}
        </button>
        {popUp && (
          <PopUp
            id="Unique"
            header="customised header"
            body=""
            footor="customised footer"
          />
        )}
      </div>
    </div>
  );
}
