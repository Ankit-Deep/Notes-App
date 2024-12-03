import React, { useEffect, useState } from "react";
import { useTheme } from "../../contexts/Theme/theme";

function Header() {
  // useTheme is a custom hook that I created
  const { themeMode, lightTheme, darkTheme } = useTheme();

  // State for the themes class (Dark or light)
  const [currTheme, setCurrTheme] = useState("fa-sun");

  const changeTheme = (e) => {
    console.log("show");
    
    if (e.target.classList[1] === "fa-sun") {
      localStorage.setItem("themeClass", "fa-moon");
      setCurrTheme("fa-moon");
      darkTheme();
    } else {
      localStorage.setItem("themeClass", "fa-sun");
      setCurrTheme("fa-sun");
      lightTheme();
    }
  };

  useEffect(() => {
    const currentThemeClass = localStorage.getItem("themeClass") || "fa-sun";
    setCurrTheme(currentThemeClass);
  }, []);

  return (
    <>
      <section className="bg-purple-800 dark:bg-gray-900 text-white text-xl sm:text-2xl flex justify-between sm:px-6 px-4 py-4 sm:py-3 ">
        <div className=" sm:w-2/12  text-center flex  items-center">
          <h1>📝 Notes App</h1>
        </div>

        <div className="">
          <i
            className={`fa-solid ${currTheme} cursor-pointer`}
            onClick={(e) => changeTheme(e)}
          ></i>
        </div>
      </section>
    </>
  );
}

export default Header;
