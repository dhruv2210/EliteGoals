"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTools = exports.addTools = exports.changePortsVisible = exports.resetTransform = exports.setTransform = exports.getSelectedCellPorts = exports.resizeNode = exports.movedNode = void 0;
var tslib_1 = require("tslib");
var xflow_core_1 = require("@antv/xflow-core");
var lodash_1 = require("lodash");
var util_1 = require("./util");
/** 节点移动时，实时更新位置信息，内置之后可去掉 */
var movedNode = function (e, cmds) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var node, data, x6Graph_1, nodeConfig;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                node = e.node;
                if (!node) {
                    return [2 /*return*/];
                }
                data = node.data;
                // 更新组内元素，边信息无需更新
                if (data === null || data === void 0 ? void 0 : data.groupChildren) {
                    x6Graph_1 = (0, util_1.getGraphInstance)();
                    data === null || data === void 0 ? void 0 : data.groupChildren.forEach(function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                        var currentNode;
                        var _a, _b;
                        return tslib_1.__generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    currentNode = x6Graph_1.getCellById(id);
                                    if (!(currentNode && currentNode.isNode())) return [3 /*break*/, 2];
                                    return [4 /*yield*/, cmds.executeCommand(xflow_core_1.XFlowNodeCommands.UPDATE_NODE.id, {
                                            nodeConfig: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, currentNode.data), (_a = currentNode.getSize) === null || _a === void 0 ? void 0 : _a.call(currentNode)), (_b = currentNode.getPosition) === null || _b === void 0 ? void 0 : _b.call(currentNode)),
                                        })];
                                case 1:
                                    _c.sent();
                                    _c.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); });
                }
                nodeConfig = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, node.data), node.getPosition()), node.getSize());
                return [4 /*yield*/, cmds.executeCommand(xflow_core_1.XFlowNodeCommands.UPDATE_NODE.id, {
                        nodeConfig: nodeConfig,
                    })];
            case 1:
                _a.sent();
                (0, util_1.onConfigChange)({ type: 'move:node', config: nodeConfig });
                return [2 /*return*/];
        }
    });
}); };
exports.movedNode = movedNode;
/** 修改节点大小 */
var resizeNode = function (e, cmds) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var node, nodeConfig;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                node = e.node;
                if (!node) {
                    return [2 /*return*/];
                }
                nodeConfig = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, node.data), node.getPosition()), node.size());
                return [4 /*yield*/, cmds.executeCommand(xflow_core_1.XFlowNodeCommands.UPDATE_NODE.id, {
                        nodeConfig: nodeConfig,
                    })];
            case 1:
                _a.sent();
                (0, util_1.onConfigChange)({ type: 'resize:node', config: nodeConfig });
                return [2 /*return*/];
        }
    });
}); };
exports.resizeNode = resizeNode;
var getContainer = function (e) {
    var _a;
    var currentNode = (_a = e === null || e === void 0 ? void 0 : e.e) === null || _a === void 0 ? void 0 : _a.currentTarget;
    if (!currentNode) {
        return document.getElementsByClassName('xflow-canvas-root');
    }
    var containter = null;
    while (!containter) {
        var current = currentNode.getElementsByClassName('xflow-canvas-root');
        if ((current === null || current === void 0 ? void 0 : current.length) > 0) {
            containter = current;
        }
        currentNode = currentNode.parentNode;
    }
    return containter;
};
// 获取选中节点的 ports
var getSelectedCellPorts = function (eleId) {
    var selectedPorts = document.getElementsByClassName('x6-node-selected');
    if (!selectedPorts) {
        return;
    }
    var matchPort = selectedPorts[0];
    Array.from(selectedPorts).forEach(function (ele) {
        if (ele.getAttribute('data-cell-id') === eleId) {
            matchPort = ele;
        }
    });
    return matchPort.getElementsByClassName('x6-port');
};
exports.getSelectedCellPorts = getSelectedCellPorts;
var setTransformData = function (ele, scale) {
    var currentTransform = ele.getAttribute('transform');
    var transforms = currentTransform.split(',');
    transforms[0] = "matrix(".concat(Number(transforms[0].split('(')[1]) * scale);
    transforms[3] = Number(transforms[3]) * scale;
    ele.setAttribute('transform', transforms.join(','));
};
// 节点 ports 放大2被
var setTransform = function (elements) {
    if (!(elements === null || elements === void 0 ? void 0 : elements.length))
        return;
    var scale = 2;
    elements.forEach(function (ele) {
        if (ele.getAttribute('data-scale'))
            return;
        setTransformData(ele, scale);
        ele.setAttribute('data-scale', "".concat(scale));
    });
};
exports.setTransform = setTransform;
// 重置节点 scale
var resetTransform = function () {
    var ports = document.getElementsByClassName('x6-port');
    if (!ports) {
        return;
    }
    Array.from(ports).forEach(function (ele) {
        var eleScale = ele.getAttribute('data-scale');
        if (eleScale) {
            setTransformData(ele, 1 / Number(eleScale));
            ele.removeAttribute('data-scale');
        }
    });
};
exports.resetTransform = resetTransform;
/** 设置 ports visible */
var changePortsVisible = function (visible, e, showPortsOnNodeSelected) {
    var _a;
    if (!visible) {
        (0, exports.resetTransform)();
    }
    var containers = getContainer(e);
    var graph = (0, util_1.getGraphInstance)();
    var selectedCell = (_a = graph.getSelectedCells()) === null || _a === void 0 ? void 0 : _a[0];
    // 节点选中并移入时，port transfrom scale * 2
    if ((selectedCell === null || selectedCell === void 0 ? void 0 : selectedCell.isNode()) && showPortsOnNodeSelected) {
        (0, exports.setTransform)((0, exports.getSelectedCellPorts)(selectedCell.id));
    }
    Array.from(containers).forEach(function (container) {
        var ports = container.querySelectorAll('.x6-port-body');
        // 选中中节点时不展示链接桩
        var isSelectedNode = selectedCell === null || selectedCell === void 0 ? void 0 : selectedCell.isNode();
        for (var i = 0, len = ports.length; i < len; i = i + 1) {
            ports[i].style.visibility =
                (!isSelectedNode || showPortsOnNodeSelected) && visible ? 'visible' : 'hidden';
        }
    });
};
exports.changePortsVisible = changePortsVisible;
/** 添加辅助工具 */
var addTools = function (e) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var edge;
    return tslib_1.__generator(this, function (_a) {
        edge = e.edge;
        if (!edge) {
            return [2 /*return*/];
        }
        edge.addTools('vertices', 'ondbclick');
        return [2 /*return*/];
    });
}); };
exports.addTools = addTools;
/** 移除辅助工具 */
var removeTools = function (e, cmds) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var edge;
    return tslib_1.__generator(this, function (_a) {
        edge = e.edge;
        if (!edge) {
            return [2 /*return*/];
        }
        if (edge.hasTools('ondbclick')) {
            cmds.executeCommand(xflow_core_1.XFlowEdgeCommands.UPDATE_EDGE.id, {
                edgeConfig: tslib_1.__assign(tslib_1.__assign({}, (0, lodash_1.get)(edge, 'data')), { vertices: edge.getVertices() }),
            });
            edge.removeTools();
        }
        return [2 /*return*/];
    });
}); };
exports.removeTools = removeTools;
//# sourceMappingURL=events.js.map