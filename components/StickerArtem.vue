<template>
    <div class="bg-gray-100 p-10">
        <div class="grid-cols-5 flex md:flex-row flex-col mb-10">
            <!-- Format / edition -->
            <div class="basis-2/5 border shadow-xl p-5 m-2">
                <h1 class="text-center text-xl text-white bg-blue-800 p-3 mb-5 w-full">Format/Edition</h1>
                <div class="p-5 float-left">
                    <img src="https://www.innup.de/images/INnUP_Aufkleber_weiss_rechteckig.png" class="w-full"/>
                </div>
                <div class="float-right">
                    <div>
                        <label for="width" maxlength="3em" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Breite [in mm]</label>
                        <input type="text" id="width" v-model="width" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Breite [in mm]</label>
                        <input type="text" id="height" v-model="height" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Auflage[je Motiv]</label>
                        <input type="text" id="edition" v-model="edition" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Anzahl Motive</label>
                        <input type="text" id="number" v-model="motifs" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                    </div>
                </div>
            </div>

            <!-- Typesetting & Design -->
            <div class="basis-1/5  border shadow-xl p-5 m-2">
                <h1 class="text-center text-xl text-white bg-blue-800 p-3 mb-5 w-full">Typesetting & Design</h1>
                <p class="text-sm font-bold mb-4">Data supplied</p>
                <div class="flex items-center mb-4">
                    <input id="default-radio-1" type="radio" value="pdf/x-la and pdf/x-3" v-model="dataSupplied" name="data_supplied" @change="onChangeData($event)" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">pdf/x-la and pdf/x-3</label>
                </div>
                <div class="flex items-center mb-4">
                    <input checked="checked" id="default-radio-2" type="radio" value="Other pdf, ai, eps, jpg" v-model="dataSupplied" name="data_supplied"  @change="onChangeData($event)" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other pdf, ai, eps, jpg</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="default-radio-3" type="radio" value="doc, docx, ppt, pub, cdr" v-model="dataSupplied" name="data_supplied" @change="onChangeData($event)" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-radio-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">doc, docx, pp, pub, cdr</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="default-radio-4" type="radio" value="Typesetting & design" v-model="dataSupplied" name="data_supplied" @change="onChangeData($event)" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-radio-4" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Typesetting & design</label>
                </div>
                <a link="#" class="text-sm">Info about data formats</a>
            </div>

            <!-- Shipment -->
            <div class="basis-1/5 border shadow-xl p-5 m-2">
                <h1 class="text-center text-xl text-white bg-blue-800 p-3 mb-5 w-full">Shipment</h1>
                <div>
                    <p class="text-sm font-bold mb-4">Production time</p>
                    <div class="flex items-center mb-4">
                        <input id="pro_standard" checked="checked" @change="onChangeProduction($event)" type="radio" value="Standard" name="production" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="pro_standard" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Standard</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="pro_express" type="radio" value="Express"  @change="onChangeProduction($event)" name="production" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="pro_express" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Express</label>
                    </div>
                </div>
                <div>
                    <p class="text-sm font-bold mb-4">Delivery country</p>
                    <div class="flex items-center mb-4">
                        <input id="delivery_1" type="radio"  value="Germany" name="delivery" @change="onChangeDelivery($event)" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="delivery_1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Germany</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input checked id="delivery_2" type="radio" value="Austria" name="delivery" @change="onChangeDelivery($event)" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="delivery_2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Austria</label>
                    </div>
                </div>
            </div>

            <!-- Payment method-->
            <div class="basis-1/5 border shadow-xl p-5 m-2">
                <h1 class="text-center text-xl text-white bg-blue-800 p-3 mb-5 w-full">Payment</h1>
                <div>
                    <p class="text-sm font-bold mb-4">Payment method</p>
                    <div class="flex items-center mb-4">
                        <input id="pay_invoice" type="radio" value="The invoice" name="default-radio" v-model="payment" @change="onChangePayment($event)" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="pay_invoice" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">The invoice</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input checked id="pay_half" type="radio" value="50% advance payment" name="default-radio" v-model="payment" @change="onChangePayment($event)" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="pay_half" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">50% advance payment</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input checked id="pay_advance" type="radio" value="Payment in advance" name="default-radio" v-model="payment" @change="onChangePayment($event)" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="pay_advance" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Payment in advance</label>
                    </div>
                </div>
                <div class="container border border-gray-500 shadow p-2 text-center text-sm">
                    <p>Online Discount</p>
                    <p>€5.00 net</p>
                    <p>€5.95 including VAT</p>
                </div>
            </div>
        </div>
        <!-- Results Table-->
        <div class="overflow-x-auto">
            <product-list 
                :products="result"
                @change-adhesive="receiveAdhesive"
                @change-surface="receiveSurface"
                @changeColoured="receiveColoured"
                @changeColourType="receiveColourType"
            />
        </div>

<!-- INnUP SUPPORT -->

        <div class="bg-gray-100 p-5">
            <div class="container my-12 mx-auto px-2 md:px-4 w-1/2">
                <section>
                    <div class="flex justify-center">
                        <div class="text-center md:max-w-xl lg:max-w-4xl">
                            <h2 class="mb-6 font-bold text-b-base xs:text-b-xs sm:text-b-sm lg:text-b-lg">
                                INnUP SUPPORT
                            </h2>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center justify-center">
                        <form class="mb-5  shrink-0 grow-0 basis-auto md:px-3 w-2/3">

                            <div class="mb-5 w-full">
                                <label class="block font-medium mb-[2px]" htmlFor="exampleInput90">
                                        Tel
                                </label>
                                <input type="text" class="bg-gray px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90" value="+49 (0)421 620 485 - 0" disabled/>
                            </div>

                            <div class="mb-5 w-full">
                                <label class="block font-medium mb-[2px]" htmlFor="exampleInput90">
                                        Fax
                                </label>
                                <input type="email" class="bg-gray px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90"
                                        value="+49 (0)421 620 485 - 29" disabled/>
                            </div>

                            <div class="mb-5 w-full">
                                <label class="block font-medium mb-[2px]" htmlFor="exampleInput90">
                                        Email
                                </label>
                                <input type="email" class="bg-gray px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90"
                                        value="info@innup.de" disabled/>
                            </div>
                            <div class="flex justify-center">
                                <button type="submit" class="w-full bg-blue-500 text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Contact Us</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>