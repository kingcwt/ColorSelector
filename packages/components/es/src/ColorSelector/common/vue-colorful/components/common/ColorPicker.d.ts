import type { PropType } from 'vue';
import type { ColorModel, ColorPickerBaseProps, AnyColor } from '../../types';
export interface ColorPickerProps<T extends AnyColor> extends Partial<ColorPickerBaseProps<T>> {
    colorModel: ColorModel<T>;
}
export declare const ColorPicker: import("vue").DefineComponent<{
    colorModel: {
        type: PropType<ColorModel<AnyColor>>;
    };
    color: {
        type: PropType<AnyColor>;
    };
    onChange: {
        type: PropType<(newColor: AnyColor) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    colorModel: {
        type: PropType<ColorModel<AnyColor>>;
    };
    color: {
        type: PropType<AnyColor>;
    };
    onChange: {
        type: PropType<(newColor: AnyColor) => void>;
    };
}>>, {}, {}>;
