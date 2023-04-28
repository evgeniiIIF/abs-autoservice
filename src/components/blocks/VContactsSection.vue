<template>
	<section class="contacts">
		<div class="container">
			<div class="contacts__body">
				<div class="contacts__content">
					<h2 class="contacts__title">Контакты</h2>
					<ul class="contacts__info info-contacts">
						<li class="info-contacts__item">ул. Доваторцев 47Б</li>
						<li class="info-contacts__item">
							<VTel phoneNumber="8 (8652) 500-520" />
						</li>
						<li class="info-contacts__item">пн-сб 9:00-19:00, вс 10:00-16:00</li>
						<li class="info-contacts__item">
							<VEmail email="info@abs-autoservice.ru" />
						</li>
					</ul>
					<div class="contacts__button">
						<VButton>Построить маршрут</VButton>
					</div>
				</div>
				<div class="contacts__map">
					<VMapUIFC />
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import VMapUIFC from '../UI-FC/VMapUIFC.vue';
import VButton from '../UI/VButton.vue';
import VEmail from '../UI/VEmail.vue';
import VTel from '../UI/VTel.vue';

export default { components: { VTel, VEmail, VButton, VMapUIFC } }
</script>
<style lang="scss">
@import "@/assets/scss/smart-grid.scss";
@import "@/assets/scss/mixins.scss";

.contacts {

	&__body {
		display: flex;
		padding: 60px 0 80px;

		@include lg-block() {
			flex-direction: column;
		}

		@include md-block() {
			padding: 40px 0;
		}
	}

	&__content {
		flex: 0 0 261px;
		margin-right: 10.25%;

		@include lg-block() {
			margin-right: 0;
			margin-bottom: 40px;
		}
	}

	&__title {
		margin-bottom: 32px;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-size: 32px;
		line-height: 138%;
		color: #FFFFFF;
	}

	&__info {
		margin-bottom: 24px;
	}

	&__button {
		.button {
			padding: 12px 20px;
		}
	}

	&__map {
		flex: 1 1 auto;
		border-radius: 16px;
		overflow: hidden;

		@include lg-block() {
			padding-top: 35%;
			position: relative;

			.map {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
			}
		}

		@include md-block() {
			padding-top: 45%;

		}

		@include sm-block() {
			margin: 0 -20px;
			padding-top: 62.5%;
		}
	}
}



.info-contacts {
	@include mb(16px);

	&__item {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 133%;
		color: #898989;
		font-stretch: 100;

		.email {
			text-decoration-line: underline;
		}
	}
}
</style>
