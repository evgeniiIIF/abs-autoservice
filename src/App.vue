<template>
    <div class="wrapper">
        <vHeader
            :showMobileMenu="showMobileMenu"
            @onGoToAnchor="onGoToAnchor"
            @onShowMobileMenu="onShowMobileMenu"
            @onShowDialog="onShowDialog"
        />
        <VMain @onShowDialog="onShowDialog" />
        <VFooter />
        <VDialogUIFC
            v-if="showDialog"
            :showDialog="showDialog"
            @onHideDialog="onHideDialog"
        >
            <VCardDialog @onHideDialog="onHideDialog" />
        </VDialogUIFC>
    </div>
</template>
<script>
import mobileMixin from "./mixins/mobileMode"
import bodyLockMixin from "@/mixins/bodyLock"
import vHeader from "./components/layout/vHeader.vue"
import VMain from "./components/layout/vMain.vue"
import VFooter from "./components/layout/vFooter.vue"
import VDialogUIFC from "./components/UI-FC/VDialogUIFC.vue"
import VCardDialog from "./components/elements/VCardDialog.vue"

export default {
    mixins: [mobileMixin, bodyLockMixin],
    components: {
        vHeader,
        VMain,
        VFooter,
        VDialogUIFC,
        VCardDialog,
    },
    data() {
        return {
            showMobileMenu: false,
            showDialog: false,
        }
    },
    methods: {
        onShowMobileMenu() {
            if (this.showDialog) {
                this.showDialog = false
            }
            this.showMobileMenu = !this.showMobileMenu
        },
        onShowDialog() {
            if (this.showMobileMenu) {
                this.showMobileMenu = false
            }
            this.showDialog = true
            this.lockBody()
        },
        onHideDialog() {
            this.showDialog = false
            this.unlockBody()
        },
        onGoToAnchor() {
            this.showMobileMenu = false
        },
        onTest() {
            console.log("onTest")
        },
    },
}
</script>
<style lang="scss">
@import "@/assets/scss/settings.scss";
#app {
    height: 100%;
}
body {
    background: #111212;
}
</style>
