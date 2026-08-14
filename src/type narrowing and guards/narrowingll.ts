type MasalaChai = {type: 'masala'; spiceLevel: number}
type GingerChai = {type: 'ginger'; amount: number}
type ElaichiChai = {type: 'elaichi'; aroma: number}

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai (order: Chai){
    switch(order.type){
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