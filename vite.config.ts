import { defineConfig } from "vite";
import * as react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import * as fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tsconfigRaw = JSON.parse(fs.readFileSync("./tsconfig.app.json", "utf-8"));

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    esbuild: {
        tsconfigRaw,
    },
});
