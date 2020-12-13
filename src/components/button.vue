<template>
  <button
    :class="[
      'd-button',
      `d-button--${type}`,
      mimicry ? 'is-mimicry' : '',
      plain ? 'is-plain' : '',
      round ? 'is-round' : '',
      circle ? 'is-circle' : '',
      disabled ? 'is-disabled' : ''
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <div class="mask" v-if="disabled"></div>
    <fai :icon="icon" v-if="icon" />
    <!-- tip:根据是否传入内容进行span渲染 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'DButton',
  data() {
    return {}
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  },
  components: {},
  props: {
    // 按钮类型
    type: {
      type: String,
      default: 'default',
      // type值校验
      validator: function(value) {
        return (
          [
            'default',
            'success',
            'primary',
            'danger',
            'warning',
            'info'
          ].indexOf(value) !== -1
        )
      }
    },
    mimicry: {
      type: Boolean,
      default: false
    },
    // 朴素按钮
    plain: {
      type: Boolean
    },
    // round按钮
    round: {
      type: Boolean
    },
    // 圆形按钮
    circle: {
      type: Boolean
    },
    // icon
    icon: {
      // tip：这里icon为数组类型，给它添加一个布尔作为默认值，让fai不渲染
      type: [Array, Boolean],
      default: false
    },
    // disabled禁用
    disabled: {
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
.d-button {
  display: inline-block;
  position: relative;
  font-family: 'PingFang SC', 'Microsoft Yahei', sans-serif;
  line-height: 1;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  white-space: nowrap;
  color: #606266;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  // 禁止文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.d-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  //   box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.d-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}

.d-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.d-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.d-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}

// 拟态
.d-button.is-mimicry {
  box-shadow: inset 3px 6px 10px #ccc, inset -3px -7px 10px #fff;
}

.d-button--primary.is-mimicry {
  box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
}
.d-button--info.is-mimicry {
  box-shadow: inset 3px 6px 10px #73767a, inset -3px -7px 10px #adb0b8;
}
.d-button--success.is-mimicry {
  box-shadow: inset 3px 6px 10px #6aa54e, inset -3px -7px 10px #a0f774;
}
.d-button--warning.is-mimicry {
  box-shadow: inset 3px 6px 10px #bc914f, inset -3px -7px 10px #ffd977;
}
.d-button--danger.is-mimicry {
  box-shadow: inset 3px 6px 10px #c45656, inset -3px -7px 10px #ff8282;
}

// 朴素按钮

.d-button.is-plain {
  box-shadow: unset;
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.d-button--primary.is-plain {
  box-shadow: unset;
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.d-button--success.is-plain {
  box-shadow: unset;
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.d-button--info.is-plain {
  box-shadow: unset;
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.d-button--warning.is-plain {
  box-shadow: unset;
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.d-button--danger.is-plain {
  box-shadow: unset;
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round
.d-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// 圆形按钮
.d-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// 让图标和文字之间空开
.d-button [class*='fa-'] + span {
  margin-left: 5px;
}
// 禁用
.d-button.d-button.is-disabled .mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(148, 146, 146, 0.39);
  left: 0;
  top: 0;
  box-shadow: 2px 2px 3px rgba(216, 213, 213, 0.3);
  border-radius: 4px;
  z-index: 100;
}
.d-button.is-round .mask {
  border-radius: 20px;
}

.d-button.is-circle .mask {
  border-radius: 50%;
}
.d-button.is-disabled {
  cursor: no-drop;
}
</style>
