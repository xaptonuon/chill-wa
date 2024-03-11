<template>
  <div>
    <header>
      <h1>Winter Travel Advisory</h1>
      <Navigation />
    </header>

    <main>
      <!-- Image+Card Section w/ Bootstrap -->
      <div v-for="(item, index) in items" :key="index" class="wr-travel-section">
        <img :src="getImageUrl(item.image)" class="img-fluid img-thumbnail wr-travel-img img-border" :alt="alts[index]">
        <div class="card text-center">
          <div class="card-header">{{ item.title }}</div>
          <div class="card-body">
            <p class="card-text">{{ item.description }}</p>
            <a :href="item.link" class="btn btn-primary">{{ item.buttonText }}</a>
          </div>
          <div class="card-footer text-muted">{{ item.footerText }}</div>
        </div>
      </div>
      
      <!-- TravelImagery component -->
      <TravelImagery 
        :images="images" 
        :alts="alts" 
        :imageTitle="imageTitles" 
        :description="descriptions"
        :link="links"
        :buttonText="buttonTexts"
        :footerText="footerTexts"
      />
    </main>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue';
import TravelImagery from '~/components/TravelImagery.vue';

export default {
  name: 'TravelAdvisory',
  components: {
    Navigation,
    TravelImagery
  },
  data() {
    return {
      items: [],
      images: [
        '/snoqualmie-pass.jpg',
        '/avalanche.jpeg',
        '/snotel.jpeg'
      ],
      alts: [
        'Snowy Snoqualmie Pass',
        'Avalanche in snowy WA Cascades',
        'Snotel instrumentation technology setup'
      ],
      imageTitles: [
        'WSDOT Mountain Passes & Winter Travel',
        'Northwest Avalanche Center',
        'Washington SnoTel Sites'
      ],
      descriptions: [
        'WSDOT provides a map of all the Mountain Passes in WA State, and even provides some helpful winter driving tips! Before you hit the road in snowy, icy weather, make sure both you and your car are ready for it. You can find winter driving conditions thanks to WSDOT. Remember, it’s always best to “know before you go”. So, don’t forget to check the latest road conditions before you head out.',
        'The Northwest Avalanche Center is all about making sure folks know about avalanches, lessening their effects, and giving everyone the lowdown on mountain weather, avalanche forecasts, learning resources, and stats. It’s basically your go-to hub for all things avalanche-related!',
        'SNOTEL, short for Snowpack Telemetry, is an automated system of snowpack and related climate sensors operated by the Natural Resources Conservation Service (NRCS). It’s a great resource for winter recreation enthusiasts, as it provides valuable data on snow depth, snow water content, temperature, and other climate conditions.'
      ],
      links: [
        'https://wsdot.com/travel/real-time/mountainpasses',
        'https://nwac.us',
        'https://toolkit.climate.gov/tool/snow-telemetry-snotel-data-viewer'
      ],
      buttonTexts: [
        'WSDOT',
        'NWAC',
        'SNOTEL'
      ],
      footerTexts: [
        'Tune into the Highway Advisory Radio at 1610 AM and 530 AM, or follow them on X @wsdot_passes.',
        'Share your observations with Northwest Avalanche Center on social media with #NWAC.',
        'Share your observations and follow the Natural Resource Conservation Service on X @USDA_NRCS.'
      ]
    };
  },
  methods: {
    getImageUrl(image) {
      return require(`~/static${image}`);
    }
  },
  head() {
    return {
      title: 'Winter Travel Advisory',
      meta: [
        { hid: 'description', name: 'description', content: 'Stay informed about winter travel conditions and resources in Washington State with our winter travel advisory. Find real-time updates on mountain passes, avalanche forecasts, and snowpack telemetry data.' },
        // Add more meta tags as needed
      ],
    }
  },
};
</script>