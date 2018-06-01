<template>
  <div id="app">
    <app-tool-panel></app-tool-panel>
    <router-view/>
  </div>
</template>

<script>
import ToolPanel from "./components/ToolPanel";

export default {
  components: {
    AppToolPanel: ToolPanel
  }
};
</script>

<style>
:root {
  --main-color: rgb(12, 45, 66);
  --secondary-color: rgba(34, 45, 51, 0.95);
  --third-color: rgb(44, 60, 68);
}

body {
  margin: 0;
  padding: 0;
}
</style>
