<template>
<div class="panel" :class="{'expanded': display}">
    <div class="top-panel transition">
        <span class="fas fa-bars icon menu transition" @click="display = !display"></span>
    </div>
    <div class="left-panel transition">
    
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      display: false
    };
  }
};
</script>

<style scoped lang="scss">
.panel {
  .top-panel {
    background-color: var(--secondary-color);
    height: 40px;
    width: 100%;
    position: absolute;
    z-index: 10;

    .menu {
      font-size: 15px;
      position: relative;
      left: 45px;
      top: 10px;
      cursor: pointer;
    }
  }

  .left-panel {
    background-color: var(--third-color);
    padding-top: 50px;
    height: 100%;
    width: 180px;
    position: absolute;
    left: -140px;
  }

  .icon {
    color: #fff;
  }

  .transition {
    transition: 0.3s;
    -webkit-transition: 0.3s;
  }
}

.expanded {
  .top-panel {
    .menu {
      left: 185px;
    }
  }

  .left-panel {
    left: 0px;
  }
}
</style>
