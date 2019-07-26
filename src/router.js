import Vue from "vue";
import Router from "vue-router";
import Entries from "@/views/Entries.vue";
import EditEntry from "@/views/EditEntry.vue";
import NewEntry from "@/views/NewEntry.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "entries",
      component: Entries
    },
    {
      path: "/entry/new",
      name: "new-entry",
      component: NewEntry
    },
    {
      path: "/entry/:id/edit",
      name: "edit-entry",
      props: true,
      component: EditEntry
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/404",
      name: "404",
      component: NotFound
    },
    {
      path: "*",
      redirect: { name: "404" }
    }
  ]
});
