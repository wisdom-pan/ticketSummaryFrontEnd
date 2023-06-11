
<script>
export default {
  data() {
    return {
      url: ''
    }
  },
  created(){
    this.goToExternalLink()
  },
  methods: {
  goToExternalLink () {
    window.open('http://kuaijieai.com', '_blank')
  }
}
}
</script>