<template>
  <div class="container">
    <div class="top-blocks">
      <div class="selected-items">
        <h3>Выбранные вещи пользователя</h3>
        <ul>
          <li v-for="item in selectedUserItems" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
      <div class="selected-item">
        <h3>Выбранная вещь</h3>
        <p v-if="selectedItem">{{ selectedItem.name }}</p>
        <p v-else>Выберите вещь</p>
      </div>
    </div>

    <div class="bottom-blocks">
      <div class="items-block">
        <h3>Вещи пользователя</h3>
        <ul>
          <li
            v-for="item in userItems"
            :key="item.id"
            @click="toggleUserItem(item)"
            :class="{ selected: selectedUserItems.includes(item) }"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="items-block">
        <h3>Вещи на выбор</h3>
        <ul>
          <li
            v-for="item in selectableItems"
            :key="item.id"
            @click="selectItem(item)"
            :class="{ selected: selectedItem === item }"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const userItems = ref([
  { id: 1, name: "Shoes 1" },
  { id: 2, name: "Shoes 2" },
  { id: 3, name: "Shoes 3" },
  { id: 4, name: "Shoes 4" },
  { id: 5, name: "T-shirt 1" },
  { id: 6, name: "T-shirt 2" },
  { id: 7, name: "T-shirt 3" },
  { id: 8, name: "T-shirt 4" },
]);

const selectableItems = ref([
  { id: 11, name: "Jacket 1" },
  { id: 12, name: "Jacket 2" },
  { id: 13, name: "Jacket 3" },
  { id: 14, name: "Jacket 4" },
  { id: 15, name: "Hoodie 1" },
  { id: 16, name: "Hoodie 2" },
  { id: 17, name: "Hoodie 3" },
  { id: 18, name: "Hoodie 4" },
]);

const selectedUserItems = ref([]);
const selectedItem = ref(null);

function toggleUserItem(item) {
  if (selectedUserItems.value.includes(item)) {
    selectedUserItems.value = selectedUserItems.value.filter(
      (selected) => selected.id !== item.id
    );
  } else if (selectedUserItems.value.length < 6) {
    selectedUserItems.value.push(item);
  }
}

function selectItem(item) {
  selectedItem.value = item;
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
}

.top-blocks,
.bottom-blocks {
  display: flex;
  justify-content: space-between;
}

.selected-items,
.selected-item,
.items-block {
  width: 48%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  padding: 8px;
  border: 1px solid #ccc;
  margin: 4px 0;
  border-radius: 4px;
}

li.selected {
  background-color: #d0f0d0;
}
</style>
