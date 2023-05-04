import { __awaiter } from "tslib";
import { Deferred } from '../common/deferred';
import { Disposable } from '../common/disposable';
export var NsModelServiceConfig;
(function (NsModelServiceConfig) {
    NsModelServiceConfig.CONFIG_TYPE = 'MODEL_SERVICE_CONFIG';
})(NsModelServiceConfig || (NsModelServiceConfig = {}));
const disposableNoop = () => Disposable.create(() => { });
export class ModelServiceConfig {
    constructor() {
        /** CONFIG_TYPE */
        this.CONFIG_TYPE = NsModelServiceConfig.CONFIG_TYPE;
        /** 外部注册context的方法 */
        this.registerModelFn = disposableNoop;
        /** CONFIG_TYPE */
        this.isMounted = new Deferred();
        this.registerModel = (registerModel) => {
            this.registerModelFn = registerModel;
        };
        this.setMountState = () => {
            this.isMounted.resolve(true);
        };
        this.getConfig = () => __awaiter(this, void 0, void 0, function* () {
            yield this.isMounted.promise;
            return {
                CONFIG_TYPE: this.CONFIG_TYPE,
                modelRegisterFunc: this.registerModelFn || disposableNoop,
            };
        });
        this.dispose = () => {
            this.registerModelFn = disposableNoop;
            this.isMounted = new Deferred();
        };
    }
}
//# sourceMappingURL=config.js.map