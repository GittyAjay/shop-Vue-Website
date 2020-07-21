<template>
  <div>
    <cv-header aria-label="Carbon header">
      <cv-header-menu-button aria-label="Header menu" aria-controls="side-nav" />
      <cv-skip-to-content href="#main-content">Skip to content</cv-skip-to-content>
      <cv-header-name href="javascript:void(0)" prefix="M">CART</cv-header-name>

      <template slot="header-global">
        <cv-header-global-action
          aria-label="Notifications"
          aria-controls="notifications-panel"
          @click="notifyAction"
        >
          <Notification />
        </cv-header-global-action>
        <cv-header-global-action
          aria-label="User avatar"
          @click="profileAction"
          aria-controls="user-panel"
        >
          <UserAvatar />
        </cv-header-global-action>
        <cv-header-global-action
          aria-label="App switcher"
          aria-controls="switcher-panel"
          @click="areRightPanels != areRightPanels"
        >
          <AppSwitcher />
        </cv-header-global-action>
      </template>

      <template slot="left-panels" v-if="areLeftPanels">
        <cv-side-nav id="side-nav" rail>
          <SideNav />
        </cv-side-nav>
      </template>

      <template slot="right-panels" v-if="areRightPanels">
        <cv-header-panel id="user-panel">An empty user panel</cv-header-panel>
        <cv-header-panel id="notifications-panel">An empty panel</cv-header-panel>
        <cv-header-panel id="switcher-panel">
          <cv-switcher>
            <cv-switcher-item>
              <cv-switcher-item-link href="javascript:void(0)" active>Selected app</cv-switcher-item-link>
            </cv-switcher-item>
            <cv-switcher-item>
              <cv-switcher-item-link href="javascript:void(0)">Other app</cv-switcher-item-link>
            </cv-switcher-item>
            <cv-switcher-item>
              <cv-switcher-item-link href="javascript:void(0)">Other app</cv-switcher-item-link>
            </cv-switcher-item>
            <cv-switcher-item>
              <cv-switcher-item-link href="javascript:void(0)">Other app</cv-switcher-item-link>
            </cv-switcher-item>
            <cv-switcher-item>
              <cv-switcher-item-link href="javascript:void(0)">Other app</cv-switcher-item-link>
            </cv-switcher-item>
            <cv-switcher-item>
              <cv-switcher-item-link href="javascript:void(0)">Other app</cv-switcher-item-link>
            </cv-switcher-item>
          </cv-switcher>
        </cv-header-panel>
      </template>
    </cv-header>
    <div id="container-main" >
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SideNav from "@/components/main/SideNav";
export default {
  name: "App",
  data() {
    return {
      areRightPanels: true,
      areLeftPanels: true
    };
  },
  components: {
    SideNav
  },
  methods: {
    notifyAction() {},
    profileAction() {}
  },
};
</script>
