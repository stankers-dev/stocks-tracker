<template>
  <v-container>
    <v-row class="text-center">
      <v-col col="12">
        <v-row>
          <v-col cols="8">
              <v-text-field
                  v-model="stockName"
                  :rules="nameRules"
                  :counter="6"
                  label="Ticker"
                  required
              ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-btn icon color="pink">
                <v-icon
                  id="favorite-button"
                  large
                  v-on:click='getStock(upperCaseStockName)'
                >mdi-heart</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <FavoritesTable v-if='stockData' :stocks='stockData' @clicked="stockButtonClicked" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import FavoritesTable from '@/components/FavoritesTable.vue'
const API_KEY = process.env.VUE_APP_API_KEY
export default {
  props: {
    message: String
  },
  data: function () {
    return {
      stockName: '',
      singleStockObject: {},
      stockData: [],
      nameRules: [
        v => !!v || 'Ticker is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ]
    }
  },
  components: {
    FavoritesTable
  },
  computed: {
    upperCaseStockName: function () {
      return this.stockName.toUpperCase() 
    }
  },
  methods: {
    getStock: function (ticker) {
      var stockFound = false;
      console.log(`searching for ${ticker}...`)
      // if stockData array is NOT empty
      if(this.stockData.length > 0) {
        // iterate over stockData array
        for(const stock of this.stockData) {
          // stock hasnt been found
          // if we find a matching ticker
          if(stock.ticker == ticker) {
            // stock is found
            stockFound = true
          }
        }
        // if found
        if(stockFound === true) {
          // dupe stock dont add to array
          console.log('dupe stock found')
        } else {
          // if stock isnt found, get and push response
          this.getStockData(ticker);
        }
      // if stockData is empty, always get and push object
      } else {
        this.getStockData(ticker);
      }
    },
    stockButtonClicked: function (stock) {
      console.log('middle component activated')
      this.$emit('clicked', stock)
    },
    getStockData: function(ticker) {   
      this.axios.get(`https://finnhub.io/api/v1//stock/profile2?symbol=${ticker}&token=${API_KEY}`).then((response) => {
        this.stockData.push(response.data)
      })
    }
  }
}
</script>
<style scoped>
.v-input {
  padding-left: 1em;
}
.v-btn--icon {
  margin: 1em;
}
#table-alert {
  height: 3em;
}
</style>
