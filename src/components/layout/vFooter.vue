<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__body">
				<div class="footer__top top-footer">
					<div class="top-footer__left">
						<div class="top-footer__logo">
							<img src="@/assets/img/header/logo/Logo.svg"
									 alt="logo">
						</div>
						<div class="top-footer__nav">
							<VNav :menuItems="menuItems" />
						</div>
					</div>
					<div class="top-footer__social">
						<VTelegram />
						<VWhatsapp />
					</div>
				</div>
				<div class="footer__copy copy-footer">
					<p class="copy-footer__text copy-footer__left">© ABS-autoservice, 2023</p>
					<p class="copy-footer__text copy-footer__right">Политика конфиденциальности</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import VLogo from '../UI/VLogo.vue';
import VNav from '../UI/VNav.vue';
import VTelegram from '../UI/VTelegram.vue';
import VWhatsapp from '../UI/VWhatsapp.vue';

export default {
	name: "vFooter",
	components: { VLogo, VNav, VTelegram, VWhatsapp },
	data() {
		return {
			menuItems: [
				'Акции',
				'Расчет стоимости',
				'Услуги',
				'Бонусная программа',
			]
		}
	}
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/smart-grid.scss";

.footer {

	background: linear-gradient(180deg, #2A2A2A 0%, rgba(17, 18, 18, 0) 20%);

	&__body {}

	&__top {
		padding: 60px 0;
		border-bottom: 1px solid #2A2A2A;

		@include lg-block() {
			padding: 40px 0 20px;
		}
	}

	&__copy {
		padding: 16px 0;
	}
}


.top-footer {
	display: flex;
	justify-content: space-between;
	align-items: center;

	@include lg-block() {
		width: 100%;

		flex-direction: column;
		align-items: flex-start;
	}


	&__left {
		display: flex;
		align-items: center;

		@include lg-block() {
			width: 100%;
			flex-direction: column;
			margin-bottom: 20px;
			align-items: flex-start;

		}

	}

	&__logo {
		margin-right: 93px;

		@include lg-block() {
			margin-right: 0;
			margin-bottom: 40px;
		}
	}

	&__nav {
		flex: 1 1 auto;

		@include lg-block() {
			width: 100%;
		}

		.nav {
			&__list {

				display: flex;
				@include mr(24px);

				@include lg-block() {
					flex-direction: column;
					@include mr(0px);
				}
			}

			&__item {
				@include lg-block() {
					padding: 10px 0;
					border-top: 1px solid #2A2A2A;

					&:last-child {
						border-bottom: 1px solid #2A2A2A;

					}
				}
			}

			&__link {
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 400;
				font-size: 16px;
				line-height: 150%;
				color: #FFFFFF;
				font-stretch: 100;
			}
		}
	}

	&__social {
		display: flex;

		@include mr(20px);

		.telegram,
		.whatsapp {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 12px;
			background: #00A19C;
			border-radius: 4px;
		}
	}
}

.copy-footer {
	display: flex;
	justify-content: space-between;

	@include sm-block() {
		flex-direction: column;
		@include mb(16px)
	}

	&__text {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 133%;
		color: #6B6F6E;
	}

	&__left {}

	&__right {
		text-decoration-line: underline;
	}
}
</style>
