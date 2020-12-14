<template>
  <div :class="['d-input', showSuffix ? 'suffix' : '']">
    <textarea
      :class="['d-input__textarea', disabled ? 'is-disabled' : '']"
      name=""
      id=""
      cols="30"
      rows="10"
      :placeholder="placeholder"
      @input="handleInput"
      v-if="type === 'textarea'"
    ></textarea>
    <input
      v-else
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisiable ? 'text' : 'password') : type"
      :class="['d-input__inner', disabled ? 'is-disabled' : '']"
      :name="name"
      :value="value"
      @input="handleInput"
    />
    <span class="d-input__suffix" v-if="showSuffix">
      <fai
        :icon="['far', 'times-circle']"
        v-if="clearable && value"
        @click="clearInput"
      />
      <fai
        :icon="['far', 'eye']"
        v-if="showPassword && value"
        @click="handlePassword"
        :class="[passwordVisiable ? 'active' : '']"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: 'DInput',
  data() {
    return {
      passwordVisiable: false
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    clearInput() {
      this.$emit('input', '')
    },
    handlePassword() {
      this.passwordVisiable = !this.passwordVisiable
    }
  },
  components: {},
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  created() {},
  mounted() {},
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword
    }
  },
  watched: {}
}
</script>
<style scoped lang="scss">
.d-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  .d-input__textarea {
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    padding: 10px 15px;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  .d-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 10px 15px;
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }

    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.d-input.suffix {
  .d-input_inner {
    padding-right: 30px;
  }
  .d-input__suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    cursor: pointer;
    z-index: 900;
    fai {
      color: #c0c4cc;
      font-size: 14px;
    }
    & .active {
      color: #666;
    }
  }
}
</style>
