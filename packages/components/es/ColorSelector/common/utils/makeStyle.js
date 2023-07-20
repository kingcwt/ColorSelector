import { useStyleRegister } from "/Users/cuihongran/Desktop/ColorSelector/node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/_util/cssinjs/index.js";
import { theme } from "/Users/cuihongran/Desktop/ColorSelector/node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/index.js";
import { mergeToken } from "/Users/cuihongran/Desktop/ColorSelector/node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/theme/internal.js";
import { computed } from "vue";
import useConfigInject from "/Users/cuihongran/Desktop/ColorSelector/node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/config-provider/hooks/useConfigInject.js";
const makeStyle = (path, styleFn) => {
  return () => {
    const {
      theme: theme$1,
      token,
      hashId
    } = theme.useToken();
    const {
      getPrefixCls
    } = useConfigInject("", {});
    const rootCls = getPrefixCls();
    const componentInfo = computed(() => {
      return {
        theme: theme$1.value,
        token: token.value,
        hashId: hashId.value,
        path: [path]
      };
    });
    return [useStyleRegister(componentInfo, () => {
      const mergedToken = mergeToken(token.value, {
        rootCls: `.${rootCls}`
      });
      const styleInterpolation = styleFn(mergedToken);
      return [styleInterpolation];
    }), hashId];
  };
};
export {
  makeStyle as default
};
