<template>
    <div class="relative min-h-[400px]">
      <picture>
        <source srcset="../public/baner_aboutus.jpg" media="(min-width: 768px)" />
        <img
          src="../public/baner_aboutus.jpg"
          class="absolute w-full h-full z-[-1] md:object-cover"
          alt="hero"
        />
      </picture>
      <div class="md:flex md:justify-center max-w-[1536px] mx-auto md:min-h-[400px]">
        <div class="flex flex-col md:basis-2/4 md:items-stretch md:overflow-hidden">
          <!-- <img
            src="../public/bg1.png"
            alt="Headphones"
            class="h-full object-cover object-left"
          /> -->
        </div>
        <div class="p-4 md:p-10 md:max-w-[768px] md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
          <p class="typography-text-xs md:typography-text-sm font-bold tracking-widest text-white uppercase">
            Willkommen!
          </p>
          <h1 class="typography-display-2 md:typography-display-1 md:leading-[67.5px] font-bold mt-2 mb-4 text-white">
            Über <span class="text-primary-700">IN</span>n<span class="text-primary-700">UP</span>
          </h1>
          <p class="typography-text-base md:typography-text-lg !text-white">
            Wer wir sind und wie wir helfen, Marken zum Leben zu erwecken.
          </p>
          <div class="flex flex-col md:flex-row gap-4 mt-6">            
            <SfButton size="lg" variant="secondary" class="bg-white"> Über INnUP </SfButton>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { SfButton } from '@storefront-ui/vue';
  </script>
  