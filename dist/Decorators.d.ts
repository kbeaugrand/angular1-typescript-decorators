import { IDirectiveConfiguration, IControllerConfiguration, IModuleConfiguration, IComponentConfiguration } from './DecoratorConfigs';
export declare function Controller(config?: IControllerConfiguration): (target: any) => any;
export declare function Directive(config?: IDirectiveConfiguration): (target: any) => any;
export declare function DirectiveCompileFn(): (target: any, key: string, descriptor: any) => any;
export declare function DirectiveLinkFn(): (target: any, key: string, descriptor: any) => any;
export declare function Module(config: IModuleConfiguration): (target: any) => any;
export declare function ModuleConfig(): (target: any, key: string, descriptor: any) => any;
export declare function ModuleRun(): (target: any, key: string, descriptor: any) => any;
export declare function ModuleValue(name: string, value: any): (target: any) => any;
export declare function ModuleConstant(name: string, value: any): (target: any) => any;
export declare function Factory(name?: string): (target: any) => any;
export declare function Filter(name?: string): (target: any) => any;
export declare function FilterFn(): (target: any, key: string, descriptor: any) => any;
export declare function Service(name?: string): (target: any) => any;
export declare function Provider(name?: string): (target: any) => any;
export declare function Component(name?: string, config?: IComponentConfiguration): (target: any) => any;
export declare function Log(): (target: any, key: string, descriptor: any) => any;
