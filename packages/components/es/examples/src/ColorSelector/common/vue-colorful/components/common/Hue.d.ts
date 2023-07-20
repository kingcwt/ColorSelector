import type { PropType } from 'vue';
export interface Props {
    className?: string;
    hue: number;
    onChange: (newHue: {
        h: number;
    }) => void;
}
export declare const Hue: import("vue").DefineComponent<{
    hue: {
        type: NumberConstructor;
    };
    onChange: {
        type: PropType<(newHue: {
            h: number;
        }) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    hue: {
        type: NumberConstructor;
    };
    onChange: {
        type: PropType<(newHue: {
            h: number;
        }) => void>;
    };
}>>, {}, {}>;
