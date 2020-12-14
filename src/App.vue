<template>
  <div id="app">
    <!-- <div class="button">
      <div class="row">
        <h3>普通按钮</h3>
        <d-button>button</d-button>
        <d-button type="primary">primary</d-button>
        <d-button type="success">success</d-button>
        <d-button type="info">info</d-button>
        <d-button type="warning">warning</d-button>
        <d-button type="danger">danger</d-button>
      </div>
      <div class="row">
        <h3>拟态按钮</h3>
        <d-button mimicry>button</d-button>
        <d-button type="primary" mimicry>primary</d-button>
        <d-button type="success" mimicry>success</d-button>
        <d-button type="info" mimicry>info</d-button>
        <d-button type="warning" mimicry>warning</d-button>
        <d-button type="danger" mimicry>danger</d-button>
      </div>

      <div class="row">
        <h3>朴素按钮</h3>
        <d-button plain>button</d-button>
        <d-button type="primary" plain>primary</d-button>
        <d-button type="success" plain>success</d-button>
        <d-button type="info" plain>info</d-button>
        <d-button type="warning" plain>warning</d-button>
        <d-button type="danger" plain>danger</d-button>
      </div>

      <div class="row">
        <h3>圆角按钮</h3>
        <d-button round>button</d-button>
        <d-button type="primary" round>primary</d-button>
        <d-button type="success" round>success</d-button>
        <d-button type="info" round>info</d-button>
        <d-button type="warning" round>warning</d-button>
        <d-button type="danger" round>danger</d-button>
      </div>
      <div class="row">
        <h3>圆形按钮</h3>
        <d-button circle :icon="['far', 'smile']"> </d-button>
        <d-button type="primary" circle :icon="['far', 'edit']"> </d-button>
        <d-button type="success" circle :icon="['fas', 'check']"> </d-button>
        <d-button type="info" circle :icon="['far', 'envelope']"> </d-button>
        <d-button type="warning" circle :icon="['far', 'star']"> </d-button>
        <d-button type="danger" circle :icon="['far', 'trash-alt']"> </d-button>
      </div>
      <div class="row">
        <h3>禁用按钮</h3>
        <d-button plain disabled>button</d-button>
        <d-button type="primary" disabled>primary</d-button>
        <d-button type="success" disabled>success</d-button>
        <d-button type="info" disabled>info</d-button>
        <d-button type="warning" disabled>warning</d-button>
        <d-button type="danger" disabled>danger</d-button>
      </div>
      <div class="row">
        <h3>文字加图标按钮</h3>
        <d-button :icon="['far', 'smile']">button</d-button>
        <d-button type="primary" :icon="['far', 'edit']">primary</d-button>
        <d-button type="success" :icon="['fas', 'check']">success</d-button>
        <d-button type="info" :icon="['far', 'envelope']">info</d-button>
        <d-button type="warning" :icon="['far', 'star']">warning</d-button>
        <d-button type="danger" :icon="['far', 'trash-alt']">danger</d-button>
      </div>
      <div class="row">
        <h3>点击事件</h3>
        <d-button type="primary" @click="sayHello">say hello</d-button>
      </div>
    </div> -->
    <div class="dialog">
      <d-button type="primary" @click="dialogVisiable = true"
        >显示对话框</d-button
      >
      <d-dialog
        title="tip"
        width="40%"
        top="200px"
        :visiable.sync="dialogVisiable"
      >
        <template v-slot:title>
          <span>提示</span>
        </template>
        <span>这是一段信息</span>
        <template v-slot:footer>
          <d-button @click="dialogVisiable = false">取消</d-button>
          <d-button type="primary" @click="dialogVisiable = false"
            >确定</d-button
          >
        </template>
      </d-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisiable: false
    }
  },
  methods: {
    sayHello() {
      window.alert('hello')
    },
    closeDialog(value) {
      this.dialogVisiable = value
    }
  }
}
</script>

<style lang="scss">
.row {
  margin-bottom: 20px;
  .d-button {
    margin-right: 10px;
  }
}
</style>
