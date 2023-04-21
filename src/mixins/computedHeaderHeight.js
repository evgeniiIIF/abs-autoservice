import { nextTick } from "vue";

const computedHeaderHeight = {
    methods: {
        getComputedHeaderHeight(){
            // this.$nextTick(()=>{
            // })
                const header = document.querySelector('.header')
                let computedStyle = window.getComputedStyle(header)
                let heightHeader = computedStyle.getPropertyValue("height")
                return heightHeader
        }
    },
  };
  
  export default computedHeaderHeight;