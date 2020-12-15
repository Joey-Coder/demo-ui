<template>
  <label :class="['d-radio', isChecked ? 'is-checked' : '']">
    <span class="d-radio__input">
      <span
        :class="['d-radio__inner', mimicry ? 'is-mimicry' : '']"
        :style="{
          borderColor: color && isChecked ? color : '#dcdfe6',
          backgroundColor: color && isChecked ? color : '#ffffff'
        }"
      ></span>
      <input
        type="radio"
        class="d-radio__original"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="d-radio__label"
      ><slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'DRadio',
  data() {
    return {}
  },
  methods: {},
  components: {},
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    },
    color: {
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
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set(value) {
        this.isGroup
          ? this.RadioGroup.$emit('input', value)
          : this.$emit('input', value)
      }
    },
    isGroup() {
      // 判断是否被radiogroup包裹
      return !!this.RadioGroup
    },
    isChecked() {
      return this.label === this.model
    }
  },
  watched: {}
}
</script>
<style scoped lang="scss">
.d-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .d-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .d-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      //   background-color: #409eff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }
    .d-radio__inner.is-mimicry {
      box-shadow: inset 4px 2px 6px #cacaca48,
        inset -4px -2px 6px rgba(255, 255, 255, 0.377);
    }
    .d-radio__inner:after {
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: #fff;
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.15s ease-in;
    }
    .d-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .d-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.d-radio.is-checked {
  .d-radio__input {
    .d-radio__inner {
      border-color: #409eff;
      background-color: #409eff;
      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .d-radio__label {
    color: #409eff;
  }
}
</style>
