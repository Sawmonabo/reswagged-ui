import { StyleBuilder } from '../utils/style-builder';

export class LoadingScreenStyler {

    private static sheet = document.createElement('style');
    private static sheetAddedOnDocument = false;

    private static update(): void {
        if (!LoadingScreenStyler.sheetAddedOnDocument) {
            document.head.appendChild(LoadingScreenStyler.sheet);
            LoadingScreenStyler.sheetAddedOnDocument = true;
        }
        LoadingScreenStyler.sheet.innerHTML = StyleBuilder.toString();
    }

    public static applyLoadingStyles(): void {
        StyleBuilder
            .add('.hidden')
                .style({ display: 'none' })
            .add('.shown')
                .style({ display: 'block' })
            .add('.loading-overlay')
                .style({
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    'background-color': 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    'justify-content': 'center',
                    'align-items': 'center',
                    'z-index': 1000
                })
            .add('.loading-message')
                .style({
                    padding: '20px',
                    'background-color': 'rgba(0, 0, 0, 0.8)',
                    'border-radius': '10px',
                    'box-shadow': '0 2px 4px rgba(0, 0, 0, 0.5)',
                    'font-size': '16px',
                    color: 'white'
                })
            .add('.loading-text')
                .style({
                    color: 'white',
                    'font-size': '40px',
                    display: 'inline-block',
                    'vertical-align': 'bottom',
                    'margin': '0 20px'
                })
            .add('.bounceball')
                .style({
                    position: 'relative',
                    display: 'inline-block',
                    height: '90px',
                    width: '30px',
                    'vertical-align': 'bottom'
                })
            .add('.bounceball:before')
                .style({
                    position: 'absolute',
                    content: '""',
                    display: 'block',
                    width: '30px',
                    height: '30px',
                    'border-radius': '50%',
                    'background-color': '#fbae17',
                    'transform-origin': '50%',
                    animation: 'bounce 500ms alternate infinite ease'
                });

        LoadingScreenStyler.update();
    }

    public static applyKeyframes(): void {
        const keyframes = document.createElement('style');
        keyframes.innerHTML = `
            @keyframes bounce {
                0% {
                    top: 50px;
                    height: 5px;
                    border-radius: 60px 60px 20px 20px;
                    transform: scaleX(2);
                }
                35% {
                    height: 30px;
                    border-radius: 50%;
                    transform: scaleX(1);
                }
                100% {
                    top: 0;
                }
            }
        `;
        document.head.appendChild(keyframes);
    }

    public static init(): void {
        LoadingScreenStyler.applyLoadingStyles();
        LoadingScreenStyler.applyKeyframes();
    }
}
