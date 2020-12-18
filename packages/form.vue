<template>
  <div class="d-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DForm',
  provide() {
    return {
      Form: this
    }
  },
  data() {
    return {}
  },
  methods: {},
  components: {},
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  created() {},
  mounted() {},
  computed: {},
  watched: {}
}
</script>
<style scoped lang="less"></style>
