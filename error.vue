<template>
	<span>error 404</span>
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
