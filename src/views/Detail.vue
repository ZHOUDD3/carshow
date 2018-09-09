<template>
   <div class="container">
		<div class="logo" @click="$router.push('/index')">
			<img class="logo-img" src="../assets/image/back.png" alt="">
		</div>
		<div class="header">
			<span class="title">BMW 4系敞篷轿跑车</span>
			<span class="price">官方指导价：40~50万</span>
		</div>
		<div class="content">
			<div class="big">
				<div class="tip">
					<p>佳木斯宝马4Sd店秋季特惠活动</p>
					<span>活动详情</span>
				</div>
				<img src="../assets/image/car.png" alt="">
				<div class="color">
					<p>颜色</p>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div class="menu">
				<div class="item last"></div>
				<div class="item car-show">
					<span>BMW 6系四门轿车</span>
					<img src="../assets/image/car1.png" alt="">
				</div>
				<div class="item car-show">
					<span>创新BMW 6系四GT</span>
					<img src="../assets/image/car2.png" alt="">
				</div>
				<div class="item car-show">
					<span>BMW 6系四门跑车</span>
					<img src="../assets/image/car3.png" alt="">
				</div>
				<div class="item next"></div>
			</div>
		</div>
		<div class="bottom">
			
		</div>
	</div>
</template>
<script>
export default {
    data () {
        return {

        }
    }
}
</script>
<style scoped>
.container {
			height: 100%;
			position: relative;
			background: #051625;
		}
		.logo {
			position: absolute;
			top: 20px;
			right: 20px;
			width: 96px;
			height: 84px;
			cursor: pointer;
		}
		.logo-img {
			width: 96px;
			height: 84px;
		}
		.header {
			padding-top: 126px;
			color: #fff;
		}
		.header .title{
			margin-left: 200px;
			font-size: 34px;
		}
		.header .price{
			margin-left: 120px;
			font-size: 24px;
		}
		.content {
			margin-top: 76px;
		}
		.content .big {
			display: flex;
			justify-content: center;
			color: #fff;
		}
		.big .tip {
			width: 300px;
			color: #fff;
		}
		.big img {
			width: 860px;
			height: 386px;
		}
		.color {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
		}
		.color p {
			width: 300px;
			color: #fff;
			text-align: right;
		}
		.color span {
			display: inline-block;
			width: 12px;
			height: 12px;
			background: #fff;
			border: 6px;
			margin-bottom: 10px;
			cursor: pointer;
		}
		.content .menu {
			display: flex;
			justify-content: center;
			margin-top: 20px;
		}
		.menu .item {
			width: 294px;
			height: 304px;
			cursor: pointer;
			color: #fff;
		}
		.menu .car-show {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		.car-show span {
			margin-top: 20px;
		}
		.car-show img {
			margin-bottom: 40px;
		}
		.menu .last {
			background: url('../assets/image/last.png') no-repeat center center;
		}
		.menu .next {
			background: url('../assets/image/next.png') no-repeat center center;
		}
</style>
