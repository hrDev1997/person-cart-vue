<template>
    <div class="container">
      <div class="cart">
        <div @click="clickCartItem(item)" class="cartItem" v-for="item in cartItem">
          <div>
            item {{ item.id }}
          </div>
        </div>
      </div>

      <div class="items">
        <div @click="clickItem(item)" class="item"  v-for="item in listItem">
            item {{ item.id }}
        </div>
      </div>
      <p class="messageError" >{{ error }}</p>

    </div>
  </template>
  
  <script>
  import Toggle from '@/mixins/Toggle'

  export default {
    mixins: [Toggle],
    data() {
      return {
        listItem: [
          {
              "id": 1,
              "name": "Shoes 1"
          },

          {
            "id": 2,
            "name": "Shoes 2"
          },

          {
              "id": 3,
              "name": "Shoes 3"
          },
          
          {
              "id": 4,
              "name": "Shoes 4"
          },

          {
              "id": 5,
              "name": "T-shirt 1"
          },

          {
              "id": 6,
              "name": "T-shirt 2"
          },

          {
              "id": 7,
              "name": "T-shirt 3"
          },

          {
              "id": 8,
              "name": "T-shirt 4"
          }
        ],
        cartItem: [],
        error: '',
        maxSelectedCount: 6
      }
    },
  }

  </script>