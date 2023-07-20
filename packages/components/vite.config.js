import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/],
    }),
    vueJsx({
      mergeProps: false,
      enableObjectSlots: false,
    }),
    dts({
      outputDir: "lib",
      copyDtsFiles: true,
      tsConfigFilePath: './tsconfig.json',
      skipDiagnostics:false,
      logDiagnostics:true
  }),
  dts({
    outputDir: "es",
    tsConfigFilePath: './tsconfig.json'
}),

  ],
  build: {
    target: "modules",
    outDir: "es",
    minify: false,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue和.less文件
      external: ["vue", /\.less/,'lodash'],
      input: ["src/main.ts"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: "es",
          preserveModulesRoot: "src",
        },
        // {
        //   format: "cjs",
        //   //不用打包成.mjs
        //   entryFileNames: "[name].js",
        //   //让打包目录和我们目录对应
        //   preserveModules: true,
        //   //配置打包根目录
        //   dir: "lib",
        //   preserveModulesRoot: "src",
        // },
      ],
    },
    lib: {
      entry: "./index.ts",
      formats: ["es"],
    },
  },
});
