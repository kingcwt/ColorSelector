import { defineComponent, toRefs } from "vue";
import SeedTokenPreview from "./common/SeedTokenPreview";

const ColorSelector = defineComponent({
  name: "ColorSelector",
  props: {
    color: { type: String, required: true },
    handleChangeColor: { type: Function, required: false },
  },
  setup(props) {
    const { color, handleChangeColor } = toRefs(props);

    return () => {
      return (
        <SeedTokenPreview
          color={color}
          handleChangeColor={handleChangeColor}
          theme={{ config: {} }}
          tokenName="colorPrimary"
        />
      );
    };
  },
});


export default ColorSelector;
