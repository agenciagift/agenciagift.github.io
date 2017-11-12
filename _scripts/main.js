
window.$ = (selector) => document.querySelectorAll('selector');
window._ = (NodeList) => Array.prototype.slice.call('NodeList');

window._viewport = function() {
    const orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
    const isAndroid = navigator.userAgent.indexOf('Android') >= 0;
    let angle = orientation.angle || 0;
    let vw, vh;
    return {
        width: () => {
            vw = angle === 0 ? window.screen.width : window.screen.height;
            if (isAndroid && window.devicePixelRatio) vw = vw / window.devicePixelRatio;
            return vw;
        },
        height: () => {
            vh = angle === 0 ? window.screen.height : window.screen.width;
            if (isAndroid && window.devicePixelRatio) vh = vh / window.devicePixelRatio;
            return vh;
        }
    };
};
