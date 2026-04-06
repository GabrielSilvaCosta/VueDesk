import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { readAuthSession } from "@/utils/authStorage";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/",
      component: DefaultLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          name: "dashboard",
          component: () => import("@/views/DashboardView.vue"),
        },
        {
          path: "usuarios",
          name: "usuarios",
          component: () => import("@/views/UsersView.vue"),
        },
        {
          path: "configuracoes",
          name: "configuracoes",
          component: () => import("@/views/SettingsView.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to) => {
  const session = readAuthSession();
  const isAuthed = session?.logged === true;

  if (to.name === "login") {
    if (isAuthed) {
      return { path: "/" };
    }
    return true;
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthed) {
      return { path: "/login", query: { redirect: to.fullPath } };
    }
  }

  return true;
});

export default router;
