<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>

  <RouterView />
</template>

<style>
body
{
    overflow: hidden;
    overflow-y: scroll;
}
</style>