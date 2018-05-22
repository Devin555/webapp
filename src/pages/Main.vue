<template>
  <div>
    <router-view/>
    
    <mu-paper id="footer">
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="/home" title="首頁" icon="home" />
        <mu-bottom-nav-item value="/recent" title="附件" icon="pin_drop" />
        <mu-bottom-nav-item value="/guang" title="逛一逛" icon="language" />
        <mu-bottom-nav-item value="/order" title="訂單" icon="assignment" />
        <mu-bottom-nav-item value="/mine" title="我的" icon="account_circle" />
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      bottomNav: "/home"
    };
  },
  mounted() {
    this.bottomNav = this.$route.path;
  },
  methods: {
    handleChange(val) {
      // axios.get('http://g.cn').then(res => {
      //     console.log(res.data)
      // })
      this.bottomNav = val;
      this.$router.push({
        path: val
      });
    }
  }
};
</script>

<style>
#footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
#footer .mu-buttom-item {
  min-width: 0.64rem;
}
</style>
