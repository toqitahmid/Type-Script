"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return 'masala chai';
        case "ginger":
            return 'ginger chai';
        case "elaichi":
            return 'elaichi chai';
        default:
            return 'done';
    }
}
console.log(MakeChai({
    type: 'masala',
    spiceLevel: 5,
}));
//# sourceMappingURL=narrowingll.js.map