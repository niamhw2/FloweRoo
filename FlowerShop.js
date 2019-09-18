class FlowerShop {
    constructor(name,address,customerRating){
        this.name = name;
        this.address = address;
        this.customerRating = customerRating;
    }
}

function acceptOrder(){
    console.log('Order Accepted');
}

function cancelOrder(){
    console.log('Order Cancelled');
}