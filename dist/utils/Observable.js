"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A simple Observable pattern utility.
 */
class Observable {
    constructor(options = { async: true }) {
        this.options = options;
        this.listeners = [];
    }
    /**
     * Subscribe for updates.
     *
     * @param {Observer} observable The instace to be notified
     */
    subscribe(observable) {
        this.listeners.push(observable);
    }
    /**
     * Unsubscribe from updates.
     *
     * @param {Observer} observable The instance to be removed from listeners
     */
    unsubscribe(observable) {
        if (this.listeners.indexOf(observable) >= 0) {
            this.listeners.splice(this.listeners.indexOf(observable), 1);
            return true;
        }
        return false;
    }
    /**
     * Notifies all listeners about an event update.
     *
     * @param {string} [event] The event name
     * @param {any} [data] The event data
     *
     * @returns {number}
     */
    notify(event, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const wrapper = () => this.listeners.map(observable => {
                observable.update(event, data);
            });
            if (this.options.async) {
                setTimeout(wrapper, Observable.NOTIFICATION_TIMEOUT);
            }
            else {
                wrapper();
            }
            return this.listeners.length;
        });
    }
}
// The timeout to wait untill notifying subscribers in milliseconds
Observable.NOTIFICATION_TIMEOUT = 10;
exports.Observable = Observable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi91dGlscy9PYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFjQTs7R0FFRztBQUNILE1BQWEsVUFBVTtJQU9yQixZQUFZLFVBQTZCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtRQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFNBQVMsQ0FBQyxVQUFvQjtRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFdBQVcsQ0FBQyxVQUFvQjtRQUNyQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3RCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNVLE1BQU0sQ0FBQyxLQUFjLEVBQUUsSUFBVTs7WUFDNUMsTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUM5QixVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztZQUVMLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQ3RCLFVBQVUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUM7YUFDWDtZQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDL0IsQ0FBQztLQUFBOztBQW5ERCxtRUFBbUU7QUFDbEQsK0JBQW9CLEdBQUcsRUFBRSxDQUFDO0FBTDdDLGdDQXdEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGUgaW50ZXJmYWNlIHRvIHdhdGNoIE9ic2VydmFibGUgY2hhbmdlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgT2JzZXJ2ZXIge1xyXG4gIHVwZGF0ZTogRnVuY3Rpb247XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgb3B0aW9ucyBmb3IgT2JzZXJ2YWJsZSBjb25zdHJ1Y3Rvci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgT2JzZXJ2YWJsZU9wdGlvbnMge1xyXG4gIGFzeW5jPzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgc2ltcGxlIE9ic2VydmFibGUgcGF0dGVybiB1dGlsaXR5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE9ic2VydmFibGUge1xyXG4gIGxpc3RlbmVyczogT2JzZXJ2ZXJbXTtcclxuICBvcHRpb25zOiBPYnNlcnZhYmxlT3B0aW9ucztcclxuXHJcbiAgLy8gVGhlIHRpbWVvdXQgdG8gd2FpdCB1bnRpbGwgbm90aWZ5aW5nIHN1YnNjcmliZXJzIGluIG1pbGxpc2Vjb25kc1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgTk9USUZJQ0FUSU9OX1RJTUVPVVQgPSAxMDtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogT2JzZXJ2YWJsZU9wdGlvbnMgPSB7IGFzeW5jOiB0cnVlIH0pIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3Vic2NyaWJlIGZvciB1cGRhdGVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYnNlcnZlcn0gb2JzZXJ2YWJsZSBUaGUgaW5zdGFjZSB0byBiZSBub3RpZmllZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdWJzY3JpYmUob2JzZXJ2YWJsZTogT2JzZXJ2ZXIpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gob2JzZXJ2YWJsZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHVwZGF0ZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09ic2VydmVyfSBvYnNlcnZhYmxlIFRoZSBpbnN0YW5jZSB0byBiZSByZW1vdmVkIGZyb20gbGlzdGVuZXJzXHJcbiAgICovXHJcbiAgcHVibGljIHVuc3Vic2NyaWJlKG9ic2VydmFibGU6IE9ic2VydmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihvYnNlcnZhYmxlKSA+PSAwKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZSh0aGlzLmxpc3RlbmVycy5pbmRleE9mKG9ic2VydmFibGUpLCAxKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBOb3RpZmllcyBhbGwgbGlzdGVuZXJzIGFib3V0IGFuIGV2ZW50IHVwZGF0ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXZlbnRdIFRoZSBldmVudCBuYW1lXHJcbiAgICogQHBhcmFtIHthbnl9IFtkYXRhXSBUaGUgZXZlbnQgZGF0YVxyXG4gICAqXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBwdWJsaWMgYXN5bmMgbm90aWZ5KGV2ZW50Pzogc3RyaW5nLCBkYXRhPzogYW55KTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSAoKSA9PlxyXG4gICAgICB0aGlzLmxpc3RlbmVycy5tYXAob2JzZXJ2YWJsZSA9PiB7XHJcbiAgICAgICAgb2JzZXJ2YWJsZS51cGRhdGUoZXZlbnQsIGRhdGEpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmFzeW5jKSB7XHJcbiAgICAgIHNldFRpbWVvdXQod3JhcHBlciwgT2JzZXJ2YWJsZS5OT1RJRklDQVRJT05fVElNRU9VVCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3cmFwcGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXJzLmxlbmd0aDtcclxuICB9XHJcbn1cclxuIl19