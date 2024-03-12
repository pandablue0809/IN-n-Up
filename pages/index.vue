<template>
    <Hero />
    <div class="mx-auto bg-primary-50 p-1 sm:p-10">
      <div class="md:max-w-[1536px] mx-auto flex flex-col items-center pb-8">
        <h2 class="typography-headline-2 text-center text-primary-700">Next Level Printing - INnUP</h2>
        <p class="typography-text-lg pl-10 pr-10 pt-5 text-center text-neutral-600">INnUP relies on highly trained and motivated employees , supported by the latest technology, especially artificial intelligence (AI) , to make your print purchasing a highly stable and successful experience. From advice and sampling through print data handling to print execution and delivery, you receive a high level of security that your requirements will be recognized and implemented , and at the lowest price that we, and probably most, have for this each specific requirement is possible.</p>
      </div>
    </div>
    <div class="bg-gray-100 p-1 sm:p-10">
      <h2 class="typography-headline-2 text-center text-primary-700 p-10">Unsere Produkte</h2>
      <div class="mx-auto max-w-[1536px] w-11/12 flex flex-col lg:flex-row justify-around pb-8">      
        <ProductCategory/>
      </div>
    </div>
    <Banner_AbutUs/>
    <div class="md:max-w-[1536px] mx-auto w-4/5 sm:p-10">
      <div class="flex flex-col items-center">
        <h2 class="typography-headline-2 text-center text-primary-700 pt-10 pb-10">IHRE VORTEILE BEI INnUP</h2>
      </div>      
      <div class="md:flex md:justify-center md:flex-wrap max-w-[1536px] mx-auto">
        <div class="md:basis-2/4 md:items-stretch md:overflow-hidden pb-10">
          <div class="flex flex-row items-center">
            <div class="w-[70px] mr-[5px]">
              <img src="../public/Group 1.png" alt="">
            </div>
            <h3 class="typography-headline-3 text-primary-500">Druck mit Sicherheit</h3>
          </div>
          <ul class="typography-text-lg pl-10 sm:pl-20 sm:pr-10 pt-5 text-neutral-500 list-disc">
            <li>Persönliche Beratung durch Druckfachleute. Feste Ansprechpartner</li>
            <li>Vorab-Bemusterung von Material und Drucktechnik</li>
            <li>Dateien-Prüfung durch unsere Vorstufe</li>
            <li>Druckdaten-Freigabe durch Sie. Andrucke und Proofs auf Wunsch</li>
          </ul>
        </div>
        <div class="md:basis-2/4 md:items-stretch md:overflow-hidden">
          <div class="flex flex-row items-center">
            <div class="w-[70px] mr-[5px]">
              <img src="../public/Group2.png" alt="">
            </div>
            <h3 class="typography-headline-3 text-primary-500"> Einfachste Bestellprozesse</h3>
          </div>
          <ul class="typography-text-lg pl-10 sm:pl-20 pr-10 pt-5 text-neutral-500 list-disc">
            <li>Kalkulation online. Oder als individuelles Angebot via Email</li>
            <li>Bestellung auf Rechnung. Online, per Email oder Fax</li>
            <li>Druckdaten-Annahme vom pdf/X-1 über jpg bis Skizze</li>
            <li>Archivierung Ihrer Druckdaten zur einfacheren Nachbestellung</li>
          </ul>
        </div>
        <div class="md:basis-2/4 md:items-stretch md:overflow-hidden">
          <div class="flex flex-row items-center">
            <div class="w-[70px] mr-[5px]">
              <img src="../public/Group3.png" alt="">
            </div>
            <h3 class="typography-headline-3 text-primary-500">Corporate Dienstleistungen</h3>
          </div>
          <ul class="typography-text-lg pl-10 sm:pl-20 pr-10 pt-5 text-neutral-500 list-disc">
            <li>Rahmenverträge für Ihr Cashflow- und Inventorymanagement</li>
            <li>Einlagerung und Abrufe auf Wunsch</li>
            <li>Zählen, sortieren, konfektionieren. Verteilerversand direkt an Ihre Filialen</li>
            <li>PO-Nummern und Projektnamen in Auftragsbestätigungen und Rechnungen</li>
          </ul>
        </div>
        <div class="md:basis-2/4 md:items-stretch md:overflow-hidden">
          <div class="flex flex-row items-center">
            <div class="w-[70px] mr-[5px]">
              <img src="../public/Group4.png" alt="">
            </div>
            <h3 class="typography-headline-3 text-primary-500">Produktionsprozesse nach Ihren Wünschen</h3>
          </div>
          <ul class="typography-text-lg pl-10 sm:pl-20 pr-10 pt-5 text-neutral-500 list-disc">
            <li>Druck auf der günstigen Sammelform oder individuell nur für Sie</li>
            <li>Liefertermine auf Wunsch vorziehen</li>
            <li>Jenseits von DIN-Maßen: Sonder- und Individualformate fast aller Druckprodukte</li>
            <li>Jenseits von 4c: Druck in Ihren Pantone- und HKS-Hausfarben</li>
          </ul>
        </div>
      </div> 
    </div>
    <NewsletterBox/>       
    <Footer class="mx-auto bg-gray-100 p-1 sm:p-10 w-4/5"/>
</template>
<script setup lang="ts">
    import Hero from '~/components/Hero.vue';
    import Footer from '~/components/Footer.vue';
    import ProductCategory from '~/components/ProductCategory.vue';
    import NewsletterBox from '~/components/NewsletterBox.vue';
    import Banner_AbutUs from '~/components/Banner_AbutUs.vue';
</script>
<script></script>