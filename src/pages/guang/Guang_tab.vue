<template>
    <div class="guangTab">    
        <van-tabs v-model="active" swipeable sticky>   
            <van-tab>    
                <div slot="title">    
                    精选    
                </div>    
                内容    
            </van-tab>  
            <van-tab>    
                <div slot="title">    
                    关注    
                </div>    
                内容    
            </van-tab> 
            <van-tab>    
                <div slot="title">    
                    爱美食    
                </div>    
                内容    
            </van-tab> 
            <van-tab>    
                <div slot="title">    
                    出去浪    
                </div>    
                内容    
            </van-tab> 
            <van-tab>    
                <div slot="title">    
                    生活控  
                </div>    
                内容    
            </van-tab> 
            <van-tab>    
                <div slot="title">    
                    约电影    
                </div>    
                内容    
            </van-tab> 
        </van-tabs>    
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:0
        }
    }
}
</script>


<style lang="scss">
    
</style>

