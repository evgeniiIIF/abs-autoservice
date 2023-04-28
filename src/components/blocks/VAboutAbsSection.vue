<template>
	<section class="about-abs">
		<div class="container">
			<div class="about-abs__body">
				<div class="about-abs__content">
					<div class="about-abs__title">ABS-AUTO Service –</div>
					<p class="about-abs__text--green">15 лет с заботой о ваших автомобилях</p>
					<div class="about-abs__texts about-abs__texts--mobile js-about-abs-text-compress">
						<p class="about-abs__text">
							ABS-AUTO Service - сервисный центр в Ставрополе, который входит в состав торгово-инвестиционной группы
							компаний  ABS GROUP. Холдинг является одним из
							крупнейших поставщиков автомобильных запчастей и смазочных материалов в СНГ, занимается производством
							собственных запчастей под брендом ABSEL, а также
							создает современные технологичные решения для автобизнеса.
						</p>
						<p class="about-abs__text">
							В ABS-AUTO Service мы собрали команду настоящих профессионалов, которых объединяет искренняя любовь к
							автомобилям. Мы предлагаем комплексные услуги по
							ремонту и полноценному обслуживанию Вашего авто с применением только высококачественных средств и
							оборудования.
						</p>
					</div>
					<button class="about-abs-button-mobile-read-more-texts"
									@click="setHeightTextArea('.about-abs__texts--mobile', $event)">
						<span class="about-abs-button-mobile-read-more-texts__text">Читать далее</span>
						<div class="about-abs-button-mobile-read-more-texts__image">
							<img src="@/assets/img/main/about-abs/Chevron_Down_20px.svg"
									 alt="arrow" />
						</div>
					</button>
					<div class="about-abs__cards">
						<div class="about-abs__card card-about-abs">
							<div class="card-about-abs__image">
								<img src="@/assets/img/main/about-abs/yandex.svg"
										 alt="yandex" />
							</div>
							<div class="card-about-abs__stars">
								<div class="card-about-abs__star"
										 v-for="item in 4">
									<img src="@/assets/img/main/about-abs/Star1.svg"
											 alt="star" />
								</div>
								<div class="card-about-abs__star">
									<img src="@/assets/img/main/about-abs/star05.svg"
											 alt="star" />
								</div>
							</div>
						</div>
						<div class="about-abs__card card-about-abs">
							<div class="card-about-abs__image">
								<img src="@/assets/img/main/about-abs/2gis.svg"
										 alt="yandex" />
							</div>
							<div class="card-about-abs__stars">
								<div class="card-about-abs__star"
										 v-for="item in 5">
									<img src="@/assets/img/main/about-abs/Star1.svg"
											 alt="star" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="about-abs__texts">
					<p class="about-abs__text">
						ABS-AUTO Service - сервисный центр в Ставрополе, который входит в состав торгово-инвестиционной группы
						компаний  ABS GROUP. Холдинг является одним из
						крупнейших поставщиков автомобильных запчастей и смазочных материалов в СНГ, занимается производством
						собственных запчастей под брендом ABSEL, а также
						создает современные технологичные решения для автобизнеса.
					</p>
					<p class="about-abs__text">
						В ABS-AUTO Service мы собрали команду настоящих профессионалов, которых объединяет искренняя любовь к
						автомобилям. Мы предлагаем комплексные услуги по
						ремонту и полноценному обслуживанию Вашего авто с применением только высококачественных средств и
						оборудования.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	methods: {
		setHeightTextArea(selector, $event) {
			const textArea = document.querySelector(selector)
			textArea.classList.remove("js-about-abs-text-compress")
			$event.currentTarget.remove()
		},
	},
}
</script>
<style lang="scss">
@import "@/assets/scss/smart-grid.scss";
@import "@/assets/scss/mixins.scss";

.about-abs {
	&__body {
		display: flex;
		padding: 60px 0 80px;

		@include md-block() {
			padding: 40px 0;
			border-bottom: 1px solid #414141;
		}
	}

	&__content {
		margin-right: 120px;

		@include to(1024px) {
			margin-right: 0;
		}
	}

	&__title {
		margin-bottom: 8px;
		font-family: "Roboto";
		font-style: normal;
		font-weight: 700;
		line-height: 138%;
		color: #ffffff;
		@include af(32, 24);
	}

	&__text--green {
		margin-bottom: 40px;
		font-family: "Roboto";
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		line-height: 133%;
		color: #00a19c;
		@include af(24, 16);

		@include sm-block() {
			margin-bottom: 8px;
		}
	}

	&__cards {
		display: flex;
		@include mr(20px);
	}

	&__card {}

	&__texts {
		max-width: 590px;
		@include mb(20px);

		@include to(1024px) {
			display: none;
		}

		&--mobile {
			display: none;

			@include to(1024px) {
				display: block;
				margin-bottom: 8px;
				transition: all 0.3s ease 0s;
			}

		}
	}

	&__text {
		font-family: "Roboto";
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 150%;
		color: #898989;

		@include to(1024px) {
			font-size: 14px;
		}
	}
}

.card-about-abs {
	display: flex;
	align-items: center;
	padding: 16px;
	border-radius: 16px;
	background: linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%);

	@include sm-block() {
		flex-direction: column;
		flex: 1 1 auto;
	}

	&__image {
		margin-right: 40px;

		@include sm-block() {
			margin-right: 0;
			margin-bottom: 16px;
		}
	}

	&__stars {
		display: flex;
	}

	&__star {}
}

.about-abs-button-mobile-read-more-texts {
	display: none;

	@include to(1024px) {

		display: flex;
		align-items: center;
		margin-bottom: 20px;
		border: none;
		background: transparent;

		&__text {
			margin-right: 8px;
			font-family: "Roboto";
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 114%;
			color: #ffffff;
		}
	}

	&__image {}
}

.js-about-abs-text-compress {
	display: none;
	height: 60px;
	-ms-text-overflow: ellipsis;
	-o-text-overflow: ellipsis;
	text-overflow: ellipsis;
	overflow: hidden;
	-ms-line-clamp: 3;
	-webkit-line-clamp: 3;
	line-clamp: 3;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
	box-orient: vertical;

	@include to(1024px) {
		display: -webkit-box;
		display: box;
	}
}
</style>
