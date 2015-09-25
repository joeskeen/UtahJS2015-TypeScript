/// <reference path="typings/angularjs/angular.d.ts" />
var demo;
(function (demo) {
    var MyService = (function () {
        function MyService() {
            this._helloCount = 0;
        }
        Object.defineProperty(MyService.prototype, "helloCount", {
            get: function () {
                return this._helloCount;
            },
            enumerable: true,
            configurable: true
        });
        MyService.prototype.sayHello = function () {
            this.helloCount++;
            return "hello for the " + this.helloCount + " time";
        };
        return MyService;
    })();
    angular.module('myModule').service('myService', MyService);
})(demo || (demo = {}));
