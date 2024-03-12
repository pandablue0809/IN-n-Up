<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
    <div class="flex flex-wrap gap-4 lg:gap-6">
      <div
        v-for="({ image,title, button }, index) in cardDetails"
        :key="`${title}-${index}`"
        class="flex flex-col min-w-[325px] max-w-[375px] lg:w-[366px] relative border border-neutral-200 rounded-md bg-white hover:shadow-xl"
      >
        <a
          class="absolute inset-0 z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
          href="#"
        />
        <img  :src="image" :alt="title" class="object-cover h-auto rounded-t-md aspect-video" />
        <div class="flex flex-col items-start p-4 grow">
          <p class="font-medium typography-text-base text-primary-700">{{ title }}</p>
          <!-- <p class="mt-1 mb-4 font-normal typography-text-sm text-neutral-700">{{ description }}</p> -->
          <!-- <SfButton size="sm" variant="tertiary" class="relative mt-auto">{{ button }}</SfButton> -->
        </div>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  import { SfButton } from '@storefront-ui/vue';
  import { cardDetails } from '~/store/CardDetails';  
 
  </script>
  