import type { PropType } from 'vue';
export interface Interaction {
    left: number;
    top: number;
}
export interface InteractiveProps {
    onMove: (interaction: Interaction) => void;
    onKey: (offset: Interaction) => void;
}
export declare const Interactive: import("vue").DefineComponent<{
    onMove: {
        type: PropType<(interaction: Interaction) => void>;
    };
    onKey: {
        type: PropType<(offset: Interaction) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    onMove: {
        type: PropType<(interaction: Interaction) => void>;
    };
    onKey: {
        type: PropType<(offset: Interaction) => void>;
    };
}>>, {}, {}>;
