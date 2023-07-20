import type { PropType } from 'vue';
export type InputNumberPlusProps = {
    value?: number;
    onChange?: (value: number | null) => void;
    min?: number;
    max?: number;
};
declare const InputNumberPlus: import("vue").DefineComponent<{
    value: {
        type: NumberConstructor;
    };
    onChange: {
        type: PropType<(value: number | null) => void>;
    };
    min: {
        type: NumberConstructor;
    };
    max: {
        type: NumberConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: NumberConstructor;
    };
    onChange: {
        type: PropType<(value: number | null) => void>;
    };
    min: {
        type: NumberConstructor;
    };
    max: {
        type: NumberConstructor;
    };
}>>, {}, {}>;
export default InputNumberPlus;
