<script>

/* IMPORTER LES COMPOSANTS ICI */
import MainLayout from './components/Layout/MainLayout.vue'
import MainNav from './components/Layout/MainNav.vue'
import ProductsTable from "./components/Product/ProductsTable.vue"

export default {
  name: "App",
  components: {
    MainLayout,
    MainNav,
    ProductsTable
  },  
  /* Utilisation d'un hook du cycle de vie du composant */
  updated() {
    console.log(this.name)
    console.log(this.description)
    console.log(this.price)
  },
  data() {
    return {
      userNavItemsArray : [
        {
          name: "Settings",
          link: "#",
          target: "_self"
        },
        {
          name: "Profile",
          link: "#",
          target: "_self"
        }
      ],
      navItemsArray : [
        {
          name: "Edit",
          link: "#",
          target: "_self",
          emit: [
            { event: "updatePage", value: {"EditPage": true}}
          ],
          class: "link-body-emphasis"
        },
        {
          name: "Preview",
          link: "#",
          emit: [
            { event: "updatePage", value: {"PreviewPage": true}}
          ],
          target: "_self",
          class: "link-body-emphasis"
        },
        {
          name: "Settings",
          link: "#",
          emit: [
            { event: "updatePage", value: {"settingsPage": true}}
          ],
          target: "_self",
          class: "link-body-emphasis"
        }
      ],
      //on ajoute nos fonctions dans data
      showUserNav: false,
      showMainNav:false,
      name: "biscuit",
      description: "Oh qu'ils sont bon !!",
      price: 99,
      vta: 20,
      category: "sweet",
      products: [
        {
          id: 1,
          name: "biscuit",
          category: "sweet",
          description: "Oh qu'ils sont bon !!",
          price: 100,
          vta: 20
        }
      ]
    }
  },
  methods: {
    submitForm() {
      this.products.push({
        id: this.products.length + 1,
        name: this.name,
        category: this.category,
        description: this.description,
        price: this.price,
        vta: this.vta
      })
    },
    toggleMainNav() {
      //permet d'afficher ou non la nav bar
      this.showUserNav = !this.showUserNav
      this.showMainNav = !this.showMainNav
    }
  }
}

</script>

<template>
  <main-layout>
    <!-- redéfinir les slots  -->
      <!-- - DEBUT injecter dans le slot Header -->
      <template 
        #header
        

      >
        <button 
        @click="toggleMainNav()"
        class="btn fancy-btn"
      >
        {{this.showUserNav ? "Hide" : "Show"}}
      </button>
      <!-- Il faut ajouter la props dans data() et la relier en dessous -->
      <main-nav
        :navItems="navItemsArray"
        :userNavItems="userNavItemsArray"
        :showUserNav="showUserNav"
        :showMainNav="showMainNav"
      />

      <!-- Ajouter un bouton login qui toggle/bascule la valeur de showUserNav -->
      <!-- un bouton -->
      <!-- l'event click -->
      <!-- une methode pour modifier la valeur -->
      
      
    <!-- - FIN injecter dans le slot Header -->
  </template>
    
    <!-- Injecter ici les données dans le slot default 
    du composant main-layout -->
    <template #default>
    <!-- Injection dans le Slot default -->
    <section class="d-flex wrap">
      <section class="col-6">
        <h2 class="w-f">Product Form</h2>
        <form @submit.prevent="submitForm">
          <div class="w-f">
            <label for="name">Name</label>
            <!-- v-model permet de "bind" un input avec une data
            Le Bind est bi-directionnel, si on modifie l'input la data est modifiée,
            si on modifie la data, la valeur de l'input est modifiée. -->
            <input v-model="name" name="name"  type="text" id="name">
            <p>le nom est : {{ name }}</p>
          </div>
          <div class="w-f">
            <label for="price">Price</label>
            <input v-model="price" name="price" type="range" min="20" max="50" id="price"> €
          </div>
          <div class="w-f">
            <label for="vta">TVA</label>
            <input 
              v-model="vta"
              name="vta"
              type="number"
              id="vta"
            > %
          </div>
          <div class="w-f">
            <label for="category">CATEGORIE</label>
            <select
              v-model="category"
              name="category"
              id="category"
            >
              <option value="meat">Viande</option>
              <option value="vegetable">Légume</option>
              <option value="drink">Boisson</option>
              <option value="sweet">Confiserie</option>
            </select>
          </div>
          <div class="w-f">
            <textarea 
              v-model="description"
              name="description"
              id="description-form" 
              cols="30" rows="10"
            ></textarea>
          </div>
          <button type="submit">Save</button>
        </form>
      </section>
      <products-table
        class="col-6"
        :products="products"  
      />
    </section>
  </template>

    <!-- Injection dans le slot footer -->
    <template #footer>
      
    </template>
    
  </main-layout>
</template>

<style scoped>
</style>
