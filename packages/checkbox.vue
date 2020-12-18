<template>
  <label
    :class="[
      'd-checkbox',
      isChecked ? 'is-checked' : '',
      disabled ? 'is-disabled' : '',
      mimicry ? 'is-mimicry' : ''
    ]"
  >
    <span class="d-checkbox__input">
      <span
        class="d-checkbox__inner"
        :style="{
          backgroundColor: isChecked ? activeColor : '#fff',
          borderColor: isChecked ? activeColor : '#dcdfe6'
        }"
      ></span>
      <input
        type="checkbox"
        class="d-checkbox__original"
        :name="name"
        :value="label"
        v-model="model"
        :disabled="disabled"
      />
    </span>
    <span class="d-checkbox__label">
      <slot>选项</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'DCheckbox',
  // 接收父组件checkboxgroup的this,如果有
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {},
  components: {},
  props: {
    // 父组件传来的值，Boolean
    value: {
      type: Boolean,
      default: false
    },
    // 父组件传进来的label，String类型，作为子组件元素input的value值
    label: {
      type: String,
      default: ''
    },
    // 父组件传的name，String类型，用作子组件的name
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: '#409eff'
    },
    mimicry: {
      type: Boolean,
      default: false
    }
  },
  created() {},
  mounted() {},
  computed: {
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set(value) {
        this.isGroup
          ? this.CheckboxGroup.$emit('input', value)
          : this.$emit('input', value)
      }
    },
    isGroup() {
      return !!this.CheckboxGroup
    },
    isChecked() {
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  },
  watched: {}
}
</script>
<style scoped lang="scss">
.d-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .d-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .d-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        // 这里使用边框实现对勾的样式
        box-sizing: content-box;
        content: '';
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        width: 3px;
        position: absolute;
        left: 4px;
        top: 1px;
        transform: rotate(45deg) scaleY(1);
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }

    .d-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .d-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
// 父元素的最后的一个子元素d-checkbox取消margin-right，也包括嵌套子元素的最后一个d-checkbox
.d-checkbox:last-of-type {
  margin-right: 0;
}
.d-checkbox.is-checked {
  .d-checkbox__inner {
    background-color: #409eff;
    border-color: #409eff;
    &:after {
      transform: rotate(45deg) scaleY(1);
    }
  }
  .d-checkbox__label {
    color: #409eff;
  }
}

.d-checkbox.is-disabled {
  .d-checkbox__inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
  }
  span.d-checkbox__label {
    color: #c0c4cc;
    cursor: not-allowed;
  }
}

.d-checkbox.is-mimicry {
  .d-checkbox__inner {
    box-shadow: inset 3px 2px 4px #cacaca48,
      inset -3px -2px 4px rgba(255, 255, 255, 0.377);
  }
}
</style>
