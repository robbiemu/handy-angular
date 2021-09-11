// author: Joshua Ziggas, 2021
// with: robbiemu

function setTimeout<T extends {timers: Array<number>}>(this: T, handler: TimerHandler, timeout?: number, ...args: any[]): number {
    const timerId = window.setTimeout(handler, timeout, ...args);
    this.timers.push(timerId);
    return timerId;
}

export function ClearTimers() {
    return function(constructor: Function) {
        constructor.prototype.timers = [];
        constructor.prototype.setTimeout = setTimeout;
        const original = constructor.prototype.ngOnDestroy;
        constructor.prototype.ngOnDestroy = function() {
            this.timers.forEach((timerId: number) => clearTimeout(timerId));
            if (original && typeof original === 'function') {
                original.apply(this, arguments);
            }
        };
    };
}
