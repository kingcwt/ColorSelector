import type { PropType } from 'vue';
import type { ColorInputBaseProps } from '../../types';
export interface ColorInputProps extends ColorInputBaseProps {
    /** Blocks typing invalid characters and limits string length */
    escape: (value: string) => string;
    /** Checks that value is valid color string */
    validate: (value: string) => boolean;
    /** Processes value before displaying it in the input */
    format?: (value: string) => string;
    /** Processes value before sending it in `onChange` */
    process?: (value: string) => string;
}
export declare const ColorInput: import("vue").DefineComponent<{
    color: {
        type: PropType<string>;
        default: string;
    };
    onChange: {
        type: PropType<(newColor: string) => void>;
    };
    onBlur: {
        type: PropType<(newColor: string) => void>;
    };
    escape: {
        type: PropType<(value: string) => string>;
    };
    validate: {
        type: PropType<(value: string) => boolean>;
    };
    format: {
        type: PropType<(value: string) => string>;
    };
    process: {
        type: PropType<(value: string) => string>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: PropType<string>;
        default: string;
    };
    onChange: {
        type: PropType<(newColor: string) => void>;
    };
    onBlur: {
        type: PropType<(newColor: string) => void>;
    };
    escape: {
        type: PropType<(value: string) => string>;
    };
    validate: {
        type: PropType<(value: string) => boolean>;
    };
    format: {
        type: PropType<(value: string) => string>;
    };
    process: {
        type: PropType<(value: string) => string>;
    };
}>>, {
    color: string;
}, {}>;
