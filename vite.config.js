import { defineConfig } from "vite"

export default defineConfig({
    base: "/cyberpunk-security-portfolio/",
    build: {
        outDir: "docs",
        emptyOutDir: true
    }
})