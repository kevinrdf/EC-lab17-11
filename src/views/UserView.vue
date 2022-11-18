<script>
import UserComponent from "../components/UserComponent.vue";
import router from "../router";
import spotifyAPI from "../utils/spotifyAPI";

export default {
  name: "UserView",
  data() {
    return {
      displayName: "",
      img: "",
      followers: 0,
    };
  },
  components: {
    UserComponent,
  },
  async created() {
    const userData = await spotifyAPI.getUser();
    //TODO: implementar esto. llenar los datos del usuario
    router.push({path: "/", query: {displayName:this.displayName}})
    router.push({path: "/", query: {img: this.img}})
    router.push({path: "/", query: {followers: this.followers}})
  },
};
</script>

<template>
  <main>
    <UserComponent
      :displayName="displayName"
      :img="img"
      :followers="followers"
    />
  </main>
</template>