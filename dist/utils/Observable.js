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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi91dGlscy9PYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFjQTs7R0FFRztBQUNILE1BQWEsVUFBVTtJQU9yQixZQUFZLFVBQTZCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtRQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFNBQVMsQ0FBQyxVQUFvQjtRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFdBQVcsQ0FBQyxVQUFvQjtRQUNyQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3RCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNVLE1BQU0sQ0FBQyxLQUFjLEVBQUUsSUFBVTs7WUFDNUMsTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUM5QixVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztZQUVMLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQ3RCLFVBQVUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUM7YUFDWDtZQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDL0IsQ0FBQztLQUFBOztBQW5ERCxtRUFBbUU7QUFDbEQsK0JBQW9CLEdBQUcsRUFBRSxDQUFDO0FBTDdDLGdDQXdEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlIGludGVyZmFjZSB0byB3YXRjaCBPYnNlcnZhYmxlIGNoYW5nZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT2JzZXJ2ZXIge1xuICB1cGRhdGU6IEZ1bmN0aW9uO1xufVxuXG4vKipcbiAqIFRoZSBvcHRpb25zIGZvciBPYnNlcnZhYmxlIGNvbnN0cnVjdG9yLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9ic2VydmFibGVPcHRpb25zIHtcbiAgYXN5bmM/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEEgc2ltcGxlIE9ic2VydmFibGUgcGF0dGVybiB1dGlsaXR5LlxuICovXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZSB7XG4gIGxpc3RlbmVyczogT2JzZXJ2ZXJbXTtcbiAgb3B0aW9uczogT2JzZXJ2YWJsZU9wdGlvbnM7XG5cbiAgLy8gVGhlIHRpbWVvdXQgdG8gd2FpdCB1bnRpbGwgbm90aWZ5aW5nIHN1YnNjcmliZXJzIGluIG1pbGxpc2Vjb25kc1xuICBwcm90ZWN0ZWQgc3RhdGljIE5PVElGSUNBVElPTl9USU1FT1VUID0gMTA7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogT2JzZXJ2YWJsZU9wdGlvbnMgPSB7IGFzeW5jOiB0cnVlIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIGZvciB1cGRhdGVzLlxuICAgKlxuICAgKiBAcGFyYW0ge09ic2VydmVyfSBvYnNlcnZhYmxlIFRoZSBpbnN0YWNlIHRvIGJlIG5vdGlmaWVkXG4gICAqL1xuICBwdWJsaWMgc3Vic2NyaWJlKG9ic2VydmFibGU6IE9ic2VydmVyKTogdm9pZCB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChvYnNlcnZhYmxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHVwZGF0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JzZXJ2ZXJ9IG9ic2VydmFibGUgVGhlIGluc3RhbmNlIHRvIGJlIHJlbW92ZWQgZnJvbSBsaXN0ZW5lcnNcbiAgICovXG4gIHB1YmxpYyB1bnN1YnNjcmliZShvYnNlcnZhYmxlOiBPYnNlcnZlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmxpc3RlbmVycy5pbmRleE9mKG9ic2VydmFibGUpID49IDApIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZSh0aGlzLmxpc3RlbmVycy5pbmRleE9mKG9ic2VydmFibGUpLCAxKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogTm90aWZpZXMgYWxsIGxpc3RlbmVycyBhYm91dCBhbiBldmVudCB1cGRhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXZlbnRdIFRoZSBldmVudCBuYW1lXG4gICAqIEBwYXJhbSB7YW55fSBbZGF0YV0gVGhlIGV2ZW50IGRhdGFcbiAgICpcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHB1YmxpYyBhc3luYyBub3RpZnkoZXZlbnQ/OiBzdHJpbmcsIGRhdGE/OiBhbnkpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSAoKSA9PlxuICAgICAgdGhpcy5saXN0ZW5lcnMubWFwKG9ic2VydmFibGUgPT4ge1xuICAgICAgICBvYnNlcnZhYmxlLnVwZGF0ZShldmVudCwgZGF0YSk7XG4gICAgICB9KTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuYXN5bmMpIHtcbiAgICAgIHNldFRpbWVvdXQod3JhcHBlciwgT2JzZXJ2YWJsZS5OT1RJRklDQVRJT05fVElNRU9VVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdyYXBwZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lcnMubGVuZ3RoO1xuICB9XG59XG4iXX0=