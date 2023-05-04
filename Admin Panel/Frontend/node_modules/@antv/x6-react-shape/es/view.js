import React from 'react';
import ReactDOM from 'react-dom';
import { NodeView, Scheduler } from '@antv/x6';
import { Portal } from './portal';
import { Wrap } from './wrap';
export class ReactShapeView extends NodeView {
    init() {
        super.init();
        this.cell.on('removed', () => {
            Portal.disconnect(this.cell.id);
        });
    }
    getComponentContainer() {
        return this.cell.prop('useForeignObject') === false
            ? this.selectors.content
            : this.selectors.foContent;
    }
    confirmUpdate(flag) {
        const ret = super.confirmUpdate(flag);
        return this.handleAction(ret, ReactShapeView.action, () => {
            if (Scheduler) {
                Scheduler.scheduleTask(() => {
                    this.renderReactComponent();
                });
            }
            else {
                this.renderReactComponent();
            }
        });
    }
    renderReactComponent() {
        this.unmountReactComponent();
        const root = this.getComponentContainer();
        const node = this.cell;
        const graph = this.graph;
        if (root) {
            const component = this.graph.hook.getReactComponent(node);
            const elem = React.createElement(Wrap, { graph, node, component });
            if (Portal.isActive()) {
                Portal.connect(this.cell.id, ReactDOM.createPortal(elem, root));
            }
            else {
                ReactDOM.render(elem, root);
            }
        }
    }
    unmountReactComponent() {
        const root = this.getComponentContainer();
        if (root) {
            ReactDOM.unmountComponentAtNode(root);
        }
        return root;
    }
    unmount() {
        Portal.disconnect(this.cell.id);
        this.unmountReactComponent();
        super.unmount();
        return this;
    }
}
(function (ReactShapeView) {
    ReactShapeView.action = 'react';
    ReactShapeView.config({
        bootstrap: [ReactShapeView.action],
        actions: {
            component: ReactShapeView.action,
        },
    });
    NodeView.registry.register('react-shape-view', ReactShapeView, true);
})(ReactShapeView || (ReactShapeView = {}));
//# sourceMappingURL=view.js.map