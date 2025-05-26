import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: "/", // Set the base path to root
=======
  base: '/',
>>>>>>> ba31c421ce4ddcfbec98fb3caede130c1f0fcb9e
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
