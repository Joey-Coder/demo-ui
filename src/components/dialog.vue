<template>
  <transition name="dialog-fade">
    <!-- 遮罩 -->
    <div class="d-dialog_wrapper" v-show="visiable" @click.self="closeDialog">
      <div
        :class="['d-dialog', mimicry ? 'is-mimicry' : '']"
        :style="{ width, 'margin-top': top }"
      >
        <div class="d-dialog_header">
          <!-- title支持slot插槽 -->
          <slot name="title">
            <span class="d-dialog_title">{{ title }}</span>
          </slot>
          <d-button
            circle
            :icon="['far', 'times-circle']"
            class="d-dialog_headerbtn"
            @click="closeDialog"
          ></d-button>
        </div>
        <div class="d-dialog_body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="d-dialog_footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'DDialog',
  data() {
    return {}
  },
  methods: {
    closeDialog() {
      this.$emit('update:visiable', false)
    }
  },
  components: {},
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visiable: {
      type: Boolean,
      default: false
    },
    mimicry: {
      type: Boolean,
      default: false
    }
  },
  created() {},
  mounted() {},
  computed: {},

  watched: {}
}
</script>
<style scoped lang="scss">
// 重点学习遮罩的实现
.d-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: -3vh;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .d-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      display: flex;
      justify-content: space-between;
      .d-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .d-dialog_headerbtn {
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .d-icon-close {
          color: 909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      // CSS 属性 word-break 指定了怎样在单词内断行
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      //   ::v-deep 相当less中的/deep/
      ::v-deep .d-button:first-child {
        margin-right: 20px;
      }
    }
  }
  // 拟态风格
  .d-dialog.is-mimicry {
    border-radius: 12px;
    box-shadow: inset 7px 14px 23px #dadada, inset -7px -14px 23px #eeeeee;
  }
}
.dialog-fade-enter-active {
  animation: fade 0.5s;
}

.dialog-fade-leave-active {
  animation: fade 0.39s reverse;
}
@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(-3vh);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
