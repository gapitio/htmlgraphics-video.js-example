import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import livereload from "rollup-plugin-livereload";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import html from "rollup-plugin-html";
import copy from "rollup-plugin-copy-watch";

const OUT_DIR = "public/build";

// eslint-disable-next-line import/no-default-export
export default [
  {
    input: "src/devSite/index.ts",
    output: {
      dir: OUT_DIR,
      format: "iife",
      sourcemap: true,
    },
    watch: {
      clearScreen: false,
    },
    plugins: [
      html({
        include: "src/html.html",
      }),
      json({
        preferConst: true,
      }),
      typescript({
        check: false,
        tsconfig: "./tsconfig.json",
      }),
      nodeResolve({
        browser: true,
      }),
      livereload(),
      copy({
        watch: "src/rootCSS.css",
        targets: [{ src: "src/rootCSS.css", dest: OUT_DIR }],
      }),
    ],
  },
  {
    input: "src/onInit.ts",
    output: {
      dir: OUT_DIR,
      format: "iife",
      sourcemap: true,
    },
    plugins: [
      postcss({
        extract: "style.css",
      }),
      typescript({
        check: false,
      }),
      nodeResolve({
        browser: true,
      }),
      commonjs(),
    ],
  },
  {
    input: "src/onRender.ts",
    output: {
      dir: OUT_DIR,
      format: "iife",
      sourcemap: true,
    },
    plugins: [
      typescript({
        check: false,
      }),
      nodeResolve({
        browser: true,
      }),
      commonjs(),
    ],
  },
];
