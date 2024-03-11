// my mixin JS for toggling the image border for assignment 8.
// create a "winter green" border around images on my "Travel Advisory page" (that's basically what I've been using as my "images" page for this course project/website.)

export default {
  data () {
    // Initialize the data property `isHidden` to false
    return {
      isHidden: false
    }
  },
  methods: {
    // Define a method called `toggleBorder` to toggle the value of `isHidden`
    toggleBorder() {    
      this.isHidden = !this.isHidden;
    }
  }
}