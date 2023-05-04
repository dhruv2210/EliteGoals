import type { PropsWithChildren } from 'react';
import type { IExtensionModule } from '../interface';
export interface IProps {
    config: IExtensionModule['config'];
    createModule: IExtensionModule['createModule'];
}
export declare function XFlowAppExtensionModule<T>(props: PropsWithChildren<IProps>): JSX.Element;
