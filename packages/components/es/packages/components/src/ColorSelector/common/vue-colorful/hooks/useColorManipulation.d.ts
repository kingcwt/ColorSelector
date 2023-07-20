import type { Ref } from 'vue';
import type { ColorModel, AnyColor, HsvaColor } from '../types';
export declare function useColorManipulation<T extends AnyColor>(colorModel: Ref<ColorModel<T>>, color: Ref<T>, onChange?: (color: T) => void): [Ref<HsvaColor>, (color: Partial<HsvaColor>) => void];
