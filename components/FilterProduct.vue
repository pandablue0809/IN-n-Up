<script lang="ts" setup>
import { SfRadio, SfInput } from '@storefront-ui/vue';
import { ref } from 'vue';
import { useProductStore } from '~/store/ProductStore';
const productStore = useProductStore();


const paymentOption = ref('The invoice');
const productionOption = ref('Standard');
const deliveryOption = ref('Austria');
const designOption = ref('pdf/x-la and pdf/x-3');
const width = 0;

const emit = defineEmits();

const onChangeDesign = (value: string) => {
//    productStore.changeProductSubname("designOption");
    emit("changeDesign", designOption);
}
</script>
<template>
    <div class="bg-gray-100 p-10">
        <div class="grid-cols-4 flex md:flex-row flex-col mb-10">
            <!-- Format / edition -->
            <div class="basis-1/4 border shadow-xl p-5 m-2">
                <h1 class="text-center text-xl text-white bg-blue-800 p-3 mb-5 w-full">Format/Edition</h1>
                <div class="">
                    <div>
                        <label maxlength="3em" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Breite [in mm]</label>
                        <!-- <SfInput id="width" type="number" v-model="width"/> -->
                        <input type="number" id="width" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Breite [in mm]</label>
                        <input type="number" id="height" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Auflage[je Motiv]</label>
                        <input type="number" id="edition" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Anzahl Motive</label>
                        <input type="number" id="motifs" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                    </div>
                </div>
            </div>

            <!-- Typesetting & Design -->
            <div class="basis-1/4  border shadow-xl p-5 m-2">
                <h1 class="text-center text-xl text-white bg-blue-800 p-3 mb-5 w-full">Typesetting & Design</h1>
                <p class="text-sm font-bold mb-4">Data supplied</p>
                <div class="flex items-center mb-4">
                    <SfRadio 
                        v-model="designOption"
                        @change="onChangeDesign"
                        name="design"
                        id="design1"
                        value="pdf/x-la and pdf/x-3"
                        class="text-indigo-600" />
                    <label for="design1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">pdf/x-la and pdf/x-3</label>
                </div>
                <div class="flex items-center mb-4">
                    <SfRadio 
                        v-model="designOption"
                        @change="onChangeDesign"
                        name="design"
                        id="design2"
                        value="Other pdf, ai, eps, jpg"
                        class="text-indigo-600" />
                    <label for="design2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other pdf, ai, eps, jpg</label>
                </div>
                <div class="flex items-center mb-4">
                    <SfRadio 
                        v-model="designOption"
                        @change="onChangeDesign"
                        name="design"
                        id="design3"
                        value="doc, docx, pp, pub, cdr"
                        class="text-indigo-600" />
                    <label for="design3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">doc, docx, pp, pub, cdr</label>
                </div>
                <div class="flex items-center mb-4">
                    <SfRadio 
                        v-model="designOption"
                        @change="onChangeDesign"
                        name="design"
                        id="design4"
                        value="Typesetting & design"
                        class="text-indigo-600" />
                    <label for="design4" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Typesetting & design</label>
                </div>
                <a link="#" class="text-sm">Info about data formats</a>
            </div>

            <!-- Shipment -->
            <div class="basis-1/4 border shadow-xl p-5 m-2">
                <h1 class="text-center text-xl text-white bg-blue-800 p-3 mb-5 w-full">Shipment</h1>
                <div>
                    <p class="text-sm font-bold mb-4">Production time</p>
                    <div class="flex items-center mb-4">
                        <SfRadio 
                            checked
                            v-model="productionOption"
                            name="production"
                            id="production1"
                            value="Standard"
                            class="text-indigo-600" />
                        <label for="production1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Standard</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <SfRadio 
                            v-model="productionOption"
                            name="production"
                            id="production2"
                            value="Express"
                            class="text-indigo-600" />
                        <label for="production2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Express</label>
                    </div>
                </div>
                <div>
                    <p class="text-sm font-bold mb-4">Delivery country</p>
                    <div class="flex items-center mb-4">
                        <SfRadio 
                            v-model="deliveryOption"
                            name="delivery"
                            id="delivery1"
                            value="Germany"
                            class="text-indigo-600" />
                        <label for="delivery1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Germany</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <SfRadio 
                            checked
                            v-model="deliveryOption"
                            name="delivery"
                            id="delivery2"
                            value="Austria"
                            class="text-indigo-600" />
                        <label for="delivery2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Austria</label>
                    </div>
                </div>
            </div>

            <!-- Payment method-->
            <div class="basis-1/4 border shadow-xl p-5 m-2">
                <h1 class="text-center text-xl text-white bg-blue-800 p-3 mb-5 w-full">Payment</h1>
                <div>
                    <p class="text-sm font-bold mb-4">Payment method</p>
                    <div class="flex items-center mb-4">
                        <SfRadio 
                            checked
                            v-model="paymentOption"
                            name="payment"
                            id="payment1"
                            value="The invoice"
                            class="text-indigo-600" />
                            <label for="payment1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">The invoice</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <SfRadio 
                            v-model="paymentOption"
                            name="payment"
                            id="payment2"
                            value="50% advance payment"
                            class="text-indigo-600" />
                        <label for="payment2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">50% advance payment</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <SfRadio 
                            v-model="paymentOption"
                            name="payment"
                            id="payment3"
                            value="Payment in advance"
                            class="text-indigo-600" />
                        <label for="payment3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Payment in advance</label>
                    </div>
                </div>
                <div class="container border border-gray-500 shadow p-2 text-center text-sm">
                    <p>Online Discount</p>
                    <p>€5.00 net</p>
                    <p>€5.95 including VAT</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>