import type { IRegisterNode } from './interface';
export declare const getRegisterNode: (nodes: any) => any;
export declare const nodeService: (nodes: any) => Promise<any[]>;
export declare const registerCustomNode: (panelConfigs?: IRegisterNode | IRegisterNode[]) => void;
export declare const setNodeRender: (graphConfig: any) => void;
export declare const createPath: (paths: (string | number)[][], offsetX?: number, offsetY?: number) => string;
