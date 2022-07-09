<script>
import { defineComponent } from "vue";
import VSkeleton from "@/v-skeleton.vue";

export default defineComponent({
  name: "ServeDev",
  components: {
    VSkeleton,
  },
});
</script>

<template>
  <div id="app">
    <div class="grid">
      <v-skeleton
        v-for="i in 20"
        :key="i"
        width="300px"
        height="300px"
        title="MY-SITE.COM"
        placeItems="center"
        textRotation="45deg"
      />
    </div>
  </div>
</template>

<style scoped>
#app {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
}
</style>
