<template>
  <div class="product-details text-center">
    <div class="container">
      <div class="row pt-5">
        <div class="col-lg-7 col-md-8 col-sm-10 col-xs-12 mx-auto product-details__image">
          <img
            class="img-fluid product-image" :src="product.image" alt="">
          <div class="product-details__description">
            <small>{{product.manufacturer && product.manufacturer.name}}</small>
            <h3>{{product.name}}</h3>
            <p>
              {{product.description}}
            </p>
          </div>
          <div class="product-details__price-cart">
            <p>${{product.price}}</p>
            <product-button :product="product" ></product-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductButton from './ProductButton'
  export default {
    props: ['product'],
    components: {
      'product-button': ProductButton
    }
  }
</script>

<style scoped>
  .product-image {
    max-height: 300px;
  }
</style>

