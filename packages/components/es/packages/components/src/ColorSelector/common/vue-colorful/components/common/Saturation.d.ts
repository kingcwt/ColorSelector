import type { PropType } from 'vue';
import type { HsvaColor } from '../../types';
export interface SaturationProps {
    hsva: HsvaColor;
    onChange: (newColor: {
        s: number;
        v: number;
    }) => void;
}
export declare const Saturation: import("vue").DefineComponent<{
    hsva: {
        type: PropType<HsvaColor>;
    };
    onChange: {
        type: PropType<(newColor: {
            s: number;
            v: number;
        }) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    hsva: {
        type: PropType<HsvaColor>;
    };
    onChange: {
        type: PropType<(newColor: {
            s: number;
            v: number;
        }) => void>;
    };
}>>, {}, {}>;
