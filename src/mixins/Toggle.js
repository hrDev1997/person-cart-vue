export default {
  data() {
    return {
      listItem: [],
      cartItem: [],
      maxSelectedCount: 1,
      error: ''
    }
  },
  methods: {
    clickItem(item) {
      if(this.cartItem.length < this.maxSelectedCount) {
        this.cartItem.push(item)
        this.listItem = this.listItem.filter(function( obj ) {
          return obj.id !== item.id;
        });
      } else {
        console.log(this.cartItem.length)
        this.error = `You cannot add more than ${this.maxSelectedCount} item to a cart`
      }
    },

    clickCartItem(item) {
      this.error = ''
        this.listItem.push(item)
        this.cartItem = this.cartItem.filter(function( obj ) {
          return obj.id !== item.id;
        });
    }
  }
}