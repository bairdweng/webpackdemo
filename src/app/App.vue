<template>
    <div id="app">
        <div @click="onClickLeft()">自定义的脚手架哦{{msg}}</div>
    </div>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator'
import { UserInfo } from '../models/userinfo'

export default class App extends Vue {
    // 初始化数据
    msg = 1231231231
    // 声明周期钩子
    mounted() {
      let isDone: boolean = false
      isDone = true
      const userInfo = new UserInfo('121')
      userInfo.fistName = '12'
      userInfo.lastName = '2'
      console.log(`我草你大爷的哦${userInfo.fistName}`)
    }
    private onClickLeft() {
      console.log("哈哈哈哈哈哈哈")
    }
}
</script>
<style >
</style>