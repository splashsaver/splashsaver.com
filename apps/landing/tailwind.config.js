const base = require("@splashsaver/config/tailwind-preset");
/** @type {import('tailwindcss').Config} */
module.exports = {
  ...base,
  content: [...base.content, "../../packages/ui/**/*.{js,ts,jsx,tsx}"],
};
