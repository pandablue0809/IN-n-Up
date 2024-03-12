<template>
  <div class="h-full flex flex-col justify-between border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
    <div class="relative">
      <SfLink href="#" class="block">
        <img
          src="https://www.innup.de/images/rubbellos.png"
          alt="Rubbellos"
          class="block object-cover h-auto rounded-md"
          width="350"
          height="229"
        />
      </SfLink>
      <SfButton
        variant="tertiary"
        size="sm"
        square
        class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
        aria-label="Add to wishlist"
      >
        <SfIconFavorite size="sm" />
      </SfButton>
    </div>
    <div class="p-4 border-t border-neutral-200">
      <div class="w-full flex justify-between">
        <SfLink href="#" variant="secondary" class="no-underline"> {{ product.name }} </SfLink>
        <Tooltip v-if="product.id == 0"><strong>PVC digital printing</strong><br>The fastest printing of stickers at INnUP.<br>It is printed using 4c digital printing with solvent-based inks thatare lightfast and UV-stable for approx. 3-4 years .<br>The PVC film is 70p thick, calendered, and contains non-migrating plasticizers and UV stabilizers.<br>The stickers are delivered as standard on sheets (approx. A4 depending on usage); If you need the stickers individually, for example for distribution, please contact us. Separation is possible for a small additional charge.<br>Good quality, but it doesn't come close to the UV offset. We are happy to send samples |</Tooltip>
        <Tooltip v-if="product.id == 1"><strong>PVC - Screen printing</strong><br>- Inexpensive for long runs<br>- High UV stability<br>Attention:<br>- No color gradients possible.<br>- Printing is carried out in individual full colors (HKS ; Pantone possible without any problems).<br>- The files should be in vector format.</Tooltip>
        <Tooltip v-if="product.id == 2"><strong>PVC UV offset printing</strong><br> With these stickers you have chosen the highest brilliance of the stickers available from INnUP.<br>The printing is done in highly brilliant UV colors with a UV protective varnish finish.<br>- Printed in 4c on white PVC film with good weather resistance of the film (guarantee: 12-18 months)<br>~ Printed with brilliant colors in lightfast quality for up to 12 months<br>~ Environmentally friendly thanks to the use of solvent-free colors<br>- Stickers are delivered individually<br>~ Carrier film with slit on the back every 60mm. This can be omitted for edge lengths less than this!<br></Tooltip>
        <Tooltip v-if="product.id == 3"><strong>Paper stickers made of adhesive paper</strong><br>Printed on glossy adhesive paper (Jac paper)<br>- Image printing 80 g/m?<br>~ Delivery of the stickers: individually, punched out<br>- Slotted on the back for easier removal and sticking<br></Tooltip>
        <Tooltip v-if="product.id == 4"><strong>Thermal transfer printing on white PVC film</strong><br>- Each color is printed separately, which means color gradients are only possible to a limited extent,<br>- 5 years lightfast, UV-stable and weatherproof (except for special metallic colors).<br>- Delivery of the stickers: on sheets (approx. A4 depending on usage).<br>- Silver and/or gold can be printed as special colors, creating a shiny metallic effect.<br>- To increase scratch resistance and weather resistance, a foil cover can be ordered additionally.<br>- Resolution: Max. 24 x 12 dpmm (609 x 304 dpi)<br>- There are only a finite number of different colors because they are melted directly from an ink ribbon onto the printing material.<br>- Special feature: white, gray, gold and silver; This means that a negative pressure with white is possible.<br>- With very large printing areas, the thermal transfer print sometimes develops small cracks,depending on the color. For such motifs, we first make a proof. This may lead to delays in delivery times.<br>Metallic colors<br>If you also want to print silver and/or gold, make the appropriate selection in the selection field.<br>Example: You need a sticker to be printed in black, green and gold.<br>Choose 2/0 +gold for 2 standard colors 1 metallic color (=golden).<br></Tooltip>
        
      </div>
      <div class="flex items-center pt-1">
        <SfRating size="xs" :value="5" :max="5" />

        <SfLink href="#" variant="secondary" class="pl-1 no-underline">
          <SfCounter size="xs">{{ product.stars }}</SfCounter>
        </SfLink>
      </div>
      <div class="w-full flex justify-between">
        <p class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700">
          {{ product.subname }}
        </p>
        <Tooltip v-if="product.id == 0"><strong>Delivered on a sheet</strong><br>Several stickers are delivered together on a common carrier sheet (handy size).<br>The stickers are die-cut and can therefore be easily removed from the backing paper for sticking.<br>Note:<br>Would you like the stickers to be delivered individually (e.g. as a handout for an advertising campaign)?<br>it is also possible to produce several different motifs, sizes or shapes together on one sticker sheet.<br>Call us or use our contact form.</Tooltip>
        <Tooltip v-if="product.id == 1"><strong>Delivered individually</strong><br>The stickers are delivered individually,<br>There is a slit in the backing paper for easy sticking.<br>Note:<br>Would you like multiple stickers to be delivered on one sheet?<br>It is also possible to produce several different motifs, sizes or shapes together on one sticker sheet.<br>Call us or use our contact form.</Tooltip>
        <Tooltip v-if="product.id == 2"><strong>Delivered individually</strong><br>The stickers are delivered individually,<br>There is a slit in the backing paper for easy sticking.<br>Note:<br>Would you like multiple stickers to be delivered on one sheet?<br>It is also possible to produce several different motifs, sizes or shapes together on one sticker sheet.<br>Call us or use our contact form.</Tooltip>
        <Tooltip v-if="product.id == 3"><strong>Delivered individually</strong><br>The stickers are delivered individually,<br>There is a slit in the backing paper for easy sticking.<br>Note:<br>Would you like multiple stickers to be delivered on one sheet?<br>It is also possible to produce several different motifs, sizes or shapes together on one sticker sheet.<br>Call us or use our contact form.</Tooltip>
        <Tooltip v-if="product.id == 4"><strong>Delivered on a sheet</strong><br>Several stickers are delivered together on a common carrier sheet (handy size).<br>The stickers are die-cut and can therefore be easily removed from the backing paper for sticking.<br>Note:<br>Would you like the stickers to be delivered individually (e.g. as a handout for an advertising campaign)?<br>it is also possible to produce several different motifs, sizes or shapes together on one sticker sheet.<br>Call us or use our contact form.</Tooltip>
        
      </div>
      <span class="block pb-2 font-bold typography-text-lg">${{ product.price }}</span>
      <SfButton 
        size="sm"
        @click="addProductToCart"
        >
        <template #prefix>
          <SfIconShoppingCart size="sm" />
        </template>
        In den Einkaufswagen
      </SfButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SfRating, SfCounter, SfLink, SfButton, SfIconShoppingCart, SfIconFavorite } from '@storefront-ui/vue';
import { defineProps } from 'vue';
import Tooltip from './Tooltip.vue';

const cartStore = useCartStore();

const props = defineProps({
  product: {
    type: Object,
    default: {
      id: 0,
      name: '',
      subname: '',
      stars: 1,
      price: 0
    }
  }
});

const addProductToCart = () => {
  cartStore.addProductToCart(props.product);
  console.log(cartStore.cart);
}
</script>