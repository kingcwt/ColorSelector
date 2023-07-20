import {
  defineComponent,
  PropType,
  toRefs,
  computed,
  ref,
  watchEffect,
  Ref,
} from "vue";
import { debounce } from "lodash";
import "./index.css";
import { Popover, Switch } from "ant-design-vue";
import ColorPanel from "./ColorPanel";
import InputNumberPlus from "./InputNumberPlus";

const seedRange: Record<string, { min: number; max: number }> = {
  borderRadius: {
    min: 0,
    max: 16,
  },
  fontSize: {
    min: 12,
    max: 32,
  },
  sizeStep: {
    min: 0,
    max: 16,
  },
  sizeUnit: {
    min: 0,
    max: 16,
  },
};

const SeedTokenPreview = defineComponent({
  name: "SeedTokenPreview",
  props: {
    color: { type: Object as PropType<Ref<string>>, required: true },
    handleChangeColor: {
      type: Object as PropType<Ref<Function | undefined>>,
      required: false,
    },
    theme: { type: Object as PropType<any> },
    tokenName: { type: String, required: true },
    disabled: { type: Boolean },
  },
  setup(props) {
    const { handleChangeColor, color, theme, tokenName, disabled } =
      toRefs(props);

    const tokenPath = computed(() => ["token", tokenName.value]);
    const tokenValue = ref(color);

    const debouncedOnChange = debounce((newValue: number | string) => {
      theme.value.onThemeChange?.(
        {
          ...theme.value.config,
          token: {
            ...theme.value.config.token,
            [tokenName.value]: newValue,
          },
        },
        ["token", tokenName.value]
      );
    }, 500);

    const handleChange = (value: any) => {
      // tokenValue.value = value;
      debouncedOnChange(value);
      if (
        handleChangeColor &&
        handleChangeColor.value &&
        typeof handleChangeColor.value === "function"
      ) {
        (handleChangeColor.value as any)(value);
      }
      // if(handleChangeColor&&handleChangeColor.value){
      //   handleChangeColor.value?.(value);
      // }
    };

    watchEffect(() => {
      // tokenValue.value = getSeedValue(theme.value.config, tokenName.value);
    });

    const showReset = computed(() =>
      theme.value.getCanReset?.(tokenPath.value)
    );

    return () => {
      return (
        <div class="token-panel-pro-token-collapse-seed-block-sample">
          {/* <div class="token-panel-pro-token-collapse-seed-block-sample-theme">
            <Typography.Link
              style={{
                fontSize: "12px",
                padding: 0,
                opacity: showReset.value ? 1 : 0,
                pointerEvents: showReset.value ? "auto" : "none",
              }}
              onClick={() => theme.value.onReset?.(tokenPath.value)}
            >
              重置
            </Typography.Link>
          </div> */}
          {tokenName.value.startsWith("color") && (
            <Popover
              trigger="click"
              placement="bottomRight"
              overlayInnerStyle={{ padding: 0 }}
              v-slots={{
                content: () => (
                  <ColorPanel
                    color={tokenValue.value}
                    onChange={handleChange}
                    style={{ border: "none" }}
                  />
                ),
              }}
            >
              <div
                class="token-panel-pro-token-collapse-seed-block-sample-card"
                style={{ pointerEvents: disabled.value ? "none" : "auto" }}
              >
                <div
                  style={{
                    backgroundColor: tokenValue.value,
                    width: "48px",
                    height: "32px",
                    borderRadius: "4px",
                    marginRight: "14px",
                    boxShadow:
                      "0 2px 3px -1px rgba(0,0,0,0.20), inset 0 0 0 1px rgba(0,0,0,0.09)",
                  }}
                />
                <div class="token-panel-pro-token-collapse-seed-block-sample-card-value">
                  {tokenValue.value}
                </div>
              </div>
            </Popover>
          )}
          {["fontSize", "sizeUnit", "sizeStep", "borderRadius"].includes(
            tokenName.value
          ) && (
            <InputNumberPlus
              value={tokenValue.value as unknown as number}
              onChange={handleChange}
              min={seedRange[tokenName.value].min}
              max={seedRange[tokenName.value].max}
            />
          )}
          {tokenName.value === "wireframe" && (
            <Switch checked={tokenValue.value} onChange={handleChange} />
          )}
        </div>
      );
    };
  },
});

export default SeedTokenPreview;
