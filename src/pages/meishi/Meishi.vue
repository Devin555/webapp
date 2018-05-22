<template>
    <div>
        meishi
        <button @click="fanhui">返回</button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        fanhui(){
            this.$router.back();  // 或者this.$router.go(-1)
        }
    }
}
</script>

