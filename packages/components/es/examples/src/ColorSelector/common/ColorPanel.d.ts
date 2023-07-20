import type { PropType } from 'vue';
import tinycolor from 'tinycolor2';
export type HexColorInputProps = {
    value: string;
    onChange?: (value: string) => void;
    alpha?: boolean;
};
type RgbaColor = tinycolor.ColorFormats.RGBA;
export type RgbColorInputProps = {
    value?: RgbaColor;
    onChange?: (value: RgbaColor) => void;
    alpha?: boolean;
};
export type ColorPanelProps = {
    color: string;
    onChange: (color: string) => void;
    alpha?: boolean;
};
declare const ColorPanel: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
    };
    onChange: {
        type: PropType<(color: string) => void>;
    };
    alpha: {
        type: BooleanConstructor;
    };
}, () => import("ant-design-vue/es/_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
    };
    onChange: {
        type: PropType<(color: string) => void>;
    };
    alpha: {
        type: BooleanConstructor;
    };
}>>, {
    alpha: boolean;
}, {}>;
export default ColorPanel;
