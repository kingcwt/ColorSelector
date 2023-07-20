import { ExtractPropTypes } from "vue";
export declare const colorSelectorProps: {
    color: {
        type: StringConstructor;
    };
    handleChangeColor: {
        type: (str: string) => void;
    };
};
export type ColorSelectorProps = ExtractPropTypes<typeof colorSelectorProps>;
