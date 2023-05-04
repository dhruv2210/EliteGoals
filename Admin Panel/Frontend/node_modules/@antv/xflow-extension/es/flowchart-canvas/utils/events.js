import { __awaiter } from "tslib";
import { XFlowNodeCommands, XFlowEdgeCommands } from '@antv/xflow-core';
import { get } from 'lodash';
import { onConfigChange, getGraphInstance } from './util';
/** 节点移动时，实时更新位置信息，内置之后可去掉 */
export const movedNode = (e, cmds) => __awaiter(void 0, void 0, void 0, function* () {
    const { node } = e;
    if (!node) {
        return;
    }
    const { data } = node;
    // 更新组内元素，边信息无需更新
    if (data === null || data === void 0 ? void 0 : data.groupChildren) {
        const x6Graph = getGraphInstance();
        data === null || data === void 0 ? void 0 : data.groupChildren.forEach((id) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b;
            const currentNode = x6Graph.getCellById(id);
            if (currentNode && currentNode.isNode()) {
                yield cmds.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
                    nodeConfig: Object.assign(Object.assign(Object.assign({}, currentNode.data), (_a = currentNode.getSize) === null || _a === void 0 ? void 0 : _a.call(currentNode)), (_b = currentNode.getPosition) === null || _b === void 0 ? void 0 : _b.call(currentNode)),
                });
            }
        }));
    }
    const nodeConfig = Object.assign(Object.assign(Object.assign({}, node.data), node.getPosition()), node.getSize());
    yield cmds.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
        nodeConfig,
    });
    onConfigChange({ type: 'move:node', config: nodeConfig });
});
/** 修改节点大小 */
export const resizeNode = (e, cmds) => __awaiter(void 0, void 0, void 0, function* () {
    const { node } = e;
    if (!node) {
        return;
    }
    const nodeConfig = Object.assign(Object.assign(Object.assign({}, node.data), node.getPosition()), node.size());
    yield cmds.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
        nodeConfig,
    });
    onConfigChange({ type: 'resize:node', config: nodeConfig });
});
const getContainer = e => {
    var _a;
    let currentNode = (_a = e === null || e === void 0 ? void 0 : e.e) === null || _a === void 0 ? void 0 : _a.currentTarget;
    if (!currentNode) {
        return document.getElementsByClassName('xflow-canvas-root');
    }
    let containter = null;
    while (!containter) {
        const current = currentNode.getElementsByClassName('xflow-canvas-root');
        if ((current === null || current === void 0 ? void 0 : current.length) > 0) {
            containter = current;
        }
        currentNode = currentNode.parentNode;
    }
    return containter;
};
// 获取选中节点的 ports
export const getSelectedCellPorts = (eleId) => {
    const selectedPorts = document.getElementsByClassName('x6-node-selected');
    if (!selectedPorts) {
        return;
    }
    let matchPort = selectedPorts[0];
    Array.from(selectedPorts).forEach((ele) => {
        if (ele.getAttribute('data-cell-id') === eleId) {
            matchPort = ele;
        }
    });
    return matchPort.getElementsByClassName('x6-port');
};
const setTransformData = (ele, scale) => {
    const currentTransform = ele.getAttribute('transform');
    const transforms = currentTransform.split(',');
    transforms[0] = `matrix(${Number(transforms[0].split('(')[1]) * scale}`;
    transforms[3] = Number(transforms[3]) * scale;
    ele.setAttribute('transform', transforms.join(','));
};
// 节点 ports 放大2被
export const setTransform = (elements) => {
    if (!(elements === null || elements === void 0 ? void 0 : elements.length))
        return;
    const scale = 2;
    elements.forEach(ele => {
        if (ele.getAttribute('data-scale'))
            return;
        setTransformData(ele, scale);
        ele.setAttribute('data-scale', `${scale}`);
    });
};
// 重置节点 scale
export const resetTransform = () => {
    const ports = document.getElementsByClassName('x6-port');
    if (!ports) {
        return;
    }
    Array.from(ports).forEach((ele) => {
        const eleScale = ele.getAttribute('data-scale');
        if (eleScale) {
            setTransformData(ele, 1 / Number(eleScale));
            ele.removeAttribute('data-scale');
        }
    });
};
/** 设置 ports visible */
export const changePortsVisible = (visible, e, showPortsOnNodeSelected) => {
    var _a;
    if (!visible) {
        resetTransform();
    }
    const containers = getContainer(e);
    const graph = getGraphInstance();
    const selectedCell = (_a = graph.getSelectedCells()) === null || _a === void 0 ? void 0 : _a[0];
    // 节点选中并移入时，port transfrom scale * 2
    if ((selectedCell === null || selectedCell === void 0 ? void 0 : selectedCell.isNode()) && showPortsOnNodeSelected) {
        setTransform(getSelectedCellPorts(selectedCell.id));
    }
    Array.from(containers).forEach((container) => {
        const ports = container.querySelectorAll('.x6-port-body');
        // 选中中节点时不展示链接桩
        const isSelectedNode = selectedCell === null || selectedCell === void 0 ? void 0 : selectedCell.isNode();
        for (let i = 0, len = ports.length; i < len; i = i + 1) {
            ports[i].style.visibility =
                (!isSelectedNode || showPortsOnNodeSelected) && visible ? 'visible' : 'hidden';
        }
    });
};
/** 添加辅助工具 */
export const addTools = (e) => __awaiter(void 0, void 0, void 0, function* () {
    const { edge } = e;
    if (!edge) {
        return;
    }
    edge.addTools('vertices', 'ondbclick');
});
/** 移除辅助工具 */
export const removeTools = (e, cmds) => __awaiter(void 0, void 0, void 0, function* () {
    const { edge } = e;
    if (!edge) {
        return;
    }
    if (edge.hasTools('ondbclick')) {
        cmds.executeCommand(XFlowEdgeCommands.UPDATE_EDGE.id, {
            edgeConfig: Object.assign(Object.assign({}, get(edge, 'data')), { vertices: edge.getVertices() }),
        });
        edge.removeTools();
    }
});
//# sourceMappingURL=events.js.map