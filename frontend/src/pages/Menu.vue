<script setup>
import MenuSection from '../components/MenuSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
    <div class="page menu">
        <MenuSection />
        <FooterSection />
    </div>
</template>

<style scoped>
.page {
    min-height: 100vh;
    width: 100%;
}
</style>
