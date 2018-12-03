<template>
    <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <li class="sidebar-brand">
                <a href="#">
                    <img src="../assets/logo2.png" class="rounded" />
                    <br/>
                    {{ $t("message.applicationName") }}
                </a>
                <Locale />
                <hr/>
            </li>
            <li v-for="item in items" :key="item.id">
                <router-link 
                    active-class="active" 
                    v-if="item.hasSubItems === ''" 
                    v-bind:to="item.to" 
                    v-bind:class="item.hasSubItems">
                        <icon v-bind:name="item.icon"></icon><span>{{ item.title }}</span>
                </router-link>
                <router-link 
                    v-if="item.hasSubItems !== ''"
                    to="#" data-toggle="collapse"
                    v-bind:class="item.hasSubItems"
                    v-b-toggle = "'collapse0' + item.id">
                        <icon v-bind:name="item.icon"></icon><span>{{ item.title }}</span>
                </router-link>
                <b-collapse 
                    v-if="item.hasSubItems != ''" 
                    v-bind:id="'collapse0'+item.id">
                    <router-link 
                        active-class="active"
                        v-for="subitem in item.subitems"
                        :key="subitem.id" 
                        v-bind:to="subitem.to">
                            <icon v-bind:name="subitem.icon"></icon> {{ subitem.title }}
                    </router-link>
                </b-collapse>
            </li>
        </ul>
    </div>
</template>
<script>
import Locale from './Locale.vue'

export default {
  name: 'SideBar',
  props: {
    msg: String
  },
  components: {
    Locale
  },
  data() {
    return {
        items: [
            { id: 1, title: this.$i18n.t('message.menu_1'), icon: 'search', hasSubItems: '', to: '/helloworld1' },
            { id: 2, title: this.$i18n.t('message.menu_2'), icon: 'save', hasSubItems: '', to: '/helloworld2' },
            { id: 3, title: this.$i18n.t('message.menu_3'), icon: 'edit', hasSubItems: '', to: '/helloworld3' },
            { id: 4, title: this.$i18n.t('message.menu_4'), icon: 'user-edit', hasSubItems: 'dropdown-toggle'
                , subitems: [
                    { id: 1, title: this.$i18n.t('message.menu_3_1'), icon: 'circle-notch', to: '/import' },
                    { id: 2, title: this.$i18n.t('message.menu_3_2'), icon: 'circle-notch', to: '/helloworld99' }
                ] 
            },
            { id: 5, title: this.$i18n.t('message.menu_5'), icon: 'database', hasSubItems: '', to: '/helloworld4' },
            { id: 6, title: this.$i18n.t('message.menu_6'), icon: 'chart-line', hasSubItems: '', to: '/helloworld5' },
            { id: 7, title: this.$i18n.t('message.menu_7'), icon: 'chart-bar', hasSubItems: '', to: '/helloworld6' },
            { id: 8, title: this.$i18n.t('message.menu_8'), icon: 'sign-out-alt', hasSubItems: '', to: '/helloworld7' },
        ]
    }
 }
}
</script>
<style scoped>
#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 0;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #FFC107;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.sidebar-nav {
  position: absolute;
  top: 0;
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
}

.sidebar-nav li {
  text-indent: 20px;
  line-height: 40px;
}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #66615B;
}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: #000;
  background: #FFECB3;
}

.sidebar-nav li a:active, .sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav > li > a > span{
    margin-left: 15px;
} 

.sidebar-nav>.sidebar-brand {
    height: auto;
    text-align: center;
    vertical-align: middle;
    color: #66615B;
    line-height: 20px;
    font-size: 14px;
    padding-top: 10px;
}

.sidebar-nav>.sidebar-brand > a > img {
    width: 40px;
    margin-left: -30px;
    padding-bottom: 10px;
}

.sidebar-nav>.sidebar-brand a {
  color: #66615B;
}

.sidebar-nav>.sidebar-brand a:hover {
  color: #000;
  background: none;
}
.sidebar-nav>.sidebar-brand > hr {
    width: 85%;
    color: rgba(102, 97, 91, 0.3);
}
.dropdown-toggle::after {
    display: block;
    position: absolute;
    right: 20px;
    transform: translateY(-50%);
    top:50%;
}
a[data-toggle="collapse"] {
    position: relative;
}
a[aria-expanded="true"] {
    background: #FFD54F;
    color:#000;
}
.collapse{
    background: #FFE082;
}
.collapse > a {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 20px;   
}
.active{
    background-color: #FFF8E1;
    color:#000;
}
</style>
