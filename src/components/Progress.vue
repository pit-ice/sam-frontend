<template>
  <vue-ellipse-progress
    :progress="progressRate"
    :angle="-90"
    :legend="true"
    :thickness="100"
    dash="strict 60 0.95"
    :empty-thickness="100"
    line="butt"
    animation="rs 1000"
    :dot="{ size: 100, backgroundColor: 'rgba(100,256,4,1)', width: '2px' }"
    line-mode="in-over"
  />
</template>

<script>
export default {
  name: 'Progress',
  props: {
    progressRate: Number,
  },
};
</script>
