<template>
    <div class="container">
    <div class="back" @click="$router.push('/detail')">
			<img class="logo-img" src="../assets/image/back.png" alt="">
		</div>
			<iframe width="100%" height="100%" src="https://720yun.com/t/7d6jv5yyvf1?scene_id=18935094" frameborder="0"></iframe>
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
<style>
.container {
	height: 100%;
	overflow: hidden;
	position: relative;
}
.back {
	position: absolute;
	top: 20px;
	right: 20px;
	width: 96px;
	height: 84px;
	cursor: pointer;
}
</style>
