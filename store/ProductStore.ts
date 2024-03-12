import { defineStore } from "pinia";

export const useProductStore = defineStore('productStore', () => {
    let products = [
        { 
            id: 1, 
            name: 'Digital printing', 
            subname: 'on white PVC film on fixed sheets', 
            price: 115.14, 
            stars: 5 
        },
        { 
            id: 2, 
            name: 'Screen Printing',
            subname: 'on white pVC film cut individually', 
            price: 490.64, 
            stars: 5 
        },
        { 
            id: 3, 
            name: 'UV offset printing', 
            subname: 'on white PVC film delivered individulally', 
            price: 203.25, 
            stars: 5 
        },
        { 
            id: 4, 
            name: 'Adhesive paper offset printing', 
            subname: 'delivered individually', 
            price: 124.95, 
            stars: 5 
        },
        { 
            id: 5, 
            name: 'Thermal transfer printing', 
            subname: 'on white PVC film on fixed sheets', 
            price: 209.82, 
            stars: 5 
        },
    ];

    const changeProductSubname = (newName: string) => {
        products.map(item => item.subname = newName);
//        products.map(item => console.log(item.subname));
        console.log(newName);
    }

    return {
        products,
        changeProductSubname
    }
})