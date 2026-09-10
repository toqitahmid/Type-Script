let isPaid: boolean = true;

const showPaid = (paid : boolean) : void => {
    if (paid) {
        console.log('paid');
    }
    else {
        console.log('unpaid');
    }
}

showPaid(isPaid)