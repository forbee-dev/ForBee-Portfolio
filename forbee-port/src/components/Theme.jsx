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

  const [selectedTheme, setSelectedTheme] = useState("dark");

  useEffect(() => {
    themeChange(false);
  }, []);

  useEffect(() => {
    themeChange(selectedTheme);
  }, [selectedTheme, themeOptions]);

  const handleRandomClick = () => {
    const randomIndex = Math.floor(Math.random() * themeOptions.length);
    const newTheme = themeOptions[randomIndex];
    setSelectedTheme(newTheme);
    themeChange(newTheme);
  };

  return (
    <div className="flex float-right m-5">
      <button
        onClick={handleRandomClick}
        className="btn btn-xs"
        data-toggle-theme={selectedTheme}
        data-act-class="ACTIVECLASS"
      >
        Do or do not, there is no try!
      </button>
    </div>
  );
};

export default Theme;
