"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getCha = (kind) => {
    if (typeof kind === 'string') {
        return `making ${kind} cha`;
    }
    return `order: ${kind}`;
};
console.log(getCha(2));
console.log(getCha('masala'));
const serveTask = (msg) => {
    if (msg) {
        return `${msg}`;
    }
    return `please complete the task`;
};
console.log(serveTask());
console.log(serveTask("that's it"));
class sscResult {
    publish() {
        console.log('A+ confirmed');
    }
}
class hscResult {
    publish() {
        console.log('A+ confirmed');
    }
}
const Publish = (result) => {
    if (result instanceof sscResult) {
        result.publish();
    }
    if (result instanceof hscResult) {
        result.publish();
    }
};
console.log();
//# sourceMappingURL=narrowing.js.map