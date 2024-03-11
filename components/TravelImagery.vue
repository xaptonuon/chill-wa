<template>
  <div>
    <div v-for="(image, index) in images" :key="index" class="wr-travel-img">
      <img :src="image" :alt="alts[index]" :title="imageTitle[index]"
           @click="toggleBorder(index)" :class="{'img-border': isHidden[index], 'img-fluid': fluidImages}">
      <div class="description">{{ description[index] }}</div>
      <a :href="link[index]" class="btn btn-primary">{{ buttonText[index] }}</a>
      <div class="footer">{{ footerText[index] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TravelImagery',
  props: {
    images: {
      type: Array,
      required: true
    },
    alts: {
      type: Array,
      required: true
    },
    imageTitle: {
      type: Array,
      required: true
    },
    description: {
      type: Array,
      required: true
    },
    link: {
      type: Array,
      required: true
    },
    buttonText: {
      type: Array,
      required: true
    },
    footerText: {
      type: Array,
      required: true
    },
    fluidImages: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isHidden: new Array(this.images.length).fill(false)
    };
  },
  methods: {
    toggleBorder(index) {
      this.isHidden[index] = !this.isHidden[index];
    }
  }
};
</script>

<style scoped>
.wr-travel-img {
  margin-bottom: 20px;
  text-align: center;
}

.img-border {
  border: 5px solid #4f9e81;
}

.description {
  margin-top: 10px;
}

.footer {
  margin-top: 10px;
}
</style>
