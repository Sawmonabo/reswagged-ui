import { StyleBuilder } from '../utils/style-builder';
import { SwaggerWrapper } from '../wrappers/swagger.wrapper';
import { TryBtn } from '../elements/try.btn';
import { AuthBtn } from '../elements/auth.btn';
import { StyleMatcherConfig } from '../config/style-matcher.config';

export class WrapperStyler {

    public static cfg:StyleMatcherConfig;

    private static sheet = document.createElement('style');

    private static sheetAddedOnDocument: false;

    private static update(): void {
        if ( !WrapperStyler.sheetAddedOnDocument ) {
            document.body.appendChild(WrapperStyler.sheet);
        }
        WrapperStyler.sheet.innerHTML = StyleBuilder.toString();
    }

    private static authApplies(): void {
        StyleBuilder
            .add(SwaggerWrapper.cfg.shownAuthModalSelector)
                .hidden()
            .style({ height: 'auto', left: 0, top: 0, width: 'auto'})
                .add(SwaggerWrapper.cfg.authorizeModalSelector)
                .hidden()
            .add(SwaggerWrapper.cfg.openModalOverlaySelector)
                .visible()
            .add(SwaggerWrapper.cfg.openAuthorizeModalSelector)
                .visible()
                .style({ width: 'auto', height: 'auto' })

        AuthBtn.$element.addClass(WrapperStyler.cfg.authBtnClassesSource);
    }

    private static tryBtnApplies(): void {
        StyleBuilder
            .add(TryBtn.cfg.selector)
                .resetBorder()
                .cloneBorder(WrapperStyler.cfg.$authBtnSource)
                .cloneFont(WrapperStyler.cfg.$httpVerbSource)
                .cloneStyles(WrapperStyler.cfg.$httpVerbSource, ['padding'])
                .cloneStyles(WrapperStyler.cfg.$authBtnSource, ['color'])
                .style({ 'background-color': WrapperStyler.cfg.defaultBackgroundColor, 'margin-left': '2px', 'cursor': 'pointer' });
    }

    private static inputApplies(): void {
        StyleBuilder
            .add(WrapperStyler.cfg.inputTargetSelector)
                .cloneBorder(WrapperStyler.cfg.$inputSource)
                .cloneStyles(WrapperStyler.cfg.$inputSource, ['color', 'font-size'])
                .style({ 'border-radius': 0, 'margin': '35px 15px' });
    }

    private static modalApplies(): void {

        StyleBuilder
            .add(WrapperStyler.cfg.modalHeaderTargetSelector)
                .cloneFont(WrapperStyler.cfg.$h2Source)
            .add(WrapperStyler.cfg.modalLabelTargetSelector)
                .cloneFont(WrapperStyler.cfg.$labelSource)
            .add(WrapperStyler.cfg.modalTitleTargetSelector)
                .cloneFont(WrapperStyler.cfg.$h3Source)
            .add(WrapperStyler.cfg.modalTitleCodeTargetSelector)
                .cloneStyles(WrapperStyler.cfg.$labelSource, 'font-size')
            .add(WrapperStyler.cfg.modalCodeTargetSelector)
                .cloneFont(WrapperStyler.cfg.$h3Source)
                .cloneStyles(WrapperStyler.cfg.$alternativeMonospaceFontSource, 'font-family')
            .add(WrapperStyler.cfg.modalTargetSelector)
                .style({ 'background-color':'white', 'border-radius': '0'})
            .add(WrapperStyler.cfg.modalBtnTargetSelector)
                .cloneStyles(WrapperStyler.cfg.$sanSerifFontSource, 'font-family')
                .style({'border-radius': 0})
            .add(WrapperStyler.cfg.modalHeaderContainerTargetSelector)
                .style({'border-color': WrapperStyler.cfg.defaultBorderColor });

    }

    private static tryItBoxApplies(): void {

        StyleBuilder
            .add(WrapperStyler.cfg.operationSectionTargetSelector)
                .hidden()
                .noHeight()
            .add(WrapperStyler.cfg.openedOperationSectionSelector)
                .visible()
                .style({ 'height': 'initial' });

        StyleBuilder
            .add(WrapperStyler.cfg.openedOperationContainerSelector)
                .style({'display':'block'});

        StyleBuilder
            .add(WrapperStyler.cfg.operationContainerTargetSelector)
                .cloneStyles(WrapperStyler.cfg.$dataSectionSource, 'padding')
                .resetBorder()
            .add(WrapperStyler.cfg.operationContainerTargetSelector)
                .resetBorder()
                .style({ 'background-color': WrapperStyler.cfg.defaultBackgroundColor })
            .add(WrapperStyler.cfg.selectTargetSelector)
                .cloneFont(WrapperStyler.cfg.$inputSource)
                .resetBorder()
                .cloneStyles(WrapperStyler.cfg.$inputSource, [ 'border-width', 'border-style'])
                .absolute()
                .style({
                    'border-width': '1px',
                    'background-color': WrapperStyler.cfg.defaultBackgroundColor,
                    'border-style': 'solid',
                    'padding': '0 5px',
                    'margin-top': '-3%',
                    'right': 0,
                    'margin-right': WrapperStyler.cfg.$dataSectionSource.css('padding-right')
                })
            .add(WrapperStyler.cfg.paragraphTargetSelector)
                .cloneFont(WrapperStyler.cfg.$labelSource)
            .add(WrapperStyler.cfg.textAreaTargetSelector)
                .resetBorder()
                .cloneFont(WrapperStyler.cfg.$alternativeMonospaceFontSource)
                .cloneBorder(WrapperStyler.cfg.$codeBoxSource)
                .cloneStyles(WrapperStyler.cfg.$codeBoxSource, ['color'])
                .cloneStyles(WrapperStyler.cfg.$codeBoxSource, ['background-color'])
            .add(WrapperStyler.cfg.descriptionContainerTargetSelector)
                .noPadding()
            .add(WrapperStyler.cfg.executeBtnTargetSelector)
                .resetBorder()
                .cloneBorder(WrapperStyler.cfg.$authBtnSource)
                .cloneFont(WrapperStyler.cfg.$authBtnSource)
                .cloneStyles(WrapperStyler.cfg.$authBtnSource, ['background-color'])
            .add(WrapperStyler.cfg.operationHeaderContainerTargetSelector)
                .cloneStyles(WrapperStyler.cfg.$h5Source, ['padding', 'margin'])
                .style({ 'box-shadow': 'none' })
            .add(WrapperStyler.cfg.operationHeaderTargetSelector)
                .cloneBorder(WrapperStyler.cfg.$h5Source)
                .cloneFont(WrapperStyler.cfg.$h5Source)
                .cloneStyles(WrapperStyler.cfg.$h5Source, 'text-transform')
            .add(WrapperStyler.cfg.responseWrapperResultTargetSelector)
                .style({ 'display': 'block'})
            .add(WrapperStyler.cfg.responseContainerTargetSelector)
                .style({ 'padding': '0 0 20px 0'})
            .add(WrapperStyler.cfg.parametersTableContainerTargetSelector)
                .noPadding()
            .add(WrapperStyler.cfg.parameterNameFieldTargetSelector)
                .cloneFont(WrapperStyler.cfg.$fieldSource)
                .style({ float: 'right', width: '60px' })
            .add(WrapperStyler.cfg.parameterRequiredTargetSelector)
                .noPadding()
                .cloneFont(WrapperStyler.cfg.$requiredFieldSource)
                .style({ 'display':'block', 'padding-top': '4px' })
            .add(WrapperStyler.cfg.parameterTypeFieldTargetSelector)
                .cloneFont(WrapperStyler.cfg.$typeSource)
                .style({ 'margin-left' : '28px'})
            .add(WrapperStyler.cfg.parameterDeprecatedTargetSelector)
                .style({ 'margin-left' : '28px'})
            .add(WrapperStyler.cfg.parameterSourceTargetSelector)
                .cloneStyles(WrapperStyler.cfg.$alternativeMonospaceFontSource, 'font-family')
                .style({ 'margin-left' : '28px'})
            .add(WrapperStyler.cfg.responseHeaderTargetSelector)
                .cloneFont(WrapperStyler.cfg.$labelSource)
            .add(WrapperStyler.cfg.serverResponseHeaderTargetSelector)
                .cloneFont(WrapperStyler.cfg.$labelSource)
             .add(WrapperStyler.cfg.serverResponseStatusTargetSelector)
                .style({ 'padding-right': '10px'})
                .cloneFont(WrapperStyler.cfg.$typeSource)
            .add(WrapperStyler.cfg.serverResponseDescriptionTargetSelector)
                .style({ 'padding-top' : 0 })
            .add(WrapperStyler.cfg.serverResponseSubHeaderTargetSelector)
                .cloneFont(WrapperStyler.cfg.$labelSource)
             .add(WrapperStyler.cfg.responseMicrolightTargetSelector)
                 .cloneFont(WrapperStyler.cfg.$codeSource, true)
                 .cloneStyles(WrapperStyler.cfg.$codeBoxSource, 'background-color', true)
                 .resetBorder()
            .add(WrapperStyler.cfg.responseCodeTargetSelector)
                .cloneFont(WrapperStyler.cfg.$codeSource, true)
                .cloneStyles(WrapperStyler.cfg.$codeBoxSource, 'background-color', true)
                .resetBorder()
            .add(`${WrapperStyler.cfg.responseClipboardBtnTargetSelector}:before`)
                .cloneFont(WrapperStyler.cfg.$btnSource)
                .style({ 'content': '"Copy"', 'display': 'block'})
            .add(WrapperStyler.cfg.responseClipboardTargetSelector)
                .cloneBorder(WrapperStyler.cfg.$btnSource)
                .style({ 'background' : 'none', 'padding': '5px', 'width': '42px'})
            .add(WrapperStyler.cfg.responseClipboardBtnTargetSelector)
                .noPadding()
                .style({ 'background-image': 'none', 'height': '21px'})
            .add(WrapperStyler.cfg.responseCurlClipboardTargetSelector)
                .style({ 'right': '10px', 'bottom': '18px'})
            .add(WrapperStyler.cfg.responseDownloadTargetSelector)
                .cloneFont(WrapperStyler.cfg.$btnSource)
                .cloneBorder(WrapperStyler.cfg.$btnSource)
                .style({ 'background' : 'none'});

        TryBtn.$btn.on('click', WrapperStyler.createStyleElements);
    }

    private static themeMatchApplies(): void {
        WrapperStyler.inputApplies();
        WrapperStyler.modalApplies();
        WrapperStyler.tryItBoxApplies();
    }

    private static hideDisturbingElements(): void {
        StyleBuilder
            .add(WrapperStyler.cfg.operationTryOutTargetSelector)
                .noDisplay()
            .add(WrapperStyler.cfg.responseTableTargetSelector)
                .noDisplay()
            .add(WrapperStyler.cfg.responseWrapperTargetSelector)
                .noDisplay()
            .add(WrapperStyler.cfg.responseTitleTargetSelector)
                .noDisplay()
            .add(WrapperStyler.cfg.operationHeaderDecorationTargetSelector)
                .noDisplay()
            .add(WrapperStyler.cfg.parameterRequiredMarkerTargetSelector)
                .noDisplay()
            .add(WrapperStyler.cfg.summaryTargetSelector)
                .noDisplay()
            .add(WrapperStyler.cfg.clearBtnTargetSelector)
                .noDisplay()
            .add(WrapperStyler.cfg.parametersHeadTargetSelector)
                .noDisplay()
            .add(WrapperStyler.cfg.operationTagTargetSelector)
                .noDisplay()
            .add(WrapperStyler.cfg.operationContainerTargetSelector)
                .noDisplay()
            .add(WrapperStyler.cfg.openedInformationContainerTargetSelector)
                .noDisplay()
            .add(WrapperStyler.cfg.openedSchemeContainerTargetSelector)
                .noDisplay()
            .add(WrapperStyler.cfg.openedModelsContainerTargetSelector)
                .noDisplay();
    }

    public static createStyleElements(): void {
        setTimeout(function () {
            const marker = WrapperStyler.cfg.$fieldMarkerSource.clone();
            marker.css('float', 'left');
            marker.insertBefore(`${WrapperStyler.cfg.parameterNameFieldTargetSelector}:first-child`);
        }, 100)
        TryBtn.$selected.off('click', WrapperStyler.createStyleElements);
    }

    public static init(): void {
        WrapperStyler.hideDisturbingElements();
        WrapperStyler.authApplies();
        WrapperStyler.tryBtnApplies();
        WrapperStyler.themeMatchApplies();
        WrapperStyler.update();
    }

    public static initSwagger(): void {
        StyleBuilder
            .add('body')
                .relative()
            .add(SwaggerWrapper.cfg.wrapperSelector)
                .noPadding()
            .add(SwaggerWrapper.cfg.boxSelector)
                .relative()
                .noTop()
                .noLeft()
                .noOverflow()
                .resetBorder()
                .style({'border-radius':'4px', 'background-color': '#ffff', width: '100%', height: '100vh', 'z-index': 1})
            .add(SwaggerWrapper.cfg.hiddenSelector)
                .hidden()
                .noWidth()
                .noHeight()
                .noCursor()
            .add(SwaggerWrapper.cfg.shownSelector)
                .visible()
                .style({ cursor: 'initial',  width: 'auto', height: 'auto'});

        WrapperStyler.update();
    }
}
