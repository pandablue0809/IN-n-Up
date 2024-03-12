<script setup>
    import NavbarTop from "./NavbarTop.vue";
    import PageBottom from "./PageBottom.vue";
//    import CartItem from "./CartItem.vue";

    const cartStore = useCartStore();
</script>
<template>
    <div class="bg-gray-100 h-screen py-8">
        <div class="container mx-auto px-4">
            <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
            <div class="flex flex-col md:flex-row gap-4">
                <div class="md:w-3/4">
                    <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                        <table class="w-full">
                            <thead>
                                <tr>
                                    <th class="text-left font-semibold">Product</th>
                                    <th class="text-left font-semibold">Description</th>
                                    <th class="text-left font-semibold"></th>
                                    <th class="text-center font-semibold">Price</th>
                                    <th class="text-center font-semibold">Quantity</th>
                                    <th class="text-center font-semibold">Total</th>
                                    <th class="text-left font-semibold"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <CartItem 
                                    v-for="(item) in cartStore.cart"
                                    :key="item.id"
                                    :product="item"
                                    :count="cartStore.productQuantity(item.id)"
                                    @clear="cartStore.removeAllProductFromCart(item.id)"
                                    @addOneItem="cartStore.addProductToCart(item)"
                                    @clearOneItem="cartStore.removeProductFromCart(item.id)"
                                    />
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="md:w-1/4">
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <h2 class="text-lg font-semibold mb-4">Summary</h2>
                        <div class="flex justify-between mb-2">
                            <span>Net Total</span>
                            <span>{{ cartStore.totalProductsPrice }}€</span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span>0.00€</span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <span>VAT Total</span>
                            <span>0€</span>
                        </div>
                        <hr class="my-2">
                        <div class="flex justify-between mb-2">
                            <span class="font-semibold">Total</span>
                            <span class="font-semibold">{{ cartStore.totalProductsPrice }}€</span>
                        </div>
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>