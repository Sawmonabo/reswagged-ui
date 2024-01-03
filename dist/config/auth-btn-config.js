"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthBtnConfig = void 0;
const config_1 = require("./config");
class AuthBtnConfig extends config_1.Config {
    constructor(cfg) {
        super(cfg);
        this.posSelector = 'h1:eq(1)';
        this.text = 'AUTHORIZE';
        this.className = '_auth-btn';
        this.setOptions(cfg);
    }
}
exports.AuthBtnConfig = AuthBtnConfig;
