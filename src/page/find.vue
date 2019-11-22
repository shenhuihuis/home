<template>
    <div class="contair">
        <div class="find">
            <van-search placeholder="请输入楼盘或地址" v-model="value"  show-action  @search="onSearch" @cancel="onCancel"/>
        </div>
        <div class="nav">
            <a href="javascript:void(0);" class='act'><span>新房</span></a>
            <a href="javascript:void(0);"><span>二手房</span></a>
            <a href="javascript:void(0);"><span>租房</span></a>
        </div>
        <div class='main' v-if='type==0'> 
            <div class="tit">
                搜索历史
                <a href="javascript:void(0);" class='del'></a>
            </div>
            <div class="findtxt">
                <a href="javascript:void(0);">普陀</a>
            </div>
        </div>
        <div class="main" v-else>
            <list/>
        </div>
    </div>
</template>
<script>
import list from "./../components/list"
export default {
    data (){
        return {
            value:'',
            type:1
        }
    },
    components:{
        list
    },
    methods:{
        onSearch(){

        },
        onCancel(){

        }
    }
}
</script>
<style lang="scss" scoped>
    .nav{
        border-bottom: 1px solid #F8F8F8;
        margin-top: 0.2rem;
        line-height: 0.44rem;
        margin-bottom: 0.52rem;
        display: flex;
        text-align: center;
        a{
            flex:1;
            font-size:0.32rem;
            font-weight:600;
            color:#BFBFBF;
            line-height:0.44rem;
        }
        span{
            display: inline-block;
            padding-bottom: 0.2rem;
            margin-bottom: -2px;
        }
        .act{
            color:#73AAF5;
            span{
                border-bottom: 3px solid #84B4F6;
            }
        }
    }
    .main{
        padding:0 0.53rem;
        .tit{
           display: flex;
           font-size:0.48rem;
           font-weight:600;
           color:rgba(55,62,65,1);
           line-height:0.67rem; 
           justify-content: space-between;
           align-items: center;
           margin-bottom: 0.4rem;
        }
        .findtxt{
            a{
                display: inline-block;
                padding:0 0.18rem;
                margin:0 0.32rem 0.32rem 0;
                background: #F8F9FA;
                font-size:0.32rem;
                line-height: 0.75rem;
                min-width: 1.08rem;
                color:#373E41;
            }
        }
    }
    .del{
        background: url("../assets/img/icon_delete@2x.png") no-repeat;
        background-size:100%;
        width:0.33rem;
        height:0.35rem;
        display: block;
    }
</style>