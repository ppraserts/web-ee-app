<template>
  <div id="app" class="toggled">
    <SideBar/>
    <div id="page-content-wrapper">
        <div class="container-fluid">
          <button v-on:click="greet" type="button" id="toggle-sidebar" class="btn btn-default">
            <icon name="bars"></icon> Toggle Sidebar
          </button>
          <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
export default {
  name: 'app',
  components: {
    SideBar
  },
  methods: {
    greet: function () {
      var currentClass = document.getElementById("app").className;
      document.getElementById("app").className = currentClass === "toggled" ? "" : "toggled";
    }
  }
}
</script>

<style>
body {
  overflow-x: hidden;
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
}
</style>
