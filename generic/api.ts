enum Status {
    pending = 'pending',
    shipped = 'shipped',
    deliverd = 'deliverd'
}
type Customer = {
    id: number;
    name: string;
    address: string;
}

type Product = {
    id: number;
    name: string;
    price: number;
}

type Order = {
    productId: number;
    customerId: number;
    date: string;
    status:Status
}

async function getData<T>(endPoint: string): Promise<T> {
    const res = await fetch(endPoint);
    return res.json();
};

// const customers = await getData<Customer[]>('/api/customers');
// const products = await getData<Product[]>('/api/products');
// const orders = await getData<Order[]>('/api/orders');

// orders[0].status
