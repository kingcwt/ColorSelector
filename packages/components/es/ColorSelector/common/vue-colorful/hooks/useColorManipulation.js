import { ref, watch } from "vue";
import { equalColorObjects } from "../utils/compare.js";
import { useEventCallback } from "./useEventCallback.js";
function useColorManipulation(colorModel, color, onChange) {
  const onChangeCallback = useEventCallback(onChange);
  const hsva = ref(colorModel.value.toHsva(color.value));
  const cache = ref({ color, hsva: hsva.value });
  watch(color, (val) => {
    if (!colorModel.value.equal(val, cache.value.color)) {
      const newHsva = colorModel.value.toHsva(val);
      cache.value = { hsva: newHsva, color: val };
      hsva.value = newHsva;
    }
  });
  watch(colorModel, (val) => {
    if (!val.equal(color.value, cache.value.color)) {
      const newHsva = val.toHsva(color.value);
      cache.value = { hsva: newHsva, color: color.value };
      hsva.value = newHsva;
    }
    let newColor;
    if (!equalColorObjects(hsva.value, cache.value.hsva) && !val.equal(newColor = val.fromHsva(hsva.value), cache.value.color)) {
      cache.value = { hsva: hsva.value, color: newColor };
      onChangeCallback(newColor);
    }
  });
  watch(hsva, (val) => {
    let newColor;
    if (!equalColorObjects(val, cache.value.hsva) && !colorModel.value.equal(newColor = colorModel.value.fromHsva(val), cache.value.color)) {
      cache.value = { hsva: val, color: newColor };
      onChangeCallback(newColor);
    }
  });
  const handleChange = (params) => {
    hsva.value = Object.assign({}, hsva.value, params);
  };
  return [hsva, handleChange];
}
export {
  useColorManipulation
};
