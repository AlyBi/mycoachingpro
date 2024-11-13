import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://alybi.github.io/mycoachingpro/", // Remplace 'my-react-app' par le nom de ton dépôt GitHub
});
