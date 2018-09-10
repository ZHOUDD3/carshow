<template>
   <div class="container">
		<div class="main">
			<div class="box">
				<div class="logo">
					<img class="logo-img" src="../assets/image/bmw.png">
				</div>
				<div class="contract">
					<div>
						<img class="wechat-img" src="../assets/image/wechat.png" alt="wechat">
					</div>
					<span class="name">宝景宝马4S店</span>
					<span class="tel">电话：11234568944</span>
				</div>
			</div>
			<div class="box new" @click="showDetail">
				<div class="logo">
					<img class="logo-img" src="../assets/image/奔驰.png">
				</div>
				<div class="contract">
					<div>
						<img class="wechat-img" src="../assets/image/wechat.png" alt="wechat">
					</div>
					<span class="name">宝景奔驰4S店</span>
					<span class="tel">电话：11234568944</span>
				</div>
			</div>
			<div class="box" @click="showDetail">
				<div class="logo">
					<img class="logo-img" src="../assets/image/大众.png">
				</div>
				<div class="contract">
					<div>
						<img class="wechat-img" src="../assets/image/wechat.png" alt="wechat">
					</div>
					<span class="name">宝景大众4S店</span>
					<span class="tel">电话：11234568944</span>
				</div>
			</div>
			<div class="box" @click="showDetail">
				<div class="logo">
					<img class="logo-img" src="../assets/image/别克.png">
				</div>
				<div class="contract">
					<div>
						<img class="wechat-img" src="../assets/image/wechat.png" alt="wechat">
					</div>
					<span class="name">宝景别克4S店</span>
					<span class="tel">电话：11234568944</span>
				</div>
			</div>
			<div class="box" @click="showDetail">
				<div class="logo">
					<img class="logo-img" src="../assets/image/现代.png">
				</div>
				<div class="contract">
					<div>
						<img class="wechat-img" src="../assets/image/wechat.png" alt="wechat">
					</div>
					<span class="name">北京现代4S店</span>
					<span class="tel">电话：11234568944</span>
				</div>
			</div>
			<div class="box" @click="showDetail">
				<div class="logo">
					<img class="logo-img" src="../assets/image/玛莎拉蒂.png">
				</div>
				<div class="contract">
					<div>
						<img class="wechat-img" src="../assets/image/wechat.png" alt="wechat">
					</div>
					<span class="name">玛莎拉蒂4S店</span>
					<span class="tel">电话：11234568944</span>
				</div>
			</div>
			<div class="box" @click="showDetail">
				<div class="logo">
					<img class="logo-img" src="../assets/image/凯迪拉克.png">
				</div>
				<div class="contract">
					<div>
						<img class="wechat-img" src="../assets/image/wechat.png" alt="wechat">
					</div>
					<span class="name">凯迪拉克4S店</span>
					<span class="tel">电话：11234568944</span>
				</div>
			</div>
			<div class="box" @click="showDetail">
				<div class="logo">
					<img class="logo-img" src="../assets/image/名爵.png">
				</div>
				<div class="contract">
					<div>
						<img class="wechat-img" src="../assets/image/wechat.png" alt="wechat">
					</div>
					<span class="name">宝景名爵4S店</span>
					<span class="tel">电话：11234568944</span>
				</div>
			</div>
			<div class="box new" @click="showDetail">
				<div class="logo">
					<img class="logo-img" src="../assets/image/奥迪.png">
				</div>
				<div class="contract">
					<div>
						<img class="wechat-img" src="../assets/image/wechat.png" alt="wechat">
					</div>
					<span class="name">宝景奥迪4S店</span>
					<span class="tel">电话：11234568944</span>
				</div>
			</div>
			<div class="box" @click="showDetail">
				<div class="logo">
					<img class="logo-img" src="../assets/image/马自达.png">
				</div>
				<div class="contract">
					<div>
						<img class="wechat-img" src="../assets/image/wechat.png" alt="wechat">
					</div>
					<span class="name">马自达4S店</span>
					<span class="tel">电话：11234568944</span>
				</div>
			</div>
			<div class="box" @click="showDetail">
				<div class="logo">
					<img class="logo-img" src="../assets/image/长安.png">
				</div>
				<div class="contract">
					<div>
						<img class="wechat-img" src="../assets/image/wechat.png" alt="wechat">
					</div>
					<span class="name">长安汽车4S店</span>
					<span class="tel">电话：11234568944</span>
				</div>
			</div>
			<div class="box" @click="showDetail">
				<div class="logo">
					<img class="logo-img" src="../assets/image/兰博基尼.png">
				</div>
				<div class="contract">
					<div>
						<img class="wechat-img" src="../assets/image/wechat.png" alt="wechat">
					</div>
					<span class="name">兰博基尼4S店</span>
					<span class="tel">电话：11234568944</span>
				</div>
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
  },
  methods: {
  	showDetail () {
  		this.$router.push('/detail')
  	}
  }
}
</script>
<style scoped>
	* {
		box-sizing: border-box;
	}
		.container {
			background: #051625;
			height: 100%;
		}
		.main	{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 0 80px;
		}
		.box {
			width: 400px;
			height: 270px;
			display: flex;
			background: #fff;
			margin-top: 44px;
			padding: 30px 0;
			cursor: pointer;
		}
		.new {
			background: url('../assets/image/new.png');
			background-size: cover;
		}
		.logo {
			width: 170px;
			height: 200px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-right: 2px solid #000;
		}
		.logo-img {
			width: 120px;
			height: 120px;
		}
		.contract {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.wechat-img {
			width: 102px;
			height: 102px;
		}
		.name {
			margin-top: 18px;
		}
		.tel {
			margin-top: 22px;
		}
</style>
