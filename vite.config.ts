import { resolve } from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Layouts from "vite-plugin-vue-layouts";
// import VueRouter from 'unplugin-vue-router/vite';
import Pages from "vite-plugin-pages";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Inspect from "vite-plugin-inspect";
// import { VueRouterAutoImports } from 'unplugin-vue-router';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "~/": `${resolve(__dirname, "src")}/`,
        },
    },
    plugins: [
        // https://github.com/posva/unplugin-vue-router
        // Must be placed before Vue()
        // VueRouter(),

        Vue(),

        // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
        Layouts(),

        // https://github.com/hannoeru/vite-plugin-pages
        Pages({
            extensions: ["vue"],
        }),

        // https://github.com/antfu/unplugin-auto-import
        AutoImport({
            imports: [
                "vue",
                "vue-router",
                // VueRouterAutoImports
            ],
            dts: "src/auto-imports.d.ts",
        }),

        // https://github.com/antfu/unplugin-vue-components
        Components({
            // allow auto load markdown components under `./src/components/`
            extensions: ["vue"],

            // allow auto import and register components used in markdown
            include: [/\.vue$/, /\.vue\?vue/],

            dts: "src/components.d.ts",
        }),

        // https://github.com/antfu/vite-plugin-inspect
        Inspect({
            // change this to enable inspect for debugging
            enabled: false,
        }),
    ],

    server: {
        fs: {
            strict: true,
        },
    },

    optimizeDeps: {
        include: ["vue", "vue-router"],
    },

    build: {
        rollupOptions: {
            input: {
                popup: resolve(__dirname, "popup.html"),
                content: resolve(__dirname, "content.html"),
            },
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`,
            },
        },
        minify: true,
    },
});
