<template>
   <div class="panel" :class="{'expanded': display}">
      <div class="top-panel transition">
         <span class="fas fa-bars icon menu transition" @click="$emit('display', !display)"></span>
      </div>
      <div class="left-panel transition">
         <a class="text transition">{{display ? 'NosSharpToolsGUI' : 'Nos#'}}</a>

         <div class="tools">

            <div v-for="tool in tools" :key="tool.name" class="main-tool transition" :class="{'tool-open': tool.open}">
               <div class="main-name transition" @click="tool.open = ! tool.open"><a>{{tool.name}}</a> <span class="fas fa-angle-left"></span></div>

               <div v-for="t in tool.childs" :key="t.name" class="tool">
                  <span class="icon" :class="t.icon"></span>
                  <a class="name">{{t.name}}</a>
               </div>
            </div>

         </div>
      </div>
   </div>
</template>

<script>
import Tools from "../assets/tools.json";

export default {
  props: ["display"],
  data() {
    return {
      tools: Tools
    };
  }
};
</script>

<style scoped lang="scss">
.panel {
  .top-panel {
    background-color: var(--main-color);
    height: 50px;
    width: 100%;
    position: absolute;
    z-index: 10;
    padding-left: 70px;
    padding-top: 10px;

    .menu {
      font-size: 15px;
      cursor: pointer;
      position: relative;
      top: 10px;
    }
  }

  .left-panel {
    background-color: var(--secondary-color);
    padding-top: 50px;
    height: 100%;
    width: 190px;
    position: absolute;
    left: -130px;

    .text {
      font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial,
        sans-serif;
      font-weight: 200;
      font-size: 20px;
      color: #fff;
      position: relative;
      top: -35px;
      left: 140px;
      z-index: 20;
    }

    .tools {
      padding-top: 50px;

      .main-tool {
        overflow: hidden;
        max-height: 40px;

        .main-name {
          cursor: pointer;
          font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial,
            sans-serif;
          font-weight: 400;
          font-size: 14px;
          width: 100%;
          color: rgb(190, 190, 190);
          padding: 10px 0;
          background-color: var(--third-color);

          a {
            margin-left: 5px;
          }

          span {
            position: relative;
            left: 10px;
          }
        }

        .main-name:hover {
          color: var(--fourth-color);
        }

        .tool {
          padding: 15px 0;
          cursor: pointer;

          .icon {
            font-size: 15px;
            margin-left: 5px;
          }

          .name {
            margin-left: 5px;
            vertical-align: 10%;
            font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial,
              sans-serif;
            font-weight: 200;
            font-size: 14px;
            color: rgb(202, 202, 202);
          }
        }
      }

      .tool-open {
        max-height: 400px;
        .main-name {
          span {
            transform: rotate(-90deg);
          }
        }
      }
    }
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
    padding-left: 200px;
  }

  .left-panel {
    left: 0px;
    .text {
      left: 20px;
    }
  }
}
</style>
