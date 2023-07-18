<template>
  <div id="app">

    <div class="components">
      <PersonItems/>
      <StoreItems/>
    </div>
  </div>
</template>

<script>
import PersonItems from '@/components/PersonItems.vue';
import StoreItems from '@/components/StoreItems.vue';

export default {
  components: {
    PersonItems,
    StoreItems
  },
}
</script>


<style>

.components {
  display: flex;
  justify-content: space-around;
}

</style>
