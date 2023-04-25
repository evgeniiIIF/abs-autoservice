<template>
    <main
        class="main"
        ref="main"
    >
        <VServiceSection />
        <VProfitablySection />
        <VFullscreenImage />
        <VCostSection />
        <VPopularServices />
    </main>
</template>

<script>
import computedHeaderHeight from "@/mixins/computedHeaderHeight"
import VServiceSection from "../blocks/VServiceSection.vue"
import mobileMixin from "@/mixins/mobileMode"
import VProfitablySection from "../blocks/VProfitablySection.vue"
import VFullscreenImage from "../blocks/VFullscreenImage.vue"
import VQuest from "../UI-FC/VQuest.vue"
import VCostSection from "../blocks/VCostSection.vue"
import VPopularServices from "../blocks/VPopularServices.vue"

export default {
    name: "vMain",
    mixins: [computedHeaderHeight, mobileMixin],
    components: { VServiceSection, VProfitablySection, VFullscreenImage, VQuest, VCostSection, VPopularServices },
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
    .service {
        margin: 24px 0 40px 0;
        @include md-block() {
            margin: 0;
        }
    }
    .profitably {
        @include md-block() {
            &__body {
                border-bottom: 1px solid #414141;
            }
        }
    }
    .fullscreen-image {
        @include lg-block() {
            display: none;
        }
    }
}
</style>
