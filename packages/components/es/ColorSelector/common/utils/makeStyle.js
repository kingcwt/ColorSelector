import useStyleRegister from "../../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/_util/cssinjs/hooks/useStyleRegister.js";
import "../../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/theme/internal.js";
import { computed } from "vue";
import useConfigInject from "../../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/config-provider/hooks/useConfigInject.js";
import theme from "../../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/theme/index.js";
import { merge } from "../../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/theme/util/statistic.js";
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
      const mergedToken = merge(token.value, {
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
