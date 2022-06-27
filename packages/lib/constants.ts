export const LANDING_URL =
  process.env.NODE_ENV === "production"
    ? "https://splashsaver.com"
    : "http://localhost:3000";

export const WEB_URL =
  process.env.NODE_ENV === "production"
    ? "https://app.splashsaver.com"
    : "http://localhost:3001";
