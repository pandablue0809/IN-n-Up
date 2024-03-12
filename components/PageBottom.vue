<template>
    <header class="flex justify-center w-full py-2 px-4 lg:py-5 lg:px-6 bg-white border-t border-neutral-200">
      <div class="flex flex-wrap lg:flex-nowrap items-center flex-row justify-start h-full max-w-[1536px] w-full">
        <a
          href="#"
          aria-label="SF Homepage"
          class="inline-block mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
        >
          <picture>
            <source srcset="https://www.innup.de/images/INnUP_Logo.png" media="(min-width: 768px)" />
            <img
              src="https://www.innup.de/images/INnUP_Logo.png"
              alt="INnUP Logo"
              class="w-[25px] md:w-[40px] lg:w-[60px]"
              />
          </picture>
        </a>

        <p class="flex items-center justify-center py-2 leading-5 text-center typography-text-sm text-neutral-500 font-body md:ml-6">
          @2024 INnUP Deutschland GmbH
        </p>
      </div>
    </header>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue';
  </script>
  

  