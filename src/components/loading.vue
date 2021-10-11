<template>
    <div>
    <v-overlay :value="overlay" opacity="0.8">
        <!-- <v-progress-circular
            indeterminate
            size="64"
        ></v-progress-circular> -->
         <!-- <svg-icon class="mx-auto" className="atptMax_icon" data_iconName="loading" /> -->
         <div class="loading-alert">
             <p>Connecting to Ethereum Network</p>
             <div class="rainbow"></div>
             <span>Do not refresh or close this page</span>
         </div>
         <!-- <p>Please waiting</p> -->
        </v-overlay> 
    </div>
</template>
<script>
export default {
    props:{
        overlay:false
    },
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.loading-alert {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 200px;
    margin: 100px auto;
    /* font-family: Lato, sans-serif; */
    font-size: 2.5rem;
    color: white;
    text-align: center;
}
.rainbow {
    width: 83%;
    height: 3px;
    margin: 10px 0;
    background: linear-gradient(60deg, #5f86f2, #a65ff2, #f25fd0, #f25f61, #f2cb5f, #abf25f, #5ff281, #5ff2f0 );
    background-size: 300% 300%;
    background-position: 0 50%;
    animation: moveGradient 4s alternate infinite;    
}
.loading-alert p {
    font-size: 30px;
    line-height: 32px;
    /* text-transform: uppercase; */
    margin-bottom: 0;
}
.loading-alert span {
    font-size: 15px;
}
@keyframes moveGradient {
  50% {
    background-position: 100% 50%;
  }
}
</style>