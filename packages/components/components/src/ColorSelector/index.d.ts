declare const ColorSelector: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        required: true;
    };
    handleChangeColor: {
        type: FunctionConstructor;
        required: false;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        required: true;
    };
    handleChangeColor: {
        type: FunctionConstructor;
        required: false;
    };
}>>, {}, {}>;
export default ColorSelector;
