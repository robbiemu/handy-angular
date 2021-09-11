// author: Joshua Ziggas, 2021
// with: robbiemu

import { Subscription } from 'rxjs';

export function Unsubscribe(blackList: any[] = []) {
    return function (constructor: Function) {
        constructor.prototype.subscriptions = new Subscription();
        const original = constructor.prototype.ngOnDestroy;

        constructor.prototype.ngOnDestroy = function() {
            const props = Object.getOwnPropertyNames(this);
            for (const prop of props) {
                const property = this[prop];
                if (!blackList.includes(prop)) {
                    if (property && (typeof property.unsubscribe === 'function')) {
                        property.unsubscribe();
                    }
                }
            }
            if (original && typeof original === 'function') {
                original.apply(this, arguments);
            }
        };
    };
}
