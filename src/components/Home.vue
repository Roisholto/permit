<template>
  <div>
    <h3 class="headline">
      Movement Permit Registration in Lagos
    </h3>
    <div class="sub-header">
      Select your reason for requesting the permit
    </div>
    <div class="my-6"></div>
    <v-row>
      <v-col>
        <v-btn block outlined color="primary" :to="{name:'request-work'}">WORK</v-btn>
      </v-col>
      <v-col>
        <v-btn block outlined color="primary" :to="{name:'request-personal'}">PERSONAL</v-btn>
      </v-col>
    </v-row>

    <div class="body-2">
      Please be informed that permits
      will only be given for emergencies
    </div>


    <!--For more information check the FAQ-->
  </div>
</template>
<script>
export default {
  name:"Home"
}
</script>
