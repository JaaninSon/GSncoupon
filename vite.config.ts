import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react";
import { resolve } from "path";

const react = (reactPlugin as any).default || reactPlugin;

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
});
