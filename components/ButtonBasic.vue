<template>
	<button class="basic-button" :class="props.cssClasses">{{ props.label }} </button>
</template>

<script setup>

const props = defineProps({
  cssClasses: String,
  label: String
})

</script>