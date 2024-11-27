<template>
    <div>
      <h3>{{ title }}</h3>
      <div v-if="!multiple && selectedItem">{{ selectedItem.name }}</div>
      <div v-else>
        <div v-for="item in selectedItems" :key="item.id">{{ item.name }}</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    title: String,
    selectedItems: Array,
    selectedItem: Object,
    multiple: Boolean,
  });
  </script>
  