<template>
  <div class="d-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DRadioGroup',
  data() {
    return {}
  },
  provide() {
    return {
      RadioGroup: this
    }
  },
  methods: {},
  components: {},
  props: {
    value: null
  },
  created() {},
  mounted() {},
  computed: {},
  watched: {}
}
</script>
<style scoped lang="scss"></style>
