export declare abstract class Config<T extends object> {
    protected readonly options: T;
    constructor(options: T);
    protected setOptions(options: T): void;
    protected get cdnUrl(): string;
}
