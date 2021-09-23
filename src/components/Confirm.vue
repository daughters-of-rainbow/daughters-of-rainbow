<template>
	<div class="dialogwrapper" v-if="show">
		<div class="overlay"></div>
		<v-card flat class="dialog text-center rounded-xl">
			<v-card-title v-if="confirmTitle" class="justify-center">{{confirmTitle}}</v-card-title>
			<v-card-title v-else class="justify-center">{{lang=='en-US'?'Tips':'提示'}}</v-card-title>
			<v-card-text>
				{{content}}
			</v-card-text>
			<div v-if="isSB" class="mx-3">
					 <v-btn color="#2D67FB" dark block @click="ok2">{{thirdBtn}}</v-btn>
				</div>
			<div v-else class="flex justifybetween">
				<div>
                  <v-btn width="110" outlined block  plain color="#2d67fb"  @click="cancel">{{lang=='en-US'?'Cancel':cancelText}}</v-btn>
                </div>
				<div>
                      <v-btn width="110" color="#2d67fb"  block @click="ok"><span style="color:#fff">{{lang=='en-US'?'Confirm':confirmText}}</span></v-btn>
                </div>
				
			</div>
		</v-card>
	</div>
</template>
<script>
	export default {
        props:{
            content:'你好',
			cancelText:{
				type:String,
				default:'取消'
			},
			confirmTitle:{
				type:String,
				default:'提示'
			},
			confirmText:{
				type:String,
				default:'确认'
			},
			thirdBtn:{
				type:String,
				default:'我知道了'
			},
			isSB:{
				type:Boolean,
				default:false
			}
        },
		data() {
			return {
				promiseStatus: null,
				show: false,
				lang:'en-US'
			}
		},
		created(){
			this.lang = window.localStorage.getItem('lang')||'zh-CN'
		},
		mounted(){
		},
		methods: {
			confirm() {
				let _this = this;
				this.show = true;
				return new Promise(function (resolve,reject){
					_this.promiseStatus = {resolve,reject};
				});
			},
			ok(){
				this.show = false;
				this.promiseStatus && this.promiseStatus.resolve();
			},
			ok2(){
				this.show = false;
				this.promiseStatus && this.promiseStatus.resolve(1);
			},
			cancel(){
				this.show = false;
				this.promiseStatus && this.promiseStatus.reject();
			}
		}
	}
</script>
<style lang="scss" scoped>

.mx-3{
	margin:  1rem;
	& div{
		margin-bottom: 1rem;
	}
}
	.dialogwrapper{
		    align-items: center;
			display: flex;
			height: 100%;
			justify-content: center;
			left: 0px;
			pointer-events: none;
			position: fixed;
			top: 0px;
			width: 100%;
			z-index: 999;
			transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1) 0s, z-index 1ms ease 0s;
			outline: none;
	}
    .flex{
        padding: 20px;
        display: flex;
    } 
    .justifybetween{
        justify-content: space-around;
    }
	.justify-center{
		justify-content:center;
	}
	.dialog{
		overflow-y: auto;
		pointer-events: auto;
		width: 100%;
		z-index: inherit;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
		border-radius: 10px!important;
        text-align: center;
		margin: 24px;
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
		max-width:290px;
	}
	.overlay{
		align-items: center;
		border-radius: inherit;
		display: flex;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: auto;
		background:#000;
		opacity:0.46;
	}
</style>