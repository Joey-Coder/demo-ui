// 整个包的入口
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import CheckboxGroup from './checkbox-group'
import Form from './form'
import FormItem from './form-item'

var components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem
]

const install = function(Vue, options) {
  if (options && options.components) {
    components = options.components
  }
  components.forEach(item => {
    // 往全局注册组件
    Vue.component(item.name, item)
  })
}

// script直接引用
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem
}
export default { install }
