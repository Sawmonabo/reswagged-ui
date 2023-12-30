export declare abstract class Config<T extends object> {
    protected readonly options: T;
    constructor(options: T);
    protected get cdnUrl(): string;
}
