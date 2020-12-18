<template>
  <div class="d-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DCheckboxGroup',
  provide() {
    return {
      CheckboxGroup: this
    }
  },
  data() {
    return {}
  },
  methods: {},
  components: {},
  props: {
    value: {
      type: Array
    }
  },
  created() {},
  mounted() {},
  computed: {},
  watched: {}
}
</script>
<style scoped lang="less"></style>
