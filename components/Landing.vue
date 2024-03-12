<template>
    <div class="mx-auto bg-gray-100 p-1 sm:p-10 w-4/5">
      <div class="flex flex-col items-center pb-8">
        <h1 class="typography-headline-1 text-center">TOLLE Produkte</h1>
        <h2 class="typography-headline-2 text-center">VIEL Auswahl</h2>
        <h3 class="typography-headline-2 text-center">VOLL nette Beratung</h3>
        <p class="typography-text-lg text-center">Viele, viele bunte Flyer...</p>
      </div>
      <div class="pb-8">
        <FilterProduct 
          @changeDesign="receiveEmit"
        />
      </div>
      <div class="flex flex-col lg:flex-row justify-around pb-8">
        <ProductList :products="products"/>
      </div>
      
    </div>
    <div class="mx-auto bg-primary-100 p-1 sm:p-10">
      <div class="flex flex-col items-center pb-8">
        <h1 class="typography-headline-1 text-center text-white">TOLLE Produkte</h1>
        <p class="typography-text-lg text-center text-white">Viele, viele bunte Flyer...</p>
      </div>
    </div>
    
    <Footer class="mx-auto bg-gray-100 p-1 sm:p-10 w-4/5"/>
  </template>
  
  <script lang="ts" setup>
    import { SfButton } from '@storefront-ui/vue';
    import NavbarTop from './NavbarTop.vue';
    import PageBottom from './PageBottom.vue';
    import ProductList from './ProductList.vue';
    import FilterProduct from './FilterProduct.vue';
    import StickerArtem from './StickerArtem.vue';
    import Footer from './Footer.vue';
  
    const products = ref([
        { id: 0, name: 'Digital printing', subname: 'on white PVC film on fixed sheets', price: 115.14, stars: 5 },
        { id: 1, name: 'Screen Printing', subname: 'on white pVC film cut individually', price: 490.64, stars: 5 },
        { id: 2, name: 'UV offset printing', subname: 'on white PVC film delivered individulally', price: 203.25, stars: 5 },
        { id: 3, name: 'Adhesive paper offset printing', subname: 'delivered individually', price: 124.95, stars: 5 },
        { id: 4, name: 'Thermal transfer printing', subname: 'on white PVC film on fixed sheets', price: 209.82, stars: 5 },
        //{ name: 'Flexographic printing', subname: 'on white foil delivered on roil', price: 1000, stars: 5 },
    ]);

    const receiveEmit = (value: string) => {
      console.log(value);
      products.value.map(item => item.subname = value);
    }
  </script>
  
  <style>
  /* Import your global styles here */
  @import "./styles/globals.css";
  </style>
  