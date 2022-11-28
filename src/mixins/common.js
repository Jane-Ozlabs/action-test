let commonMixin = {
  methods: {
    goPage(url) {
      if (this.$route.path === url) return;
      this.$router.push(url);
    },
  },
};

export default commonMixin;
