import { loadScript } from './utils/loaders/scripts';
import { loadStylesheet } from './utils/loaders/styles';
import { WrapperStyler } from './styler/wrapper.styler'
import { LoadingScreenStyler } from './styler/loading-screen.styler';
import { RedocTryItOutOptions } from './interfaces/redoc-try-it-out-options.interface';
import { SwaggerWrapper } from './wrappers/swagger.wrapper';
import { RedocWrapper } from './wrappers/redoc.wrapper';
import { AuthBtn } from './elements/auth.btn';
import { TryBtn } from './elements/try.btn';
import { SwaggerConfig } from './config/swagger-config';
import { RedocTryItOutConfig } from './config/redoc-try-it-out-config';
import { AuthBtnConfig } from './config/auth-btn-config'
import { TryBtnConfig } from './config/try-btn-config';
import { StyleMatcherConfig } from './config/style-matcher.config';


function startLoadingIndicator() {
    LoadingScreenStyler.init();
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

export class ReSwaggedUI {

    private static async loadDependencies():Promise<void> {
        await loadScript(RedocWrapper.cfg.tryItDependencies.jqueryUrl);
        return await loadScript(RedocWrapper.cfg.tryItDependencies.jqueryScrollToUrl);
    }

    private static async loadAll(): Promise<void[]> {
        await ReSwaggedUI.loadDependencies();
        return Promise.all([
            RedocWrapper.init(),
            SwaggerWrapper.init()
        ]);
    }

    private static config(url:string, cfg:RedocTryItOutOptions, element?: HTMLElement): void {

        RedocWrapper.cfg = new RedocTryItOutConfig(url, cfg, element);

        if ( RedocWrapper.cfg.tryItOutEnabled ){
            SwaggerWrapper.cfg = new SwaggerConfig(cfg.swaggerOptions || {}, url, true);
            AuthBtn.cfg = new AuthBtnConfig(cfg.authBtnOptions || {});
            TryBtn.cfg = new TryBtnConfig(cfg.tryBtnOptions || {});
            WrapperStyler.cfg = new StyleMatcherConfig(cfg.stylerMatcherOptions || {}, SwaggerWrapper.cfg, RedocWrapper.cfg);
        }
    }

    public static async init(docUrl: string, cfg: RedocTryItOutOptions, element?: HTMLElement, customStylesheet?: string):Promise<void> {
        try {
            startLoadingIndicator();
            ReSwaggedUI.config(docUrl, cfg, element);

            if ( RedocWrapper.cfg.tryItOutEnabled ) {
                await ReSwaggedUI.loadAll();
                AuthBtn.init();
                TryBtn.init();
                WrapperStyler.init();
            } else {
                await RedocWrapper.init()
            }

            if (customStylesheet) {
                await loadStylesheet(customStylesheet);
            }
        } catch (e) {
            console.error(e);
        } finally {
            stopLoadingIndicator();
        }
    }
}
