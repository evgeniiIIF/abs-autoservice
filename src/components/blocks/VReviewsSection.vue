<template>
	<section class="reviews">
		<div class="container">
			<div class="reviews__body">
				<div class="reviews__slider"
						 v-if="!md">
					<VSlider :sliderOpts="sliderOpts" />
				</div>
				<div class="reviews__cards"
						 v-else>
					<div class="reviews__cards-line js-progress-container">

						<div class="reviews__card"
								 v-for="item in sliderOpts.slides">
							<VCardRewievs :cardData="item.cardData" />
						</div>
					</div>
					<div class="rewiews__cards-progress">
						<VProgressBarX progressContainerSelector=".js-progress-container" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import mobileMixin from "@/mixins/mobileMode";
import VSlider from "../UI-FC/VSlider.vue"
import VCardRewievs from "../cards/VCardRewievs.vue";
import VProgressBarX from "../UI/VProgressBarX.vue";

export default {
	components: { VSlider, VCardRewievs, VProgressBarX },
	mixins: [mobileMixin],
	data() {
		return {
			sliderOpts: {
				top: true,

				slides: [
					{
						cardData: {
							img: require("@/assets/img/main/reviews/Rectangle1.jpg"),
							title: "Екатерина Константинопольская",
							texts: {
								p1: 'Это восторг!😍 19.10.2022 г. мы провели свою свадьбу в ресторане Hotel на Пушкина.',
								p2: "Увидела рекламу ресторана в интернете, решили приехать, посмотреть локацию. Сначала сомневалась, стоит ли устраивать свадьбу в отеле, да еще и на 4 этаже, боялась, что не сможем как следует повеселиться, пошуметь, короче отметить с размахом. НО! Как только мы приехали на место, все сомнения вообще отпали! Администратор Мария, очень милая девушка все объяснила, рассказала и показала. Шумоизоляция тут отличная, есть вообще все удобства на этаже, даже выходить никуда не надо! И очень крутой вид! Особенно вечером…"
							},
							stars: 5,
							buttonIcon: require('@/assets/img/main/reviews/yandex2.svg')
						},
					},
					{
						cardData: {
							img: require("@/assets/img/main/reviews/Rectangle1.jpg"),
							title: "Екатерина Константинопольская",
							texts: {
								p1: 'Ресторан - это любовь с первого взгляда❤️',
								p2: "Мы с будущим мужем работали рядом с Hotel и часто приходили сюда на бизнес-ланчи обедать. Все всегда было вкусно, цены хорошие и персонал невероятно приятный😍"
							},
							stars: 5,
							buttonIcon: require('@/assets/img/main/reviews/yandex2.svg')
						},
					},
					{
						cardData: {
							img: require("@/assets/img/main/reviews/Rectangle1.jpg"),
							title: "Екатерина Константинопольская",
							texts: {
								p1: 'Это восторг!😍 19.10.2022 г. мы провели свою свадьбу в ресторане Hotel на Пушкина.',
								p2: "Увидела рекламу ресторана в интернете, решили приехать, посмотреть локацию. Сначала сомневалась, стоит ли устраивать свадьбу в отеле, да еще и на 4 этаже, боялась, что не сможем как следует повеселиться, пошуметь, короче отметить с размахом. НО! Как только мы приехали на место, все сомнения вообще отпали! Администратор Мария, очень милая девушка все объяснила, рассказала и показала. Шумоизоляция тут отличная, есть вообще все удобства на этаже, даже выходить никуда не надо! И очень крутой вид! Особенно вечером…"
							},
							stars: 5,
							buttonIcon: require('@/assets/img/main/reviews/yandex2.svg')
						},
					},
					{
						cardData: {
							img: require("@/assets/img/main/reviews/Rectangle1.jpg"),
							title: "Екатерина Константинопольская",
							texts: {
								p1: 'Это восторг!😍 19.10.2022 г. мы провели свою свадьбу в ресторане Hotel на Пушкина.',
								p2: "Увидела рекламу ресторана в интернете, решили приехать, посмотреть локацию. Сначала сомневалась, стоит ли устраивать свадьбу в отеле, да еще и на 4 этаже, боялась, что не сможем как следует повеселиться, пошуметь, короче отметить с размахом. НО! Как только мы приехали на место, все сомнения вообще отпали! Администратор Мария, очень милая девушка все объяснила, рассказала и показала. Шумоизоляция тут отличная, есть вообще все удобства на этаже, даже выходить никуда не надо! И очень крутой вид! Особенно вечером…"
							},
							stars: 5,
							buttonIcon: require('@/assets/img/main/reviews/yandex2.svg')
						},
					},
				],
			}
		}
	},
}
</script>
<style lang="scss">
@import "@/assets/scss/smart-grid.scss";
@import "@/assets/scss/mixins.scss";

.reviews {

	&__body {
		padding: 60px 0 40px;

		@include md-block() {
			padding: 40px 0;
		}
	}

	&__slider {}

	&__cards {}

	&__cards-line {
		display: flex;
		overflow-x: auto;
		margin-bottom: 24px;

		@include mr(20px);
		@include hideScroll();

		@include md-block() {
			margin-right: -20px;
		}
	}

	&__card {}
}
</style>
