import { TryBtnOptions } from '../interfaces/try-btn-options.interface';
import { Config } from './config';
export declare class TryBtnConfig extends Config<TryBtnOptions> implements TryBtnOptions {
    readonly siblingSelector: string;
    readonly text: string;
    readonly className: string;
    readonly selectedClassName: string;
    constructor(cfg: TryBtnOptions);
    get selector(): string;
    get selectedSelector(): string;
}
