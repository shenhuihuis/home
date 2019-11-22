<template>
    <ul class="list">
        <li v-for='i in 4'>
            <router-link :to='{"name":"home"}'>
                <img src="./../assets/img/s1_03.png" alt="">
                <div class="rt">
                    <div class="cter">
                        <div class="tit">海上明月府</div>
                        <div class="int">临城新区 临城</div>
                        <div class="num"> 23000
                            <small>元/m²</small>
                        </div>
                    </div>
                    <i>住宅</i>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                value: '',
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list {
        li {
            padding-bottom: 0.55rem;
            border-bottom: 1px solid #F0F1F4;
            margin-bottom: 0.55rem;
            &:nth-last-child(1) {
                border: 0 none;
            }
            a {
                display: flex;
                justify-content: flex-start;
                height:2.13rem;
                img {
                    width: 2.67rem;
                    margin-right: 0.65rem;
                }
                .rt {
                    display: flex;
                    justify-content: space-between;
                    flex: 2;
                    .tit {
                        font-size: 0.48rem;
                        font-weight: 600;
                        color: rgba(55, 62, 65, 1);
                        line-height: 0.67rem;
                        margin-bottom: 0.19rem;
                    }
                    .int {
                        font-size: 0.32rem;
                        font-weight: 400;
                        color: rgba(55, 62, 65, 1);
                        line-height: 0.44rem;
                        margin-bottom: 0.19rem;
                    }
                    .num {
                        font-size: 0.48rem;
                        font-weight: bold;
                        color: rgba(249, 86, 62, 1);
                        line-height: 0.67rem;
                        small {
                            font-weight: 400;
                            font-size: 0.27rem;
                        }
                    }
                }
                i {
                    margin-right: 0.17rem;
                    height: 0.48rem;
                    font-style: normal;
                    line-height: 0.45rem;
                    padding: 0 0.21rem;
                    background: rgba(255, 255, 255, 1);
                    border-radius: 0.05rem;
                    border: 1px solid rgba(55, 62, 65, 1);
                    font-size: 0.32rem;
                    font-weight: 400;
                    color: #373E41;
                }
            }
        }
    }
</style>