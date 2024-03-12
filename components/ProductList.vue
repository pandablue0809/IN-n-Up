<script lang="ts" setup>
    import ProductCard from './ProductCard.vue';
    import { useProductStore } from '~/store/ProductStore';
//    const productStore = useProductStore();

//    const products = productStore.products;

    
    const props = defineProps({
        products: { type: Array, required: true },
    });
</script>
<template>
    <div class="" v-for="p in props.products">
        <ProductCard :product="p"/>
    </div>
</template>
<style></style>./stores/ProductStore../store/ProductStore../store/ProductStore