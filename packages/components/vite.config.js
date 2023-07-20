import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "modules",
    outDir: "es",
    minify: false,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue和.less文件
      external: ["vue", /\.less/, "lodash",/node_modules/,/examples/],
      input: ["./src/index.ts"],
      output: [
        {
          dir: "es",
          format: "es",
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          preserveModulesRoot: "src",
        },
        {
          format: "cjs",
          //不用打包成.mjs
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: "lib",
          preserveModulesRoot: "src",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
      formats: ["es","cjs"],
    },
  },
  plugins: [
    vue(),
    vueJsx({
      mergeProps: false,
      enableObjectSlots: false,
    }),
      dts({
        tsconfigPath:"../../tsconfig.json"
    }),
      dts({
        outputDir: "lib",
        tsconfigPath:"../../tsconfig.json"
    }),
    dts(),
  ],
});
