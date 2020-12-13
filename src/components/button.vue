<template>
  <button
    :class="[
      'd-button',
      `d-button--${type}`,
      plain ? 'is-plain' : '',
      round ? 'is-round' : '',
      circle ? 'is-circle' : ''
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'DButton',
  data() {
    return {}
  },
  methods: {},
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

// 朴素按钮

.d-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.d-button--primary.is-plain {
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
</style>
