import { PropType, Ref } from "vue";
declare const SeedTokenPreview: import("vue").DefineComponent<{
    color: {
        type: PropType<Ref<string>>;
        required: true;
    };
    handleChangeColor: {
        type: PropType<Ref<Function | undefined>>;
        required: false;
    };
    theme: {
        type: PropType<any>;
    };
    tokenName: {
        type: StringConstructor;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: PropType<Ref<string>>;
        required: true;
    };
    handleChangeColor: {
        type: PropType<Ref<Function | undefined>>;
        required: false;
    };
    theme: {
        type: PropType<any>;
    };
    tokenName: {
        type: StringConstructor;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
    };
}>>, {
    disabled: boolean;
}, {}>;
export default SeedTokenPreview;
