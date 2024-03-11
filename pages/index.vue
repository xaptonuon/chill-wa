<template>
  <div>
    <header>
      <h1>Chill Washington</h1>
      <Navigation />
      <div class="hero-image" title="photo credit: WA State Parks Winter Recreation">
        <div id="hero-1" class="hero-text">
          <h1>Embrace the ❄️Chill❄️</h1>
        </div>
      </div>
    </header>

    <section class="links">

      <a href="https://kingcountyparks.org/2023/08/24/plan-your-next-adventure-with-backyard-fun-finder/" target="_blank">
        <img src="https://i0.wp.com/bytesandboxes.org/wp-content/uploads/2017/02/kingcountylogo_mlk.jpg?ssl=1" alt="King County Parks and Recreation logo"/>
      </a>
      <a href="https://www.piercecountywa.gov/1292/Parks-Facilities-Trails" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Logo_of_Pierce_County%2C_Washington.svg" alt="Pierce County Parks and Recreation logo"/>
      </a>
      <a href="https://www.thurstoncountywa.gov/departments/public-works/parks-trails" target="_blank">
        <img src="https://s3.us-west-2.amazonaws.com/thurstoncountywa.gov.if-us-west-2/s3fs-public/styles/max_900x600/public/2023-02/Artboard%206.png" alt="Thurston County Parks and Recreation logo"/>
      </a>
      <a href="https://lewiscountywa.gov/departments/parks-recreation/" target="_blank">
        <img src="https://wsac.org/wp-content/uploads/2020/06/Lewis_County_Logo.png" alt="Lewis County Parks and Recreation logo"/>
      </a>
    </section>

    <main class="main">
  
      <p>Chill Washington works with land management agencies and park and recreation offices to help curate web maps and practical information for your favorite winter recreation activities in Washington State, all in one place! Special thanks to the WA Counties above, helping us curate outdoor recreation opportunities across Washington, with more to come! <strong>"Embrace the Chill"</strong>--Washington’s Winter Wonderland Awaits! 
    In the map below, you can find some of Washington State's Motorized Winter Recreation trails--coded in <mark class="red">Red</mark>, and Non-Motorized Winter Recreation trails, coded in <mark class="blue">Blue</mark>. </p>

      <!-- Embedded the winterMap component here (used MapBox API)-->
      <winterMap />
    </main>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import winterMap from '@/components/winterMap'; // Import the winterMap component

export default {
  components: {
    Navigation, // Register the Navigation component
    winterMap, // Register the winterMap component
  },
  head() {
    return {
      title: 'Chill Washington',
      meta: [
        { hid: 'description', name: 'description', content: 'Chill Washington - Your guide to winter recreation in Washington State' },
      ],
    }
  },
};
</script>

<style>

</style>
