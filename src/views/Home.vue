<template>
  <div class="home">  
    <Banner message='Under Construction :) -- fixing favorites menu' />
    <v-container>
      <v-row
        class="flex child"
      >
        <v-col
          class="d-flex"
          cols="2"
          md="2"
        >
        <v-sheet
          color="#75E6DA"
          elevation="8"
          height="750"
          rounded
          width="100%"
        >
          <StockList @clicked="outputStockData"/>
        </v-sheet>
        </v-col>
        <v-col
          class="d-flex"
          cols="10"
          md="10"
        >
        <v-sheet
          color="#75E6DA"
          elevation="8"
          height="750"
          rounded
          width="100%"
        >
          <StockDetails :stockDetail=this.stockToView />
        </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import StockList from '@/components/StockList.vue'
import StockDetails from '@/components/StockDetails.vue'

export default {
  name: 'Home',
  data: function () {
    return {
      stockToView: {}
    }
  },
  components: {
    Banner,
    StockList,
    StockDetails
  },
  methods: {
    outputStockData (stock) {
      console.log(stock)
      this.stockToView = stock
    }
  }
}
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
.home {
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  height: 100%;
  width: 100%;
  padding: 50px;
}
</style>