<template>
     <div id="app">
         <keep-alive>
                  <router-view v-if='$route.meta.keeplive'></router-view>
        </keep-alive>
        <router-view v-if='!$route.meta.keeplive'></router-view>
    </div>
</template>
<script>
export default {
    data (){
        return {}
    }
}
</script>
<style lang="scss" scoped>
    @import url("../src/assets/css/mobile.scss");
</style>
