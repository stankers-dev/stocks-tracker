<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12"><v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Outstanding Shares
              </th>
              <th class="text-left">
                Url
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ stockDetail.name }}</td>
              <td>{{ stockDetail.shareOutstanding }}</td>
              <td>{{ stockDetail.weburl }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    stockDetail: Object
  },
  data: function () {
    return {
      stockRecs: ''
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
    getRecommendation: function (ticker) {
      this.axios.get(`https://finnhub.io/api/v1/stock/recommendation?symbol=${ticker}&token=c0dfkcn48v6sgrj2j3g0`).then((response) => {
        return response.data
      })
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
</style>
