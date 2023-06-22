import type { NsGraph } from '@antv/xflow-core';
import type { Edge } from '@antv/x6';
import type { IFlowchartGraphProps } from './interface';
export declare namespace NsAddEdgeEvent {
    const EVENT_NAME = "ADD_FLOWCHART_EDGE_CMD_EVENT";
    interface IArgs {
        targetPortId: string;
        sourcePortId: string;
        source: string;
        target: string;
        edge: Edge;
        tempEdgeId?: string;
        attrs?: NsGraph.IEdgeConfig['attrs'];
    }
}
export declare const useGraphConfig: (props?: IFlowchartGraphProps) => import("@antv/xflow-core").GraphConfig;
