import { RedocTryItOutOptions } from './interfaces/redoc-try-it-out-options.interface';
export declare class ReSwaggedUI {
    private static loadDependencies;
    private static loadAll;
    private static config;
    static init(docUrl: string, cfg: RedocTryItOutOptions, element?: HTMLElement, customStylesheet?: string): Promise<void>;
}
