import type { PropType } from 'vue';
import type { HsvaColor } from '../../types';
export interface AlphaProps {
    hsva: HsvaColor;
    onChange: (newAlpha: {
        a: number;
    }) => void;
}
export declare const Alpha: import("vue").DefineComponent<{
    hsva: {
        type: PropType<HsvaColor>;
    };
    onChange: {
        type: PropType<(newAlpha: {
            a: number;
        }) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    hsva: {
        type: PropType<HsvaColor>;
    };
    onChange: {
        type: PropType<(newAlpha: {
            a: number;
        }) => void>;
    };
}>>, {}, {}>;
