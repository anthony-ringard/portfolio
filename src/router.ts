import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AuditView from "./views/AuditView.vue";
import ContactView from "./views/ContactView.vue";
import ThankYouView from "./views/ThankYouView.vue";
import CgvView from "./views/CgvView.vue";
import MentionsLegalesView from "./views/MentionsLegalesView.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/audit", name: "audit", component: AuditView },
    { path: "/contact", name: "contact", component: ContactView },
    { path: "/audit/merci", name: "audit-merci", component: ThankYouView },
    { path: "/cgv", name: "cgv", component: CgvView },
    { path: "/mentions-legales", name: "mentions-legales", component: MentionsLegalesView },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) {
      // Laisse le DOM de la vue cible se monter avant de scroller vers l'ancre.
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ el: to.hash, behavior: "smooth" });
        }, 150);
      });
    }
    return { top: 0 };
  },
});
