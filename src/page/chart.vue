<template>
    <div class='chart'>
        <div class="tp">    
            <div class="name">舟山</div>
            <div class="mtit">11月参考均价</div>
            <div class="much">
                <div class="money">
                    <span>29872</span>
                    <em>元/m²</em>
                </div>
                <div class="ico">环比上月上涨2.12%</div>
            </div>
        </div>
        <div class="brow"></div>
        <div class="bot">
            <div class="htit">新房价格走势</div>
            <div class="nav">
                <a href="javascript:void(0);">全部</a>
                <a href="javascript:void(0);">一居</a>
                <a href="javascript:void(0);">二居</a>
                <a href="javascript:void(0);">三居</a>
            </div>
            <div class="sml">
                舟山均价（万/m²）
            </div>
             <div class="pic">
                 <ve-line :data="chartData" :settings="chartSettings"></ve-line>
             </div>
        </div>
        
    </div>
</template>
<script>
import Vue from 'vue'
import VCharts from 'v-charts'
Vue.use(VCharts)
export default {
    data (){
         this.chartSettings = {
            xAxisType: 'value'
        }
        return {
            chartData: {
            columns: ['访问用户', ''],
                rows: [
                    {'访问用户': 1393, '': 1093,},  
                    {'访问用户': 3530, '': 3230,},
                    {'访问用户': 2923, '': 2623,},
                    {'访问用户': 1723, '': 1423,},
                    {'访问用户': 3792, '': 3492,  },
                    { '访问用户': 4593, '': 4293,}
                ]
            }
        }
    }
}
</script>   
<style lang="scss" scoped>
    .chart{
        .tp{
            height:4.7rem;
            padding:0.89rem 0.32rem 0 0.53rem;
            background:#74A8FC;
            .name{
                font-size:0.59rem;
                font-weight:600;
                color:rgba(255,255,255,1);
                line-height:0.83rem;
                margin-bottom: 0.56rem;
            }
            .mtit{
                font-size:0.37rem;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:0.51rem;
                margin-bottom: 0.14rem;
            }
            .much{
                height:1.17rem;
                display: flex;
                justify-content: space-between;
                .money{
                       font-size:0.85rem;
                        line-height: 1.17rem;
                        font-weight:bold;
                        color:rgba(255,255,255,1);
                        em{
                            font-size:0.37rem;
                        }
                }
                .ico{
                    width:3.33rem;
                    line-height:0.64rem;
                    background:rgba(255,255,255,0.08);
                    text-align: center;
                    font-size:0.32rem;
                    color:#fff;
                    height:0.64rem;
                    margin-top:0.3rem;
                }
            }
        }
        .brow{
            height:0.4rem;
            background: #F8F8F8;
        }
        .bot{
            padding:0.53rem;
            .htit{
                font-size:0.43rem;
                font-weight:600;
                color:rgba(55,62,65,1);
                line-height:0.6rem;
                text-align: center;
            }
            .nav{
                text-align: center;
                margin-top:0.67rem;
                margin-bottom: 0.32rem;
                a{
                    font-size:0.37rem;
                    font-weight:600;
                    color:rgba(176,184,199,1);
                    line-height:0.53rem;
                    margin-left:0.97rem;
                    display: inline-block;
                    &:nth-child(1){
                        margin:0;
                    }
                }
            }
            .sml{
                display: flex;
                align-items: center;
                justify-content: flex-end;
                font-size:0.24rem;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(149,160,180,1);
                line-height:0.57rem;
                &::before{
                    display: block;
                    content: '';
                    width:0.27rem;
                    height:0.05rem;
                    background:rgba(116,168,252,1);
                    border-radius:0.05rem;
                    margin-right:0.12rem;
                }
            }
            .pic{
                height:4.37rem;
                margin-top:-1rem;
            }
        }
    }
</style>