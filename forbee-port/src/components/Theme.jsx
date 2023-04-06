import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

const Theme = () => {
  const themeOptions = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  useEffect(() => {
    themeChange(false);
  }, []);

  const [selectedTheme, setSelectedTheme] = useState("");

  const handleThemeButtonClick = () => {
    setSelectedTheme(selectedTheme);
  };

  const handleResetClick = () => {
    setSelectedTheme("dark");
  };

  /*const handleNexClick = () => {
    setSelectedTheme((prevTheme) => {
      const currentIndex = themeOptions.indexOf(prevTheme);
      const nextIndex = (currentIndex + 1) % themeOptions.length;
      return themeOptions[nextIndex];
    });
  };*/

  return (
    <div className="flex float-right m-5 ">
      <label
        htmlFor="my-modal-4"
        className="btn "
      >
        FUN
      </label>

      <input
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle"
      />

      <label
        htmlFor="my-modal-4"
        className="modal cursor-pointer"
      >
        <div className="modal-box">
          <div className="modal-content ">
            <h2 className="text-xl text-center mb-5">Select Theme</h2>
            <div className="theme-buttons grid grid-cols-5 ">
              {themeOptions.map((theme) => (
                <button
                  key={theme}
                  className="btn btn-xs m-1 btn-active btn-accent"
                  onClick={() => handleThemeButtonClick(theme)}
                  data-toggle-theme={theme}
                  data-act-class="ACTIVECLASS"
                >
                  {theme}
                </button>
              ))}
              <div className="grid place-items-center mt-10 ">
                <button
                  key="reset"
                  className="btn btn-xs mr-1 "
                  onClick={handleResetClick}
                  data-toggle-theme="dark"
                  data-act-class="ACTIVECLASS"
                >
                  reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Theme;
