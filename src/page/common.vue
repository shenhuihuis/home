<template>
    <div class='common'>
         <div class="find">
            <van-search placeholder="请输入楼盘或地址" v-model="value" />
        </div>
        <a href="javascript:void(0);" class='tp'>公租房申请条件</a>
        <div class="tt">市筹公租房受理点</div>
        <p class="list">  
            <ul>
                <li v-for='i in 4'>
                    <a href="javascript:void(0);">
                        <div class="tit">受理点1</div>
                        <p>地址：舟山市普陀区城北小学东侧北…</p>
                        <p style="margin:0;">联系电话：17062716528</p>
                    </a>
                </li>
            </ul>
        </p>
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
    .common{
        .tp{
            font-size:0.51rem;
            color:#fff;
            margin:0.52rem 0;
            background:rgba(116,168,252,1);
            border-radius:0.05rem;
            display: block;
            text-align: center;
            line-height: 1.33rem;
             margin:0.4rem 0.43rem 1rem;
        }
        .tt{
            font-size:0.48rem;
            font-weight:600;
            color:rgba(55,62,65,1);
            line-height:0.67rem;
            padding:0 0.43rem;
            margin-bottom: 0.4rem;
        }
        .list{
            padding:0 0.43rem;
            .tit{
                font-size:0.45rem;
                background: url("../assets/img/icon_daohang_1@2x.png") no-repeat 96% center;
                background-size:0.39rem auto;
                font-weight:600;
                color:rgba(55,62,65,1);
                line-height:0.64rem;
                margin-bottom: 0.4rem;
            }
            p{
                font-size:0.32rem;
                font-weight:400;
                color:rgba(151,162,182,1);
                line-height:0.44rem;
                margin-bottom: 0.24rem;
            }
            li{
                padding:0.56rem 0;
                border-bottom: 1px solid #F0F1F4;
                &:nth-last-child(1){
                    border: 0 none;
                }
            }
        }
    }
</style>