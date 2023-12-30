export async function loadStylesheet(stylesheetUrl: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = stylesheetUrl;
        link.onload = () => {
            resolve();
        };
        link.onerror = (error) => {
            reject(error);
        };

        document.head.appendChild(link);
    });
}
