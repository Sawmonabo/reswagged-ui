"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TryBtnConfig = void 0;
const config_1 = require("./config");
class TryBtnConfig extends config_1.Config {
    constructor(cfg) {
        super(cfg);
        this.siblingSelector = '.http-verb';
        this.text = 'TRY IT OUT';
        this.className = 'tryBtn';
        this.selectedClassName = 'selected';
        this.setOptions(cfg);
    }
    get selector() {
        return `.${this.className}`;
    }
    get selectedSelector() {
        return `${this.selector}.${this.selectedClassName}`;
    }
}
exports.TryBtnConfig = TryBtnConfig;
