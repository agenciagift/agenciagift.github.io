---
---

window.$ = (selector) -> document.querySelectorAll selector
window._ = (NodeList) -> Array.prototype.slice.call NodeList

window._viewport = do ->
    orientation = screen.orientation || screen.mozOrientation || screen.msOrientation
    angle = orientation.angle || 0
    width: ->
        vw = if angle is 0 then window.screen.width else window.screen.height
        vw = vw / window.devicePixelRatio if navigator.userAgent.indexOf('Android') >= 0 and window.devicePixelRatio
        vw
    height: ->
        vh = if angle is 0 then window.screen.height else window.screen.width
        vh = vh / window.devicePixelRatio if navigator.userAgent.indexOf('Android') >= 0 and window.devicePixelRatio
        vh
