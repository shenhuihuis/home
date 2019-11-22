<template>
    <div class="home">
        <div class="find">
            <van-search placeholder="我想住哪里" v-model="value" />
        </div>
        <div class="contair">   
            <div class="link">
                <router-link :to='{"name":"home"}'>
                    <img src="./../assets/img/ic1.jpg" alt="">
                </router-link>
                <router-link :to='{"name":"home"}'>
                    <img src="./../assets/img/ic2.jpg" alt="">
                </router-link>
            <router-link :to='{"name":"home"}'>
                    <img src="../assets/img/ic3.jpg" alt="">
                </router-link>
            </div>
            <div class="h2">房价走势</div>
            <div class="conbox">
                <div class="inset">
                    <div class="tit">舟山房价</div>
                    <div class="say">舟山房价</div>
                </div>
                 <div class="inset">
                    <div class="tit btit">39999</div>
                    <div class="say">新房全市均价(元/平）</div>
                </div>
            </div>
            <div class="h2">便捷查询</div>
            <div class="sink">
                <router-link :to='{"name":"home"}'>
                    <img src="./../assets/img/pic_go.png" alt="">
                </router-link>
                 <router-link :to='{"name":"home"}'>
                    <img src="./../assets/img/pic_jia.png" alt="">
                </router-link>
            </div>
            <div class="h2">
                热门楼盘
                <div class="rt">
                   <a href="javascript:void(0);">新房</a>
                   <a href="javascript:void(0);">二手房</a>
                   <a href="javascript:void(0);">租房</a>
                </div>
            </div>
            <div class="newlist">
                <list/>
            </div>
        </div>
    </div>
</template>
<script>
import list from "./../components/list"
export default {
    data (){
        return {
            value:'',
            
        }
    },
    components:{
        list
    }
}
</script>
<style lang="scss" scoped>
    .contair{
      
    }
    .home{
        .link{
            display:flex;
            padding:0 0.4rem;
            justify-content: center;
            margin:0.3rem 0;
            a{
                margin-right:0.6rem;
                img{
                    width:100%;
                }
                &:nth-last-child(1){
                    margin:0;
                }
            }
        }
        .h2{
            padding:0 0.4rem;
            font-size:0.48rem;
            font-weight:600;
            color:rgba(51,51,51,1);
            line-height:0.67rem;
            padding-top:0.4rem;
            .rt{
                float:right;
                a{
                    font-size:0.32rem;
                    margin-left:0.42rem;
                    font-weight:400;
                    color:rgba(191,191,191,1);
                    line-height:0.44rem;
                }
                a.act{
                    color:#73AAF5;
                }
            }
        }
        .conbox{
            display: flex;
            padding-top:0.32rem;
            margin-top:0.25rem;
            height:2.55rem;
            margin-bottom:-0.2rem;
            background: url("../assets/img/bg_fangjiaqushi.png") no-repeat;
            background-size:100% 100%;
            .inset{
                flex:1;
                width:50%;
                text-align: center;
                .tit{
                    font-weight:600;
                    color:rgba(26,26,26,1);
                    line-height:0.56rem;
                    font-size: 0.4rem;

                }
                .btit{
                    font-size: 0.67rem;
                }
                .say{
                    font-size:0.32rem;
                    margin-top:0.27rem;
                    font-weight:400;
                    color:rgba(191,191,191,1);
                    line-height:0.44rem;
                }
            }
        }
        .sink{
              padding:0 0.4rem;
            display: flex;
            margin-top:0.35rem;
            margin-bottom: 0.4rem;
            a{
                flex:1;
                &:nth-child(1){
                     margin-right:0.4rem;
                }
                img{
                    width:100%;
                }
            }
        }
        .newlist{
            margin-top:0.75rem;
            padding:0 0.4rem;
        }
        
    }
</style>