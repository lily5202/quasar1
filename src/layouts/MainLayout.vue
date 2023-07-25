<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="store.toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="store.leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <!-- 如果你想要将一个对象的所有属性都当作 props 传入，你可以使用没有参数的 v-bind -->
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup ref lang="ts">
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';
//store
import { useLayoutStore } from 'src/stores/layout';
const store = useLayoutStore();

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Index',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'IndexPage',
  },
  {
    title: 'PageOne',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'PageOne',
  },
  {
    title: 'PageTwo',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'PageTwo',
  },
  {
    title: 'ClosePopup',
    icon: 'favorite',
    link: 'ClosePopup',
  },
];
</script>
