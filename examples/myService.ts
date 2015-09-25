/// <reference path="typings/angularjs/angular.d.ts" />

namespace demo {
	export interface IMyService {
		helloCount1: number;
		sayHello(): string;
	}
	
	class MyService implements IMyService {
		private _helloCount = 0;
		
		get helloCount1() {
			return this._helloCount;
		}
		
		sayHello(): string {
			this.helloCount1++;
			return `hello for the ${this.helloCount1} time`;
		}
	}
	angular.module('myModule').service('myService', MyService);
}