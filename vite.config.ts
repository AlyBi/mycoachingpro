import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/mycoachingpro/", // Remplace 'mycoachingpro' par le nom de ton dépôt GitHub
});
