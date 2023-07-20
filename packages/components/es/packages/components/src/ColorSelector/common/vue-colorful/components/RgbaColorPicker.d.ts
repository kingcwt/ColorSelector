import type { PropType } from 'vue';
import type { ColorModel, RgbaColor } from '../types';
export declare const RgbaColorPicker: import("vue").DefineComponent<{
    colorModel: {
        type: PropType<ColorModel<RgbaColor>>;
    };
    color: {
        type: PropType<RgbaColor>;
    };
    onChange: {
        type: PropType<(newColor: RgbaColor) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    colorModel: {
        type: PropType<ColorModel<RgbaColor>>;
    };
    color: {
        type: PropType<RgbaColor>;
    };
    onChange: {
        type: PropType<(newColor: RgbaColor) => void>;
    };
}>>, {}, {}>;
