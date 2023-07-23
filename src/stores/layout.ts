import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('counter', {
  state: () => ({
    leftDrawerOpen: true,
  }),

  getters: {},

  actions: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
});
