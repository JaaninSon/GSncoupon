import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react";
import { resolve } from "path";

const reactPlugin = react.default ?? react;

export default defineConfig({
    plugins: [reactPlugin()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
});
