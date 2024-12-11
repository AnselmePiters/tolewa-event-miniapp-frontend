import Aide from '@/components/pages/Aide.vue'
import HomePage from '@/components/pages/HomePage.vue'
import PageNotFound from '@/components/pages/PageNotFound.vue'
import Panier from '@/components/pages/Panier.vue'
import Ticket from '@/components/tickets/Ticket.vue'

const routes = [
  { path: "/", component: HomePage, name: "home"},
  { path: "/panier", component: Panier, name: "panier"},
  { path: "/ticket", component: Ticket, name: "ticket"},
  { path: "/aide", component: Aide, name: "aide"},
  { path: "/pathMatch(.*)*", component: PageNotFound}
]
export default routes
