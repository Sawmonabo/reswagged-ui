/// <reference types="jquery" />
/// <reference types="jquery" />
/// <reference types="jquery.scrollto" />
import { TryBtnConfig } from '../config/try-btn-config';
export declare class TryBtn {
    static cfg: TryBtnConfig;
    private static get $sibling();
    static isSelected($btn: JQuery): boolean;
    static unselectAll(): void;
    static select($btn: JQuery): void;
    static get $selected(): JQuery;
    static get $btn(): JQuery;
    static init(): void;
}
