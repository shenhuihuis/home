<template>
    <div class='lease'>
        <div class="find">
            <van-search placeholder="我想住哪里" v-model="value" />
        </div>
        <div class='nav'>
            <a href="javascript:void(0);">
                <img src="../assets/img/pic_putongzufang@2x_03.png" alt="">
            </a>
            <a href="javascript:void(0);">
                <img src="../assets/img/pic_gongzufang@2x_03.png" alt="">
            </a>
        </div>
        <div class="h2">热门房源</div>
        <div class="list">
            <ul>
                <li v-for='i in 4'>
                    <a href="javascirpt:void(0);">
                        <img src="../assets/img/s1_03.png" alt="">
                        <div class="rt">
                            <div class="tit">整租 天鼎公寓</div>
                            <div class="mtit">普陀 东港/37m²/1室1厅1卫/南</div>
                            <div class="money">1500
                                <small>元/月</small>
                            </div>
                            <div class="icon">
                                <i>月租</i>
                                <i>押一付一</i>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data (){
        return {
            value:''
        }
    }
}
</script>
<style lang="scss" scoped>
    .lease{
        .nav{
            height:2.4rem;
            padding:0 0.4rem;
            display: flex;
            justify-content:space-between;
            margin-bottom: 0.66rem; 
            img{
                height:100%;
            }
        }
        .h2{
            font-size:0.48rem;
            font-weight:600;
            color:rgba(55,62,65,1);
            line-height:0.67rem;
            padding:0 0.4rem;
            margin-bottom: 0.4rem;

        }
        .list{
            padding:0 0.4rem;
            li{
                margin-bottom: 0.4rem;
                padding-bottom: 0.4rem;
                border-bottom: 1px solid #F0F1F4;
                a{
                    display: flex;
                    height:2.41rem;
                    justify-content: flex-start;
                    img{
                        height:100%;
                        margin-right:0.64rem;
                    }
                    .tit{
                        line-height: 0.5rem;
                        font-size:0.45rem;
                        font-weight:600;
                        color:rgba(55,62,65,1);
                        margin-bottom: 0.18rem;
                    }
                    .mtit{
                        font-size:0.32rem;
                        font-weight:400;
                        color:rgba(55,62,65,1);
                        line-height:0.44rem;
                        margin-top:0.1rem;
                        margin-bottom: 0.1rem;
                    }
                    .money{
                        line-height: 0.63rem;
                        font-size: 0.45rem;
                        color:#F9563E;
                        font-weight:bold;
                        margin-bottom: 0.12rem;
                        small{
                            font-size: 0.27rem;
                            font-weight:400;
                        }
                    }
                    .icon{
                        i{
                            display: inline-block;
                            margin:0 0.21rem 0.21rem 0;
                            padding:0 0.21rem;
                            background:rgba(240,241,244,1);
                            border-radius:0.05rem;
                            line-height: 0.48rem;
                            color:#8692A9;
                            font-size: 0.32rem;
                            font-style: normal;
                        }
                        .hov{
                            background: #74A8FC;
                            color:#fff;
                        }
                    }

                }
                &:nth-last-child(1){
                    border:0 none;
                }
            }
        }
    }
</style>