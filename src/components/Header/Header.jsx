import React, { useState } from "react";
import { useTheme } from "../../contexts/Theme/theme";


function Header() {
  // useTheme is a custom hook that I created
  const {themeMode, lightTheme, darkTheme} = useTheme();

  const changeTheme = (e) =>  {
    if (e.target.classList[1] == "fa-sun") {
      e.target.classList.replace("fa-sun", "fa-moon");
      darkTheme();
    } else {
      e.target.classList.replace("fa-moon", "fa-sun");
      lightTheme();
    }
  }

  return (
    <>
      <section className="bg-purple-800 dark:bg-gray-900 text-white text-xl sm:text-2xl flex justify-between sm:px-6 px-4 py-4 sm:py-3 ">
        <div className="  sm:w-2/12  text-center flex  items-center">
          <h1>📝 Notes App</h1>
        </div>

        <div className=" ">
          <i
            className="fa-solid fa-sun cursor-pointer"
            onClick={changeTheme}
          ></i>
        </div>

      </section>
    </>
  );
}

export default Header;
