"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var position_1 = require("./position");
var Size = function (props) {
    var width = props.width, height = props.height, _a = props.label, label = _a === void 0 ? '尺寸' : _a, onChange = props.onChange;
    return (react_1.default.createElement("div", { className: "group" },
        react_1.default.createElement("label", null, label),
        react_1.default.createElement("div", { className: "split" },
            react_1.default.createElement(position_1.Item, { addonBefore: "W", value: width, onChangeItem: function (value) {
                    onChange === null || onChange === void 0 ? void 0 : onChange('width', value);
                } }),
            react_1.default.createElement(position_1.Item, { addonBefore: "H", value: height, onChangeItem: function (value) {
                    onChange === null || onChange === void 0 ? void 0 : onChange('height', value);
                } }))));
};
exports.default = Size;
//# sourceMappingURL=size.js.map