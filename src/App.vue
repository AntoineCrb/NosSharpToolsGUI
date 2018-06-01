<template>
  <div id="app">
    <app-tool-panel :display="display" @display="display = $event"></app-tool-panel>
    <router-view/>
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
  --main-color: rgba(31, 45, 54, 0.95);
  --secondary-color: rgb(42, 43, 43);
  --third-color: rgb(29, 30, 31);
  --fourth-color: rgb(40, 76, 110);
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
