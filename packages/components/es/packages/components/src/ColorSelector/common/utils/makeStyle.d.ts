import type { CSSInterpolation } from 'ant-design-vue/es/_util/cssinjs';
import type { GlobalToken } from 'ant-design-vue/es/theme/interface';
import type { UseComponentStyleResult } from 'ant-design-vue/es/theme/internal';
declare const makeStyle: (path: string, styleFn: (token: GlobalToken & {
    rootCls: string;
}) => CSSInterpolation) => () => UseComponentStyleResult;
export default makeStyle;
