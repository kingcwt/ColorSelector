export interface PointerProps {
    top?: number;
    left: number;
    color: string;
}
export declare const Pointer: import("vue").DefineComponent<{
    top: {
        type: NumberConstructor;
        default: number;
    };
    left: {
        type: NumberConstructor;
    };
    color: {
        type: StringConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    top: {
        type: NumberConstructor;
        default: number;
    };
    left: {
        type: NumberConstructor;
    };
    color: {
        type: StringConstructor;
    };
}>>, {
    top: number;
}, {}>;
