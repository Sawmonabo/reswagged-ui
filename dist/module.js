"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReSwaggedUI = void 0;
const scripts_1 = require("./utils/loaders/scripts");
const styles_1 = require("./utils/loaders/styles");
const wrapper_styler_1 = require("./styler/wrapper.styler");
const loading_screen_styler_1 = require("./styler/loading-screen.styler");
const swagger_wrapper_1 = require("./wrappers/swagger.wrapper");
const redoc_wrapper_1 = require("./wrappers/redoc.wrapper");
const auth_btn_1 = require("./elements/auth.btn");
const try_btn_1 = require("./elements/try.btn");
const swagger_config_1 = require("./config/swagger-config");
const redoc_try_it_out_config_1 = require("./config/redoc-try-it-out-config");
const auth_btn_config_1 = require("./config/auth-btn-config");
const try_btn_config_1 = require("./config/try-btn-config");
const style_matcher_config_1 = require("./config/style-matcher.config");
function startLoadingIndicator() {
    loading_screen_styler_1.LoadingScreenStyler.init();
    const reswaggedContainer = document.getElementById('reswagged-container');
    if (reswaggedContainer) {
        reswaggedContainer.classList.add('hidden');
        const overlay = document.createElement('div');
        overlay.classList.add('loading-overlay', 'shown');
        const bounceBall = document.createElement('div');
        bounceBall.classList.add('bounceball');
        const loadingText = document.createElement('div');
        loadingText.classList.add('loading-text');
        loadingText.textContent = 'Loading';
        overlay.appendChild(loadingText);
        overlay.appendChild(bounceBall);
        document.body.appendChild(overlay);
    }
}
function stopLoadingIndicator() {
    const overlay = document.querySelector('.loading-overlay');
    if (overlay) {
        overlay.remove();
    }
    const reswaggedContainer = document.getElementById('reswagged-container');
    if (reswaggedContainer) {
        reswaggedContainer.classList.remove('hidden');
        reswaggedContainer.classList.add('shown');
    }
}
class ReSwaggedUI {
    static loadDependencies() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, scripts_1.loadScript)(redoc_wrapper_1.RedocWrapper.cfg.tryItDependencies.jqueryUrl);
            return yield (0, scripts_1.loadScript)(redoc_wrapper_1.RedocWrapper.cfg.tryItDependencies.jqueryScrollToUrl);
        });
    }
    static loadAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield ReSwaggedUI.loadDependencies();
            return Promise.all([
                redoc_wrapper_1.RedocWrapper.init(),
                swagger_wrapper_1.SwaggerWrapper.init()
            ]);
        });
    }
    static config(url, cfg, element) {
        redoc_wrapper_1.RedocWrapper.cfg = new redoc_try_it_out_config_1.RedocTryItOutConfig(url, cfg, element);
        if (redoc_wrapper_1.RedocWrapper.cfg.tryItOutEnabled) {
            swagger_wrapper_1.SwaggerWrapper.cfg = new swagger_config_1.SwaggerConfig(cfg.swaggerOptions || {}, url, true);
            auth_btn_1.AuthBtn.cfg = new auth_btn_config_1.AuthBtnConfig(cfg.authBtnOptions || {});
            try_btn_1.TryBtn.cfg = new try_btn_config_1.TryBtnConfig(cfg.tryBtnOptions || {});
            wrapper_styler_1.WrapperStyler.cfg = new style_matcher_config_1.StyleMatcherConfig(cfg.stylerMatcherOptions || {}, swagger_wrapper_1.SwaggerWrapper.cfg, redoc_wrapper_1.RedocWrapper.cfg);
        }
    }
    static init(docUrl, cfg, element, customStylesheet) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                startLoadingIndicator();
                ReSwaggedUI.config(docUrl, cfg, element);
                if (redoc_wrapper_1.RedocWrapper.cfg.tryItOutEnabled) {
                    yield ReSwaggedUI.loadAll();
                    auth_btn_1.AuthBtn.init();
                    try_btn_1.TryBtn.init();
                    wrapper_styler_1.WrapperStyler.init();
                }
                else {
                    yield redoc_wrapper_1.RedocWrapper.init();
                }
                if (customStylesheet) {
                    yield (0, styles_1.loadStylesheet)(customStylesheet);
                }
            }
            catch (e) {
                console.error(e);
            }
            finally {
                stopLoadingIndicator();
            }
        });
    }
}
exports.ReSwaggedUI = ReSwaggedUI;
