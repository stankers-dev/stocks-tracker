<template>
  <v-container>
      <div>
        <template>
          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Details
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                >
                  <v-list-item-title>
                    <v-btn
                      text
                      x-small
                      v-on:click="test(item.title)"
                      >
                      {{ item.title }}
                    </v-btn>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <v-sheet
            color="#FFFFF"
            height="625"
            rounded
            width="100%"
          >
          <div id="detail-body">
            <Recommendations :stockRecommendation='getRecommendation()' v-if="currentView === 'Recommendations'" />
          </div>
          </v-sheet>
        </template>
      </div>
  </v-container>
</template>
<script>
import Recommendations from '@/components/Recommendations.vue'
export default {
  props: {
    stockDetail: Object
  },
  data: function () {
    return {
      stockRecs: '',
      items: [
        {title: 'Recommendations'},
        {title: 'Price Targets'}
      ],
      currentView: ''
    }
  },
  components: {
    Recommendations
  },
  computed: {
  },
  watch: {
    currentView: (newVal) => {
      console.log(newVal)
    }
  },
  methods: {
    getRecommendation: function (ticker) {
      this.axios.get(`https://finnhub.io/api/v1/stock/recommendation?symbol=${ticker}&token=c0dfkcn48v6sgrj2j3g0`).then((response) => {
        return response.data
      })
    },
    test: function(page) {
      console.log(`switching to ${page}`)
      this.currentView = page
    }
  },
  watch: {
    stockDetail: function(stock) {
      this.stockRecs = this.getRecommendation(stock.ticker)
    }
  }
}
</script>
<style scoped>
#detail-body {
  margin-top: 3em;
}
</style>
