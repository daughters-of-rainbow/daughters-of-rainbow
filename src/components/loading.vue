<template>
    <div>
    <v-overlay :value="overlay">
        <!-- <v-progress-circular
            indeterminate
            size="64"
        ></v-progress-circular> -->
         <svg-icon class="mx-auto" className="atptMax_icon" data_iconName="loading" />
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