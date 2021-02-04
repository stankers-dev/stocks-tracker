<template>
  <v-container fluid>
    <template>
        <v-simple-table
        :dense="dense"
        :fixed-header="fixedHeader"
        :height="height"
        >
        <template v-slot:default>
            <tbody>
            <tr v-for='stock in stocks' :key='stock.ticker'>
              <td>
                <v-btn
                  block
                  text
                  x-large
                  v-on:click="displayStockData(stock.ticker)"
                  >
                  ${{ stock.ticker }}
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </template>
  </v-container>
</template>
<script>
  export default {
    props: {
        'stocks': Array
    },
    data: () => ({
      dense: false,
      fixedHeader: false,
      height: 625,
    }),
    methods: {
      displayStockData(key){
        for(const stock of this.stocks){
          if(stock.ticker === key) {
            console.log('child method activated')
            this.$emit('clicked', stock)
          }
        }
      }
    }
  }
</script>
<style scoped>
img {
    width: 5em;
}
td:first-child {
  margin-top: 5em;
}
</style>