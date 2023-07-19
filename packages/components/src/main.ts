import type { App, Plugin } from "vue";
import CustomColorSelector from "./ColorSelector/index.tsx";

type SFCWithInstall<T> = T & Plugin;

const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    //注册组件
    app.component((comp as any).name, comp as any);
  };
  return comp as SFCWithInstall<T>;
};

const ColorSelector = withInstall(CustomColorSelector);
export default ColorSelector;
