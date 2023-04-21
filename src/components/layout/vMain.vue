<template>
    <main
        class="main"
        ref="main"
    >
        <VServiceSection />
        <VProfitablySection />
    </main>
</template>

<script>
import computedHeaderHeight from "@/mixins/computedHeaderHeight"
import VServiceSection from "../blocks/VServiceSection.vue"
import mobileMixin from "@/mixins/mobileMode"
import VProfitablySection from "../blocks/VProfitablySection.vue"

export default {
    name: "vMain",
    mixins: [computedHeaderHeight, mobileMixin],
    components: { VServiceSection, VProfitablySection },
    watch: {
        isMobile() {
            this.setMarginTop()
        },
        isMobileForHead() {
            this.setMarginTop()
        },
    },
    methods: {
        setMarginTop() {
            const main = this.$refs.main

            if (this.isMobileForHead) {
                main.style.marginTop = this.getComputedHeaderHeight()
            } else {
                main.style.marginTop = ""
            }
        },
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/smart-grid.scss";

.main {
}
</style>
