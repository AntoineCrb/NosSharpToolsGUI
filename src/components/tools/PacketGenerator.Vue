<template>
    <div class="packet-generator">
        <div class="tool-panel">
            <a class="sub-title">Tools</a>
            <input type="text" v-model="packetHeader" placeholder="packet header"/><br>
            <input type="text" v-model="className" placeholder="class name" class="input-class"/><br>
            <button type="button" class="button" @click="addParam()">Add Parameter</button>
            <div v-for="(p, index) in parameters" :key="index">
              <i class="delete fas fa-times" @click="parameters.splice(index,1)"></i>
              {{index}}. 
              <input type="text" v-model="p.type" placeholder="type" size="6"/>
              <input type="text" v-model="p.name" placeholder="name" size="8"/>
              <input type="checkbox" v-model="p.optional" placeholder="optional"/> optional
            </div>
            <button type="button" class="button" @click="clear()">Clear</button>
        </div>
        <div class="output-panel">
            <a class="sub-title">Output</a>
            <textarea type="text" v-html="output" readonly class="output"></textarea>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      packetHeader: "",
      className: "",
      parameters: [],
      output: ``
    };
  },
  methods: {
    updateOutput() {
      var str = "";
      this.parameters.forEach(
        p =>
          (str += `\t[PacketIndex(${this.parameters.indexOf(p)}${
            p.optional ? ", IsOptional = true" : ""
          })]\n\tpublic ${p.type} ${p.name} {get; set; }\n\n`)
      );
      this.output = `[PacketHeader("${this.packetHeader}")]\npublic class ${
        this.className
      }\n{\n${str}}`;
    },
    addParam() {
      this.parameters.push({
        type: "",
        name: "",
        optional: false
      });
    },
    clear() {
      this.packetHeader = "";
      this.className = "";
      this.parameters = [];
    }
  },
  watch: {
    packetHeader() {
      this.updateOutput();
    },
    className() {
      this.updateOutput();
    },
    parameters: {
      handler: function(val, oldVal) {
        this.updateOutput();
      },
      deep: true
    }
  }
};
</script>

<style scoped lang="scss">
.packet-generator {
  width: 100%;
  padding-top: 100px;
  display: table;
  background-color: rgb(240, 240, 240);
  text-align: center;
  min-height: 600px;

  .tool-panel {
    width: 50%;
    display: table-cell;

    .input-class {
      margin-bottom: 10px;
    }

    .delete {
      cursor: pointer;
      font-size: 10px;
      margin-right: 5px;
    }
  }

  .output-panel {
    display: table-cell;

    .output {
      width: 90%;
      max-width: 500px;
      height: 500px;
      max-height: 500px;
    }
  }

  .sub-title {
    display: block;
    font-size: 20px;
    margin-bottom: 20px;
  }
}
</style>
