const mobileMixin = {
  data() {
    return {
      isMobile: false,
      isMobileForHead: false
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize(); // проверить при загрузке страницы
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 992;
      this.isMobileForHead = window.innerWidth < 1290;
    },
    setClassMobileBody() {
      const body = document.querySelector("body");
      body.classList.add("_mobile");
    },
    unsetClassMobilekBody() {
      const body = document.querySelector("body");
      body.classList.remove("_mobile");
    },
    setClassForHeadMobileBody() {
      const body = document.querySelector("body");
      body.classList.add("_mobile--header");
    },
    unsetClassForHeadMobilekBody() {
      const body = document.querySelector("body");
      body.classList.remove("_mobile--header");
    },
  },
  watch: {
    isMobile() {
      if (this.isMobile) {
        this.setClassMobileBody();
      } else {
        this.unsetClassMobilekBody();
      }
    },
    isMobileForHead() {
        if (this.isMobileForHead) {
          this.setClassForHeadMobileBody();
        } else {
          this.unsetClassForHeadMobilekBody();
        }
      },
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};

export default mobileMixin;
