import { defineStore } from 'pinia';

export const useLayoutStore = defineStore({
  id: 'layout',
  state: () => ({
    isSidebarOpen: true,
    mini: false,
  }),
  getters: {},
  actions: {
    toggleMini() {
      this.mini = !this.mini;
    },
    closeMini() {
      this.mini = false;
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    openSidebar() {
      this.isSidebarOpen = true;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
  },
});
