<template>
    <div class='details'>
        <div class="img"></div>
        <div class="combox">
            <div class="tit">受理点1</div>
            <div class="li">
                <label>受理点名称</label>
                <div class="say">普陀区城北公租房管理处</div>
            </div>
            <div class="li">
                <label>地址</label>
                <div class="say">
                    舟山市普陀区城北小学东侧北门2区102号
                    <img src="../assets/img/icon_location@2x.png" alt="">
                </div>
            </div>
            <div class="li">
                <label>联系电话</label>
                <div class="say">17062716528</div>
            </div>
            <div class="li">
                <label>主要服务</label>
                <div class="say">提供公租房的申请流程咨询、公租房、申请材料办理、公租房卫生清洁、小区绿化。</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .details {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background: #F8F8F8;
        .combox{
            width:9.2rem;
            background: #fff;
            position: absolute;
            left:0.4rem;
            top:4.04rem;
            padding:0.53rem;
            .tit{
                font-size:0.56rem;
                font-weight:600;
                color:rgba(55,62,65,1);
                line-height:0.79rem;
                margin-bottom: 0.4rem;
            }
            .li{
                line-height:0.53rem;
                margin-bottom: 0.4rem;
                display: flex;
               label{
                    font-size:0.37rem;
                    font-weight:400;
                    color:rgba(149,160,180,1);
                    flex:1; 
                    text-align: justify;
               }
               .say{
                   flex:3;
                   font-size:0.37rem;
                   font-weight:400;
                   color:#373E41;
                   img{
                       width:0.27rem;
                   }
               }
            }
        }
    }
    .img {
        height: 5.33rem;
    }
</style>