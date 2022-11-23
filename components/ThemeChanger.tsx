// import { useEffect, useState } from "react";
// import { useTheme } from "next-themes";

// const themes = [
//   { name: "Light" },
//   { name: "Dark" },
//   // { name: "Emerald" },
//   // { name: "Pink" },
// ];

// const ThemeChanger = () => {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   // When mounted on client, now we can show the UI
//   useEffect(() => setMounted(true), []);

//   if (!mounted) {
//     return null;
//   }

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <button
//       id="theme-toggle"
//       type="button"
//       onClick={toggleTheme}
//       className="w-10 h-10 bg-th-background flex items-center justify-center rounded-lg text-sm p-2.5 transition-colors"
//     >
//       <svg
//         id="theme-toggle-dark-icon"
//         className={`w-5 h-5 ${theme === "dark" ? "hidden" : ""}`}
//         fill="currentColor"
//         viewBox="0 0 20 20"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
//       </svg>
//       <svg
//         id="theme-toggle-light-icon"
//         className={`w-5 h-5 ${theme === "dark" ? "" : "hidden"}`}
//         fill="currentColor"
//         viewBox="0 0 20 20"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
//           fill-rule="evenodd"
//           clip-rule="evenodd"
//         ></path>
//       </svg>
//     </button>
//   );
// };

// export default ThemeChanger;

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const themes = [{ name: "Light" }, { name: "Dark" }, { name: "Emerald" }, { name: "Pink" }];

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="p-8 flex justify-between items-center font-bold text-xl bg-th-background-secondary text-th-primary-dark">
      <span>
        The current theme is: <strong>{theme}</strong>
      </span>
      <div>
        <label htmlFor="theme-select" className="sr-only mr-2">
          Choose theme:
        </label>
        <select
          name="theme"
          id="theme-select"
          className="bg-white text-gray-800 border-gray-800 border py-1 px-3"
          onChange={(e) => setTheme(e.currentTarget.value)}
          value={theme}
        >
          <option value="">Select Theme</option>
          {themes.map((t) => (
            <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ThemeChanger;
