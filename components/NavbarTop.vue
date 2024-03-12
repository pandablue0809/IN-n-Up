<template>
    <header class="flex justify-center w-full py-2 px-4 lg:py-5 lg:px-6 bg-white border-b border-neutral-200">
      <div class="flex flex-wrap lg:flex-nowrap items-center flex-row justify-start h-full max-w-[1536px] w-full">
        <a
          href="/"
          aria-label="SF Homepage"
          class="inline-block mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
        >
          <picture>
            <source srcset="https://www.innup.de/images/INnUP_Logo.png" media="(min-width: 768px)" />
            <img
              src="https://www.innup.de/images/INnUP_Logo.png"
              alt="INnUP Logo"
              class="w-[65px] h-[52px] md:w-[85px] md:h-[68px] lg:w-[105px] lg:h-[85px]"
              />
          </picture>
        </a>
        <SfButton aria-label="Open categories" class="lg:hidden order-first lg:order-1 mr-4" square variant="tertiary">
          <SfIconMenu />
        </SfButton>
        <SfButton variant="tertiary" class="hidden lg:flex lg:mr-4" type="button">
          <template #suffix>
            <SfIconExpandMore class="hidden lg:block" />
          </template>
          <span class="hidden lg:flex whitespace-nowrap">Druckprodukte</span>
        </SfButton>
        <form
          role="search"
          class="flex flex-[100%] order-last lg:order-3 mt-2 lg:mt-0 pb-2 lg:pb-0"
          @submit.prevent="search"
        >
          <SfInput
            v-model="inputValue"
            type="search"
            class="[&::-webkit-search-cancel-button]:appearance-none"
            placeholder="Suchen"
            wrapper-class="flex-1 h-10 pr-0"
            size="base"
          >
            <template #suffix>
              <span class="flex items-center">
                <SfButton
                  variant="tertiary"
                  square
                  aria-label="search"
                  type="submit"
                  class="rounded-l-none hover:bg-transparent active:bg-transparent"
                >
                  <SfIconSearch/>
                </SfButton>
              </span>
            </template>
          </SfInput>
        </form>
        <nav class="flex-1 flex justify-end lg:order-last lg:ml-4">
          <div class="flex flex-row flex-nowrap">
            <SfLink href="/carts">
              <SfButton
                class="mr-2 -ml-0.5 rounded-md text-primary-700 hover:bg-primary-100 active:bg-primary-200 hover:text-primary-600 active:text-primary-700"
                variant="tertiary"
                square
              >
                <template #prefix>
                  <Component :is="SfIconShoppingCart"/>
                </template>
                
                <span
                  class="absolute -mt-2.5 ms-2 rounded-[0.37rem] bg-danger px-[0.3em] py-[0.25em] text-[0.7rem] leading-none text-white bg-red-600"
                >{{ cartStore.totalCartProducts }}</span>
                
              </SfButton>
            </SfLink>

            <SfButton
              v-for="actionItem in actionItems"
              :key="actionItem.ariaLabel"
              class="mr-2 -ml-0.5 rounded-md text-primary-700 hover:bg-primary-100 active:bg-primary-200 hover:text-primary-50 active:text-primary-50"
              :aria-label="actionItem.ariaLabel"
              variant="tertiary"
              square
            >
              <template #prefix>
                <Component :is="actionItem.icon"/>
              </template>
              <span v-if="actionItem.role === 'login'" class="hidden xl:inline-flex whitespace-nowrap">{{
                actionItem.label
              }}</span>
            </SfButton>
          </div>
        </nav>
      </div>
    </header>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue';
  import {
    SfButton,
    SfIconShoppingCart,
    SfIconFavorite,
    SfIconPerson,
    SfIconExpandMore,
    SfInput,
    SfIconSearch,
    SfIconMenu,
    SfLink,
  } from '@storefront-ui/vue';

  const cartStore = useCartStore();
  
  const actionItems = [
    {
      icon: SfIconFavorite,
      ariaLabel: 'Wishlist',
      role: 'button',
      label: '',
    },
    {
      label: 'Log in',
      icon: SfIconPerson,
      ariaLabel: 'Log in',
      role: 'login',
    },
  ];
  
  const inputValue = ref('');
  
  const search = () => {
    alert(`Successfully found 10 results for ${inputValue.value}`);
  };
  </script>