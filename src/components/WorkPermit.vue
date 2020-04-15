<template>
  <v-sheet>
    <v-card>
      <v-card-title>Select occupation</v-card-title>
      <v-card-text >
        <div class="body-2" v-if="success">
          With regard to the exempt sectors and their employees,
          registration is not required, but they must obtain a letter from the
          employer stating their movement to and from work.
          The paper has to be presented if stopped by authorities.
        </div>
        <template v-else>
          <v-select v-model="form.occupation"
            label="Choose occupation" solo
            hint="Please select the category of your work"
            :items="works"
            >
          </v-select>
        </template>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" v-show="!success" :disabled="!form.occupation"
          class="mr-2 px-3"
          @click="success=true" rounded>
          Continue
        </v-btn>
        <v-btn :to="{name:'home'}" text>{{success ? 'Back' : 'Cancel' }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-sheet>
</template>
<script>
export default {
  name:"WorkPermit",
  data(){
    return {
      works:["Supplies", "Telecommunications", "Medical staff", "Health services", "Electricity/Water Stations"],
      form:{},
      success:false,
    }
  }
}
</script>
