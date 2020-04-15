<template>
  <v-sheet>
    <v-form @submit.prevent="submit" ref="form" v-model="is_form_valid" v-if="!form_submit_success">
      <v-stepper v-model="step">
        <v-stepper-header>
          <v-stepper-step :complete="step > 1" step="1">
            Reason
            <!--<small>Fill in your personal details for the permit request</small>-->
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="step > 2" step="2">
            Personal Details
            <!--<small>Fill in your personal details for the permit request</small>-->
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="step > 3" step="3">
            Route Details
            <!--<small>Fill in the details of your trip</small>-->
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>

          <v-stepper-content step="1">
            <v-card flat class="">
              <v-card-text class="px-2">
                <v-select
                  v-model="form.reason"
                  label="Reason"
                  :items="reasons"
                  :rules="[required]"
                  placeholder="Reason"
                  solo>
                </v-select>
              </v-card-text>
              <v-card-actions>
                <v-btn class="mr-3" color="primary" @click="step = 2">Continue</v-btn>
                <v-btn text :to="{name:'home'}" text>Cancel</v-btn>
              </v-card-actions>
            </v-card>

          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card flat class="">
              <v-card-text class="px-2">
                <v-text-field v-model="form.full_name" label="Full name" :rules="[required]" solo></v-text-field>
                <v-select v-model="form.id_type" label="ID type" :rules="[required]" :items="id_types" solo></v-select>
                <v-text-field type="number" v-model="form.id_number" label="ID Number" :rules="[required]" solo></v-text-field>
                <v-select
                  v-model="form.nationality"
                  label="Nationality"
                  :rules="[required]"
                  :items="nationality"
                  solo>
                </v-select>
                <v-text-field v-model="form.home_address" label="Home Address" :rules="[required]" solo></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn class="mr-3" color="primary" @click="step = 3">Continue</v-btn>
                <v-btn text @click="step = 1" text>Previous</v-btn>
              </v-card-actions>
            </v-card>

          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card flat class="">
              <v-card-text class="px-2">
                <v-select
                  v-model="form.transport_mode"
                  label="Transport mode"
                  :items="transportation_options"
                  :rules="rules.transport"
                  solo>
                </v-select>

                <v-select
                  v-model="form.location_from"
                  label="Origin Address"
                  :items="locations"
                  :rules="rules.location"
                  solo>
                </v-select>

                <v-select
                  v-model="form.location_to"
                  label="Destination Address"
                  :items="locations"
                  :rules="rules.location"
                  solo>
                </v-select>

                <v-text-field
                  solo
                  label="Date"
                  placeholder="YYYY-MM-DD"
                  :rules="rules.date"
                  v-model="form.date">
                  <v-icon @click="[picker.type = 'date', picker.for= 'date', picker.show=true]" slot="append">
                    mdi-calendar
                  </v-icon>
                </v-text-field>

                <div class="d-flex">
                  <v-text-field
                    solo
                    label="Date"
                    placeholder="HH-MM"
                    :rules="rules.time_from"
                    v-model="form.time_from">
                    <v-icon @click="[picker.type = 'time', picker.for= 'time_from', picker.show=true]" slot="append">
                      mdi-calendar-clock
                    </v-icon>
                  </v-text-field>

                  <div class="mx-4"></div>

                  <v-text-field
                    solo
                    label="Date"
                    placeholder="HH-MM"
                    :rules="rules.time_to"
                    v-model="form.time_to">
                    <v-icon @click="[picker.type = 'time', picker.for= 'time_to', picker.show=true]" slot="append">
                      mdi-calendar-clock
                    </v-icon>
                  </v-text-field>

                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn type="submit" color="primary" :disabled="!is_form_valid">APPLY</v-btn>
                <v-btn text @click="step = 2">Previous</v-btn>
              </v-card-actions>
            </v-card>

          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
      <v-dialog v-model="picker.show" max-width="400">
        <v-date-picker v-model="form[picker.for]" v-if="picker.type == 'date'"></v-date-picker>
        <v-time-picker v-model="form[picker.for]" v-else></v-time-picker>
      </v-dialog>
    </v-form>
    <v-card class="" transition="slide-x-transition"  v-else>
      <v-card-title class="justify-center">Application Submitted</v-card-title>
      <v-card-text class="justify-center">
        <div class="justify-center d-flex mb-4">
          <v-icon color="primary" size="80">
            mdi-thumb-up
          </v-icon>
        </div>

        <div class="body-1">
          Your application for a movement permit has been submitted and is currently undergoing review.
        </div>
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn :to="{name:'home'}" text color="primary">Back</v-btn>
      </v-card-actions>

    </v-card>
  </v-sheet>
</template>
<script>
const required = v => !!v || 'Field is required' ;

export default {
  name:"PersonalPermit",

  data(){
    return{
      //:0,
      step:1,
      reasons:[
        {text:'Medical Appointment', value:'med_appointment'},
        {text:'Grocery/Pharmacy Supplies', value:'supplies'},
        {text:'Emergency', value:'emergency'},
      ],
      id_types:[
        {text:'Emirates ID', value:'emirates_id'},
        {text:'Passport', value:'passport'},
        {text:'Driving Licence', value:'driving_licence'},
      ],
      transportation_options:[
        {text:'Car', value:'car'},
        {text:'Walking/cycling', value:'walk'},
        {text:'Motorcycle', value:'motorcycle'},
        {text:'Public Transportation', value:'public_transport'},
      ],

      locations:[
        "Abu Dhabi",
        "Sharjah",
        "Ajman"
      ],

      nationality:[
        "Andorras",
        "Brazil",
        "Chile",
        "Denmark"

      ],

      picker:{
        type:'',// date |time
        for:'', // form.
        show:false
      },

      rules:{
        full_name:[
          required
        ],
        transport:[
          required
        ],
        location:[
          required
        ],
        date:[
          required
        ],
        time_from:[
          required
        ],
        time_to:[
          required
        ]
      },

      is_form_valid:false,

      form:{

      },

      form_submit_success:false,
    }
  },
  methods:{
    submit(){
      if(this.$refs.form.validate())
        {
        this.form_submit_success = true
        }

    },
    required
  }
}
</script>
