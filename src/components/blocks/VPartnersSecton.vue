<template>
	<section class="partners">
		<div class="container">
			<div class="partners__body">
				<div class="partners__card">
					<h6 class="partners__title">Наши партнёры</h6>
					<div class="partners__content">
						<div class="partners__image"
								 v-for="img in images">
							<img :src="img"
									 alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	data() {
		return {
			images: [
				require("@/assets/img/main/partners/partners1.svg"),
				require("@/assets/img/main/partners/partners2.svg"),
				require("@/assets/img/main/partners/partners3.svg"),
				require("@/assets/img/main/partners/partners4.svg"),
				require("@/assets/img/main/partners/partners5.svg"),
				require("@/assets/img/main/partners/partners6.svg"),
				require("@/assets/img/main/partners/partners7.svg"),
				require("@/assets/img/main/partners/partners8.svg"),
				require("@/assets/img/main/partners/partners9.svg"),
				require("@/assets/img/main/partners/partners10.svg"),
			]
		}
	}
}
</script>
<style lang="scss">
@import "@/assets/scss/smart-grid.scss";
@import "@/assets/scss/mixins.scss";

.partners {
	&__body {
		padding: 40px 0px 80px;
		border-bottom: 1px solid #414141;

		@include md-block() {
			padding: 0;
			border-bottom: none;
		}
	}

	&__card {
		display: flex;
		padding: 40px;
		border-radius: 16px;
		background: #2A2A2A;

		@include xl-block() {
			flex-direction: column;
			align-items: center;
		}


		@include md-block() {
			padding: 20px;
			padding-bottom: 40px;
		}

		@include xs-block() {
			margin: 0 -20px;

		}
	}

	&__title {
		min-width: 181px;
		margin-right: 9.25%;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		line-height: 133%;
		color: #FFFFFF;

		@include xl-block() {
			margin-right: 0;
			margin-bottom: 40px;
		}
	}

	&__content {
		@include u-row-flex(10px);
		margin-top: -17px;
		margin-bottom: -17px;
	}

	&__image {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		@include u-col(10px);
		@include u-size(2, 10, 10px);
		margin-top: 17px;
		margin-bottom: 17px;
		opacity: .75;
		filter: grayscale(100);

		@include xl-block() {
			justify-content: center;
		}

		@include md-block() {
			@include u-size(5, 10, 10px)
		}

		&:hover {
			filter: grayscale(0);
			opacity: 1;
		}
	}
}
</style>
