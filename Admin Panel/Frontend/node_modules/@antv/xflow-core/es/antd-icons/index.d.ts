import { QuestionCircleOutlined } from '@ant-design/icons';
export declare type IconComponent = typeof QuestionCircleOutlined;
export interface IReactComponentStore {
    has: (id: string) => boolean;
    get: (id: string) => IconComponent;
    set: (id: string, component: IconComponent) => void;
}
export declare class IconStoreBase implements IReactComponentStore {
    /** icon map */
    private map;
    constructor();
    /** 获取全局的icon component */
    get(id: string): IconComponent;
    /** 设置全局的icon component */
    set(id: string, component: IconComponent): void;
    /** 判断是否有值 */
    has(id: string): boolean;
}
export declare const IconStore: IconStoreBase;
export default IconStore;
