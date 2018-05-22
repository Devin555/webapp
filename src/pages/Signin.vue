<template>
    <div class="login">
        <div>
            <van-nav-bar
            title="用户注册"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="loginbox">
            <van-cell-group>
                <van-field
                    v-model="username"
                    label="用户名"
                    icon="clear"
                    placeholder="请输入用户名admin"
                    required
                    @click-icon="username = ''"
                />

                <van-field
                    v-model="password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码123"
                    required
                />
            </van-cell-group>
            <div class="submit">
                <van-button size="small" type="primary" @click="submitForm">登陆</van-button>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
import { mapActions, mapState } from "vuex";
import { checkUser } from "@/API/api";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["isLogin"])
  },
  methods: {
    ...mapActions(["loginAction"]),
    submitForm() {
      this.checkUser();
    },
    async checkUser() {
      if ((this.username = "admin" && this.password == "123")) {
        let param = {};
        const response = await checkUser(param);
        if (response.data.code == 200) {
          if (response.data.status == true) {
            console.log("登陆成功");
            this.loginAction();
            this.$router.push({
              path: "home"
            });
          }
        } else {
          console.log(response);
        }
      }else{
          Toast('请输入用户名admin，密码123');
      }
    },
    onClickLeft(){
        this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss">
.login {
    .van-nav-bar{
        background:#33cccc;
        color: #ffffff;
    }
  .loginbox {
    margin-top: 12rem;
    padding: 0 1rem;
  }
  .submit {
    width: 100%;
    padding: 1rem;
    .van-button {
      width: 100%;
    }
  }
}
</style>


