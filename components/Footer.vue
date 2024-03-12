<template>
    <footer class="pt-10 bg-neutral-100">
      <div
        class="grid justify-center grid-cols-[1fr_1fr] md:grid-cols-[repeat(4,1fr)] px-4 md:px-6 pb-10 max-w-[1536px] mx-auto"
      >
        <ul v-for="{ label, subcategories } in categories" :key="label" class="grid grid-cols xs:pb-4">
          <li class="ml-4 text-lg font-medium leading-7 text-neutral-900 font-body">{{ label }}</li>
          <SfListItem
            v-for="{ subcategoryLabel, link } in subcategories"
            :key="subcategoryLabel"
            class="py-2 !bg-transparent typography-text-sm font-body"
          >
            <SfLink
              class="no-underline text-neutral-600 hover:underline hover:!text-neutral-900 active:underline active:!text-neutral-900"
              variant="secondary"
              :href="link"
            >
              {{ subcategoryLabel }}
            </SfLink>
          </SfListItem>
        </ul>
      </div>
      <hr />
      <div class="py-10 md:flex md:mx-auto max-w-[1536px]">
        <div v-for="{ label, icon, link, details } in contactOptions" :key="label" class="mx-auto my-4 text-center">
          <component :is="icon" size="lg" />
          <p class="py-1 my-2 font-medium typography-text-lg font-body">
            <SfLink
              variant="secondary"
              class="no-underline text-neutral-600 hover:underline hover:!text-neutral-900 active:underline active:!text-neutral-900"
              :href="link"
            >
              {{ label }}
            </SfLink>
          </p>
          <p v-for="option in details" :key="option" class="leading-5 typography-text-sm text-neutral-600 font-body">
            {{ option }}
          </p>
        </div>
      </div>
    </footer>
  </template>
  <script lang="ts" setup>
  import {
    SfIconContactSupport,
    SfIconFacebook,
    SfIconHelp,
    SfIconInstagram,
    SfIconCall,
    SfIconPinterest,
    SfIconTwitter,
    SfIconYoutube,
    SfButton,
    SfLink,
    SfListItem,
  } from '@storefront-ui/vue';
  const categories = [
    {
      label: 'How to buy',
      subcategories: [
        {
          subcategoryLabel: 'Payment methods',
          link: '#',
        },
        {
          subcategoryLabel: 'Order pickup',
          link: '#',
        },
        {
          subcategoryLabel: 'Purchase status',
          link: '#',
        },
        {
          subcategoryLabel: 'Track orders',
          link: '#',
        },
        {
          subcategoryLabel: 'Returns',
          link: '#',
        },
      ],
    },
    {
      label: 'Help',
      subcategories: [
        {
          subcategoryLabel: 'Help centers',
          link: '#',
        },
        {
          subcategoryLabel: 'Security & fraud',
          link: '#',
        },
        {
          subcategoryLabel: 'Feedback',
          link: '#',
        },
        {
          subcategoryLabel: 'Contact',
          link: '#',
        },
      ],
    },
    {
      label: 'Services',
      subcategories: [
        {
          subcategoryLabel: 'Gift cards',
          link: '#',
        },
        {
          subcategoryLabel: 'Order pickup',
          link: '#',
        },
        {
          subcategoryLabel: 'Purchase status',
          link: '#',
        },
        {
          subcategoryLabel: 'Track orders',
          link: '#',
        },
      ],
    },
    {
      label: 'About',
      subcategories: [
        {
          subcategoryLabel: 'About us',
          link: '#',
        },
        {
          subcategoryLabel: 'Order pickup',
          link: '#',
        },
        {
          subcategoryLabel: 'Purchase status',
          link: '#',
        },
        {
          subcategoryLabel: 'Track orders',
          link: '#',
        },
        {
          subcategoryLabel: 'Returns',
          link: '#',
        },
      ],
    },
  ];
  const socialMedia = [
    {
      label: 'Facebook',
      link: '#',
      icon: SfIconFacebook,
    },
    {
      label: 'Twitter',
      link: '#',
      icon: SfIconTwitter,
    },
    {
      label: 'Instagram',
      link: '#',
      icon: SfIconInstagram,
    },
    {
      label: 'Pinterest',
      link: '#',
      icon: SfIconPinterest,
    },
    {
      label: 'Youtube',
      link: '#',
      icon: SfIconYoutube,
    },
  ];
  const contactOptions = [
    {
      label: 'Kontakt',
      link: '#',
      details: ['Wir freuen uns auf Sie!'],
      icon: SfIconHelp,
    },
    {
      label: 'Live chat',
      link: '#',
      details: ['Mo–Do: 8:00 - 17:30 Uhr', 'Fr: 8:00 - 16:30 Uhr'],
      icon: SfIconContactSupport,
    },
    {
      label: '+49 (0)421 620 485 - 0',
      link: '#',
      details: ['Mo–Do: 8:00 - 17:30 Uhr', 'Fr: 8:00 - 16:30 Uhr'],
      icon: SfIconCall,
    },
  ];
  const bottomLinks = [
    {
      label: 'AGB',
      link: '#',
    },
    {
      label: 'Datenschutzbestimmungen',
      link: '#',
    },
  ];
  </script>
  