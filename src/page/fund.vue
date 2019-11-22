<template>
    <div class='fund'>
        <div class="nav">
            <a href="javascript:void(0);" class='act'>公积金经办点</a>
            <a href="javascript:void(0);">公积金贷款银行</a>
        </div>
        <div class="list">  
            <ul>
                <li v-for='(i,index) in 4'>
                    <div class="tit">贷款银行1</div>
                    <p>地址：舟山市普陀区城北小学东侧北…</p>
                    <p>工作时间：工作日8:30-17:30</p>
                    <p>工作时间：工作日8:30-17:30</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .fund{
        .nav{
            display: flex;
            align-items: center;
            margin:0.8rem 0;
            a{
                flex:1;
                text-align: center;
                font-size:0.43rem;
                display: flex;
                font-weight:600;
                color:rgba(55,62,65,1);
                line-height:0.6rem;
                justify-content: space-between;
                flex-direction: column;
                align-items: center;
                height:0.8rem;
               

            }
            .act{
                color:#74A8FC;
            }
            .act::after{
                    content: '';
                    display: block;
                    width:0.51rem;
                    height:0.08rem;
                    background:rgba(116,168,252,1);
                    border-radius:4px;
            }
        }
        .list{
            padding:0 0.53rem;
            li{
                padding:0.44rem 0 0.56rem;
                border-bottom: 1px solid #F0F1F4;
                .tit{
                    font-size:0.45rem;
                    font-family:PingFangSC-Semibold,PingFang SC;
                    font-weight:600;
                    color:rgba(55,62,65,1);
                    line-height:0.64rem;
                    margin-bottom: 0.27rem;
                    background: url("../assets/img/icon_daohang_1@2x.png") no-repeat 96% center;
                    background-size:0.39rem auto;
                    
                }
                p{
                    font-size:0.32rem;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(151,161,181,1);
                    line-height:0.44rem;
                    margin-bottom: 0.21rem;
                }
                p:nth-last-child(1){
                    margin:0;
                }
                &:nth-last-child(1){
                    border: 0 none;
                }
            }
        }
    }
</style>