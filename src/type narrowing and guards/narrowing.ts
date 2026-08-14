const getCha = (kind : string | number): string | number => {
    if(typeof kind === 'string'){
        return `making ${kind} cha`;
    }
    return `order: ${kind}`;
}
console.log(getCha(2));
console.log(getCha('masala'));



const serveTask = (msg?:string) => {
    if(msg){
        return `${msg}`;
    }
    return `please complete the task`;
}
console.log(serveTask());
console.log(serveTask("that's it"));

class sscResult {
    publish(){
        console.log('A+ confirmed');
    }
}

class hscResult {
    publish (){
        console.log('A+ confirmed');
    }
}

const Publish = (result: sscResult | hscResult):void => {
    if(result instanceof sscResult){
        result.publish();
    }
    if(result instanceof hscResult){
        result.publish();
    }
}
console.log();