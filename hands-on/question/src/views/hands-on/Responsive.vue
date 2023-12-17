<template>
  <div class="wrapper">
    <section class="feature feature1">Feature 1</section>
    <section class="feature feature4">Feature 1</section>
    <section class="feature feature3">Feature 1</section>
    <section class="feature feature4">Feature 1</section>
  </div>
</template>

<style scoped>
section {
  @apply w-4/12;
}
.feature1 {
  @apply h-64 bg-red-500;
}
.feature2 {
  @apply h-64 bg-blue-500;
}
.feature3 {
  @apply h-64 bg-green-500;
}
.feature4 {
  @apply h-64 bg-yellow-500;
}
.feature {
  @apply inline-block;
}
</style>
