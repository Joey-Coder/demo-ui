<template>
  <div id="app">
    <div class="row">
      <h3>普通按钮</h3>
      <d-button>button</d-button>
      <d-button type="primary">primary</d-button>
      <d-button type="success">success</d-button>
      <d-button type="info">info</d-button>
      <d-button type="warning">warning</d-button>
      <d-button type="danger">danger</d-button>
    </div>

    <div class="row">
      <h3>朴素按钮</h3>
      <d-button plain>button</d-button>
      <d-button type="primary" plain>primary</d-button>
      <d-button type="success" plain>success</d-button>
      <d-button type="info" plain>info</d-button>
      <d-button type="warning" plain>warning</d-button>
      <d-button type="danger" plain>danger</d-button>
    </div>

    <div class="row">
      <h3>圆角按钮</h3>
      <d-button round>button</d-button>
      <d-button type="primary" round>primary</d-button>
      <d-button type="success" round>success</d-button>
      <d-button type="info" round>info</d-button>
      <d-button type="warning" round>warning</d-button>
      <d-button type="danger" round>danger</d-button>
    </div>
    <div class="row">
      <h3>圆形按钮</h3>
      <d-button circle>
        <fai :icon="['far', 'smile']" />
      </d-button>
      <d-button type="primary" circle>
        <fai :icon="['far', 'edit']" />
      </d-button>
      <d-button type="success" circle>
        <fai :icon="['fas', 'check']" />
      </d-button>
      <d-button type="info" circle>
        <fai :icon="['far', 'envelope']" />
      </d-button>
      <d-button type="warning" circle>
        <fai :icon="['far', 'star']" />
      </d-button>
      <d-button type="danger" circle>
        <fai :icon="['far', 'trash-alt']" />
      </d-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.row {
  margin-bottom: 20px;
  .d-button {
    margin-right: 10px;
  }
}
</style>
