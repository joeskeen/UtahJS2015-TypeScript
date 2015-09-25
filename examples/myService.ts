/// <reference path="typings/angularjs/angular.d.ts" />

namespace demo {
	export interface IMyService {
		helloCount: number;
		sayHello(): string;
	}
	
	class MyService implements IMyService {
		private _helloCount = 0;
		
		get helloCount() {
			return this._helloCount;
		}
		
		sayHello(): string {
			this.helloCount++;
			return `hello for the ${this.helloCount} time`;
		}
	}
	angular.module('myModule').service('myService', MyService);
}