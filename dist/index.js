"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reSwaggedCssMinFileName = exports.reSwaggedCssFileName = exports.reSwaggedJsMinFileName = exports.reSwaggedJsFileName = void 0;
exports.reSwaggedJsFileName = 'reswagged-ui.js';
exports.reSwaggedJsMinFileName = 'reswagged-ui.min.js';
exports.reSwaggedCssFileName = 'reswagged-ui.css';
exports.reSwaggedCssMinFileName = 'reswagged-ui.min.css';
__exportStar(require("./interfaces/auth-btn-options.interface"), exports);
__exportStar(require("./interfaces/redoc-try-it-out-options.interface"), exports);
__exportStar(require("./interfaces/style-matcher-options.interface"), exports);
__exportStar(require("./interfaces/swagger-options.interface"), exports);
__exportStar(require("./interfaces/try-btn-options.interface"), exports);
