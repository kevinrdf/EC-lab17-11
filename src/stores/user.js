import { defineStore, acceptHMRUpdate } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    id: "",
    accessToken: "",
  }),

  actions: {
    logout() {
      //TODO: implementar esto
      this.id="";
      this.accessToken="";
    },
    /**
     * Attempt to login a user
     * @param {string} user
     */
    async login(id, accessToken) {
      //TODO: implementar esto
      this.id=id;
      this.accessToken=accessToken;
    },
    isAuthenticated() {
      //TODO: implementar esto
      return this.accessToken !== "";
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}

//export default useUserStore;