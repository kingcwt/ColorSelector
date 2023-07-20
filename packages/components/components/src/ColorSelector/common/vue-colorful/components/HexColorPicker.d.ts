import type { PropType } from 'vue';
import type { ColorModel } from '../types';
export declare const HexColorPicker: import("vue").DefineComponent<{
    colorModel: {
        type: PropType<ColorModel<string>>;
    };
    color: {
        type: PropType<string>;
    };
    onChange: {
        type: PropType<(newColor: string) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    colorModel: {
        type: PropType<ColorModel<string>>;
    };
    color: {
        type: PropType<string>;
    };
    onChange: {
        type: PropType<(newColor: string) => void>;
    };
}>>, {}, {}>;
