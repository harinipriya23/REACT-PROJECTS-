import { useEffect, useState } from "react";
import useLocalStorage from "./localstorage";

export default function Theme() {
  const [theme, setTheme] = useLocalStorage('theme',"dark");

  useEffect (()=>{
    if (theme) {
        document.documentElement.classList.add("dark")
    }else{
        document.documentElement.classList.remove("dark")
    }
  },[theme])
  console.log(theme);

  return (
    <div>
      <div className="root light-mode dark:bg-black dark:text-white">
        <h1 className="heading-light  dark:bg-black dark:text-white">dark mode and light mode theme</h1>
        <p>this is followed with {theme === true ? 'dark' : 'light'} mode theme !!</p>
        <button
          onClick={() => setTheme(!theme)}
          className="light-btn dark:bg-slate-200 dark:text-black ">
          change theme
        </button>
      </div>
    </div>
  );
}
