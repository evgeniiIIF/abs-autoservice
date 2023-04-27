<template>
	<div ref="slider"
			 class="slider"
			 @touchstart="startSwipe"
			 @touchmove="swipe"
			 @touchend="endSwipe">
		<div class="slider__body">
			<div class="slider__top"
					 v-if="sliderOpts.top">
				<h3 class="slider__title">Отзывы клиентов</h3>
				<div class="slider__nav nav-slider">
					<button class="nav-slider__prev"
									@click="goToPrevSlide">
						<img src="@/assets/img/main/reviews/Arrow_Left_MD.svg"
								 alt="arrow" />
					</button>
					<button class="nav-slider__next"
									@click="goToNextSlide">
						<img src="@/assets/img/main/reviews/Arrow_Left_MD.svg"
								 alt="arrow" />
					</button>
				</div>
			</div>
			<div class="slider__line"
					 :style="currentOffset">
				<div ref="slide"
						 class="slider__slide slide-slider"
						 v-for="(slide, index) in sliderOpts.slides"
						 :key="index">
					<div class="slide-slider__image ibg"
							 v-if="slide.image"
							 ref="element">
						<img :src="slide.image"
								 alt="slide" />
					</div>
					<div class="slide-slider__element"
							 v-if="slide.cardData">
						<VCardRewievs ref="element"
													:cardData="slide.cardData" />
					</div>
				</div>
			</div>
			<div class="slider__progress progress-slider">
				<div class="progress-slider__item"
						 v-for="(item, index) in sliderOpts.slides.length"
						 :key="index"
						 :class="index === currentIndex ? 'progress-slider__item--active' : ''">
					<span class="progress-slider__item-active-line"></span>
				</div>
			</div>
			<div class="slider__bottom"
					 v-if="sliderOpts.bottom">
				<div class="slider__nav nav-slider">
					<button class="nav-slider__prev"
									@click="goToPrevSlide">
						<img src=""
								 alt="arrow" />
					</button>
					<button class="nav-slider__next"
									@click="goToNextSlide">
						<img src=""
								 alt="arrow" />
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import VCardRewievs from '@/components/cards/VCardRewievs.vue'
import { nextTick } from 'vue';

export default {
	props: {
		sliderOpts: {
			type: Object,

		}
	},
	components: {
		VCardRewievs
	},
	data() {
		return {
			currentIndex: 0,
			currentOffset: '0px',
			offsetWidthSlide: 0,

			startTouchX: null,
			diff: 0,
		};
	},
	mounted() {
		if (!this.slideWidth) {
			this.setSlideWidth();
		}
		window.addEventListener('resize', () => {
			this.setSlideWidth();
		});
	},
	methods: {
		setSlideWidth() {
			const element = this.$refs.element;
			const slideIsImage = !!this.sliderOpts.slides[0].image;

			if (slideIsImage) {
				nextTick(() => {
					this.offsetWidthSlide = element[0].clientWidth;
				});
			} else {
				nextTick(() => {
					if (element && this.$refs.slide) {
						const marginRightSlide = parseInt(getComputedStyle(this.$refs.slide[0]).marginRight);
						const elWidth = element[0].$el.clientWidth;
						this.offsetWidthSlide = elWidth + marginRightSlide;
						// this.$refs.slide.forEach((slide) => {
						// 	slide.style.width = elWidth + 'px';
						// });
					}
				});
			}
		},
		goToPrevSlide() {
			this.currentIndex--;
			if (this.currentIndex < 0) {
				this.currentIndex = this.sliderOpts.slides.length - 1;
			}
		},
		goToNextSlide() {
			this.currentIndex++;
			if (this.currentIndex > this.sliderOpts.slides.length - 1) {
				this.currentIndex = 0;
			}
			console.log(this.currentIndex);
		},
		startSwipe(e) {
			this.startTouchX = e.touches[0].clientX;
		},
		swipe(e) {
			if (this.startTouchX == null) return;

			const currentTouchX = e.touches[0].clientX;
			this.diff = currentTouchX - this.startTouchX;
		},
		endSwipe() {
			if (this.startTouchX == null) return;

			const threshold = this.$refs.slider.clientWidth / 4;

			if (Math.abs(+this.diff) > threshold) {
				if (this.diff < 0) {
					this.goToNextSlide();
				} else {
					this.goToPrevSlide();
				}
			}

			this.diff = 0;
			this.startTouchX = null;
		},
	},
	watch: {
		currentIndex() {
			this.setSlideWidth();
			const offset = -this.currentIndex * this.offsetWidthSlide
			this.currentOffset = { transform: 'translateX(' + offset + 'px)' }
		}
	},

	mounted() {
		const intervalSlide = setInterval(() => {
			console.log(this.currentIndex);
			this.goToNextSlide()
		}, 3000);
	}
};
</script>

<style lang="scss">
@import '@/assets/scss/smart-grid.scss';
@import '@/assets/scss/mixins.scss';

.slider {
	position: relative;
	width: 100%;

	&__body {
		overflow: hidden;
	}

	&__top {
		display: flex;
		justify-content: space-between;
		margin-bottom: 16px;
	}

	&__title {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		line-height: 138%;
		color: #FFFFFF;
		@include af(32, 24)
	}

	&__line {
		display: flex;
		transition: transform 0.5s ease;
		min-height: 200px;
		@include mr(20px)
	}

	&__slide {
		flex: 0 0 calc(50% - 10px);
	}

	&__nav {}

	&__progress {}
}

.slide-slider {
	position: relative;
	width: 100%;

	&__image {
		&.ibg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
		}
	}
}

.nav-slider {
	display: flex;

	@include mr(20px);

	@include md-block() {
		display: none;
	}

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		padding: 12px;
		background: #00A19C;
		border-radius: 4px;
	}

	&__prev {
		img {
			transform: rotate(180deg);
		}
	}

	&__next {}
}

.progress-slider {
	display: flex;
	justify-content: center;
	@include mr(4px);

	&__item {
		width: 23px;
		height: 2px;
		background: #414141;



		&--active {
			& .progress-slider__item-active-line {
				width: 100%;
				transition: all 3s ease 0.3s;
			}
		}


	}

	&__item-active-line {
		display: block;
		width: 0%;
		height: 100%;
		background: #00A19C;
	}


}
</style>
