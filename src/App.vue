<template>
  <div id="app">
    <app-tool-panel :display="display" @display="display = $event"></app-tool-panel>
    <div class="main" :style="{'padding-left': display ? '190px' : '60px'}">
      <div class="title">
        <a>- {{$router.currentRoute.name}}</a>
      </div>
      <div class="component">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import ToolPanel from "./components/ToolPanel";

export default {
  data() {
    return {
      display: true
    };
  },
  components: {
    AppToolPanel: ToolPanel
  }
};
</script>

<style>
:root {
  --main-color: rgba(17,41,55, 0.95);
  --secondary-color: rgb(42, 43, 43);
  --third-color: rgb(29, 30, 31);
  --fourth-color: rgb(40, 76, 110);
}

body {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
  overflow: hidden;
  height: 100%;
}

.main {
  height: 100%;
  padding-top: 60px;
  transition: 0.3s;
}

.main .title {
  background-color: rgb(235, 235, 235);
  padding: 20px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1) inset;
}

.main .title a {
  padding-left: 50px;
  font-size: 20px;
}

.main .component {
  max-height: calc(100vh - 125px);
  overflow: auto;
}
</style>
