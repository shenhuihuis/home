<template>
    <div class="contair">
        <div class="find">
            <van-search placeholder="请输入楼盘或地址" v-model="value"  @search="onSearch" @cancel="onCancel"/>
        </div>
        <div class='main'> 
            <div class="tit">
                全部楼盘
                <a class="rt"  href="javascript:void(0);">
                    <span>排序</span>
                    <i></i>
                </a>
                <div class="select" v-if='show'>
                    <div class="ul">
                        <a href="javascript:void(0);">默认排序</a>
                        <a href="javascript:void(0);">层单价由低到高</a>
                        <a href="javascript:void(0);">层单价由高到低</a>
                        <a href="javascript:void(0);">图层开盘时间顺序</a>
                        <a href="javascript:void(0);">层开盘时间倒序</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="scroll">
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
            show:true,
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
        padding:0 0.52rem;
        margin-top:0.3rem;
        .tit{
           display: flex;
           font-size:0.48rem;
           font-weight:600;
           color:rgba(55,62,65,1);
           line-height:0.67rem; 
           justify-content: space-between;
           align-items: center;
          
           position: relative;
           align-items: center;
           padding-bottom: 0.12rem;
           .select{
               position: fixed;
               width:100%;
               left:0;
               top:2.6rem;
               background: rgba(0,0,0,0.4);
               height:100%;
               .ul{
                   padding-top:0.2rem;
                   padding-bottom: 1.4rem;
                   background: #fff;
               }
               a{
                   text-indent:0.6rem;
                   display: block;
                   padding:0.4rem 0;
                   font-size:0.4rem;
                   font-weight:400;
                   color:rgba(80,86,88,1);
                   line-height:0.56rem;
               }
           }
           .rt{
               padding-left:1rem;
               background: url("../assets/img/icon_daohang @2x.png") no-repeat left 0.12rem;
               background-size:0.44rem auto;
               font-size:0.35rem;
               font-weight:400;
               color:rgba(80,86,88,1);
               display: flex;
               align-items: center;
               i{
                   width:0;
                   height:0;
                   border-color:#CCC transparent transparent ;
                   border-width: 4px;
                   border-style: solid;
                   display: block;
                   margin:0.12rem 0 0 0.12rem;
               }
           }
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
    .scroll{
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        padding:2.96rem 0.52rem 0;
        overflow: hidden;
        z-index: -1;
    }
   
</style>