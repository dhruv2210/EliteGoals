import { NodeView } from '@antv/x6';
import { ReactShape } from './node';
export declare class ReactShapeView extends NodeView<ReactShape> {
    protected init(): void;
    getComponentContainer(): SVGElement | HTMLDivElement;
    confirmUpdate(flag: number): number;
    protected renderReactComponent(): void;
    protected unmountReactComponent(): SVGElement | HTMLDivElement;
    unmount(): this;
}
export declare namespace ReactShapeView {
    const action: any;
}
