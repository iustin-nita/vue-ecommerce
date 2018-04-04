<template>
  <product-list :products="products"></product-list>
</template>

<script>
  import ProductList from '../../components/products/ProductList.vue'
  export default {
    created () {
      this.$store.dispatch('allProducts')
    },
    computed: {
      products () {
        return this.$store.getters.allProducts;
      }
    },
    components: {
      'product-list': ProductList
    }
  }
</script>
