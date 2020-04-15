<template>
  <HomeLayout>
    <router-view />
  </HomeLayout>
</template>
<script>
import HomeLayout from '@/Layouts/HomeLayout.vue' ;
export default {
  name: 'App',

  components: {
    HomeLayout
  },

  data: () => ({
    //
  }),
};
</script>
