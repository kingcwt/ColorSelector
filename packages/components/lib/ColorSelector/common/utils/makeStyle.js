"use strict";
const useStyleRegister = require("../../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/_util/cssinjs/hooks/useStyleRegister.js");
require("../../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/theme/internal.js");
const vue = require("vue");
const useConfigInject = require("../../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/config-provider/hooks/useConfigInject.js");
const index = require("../../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/theme/index.js");
const statistic = require("../../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/theme/util/statistic.js");
const makeStyle = (path, styleFn) => {
  return () => {
    const {
      theme,
      token,
      hashId
    } = index.useToken();
    const {
      getPrefixCls
    } = useConfigInject("", {});
    const rootCls = getPrefixCls();
    const componentInfo = vue.computed(() => {
      return {
        theme: theme.value,
        token: token.value,
        hashId: hashId.value,
        path: [path]
      };
    });
    return [useStyleRegister.default(componentInfo, () => {
      const mergedToken = statistic.merge(token.value, {
        rootCls: `.${rootCls}`
      });
      const styleInterpolation = styleFn(mergedToken);
      return [styleInterpolation];
    }), hashId];
  };
};
module.exports = makeStyle;
