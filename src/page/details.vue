<template>
    <div class="details">
        <div class='map'>
            <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom"  class="amap-demo">
            </el-amap>
        </div>
        <div class="fixbox">
            <div class="combox">
                <div class="tit">南都花园</div>
                <div class="h2">基本信息</div>
                <div class="li">
                    <label>开盘价</label>
                    <span>20000</span>
                    <small>元/m²</small>
                </div>
                <div class="li"> <label>城 区</label>定海区</div>
                <div class="li"><label>项目名称</label>南都花园二期项目</div>
                <div class="li"><label>项目坐落</label>定海区小洋岙街区</div>
                <div class="li"><label>可售面积</label>88-165m²</div>
                <div class="li"><label>房屋性质</label>住宅</div>
                <div class="li"><label>开盘方式</label>代理委托式</div>
                <div class="li"><label>开盘时间</label>2019-11-12</div>
                <div class="li"><label>项目简介</label><p>“南都花园”住宅小区开发面积占地2800m²，建筑面积为10000m².主体建筑为全框架、全现浇结构，可抗高等级地震。</p></div>
            </div>
            <div class="combox smbox">
                <div class="h2">商品房现售备案</div>
                <div class="li"><label>预售证号</label>91330902MA2A2LN8XP</div>
                <div class="li"><label>企业名称</label>舟山市房地产开发有限公司</div>
                <div class="li"><label>项目名称</label>南都花园二期项目</div>
                <div class="li"><label>坐落地址</label>定海区南都花园</div>
                <div class="li"><label>用途性质</label>住宅</div>
                <div class="li"><label>发证机构</label>舟山市城乡规划局</div>
                <div class="li"><label>发证时间</label>2019-07-22</div>
                <div class="li"><label>预售面积</label>10000m²</div>
                <div class="li"><label>预售套数</label>50</div>
                <div class="li"><label>外销面积</label>10000m²</div>
                <div class="li"><label>外销套数</label>50</div>
                <div class="li"><label>住宅建筑面积</label>6500m²</div>
                <div class="li"><label>办公建筑面积</label>1200m²</div>
                <div class="li"><label>商业建筑面积</label>1200m²</div>
                <div class="li"><label>其他建筑面积</label>1200m²</div>
                <div class="li"><label>普通住宅面积</label>1200m²</div>
                <div class="li"><label>排屋面积</label>1200m²</div>
                <div class="li"><label>别墅面积</label>1200m²</div>
                <div class="li"><label>车库面积</label>10000m²</div>
                <div class="li"><label>建设用地规划许可证号</label>地字第341723201600022号</div>
                <div class="li"><label>建设工程规划许可证号</label>地字第341723201600022号</div>
                <div class="li"><label>土地证号</label>50</div>
                <div class="li"><label>施工证号</label>50</div>
            </div>

        </div>
        <div class="btn">
            <a href="javascript:void(0);">周边配套</a>
            <a href="javascript:void(0);">导航至楼盘</a>
        </div>
    </div>
</template>

<script>
   
    import { amapManager } from 'vue-amap';
    export default {
        data() {
            return {
                amapManager,
                zoom: 12,
                center: [121.59996, 31.197646],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .details{
        background:rgba(248,248,248,1);
    }
    .map {
        height: 100%;
        position: absolute;
        left:0;
        top:0;
        width:100%;
        z-index: 1;
    }
    .fixbox{
       margin:4.5rem 0.4rem 0.6rem;
       overflow-y: scroll;
       position: relative;
       z-index: 11;
       .combox{
           padding:0 0.53rem 0.53rem;
           background: #fff;
           margin-bottom: 0.27rem;
           .tit{
              font-weight:600;
              color:rgba(55,62,65,1);
              line-height:0.79rem;
              font-size: 0.56rem;
              padding:0.53rem 0;
              border-bottom: 1px solid #F0F1F4;
              
           }
           .h2{
               line-height: 0.6rem;
               padding:0.41rem 0 0.4rem;
               font-size:0.43rem;
                font-family:PingFangSC-Semibold,PingFang SC;
                font-weight:600;
                color:rgba(55,62,65,1);
                line-height:0.6rem;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                &::before{
                    display: block;
                    content: '';
                    width:0.11rem;
                    height:0.35rem;
                    background:rgba(116,168,252,1);
                    margin-right:0.15rem;
                }
           }
           .li{
                font-size:0.37rem;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(55,62,65,1);
                line-height:0.53rem;
                display: flex;
                justify-content: flex-start;
                margin-bottom: 0.32rem;
                label{
                    white-space:nowrap; 
                    min-width:2.04rem;
                    margin-right:0.32rem;
                    color:#95A0B4;
                    text-align: justify;
                    overflow:hidden;
                }
                span{
                    color:#F9563E;
                    font-size: 0.45rem;
                    font-weight:bold;
                    margin-right:0.05rem;
                }
                small{
                    font-size:0.27rem;
                     color:#F9563E;
                }
                p{
                    display: inline-block;
                    width:6.24rem;
                }
           }
       }
        .smbox{
            .li{
                font-size:0.35rem;
                 white-space:nowrap; 
            }
            label{
                font-size:0.35rem;
                min-width:auto;
                margin-right:0.32rem;
            }
            margin-bottom: 1.8rem;
        }
    }
    
    .btn{
            position: fixed;
            bottom: 0;
            left:0;
            width:100%;
            height:2.04rem;
            background: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 111;
            text-align: center;
            padding:0 0.6rem;
            a{
                display: block;
                width:4.13rem;
                background:rgba(123,203,108,1);
                border-radius:0.11rem;
                font-size:0.45rem;
                font-weight:600;
                line-height: 1.33rem;
                color:#fff;
            }
            a:nth-child(2){
                background:rgba(116,168,252,1);
            }
        }
</style>