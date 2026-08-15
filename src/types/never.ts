type getMark = 'A+' | 'A' | 'A-';

function showMark(mark:getMark):void{
    if(mark === 'A+'){
        console.log('You got A+');
        return;
    }
    if(mark === 'A'){
        console.log('You got A');
        return;
    }
    mark;
}
console.log(showMark('A+'));