'use strict';

(function () {
    'use strict';

    window.$ = function (selector) {
        return document.querySelectorAll('selector');
    };
    window._ = function (NodeList) {
        return Array.prototype.slice.call('NodeList');
    };

    window._viewport = function () {
        var orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
        var isAndroid = navigator.userAgent.indexOf('Android') >= 0;
        var angle = orientation.angle || 0;
        var vw = void 0,
            vh = void 0;
        return {
            width: function width() {
                vw = angle === 0 ? window.screen.width : window.screen.height;
                if (isAndroid && window.devicePixelRatio) vw = vw / window.devicePixelRatio;
                return vw;
            },
            height: function height() {
                vh = angle === 0 ? window.screen.height : window.screen.width;
                if (isAndroid && window.devicePixelRatio) vh = vh / window.devicePixelRatio;
                return vh;
            }
        };
    };
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2luZG93IiwiJCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiXyIsIk5vZGVMaXN0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJfdmlld3BvcnQiLCJvcmllbnRhdGlvbiIsInNjcmVlbiIsIm1vek9yaWVudGF0aW9uIiwibXNPcmllbnRhdGlvbiIsImlzQW5kcm9pZCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJhbmdsZSIsInZ3IiwidmgiLCJ3aWR0aCIsImhlaWdodCIsImRldmljZVBpeGVsUmF0aW8iXSwibWFwcGluZ3MiOiI7O0FBQUMsYUFBWTtBQUNiOztBQUVBQSxXQUFPQyxDQUFQLEdBQVcsVUFBQ0MsUUFBRDtBQUFBLGVBQWNDLFNBQVNDLGdCQUFULENBQTBCLFVBQTFCLENBQWQ7QUFBQSxLQUFYO0FBQ0FKLFdBQU9LLENBQVAsR0FBVyxVQUFDQyxRQUFEO0FBQUEsZUFBY0MsTUFBTUMsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDLElBQXRCLENBQTJCLFVBQTNCLENBQWQ7QUFBQSxLQUFYOztBQUVBVixXQUFPVyxTQUFQLEdBQW1CLFlBQVc7QUFDMUIsWUFBTUMsY0FBY0MsT0FBT0QsV0FBUCxJQUFzQkMsT0FBT0MsY0FBN0IsSUFBK0NELE9BQU9FLGFBQTFFO0FBQ0EsWUFBTUMsWUFBWUMsVUFBVUMsU0FBVixDQUFvQkMsT0FBcEIsQ0FBNEIsU0FBNUIsS0FBMEMsQ0FBNUQ7QUFDQSxZQUFJQyxRQUFRUixZQUFZUSxLQUFaLElBQXFCLENBQWpDO0FBQ0EsWUFBSUMsV0FBSjtBQUFBLFlBQVFDLFdBQVI7QUFDQSxlQUFPO0FBQ0hDLG1CQUFPLGlCQUFNO0FBQ1RGLHFCQUFLRCxVQUFVLENBQVYsR0FBY3BCLE9BQU9hLE1BQVAsQ0FBY1UsS0FBNUIsR0FBb0N2QixPQUFPYSxNQUFQLENBQWNXLE1BQXZEO0FBQ0Esb0JBQUlSLGFBQWFoQixPQUFPeUIsZ0JBQXhCLEVBQTBDSixLQUFLQSxLQUFLckIsT0FBT3lCLGdCQUFqQjtBQUMxQyx1QkFBT0osRUFBUDtBQUNILGFBTEU7QUFNSEcsb0JBQVEsa0JBQU07QUFDVkYscUJBQUtGLFVBQVUsQ0FBVixHQUFjcEIsT0FBT2EsTUFBUCxDQUFjVyxNQUE1QixHQUFxQ3hCLE9BQU9hLE1BQVAsQ0FBY1UsS0FBeEQ7QUFDQSxvQkFBSVAsYUFBYWhCLE9BQU95QixnQkFBeEIsRUFBMENILEtBQUtBLEtBQUt0QixPQUFPeUIsZ0JBQWpCO0FBQzFDLHVCQUFPSCxFQUFQO0FBQ0g7QUFWRSxTQUFQO0FBWUgsS0FqQkQ7QUFtQkMsQ0F6QkEsR0FBRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbid1c2Ugc3RyaWN0Jztcblxud2luZG93LiQgPSAoc2VsZWN0b3IpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdG9yJyk7XHJcbndpbmRvdy5fID0gKE5vZGVMaXN0KSA9PiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCgnTm9kZUxpc3QnKTtcclxuXHJcbndpbmRvdy5fdmlld3BvcnQgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IG9yaWVudGF0aW9uID0gc2NyZWVuLm9yaWVudGF0aW9uIHx8IHNjcmVlbi5tb3pPcmllbnRhdGlvbiB8fCBzY3JlZW4ubXNPcmllbnRhdGlvbjtcclxuICAgIGNvbnN0IGlzQW5kcm9pZCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCcpID49IDA7XHJcbiAgICBsZXQgYW5nbGUgPSBvcmllbnRhdGlvbi5hbmdsZSB8fCAwO1xyXG4gICAgbGV0IHZ3LCB2aDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lkdGg6ICgpID0+IHtcclxuICAgICAgICAgICAgdncgPSBhbmdsZSA9PT0gMCA/IHdpbmRvdy5zY3JlZW4ud2lkdGggOiB3aW5kb3cuc2NyZWVuLmhlaWdodDtcclxuICAgICAgICAgICAgaWYgKGlzQW5kcm9pZCAmJiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbykgdncgPSB2dyAvIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG4gICAgICAgICAgICByZXR1cm4gdnc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWlnaHQ6ICgpID0+IHtcclxuICAgICAgICAgICAgdmggPSBhbmdsZSA9PT0gMCA/IHdpbmRvdy5zY3JlZW4uaGVpZ2h0IDogd2luZG93LnNjcmVlbi53aWR0aDtcclxuICAgICAgICAgICAgaWYgKGlzQW5kcm9pZCAmJiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbykgdmggPSB2aCAvIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG4gICAgICAgICAgICByZXR1cm4gdmg7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcblxufSgpKTtcbiJdfQ==
