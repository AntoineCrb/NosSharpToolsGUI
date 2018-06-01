<template>
   <div class="panel" :class="{'expanded': display}">
      <div class="top-panel transition">
         <span class="fas fa-bars icon menu transition" @click="$emit('display', !display)"></span>
      </div>
      <div class="left-panel transition">
         <a class="text transition">{{display ? 'NosSharpToolsGUI' : 'Nos#'}}</a>

         <div class="tools">

            <div v-for="tool in tools" :key="tool.name" class="main-tool transition" :class="{'tool-open': tool.open}">
               <div class="main-name" @click="tool.open = ! tool.open"><i class="icon" :class="tool.icon"></i><a class="transition">{{tool.name}}</a> <span class="fas fa-angle-left transition"></span></div>

               <router-link tag="a" v-for="t in tool.childs" :key="t.name" :to="{ name: t.routerLink}" class="tool">
                  <span class="icon transition" :class="t.icon"></span>
                  <a class="name transition">{{t.name}}</a>
               </router-link>
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
        .main-name {
          font-size: 14px;
          width: 100%;
          color: rgb(190, 190, 190);
          padding: 10px 0;
          background-color: var(--third-color);

          .icon {
            position: relative;
            left: 150px;
            cursor: pointer;
          }

          a {
            display: none;
          }
          span {
            display: none;
          }
        }

        .main-name:hover {
          color: var(--fourth-color);
        }

        .tool {
          display: none;
        }
      }
    }
  }

  .icon {
    color: #fff;
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

  .tools {
    .main-tool {
      overflow: hidden;
      max-height: 38px;

      .main-name {
        cursor: pointer;
        font-size: 14px;
        width: 100%;
        color: rgb(190, 190, 190);
        padding: 10px 0;
        background-color: var(--third-color);

        .icon {
          display: none;
        }

        a {
          margin-left: 5px;
          display: inline !important;
        }

        span {
          display: inline-block !important;
          position: relative;
          left: 10px;
        }
      }

      .tool {
        display: block !important;
        padding: 15px 0;
        cursor: pointer;
        text-decoration: none;

        .icon {
          font-size: 15px;
          margin-left: 5px;
        }

        .name {
          margin-left: 5px;
          vertical-align: 10%;
          font-weight: 200;
          font-size: 14px;
          color: rgb(202, 202, 202);
        }
      }

      .tool:hover {
        .icon {
          color: var(--fourth-color);
        }

        .name {
          margin-left: 10px;
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

.transition {
  transition: 0.3s;
  -webkit-transition: 0.3s;
}
</style>
