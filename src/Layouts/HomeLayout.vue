<template>
    <v-app id="">
        <!--<v-navigation-drawer
            v-model="drawer"
            :clipped="$vuetify.breakpoint.lgAndUp"
            app
            >
            <userNav/>
        </v-navigation-drawer>-->

        <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            app
            color="white"
            >
            <!--<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
            <v-toolbar-title
                style="width: 230px"
                class="ml-0 pl-0"
                >
                <router-link  class="text-capitalize" :to="{path:'/'}">
                    {{appName}}
                </router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn text>FAQs</v-btn>
            <v-btn text>Exempted sectors</v-btn>
        </v-app-bar>
        <v-content>
            <v-container
                class="fill-height"
                fluid
                >
                <slot />
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import {APP_NAME} from '@/constants.js' ;
export default {
  name:"HomeLayout",

  props: {
    source: String,
    },
    data: () => ({
     drawer: null,
     appName:APP_NAME,

    }),

    components:{

    },
    methods:{

    }
  }
</script>
