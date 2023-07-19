import { ExtractPropTypes } from "vue";

export const colorSelectorProps = {
  color: {
    type: String,
  },
  handleChangeColor: {
    type: (str: string) => {},
  },
};

export type ColorSelectorProps = ExtractPropTypes<typeof colorSelectorProps>;
