<template>
  <div>
    <PreLoader />
    <div id="app" class="toggled" v-if="isAuthenticated">
      <SideBar />
      <div id="page-content-wrapper" v-if="isAuthenticated">
          <div class="container-fluid">
            <button v-on:click="toggleSidebar" type="button" id="toggle-sidebar" class="btn btn-default">
              <icon name="bars"></icon> {{ $t("message.toggle_sidebar") }}
            </button>
            <h3>{{ $t($route.name) }}</h3>
            <router-view/>
          </div>
      </div>
    </div>
    <div v-if="!isAuthenticated" class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SideBar from './components/SideBar.vue'
import PreLoader from './components/PreLoader.vue'

export default {
  name: 'app',
  components: {
    SideBar,
    PreLoader
  },
  computed: {
    ...mapGetters('applications',{ isAuthenticated: 'isAuthenticated' }),
  },
  methods: {
    ...mapActions('applications',[
      'toggleSidebar'
    ])
  },
  created() {
    this.$store.dispatch('applications/initBaseData');
  }
}
</script>

<style>
body {
  overflow-x: hidden;
  font-size: 1rem !important;
}

#app {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#app.toggled {
  padding-left: 250px;
}

#app.toggled #sidebar-wrapper {
  width: 250px;
}

#page-content-wrapper {
  width: 100%;
  position: absolute;
  padding: 15px;
  background-color: #fff;
  min-height: 100vh;
}

#app.toggled #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
}

@media(min-width:768px) {
  #app {
    padding-left: 0;
  }
  #app.toggled {
    padding-left: 250px;
  }
  #sidebar-wrapper {
    width: 0;
  }
  #app.toggled #sidebar-wrapper {
    width: 250px;
  }
  #page-content-wrapper {
    padding: 20px;
    position: relative;
  }
  #app.toggled #page-content-wrapper {
    position: relative;
    margin-right: 0;
  }
}
#toggle-sidebar {
  border: 1px solid #ccc;
  font-size: 14px;
  color: #66615B;
  margin-bottom: 10px;
}
#toggle-sidebar > .fa-icon {
  margin-top: -5px;
}
</style>
