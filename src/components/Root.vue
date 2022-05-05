<template>
  <div class="flex items-start">
    <Node :item="item" />
  </div>
</template>

<script>
import Node from "@/components/Node.vue";

export default {
  props: {
    item: Object,
  },
  components: {
    Node,
  },
};
</script>
