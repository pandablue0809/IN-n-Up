<script setup>
    import { SfRating, SfCounter, SfLink } from '@storefront-ui/vue';
    defineProps({
        product: { type: Object, required: true },
        count: { type: Number, required: true },
    });
    defineEmits(["updateCount", "clear", "addOneItem", "clearOneItem"]);
</script>
<template>
    <tr class="text-sm">
        <td class="py-4">
            <div class="flex items-center">
                <span class="font-semibold">{{ product.name }}</span>
            </div>
        </td>
        <td class="">
            {{ product.subname }}
        </td>
        <td class="py-4">
            <SfRating size="xs" :value="product.stars" :max="5" />

            <SfLink href="#" variant="secondary" class="pl-1 no-underline">
            </SfLink>
        </td>
        <td class="py-4 text-center">
            {{ product.price }}€<br>
        </td>
        <td class="py-4">
            <div class="flex items-center justify-center">
                <button class="border rounded-md py-2 px-4 mr-2" @click="$emit('clearOneItem')">-</button>
                <span class="text-center w-8">{{ count }}</span>
                <button class="border rounded-md py-2 px-4 ml-2" @click="$emit('addOneItem')">+</button>
            </div>
        </td>
        <td class="py-4 text-center">
            {{ (count * product.price).toFixed(2) }}€
        </td>
        <td>
            <div @click="$emit('clear')">
                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    width="25px" height="25px" viewBox="0 0 408.483 408.483"
                    xml:space="preserve">
                    <g>
                        <g>
                            <path d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316
                                H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293
                                c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329
                                c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355
                                c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356
                                c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z"/>
                            <path d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916
                                c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z"/>
                        </g>
                    </g>
                </svg>
            </div>
        </td>
    </tr>
</template>
<style></style>