<template>
  <div>
    <header>
      <h1>Winter Rec Activities</h1>
      <Navigation />
    </header>

    <main>
      <div class="grid-container">
        <div v-for="(activity, index) in activities" :key="index" class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-12">
            <img :src="activity.image" class="img img-fluid" :alt="activity.alt">
          </div>
          <div class="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-12">
            <div :id="'activity-carousel-' + index" class="carousel slide" data-bs-interval="false">
              <div class="carousel-inner">
                <div v-for="(item, i) in activity.items" :key="i" :class="{ 'carousel-item': true, 'active': i === 0 }">
                  <h2>{{ item.title }}</h2>
                  <h5>{{ item.subtitle }}</h5>
                  <div class="activity-languages">
                    <p v-for="(info, j) in item.info" :key="j">{{ info }}</p>
                  </div>
                </div>
              </div>
              <button :class="'carousel-control-prev'" :type="'button'" :data-bs-target="'#activity-carousel-' + index" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </button>
              <button :class="'carousel-control-next'" :type="'button'" :data-bs-target="'#activity-carousel-' + index" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue';

export default {
  name: 'WinterRecActivities',
  components: {
    Navigation
  },
  data() {
    return {
      activities: [
        {
          image: 'wa-snowmobiles.jpg',
          alt: 'Snowmobiling',
          items: [
            {
              title: 'Motorized Winter Recreation',
              subtitle: 'Snowmobiling',
              info: [
                'Snowmobiling is one of the most popular winter activities in Washington State!',
                'There are more than 3,000 miles of groomed snowmobile trails',
                'Cleared parking areas for vehicles in close proximity to groomed and/or backcountry trails.',
                'Note: Children under age 12 may not operate a snowmobile on or across a public roadway or highway.'
              ]
            },
            {
              title: 'Snowmobiling Tips',
              info: [
                'Watch your speed: Ride at a reasonable and prudent speed relative to existing conditions and other trail users.',
                'Use the Buddy System: Never snowmobile alone! In case of an accident or machine failure, that second machine and rider may be your only means for a safe return.',
                'Lights on! Always use your lights between dusk and dawn.',
                'Respect Private Property: Obtain permission from landowners before entering private property.',
                'Always respect non-motorized sports trails marked with cross-country ski signs or blue diamonds. Snowmobile traffic ruins cross-country ski tracks.',
                'DO NOT harass or endanger wildlife. Protect winter wildlife populations by viewing animals from a distance, maintaining a constant speed, and staying on your snowmobile when animals are present.',
                'NEVER ride under the influence of alcohol or drugs--or ride in a manner that would endanger lives or property.'
              ]
            }
          ]
        },
        {
          image: 'wa-snowshoeing.png',
          alt: 'Snowshoeing',
          items: [
            {
              title: 'Non-Motorized Winter Recreation',
              subtitle: 'Skiing, Snowshoeing, and Dogsledding',
              info: [
                'Discover the scenic beauty of Washington State through its extensive network of snowshoeing trails, catering to all skill levels. From the rugged terrain of the Cascade Mountains to the tranquil paths of Olympic National Park, enthusiasts can explore diverse landscapes while enjoying the simplicity and accessibility of snowshoeing.',
                'With trails ranging from beginner-friendly to challenging, cross-country skiers of all levels can also enjoy the tranquility and beauty of Washington\'s winter wonderland across the state.'
              ]
            },
            {
              title: 'Sled dogs / Mushing / Skijoring',
              info: [
                'The only sled dog trails in the state are at Crystal Springs Sno-Park.',
                'To ensure an enjoyable experience for all visitors, please respect trail courtesy and keep your dogs on leash throughout the sled dog trail system as well as the parking areas.',
                'Dogs are not allowed in the nearby Erling Stordahl Sno-Park. However, they are permitted on leash or harness only on the Palouse to Cascades State Park Trail east of Lost Lake Road crossing.',
                'The trail system comprises old logging roads, a segment of the Palouse to Cascades State Park Trail, and utility corridors, offering an excellent sled dog trail experience during the winter.',
                'Dog teams cannot stop on a dime and can be about 70 feet long.  While these are working dogs and trained to obey the musher, they may take a few seconds to come to a stop depending on their speed, team size and snow conditions.  If a team is approaching, please step to the side and give them some room.'
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.carousel {
  text-align: center;
  vertical-align: middle;
  padding: 20px;
}

.carousel p {
  margin-bottom: 8px;
}

h2, h5 {
  font-weight: bold;
}

h4 {
  font-weight: 600;
}

.activity-languages {
  padding: 10px;
}

.wr-activities {
  padding: 10px;
  text-align: left;
  margin: 10px 90px;
}

.wr-activities .info-title {
  font-weight: bold;
}

.carousel-control-next,
.carousel-control-prev {
  filter: invert(100%);
}

#activity-carousel-0,
#activity-carousel-1 {
  background-image: linear-gradient(315deg, #E0F7FA 0%, #fff 74%);
}
</style>
