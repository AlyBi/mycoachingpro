import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/mycoachingpro/", // Remplace 'my-react-app' par le nom de ton dépôt GitHub
});
