<template>
    <div>
      <h3>{{ title }}</h3>
      <div class="item-block">
        <div
          v-for="item in items"
          :key="item.id"
          @click="onSelect(item)"
          :class="{ selected: isSelected(item) }"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    title: String,
    items: Array,
    onSelect: Function,
    isSelected: Function,
  });
  </script>
  
  <style scoped>
  .item-block {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .item-block div {
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .item-block div.selected {
    background-color: #d0f0d0;
  }
  </style>
  