export declare const getRelatedComponents: (token: string | string[]) => string[];
export declare const getComponentToken: (component: string) => {
    component?: Record<string, any> | undefined;
    global: string[];
};
