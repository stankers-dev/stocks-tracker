<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-alert
          dismissible
          border="bottom"
          color="red"
          type="warning"
          elevation="5"
        >
          {{ message }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    message: String
  },
  data: function () {
    return {

    }
  }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
