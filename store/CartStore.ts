import type { Product } from "~/types";

export const useCartStore = defineStore('cartStore', () => {
    const cart = useLocalStorage<Product[]>('cart', []);
//    const cart: Product[] = [];
    // total products in the cart
    const totalCartProducts = computed(() => {
        let count = 0;
        cart.value.map((item) => {
            count += item?.quantity;
        })
        return count;
//        return cart.length;
    });

    const productQuantity = computed(() => (productID: number) => {
        const item = cart.value.find((item) => item.id === productID);
        return item?.quantity
    });
    
    // the total price of all the products in the cart
    const totalProductsPrice = computed(() => {
        return cart.value.reduce((val: number, product: Product) => val + product.price * product?.quantity, 0).toFixed(2);
//        return cart.reduce((val: number, product: Product) => val + product.price * product?.quantity, 0).toFixed(2);
    });

    const addProductToCart = (product: Product) => {
        // Check if the product exists in the cart
        const item = cart.value.find((item) => item.id === product.id);
//        const item = cart.find((item) => item.id === product.id);
        if(item) {
            // if it does exist increase the quantity
            return item.quantity ++;
        }
        else {
            // if it does not exist, add the product to the cart as well as quantity
            cart.value.push({ ...product, quantity: 1});
//            cart.push({ ...product, quantity: 1});
        }
    }

    const removeProductFromCart = (productID: number) => {
        // check if the product exists in the cart
        const item = cart.value.find((item: Product) => item.id === productID);
//        const item = cart.find((item: Product) => item.id === productID);

        if(item) {
            // if the product exists in the cart and the quantity is greater than one, we decrease the quantity
            if(item.quantity && item.quantity > 1) {
                return item.quantity --;
            } else {
                // if the quantity is less than one, we remove the product from the cart
                cart.value = cart.value.filter((item: Product) => item.id !== productID)
            }
        }
    };

    const removeAllProductFromCart = (productID: number) => {
        cart.value = cart.value.filter((item: Product) => item.id !== productID)
    }

    return {
        cart,
        totalCartProducts,
        productQuantity,
        totalProductsPrice,
        addProductToCart,
        removeProductFromCart,
        removeAllProductFromCart
    }
})