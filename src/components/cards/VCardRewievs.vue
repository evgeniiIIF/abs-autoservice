<template>
	<div class="card-rewievs js-slider-card">
		<div class="card-rewievs--desctop">
			<div class="card-rewievs__image">
				<img :src="cardData.img"
						 alt="image" />
			</div>
			<div class="card-rewievs__content">
				<div class="card-rewievs__top">
					<h6 class="card-rewievs__title ">{{ cardData.title }}</h6>
					<div class="card-rewievs__stars">
						<span class="card-rewievs__star"
									v-for="star in cardData.stars"
									:key="star">
							<img src="@/assets/img/main/reviews/Star1.svg"
									 alt="star">
						</span>
					</div>
				</div>
				<div class="card-rewievs__texts">
					<p class="card-rewievs__text">{{ cardData.texts.p1 }}</p>
					<p class="card-rewievs__text"
						 v-if="cardData.texts.p2">{{ cardData.texts.p2 }}</p>
				</div>
				<div class="card-rewievs__bottom">
					<div class="card-rewievs__button">
						<VButton>
							<span class="card-rewievs__button-text">Читать весь отзыв</span>
							<span class="card-rewievs__button-image">
								<img src="@/assets/img/main/reviews/Chevron_Right_20px.svg"
										 alt="arrow">
							</span>
						</VButton>
					</div>
					<div class="card-rewievs__button-icon">
						<VButton>
							<span class="card-rewievs__button-icon-image">
								<img :src="cardData.buttonIcon"
										 alt="arrow">
							</span>
						</VButton>
					</div>
				</div>
			</div>
		</div>
		<div class="card-rewievs--mobile">

			<div class="card-rewievs__top">
				<div class="card-rewievs__image">
					<img :src="cardData.img"
							 alt="image" />
				</div>
				<div class="card-rewievs__top-body">
					<div class="card-rewievs__stars">
						<span class="card-rewievs__star"
									v-for="star in cardData.stars"
									:key="star">
							<img src="@/assets/img/main/reviews/Star1.svg"
									 alt="star">
						</span>
					</div>
					<div class="card-rewievs__button-icon">
						<VButton>
							<span class="card-rewievs__button-icon-image">
								<img :src="cardData.buttonIcon"
										 alt="arrow">
							</span>
						</VButton>
					</div>
				</div>
			</div>

			<div class="card-rewievs__content">
				<h6 class="card-rewievs__title ">{{ cardData.title }}</h6>
				<div class="card-rewievs__texts">
					<p class="card-rewievs__text">{{ cardData.texts.p1 }}</p>
					<p class="card-rewievs__text"
						 v-if="cardData.texts.p2">{{ cardData.texts.p2 }}</p>
				</div>
			</div>

			<div class="card-rewievs__bottom">
				<div class="card-rewievs__button">
					<VButton>
						<span class="card-rewievs__button-text">Читать весь отзыв</span>
						<span class="card-rewievs__button-image">
							<img src="@/assets/img/main/reviews/Chevron_Right_20px.svg"
									 alt="arrow">
						</span>
					</VButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import VButton from '../UI/VButton.vue';

export default {
	props: {
		cardData: {
			type: Object,
		},
	},
	components: { VButton }
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/smart-grid.scss";

.card-rewievs--desctop {
	@include lg-block {
		display: none;
	}
}

.card-rewievs--mobile {
	display: none;

	@include lg-block {
		display: block;
		min-width: 240px;
	}

	.card-rewievs__top {
		align-items: stretch;
	}

	.card-rewievs__title {
		margin-bottom: 8px;
	}

	.card-rewievs__top-body {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.button {
			padding: 8px 16px;
		}

		.card-rewievs__button-icon-image {}
	}

	.card-rewievs__texts {
		height: 96px;
		overflow: hidden;
		display: -webkit-box;
		display: box;
		-ms-text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		-ms-line-clamp: 4;
		-webkit-line-clamp: 4;
		line-clamp: 4;
		word-wrap: break-word;
		-webkit-box-orient: vertical;
		box-orient: vertical;
		@include mb(20px);
		margin-bottom: 20px;
	}

}

.card-rewievs {
	display: flex;
	background: linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%);
	border-radius: 16px;
	padding: 16px 22px 40px 16px;

	&__image {
		width: 72px;
		margin-right: 24px;

		img {
			width: 100%;
			border-radius: 8px;
			overflow: hidden;

		}
	}

	&__content {
		padding-top: 8px;
	}

	&__top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 12px;
	}


	&__title {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 500;
		line-height: 133%;
		color: #FFFFFF;
		@include af(18, 14)
	}

	&__stars {}

	&__star {}

	&__texts {
		height: 176px;
		overflow: hidden;
		display: -webkit-box;
		display: box;
		-ms-text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		-ms-line-clamp: 8;
		-webkit-line-clamp: 8;
		line-clamp: 8;
		word-wrap: break-word;
		-webkit-box-orient: vertical;
		box-orient: vertical;
		@include mb(20px);
		margin-bottom: 20px;
	}

	&__text {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 143%;
		color: #898989;
	}

	&__bottom {
		display: flex;
		justify-content: space-between;
	}

	&__button {
		.button {
			padding: 10px 10px 10px 20px;
			background: #414141;
			border-color: #414141;
		}
	}

	&__button-text {
		margin-right: 8px;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 114%;
		color: #FFFFFF;

	}

	&__button-image {}

	&__button-icon {
		.button {
			padding: 8px 16px;
			border-radius: 8px;
			background: #F6F6F6;
			border-color: #F6F6F6;
		}
	}

	&__button-icon-text {}

	&__button-icon-image {

		img {
			width: 100%;
		}
	}
}
</style>
