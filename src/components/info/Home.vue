<template>
    <div class="home">
        <div class="logo"></div>
        <div class="content">
            <p>NosSharp Tools GUI is an open source project usable by everyone without any development knowledge required.</p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.home {
  padding-top: 50px;

  .logo {
    background: url("../../assets/logo.png") no-repeat;
    width: 150px;
    height: 150px;
    background-size: contain;
    margin: 0 auto;
  }

  .content {
    text-align: center;
    font-size: 18px;
  }
}
</style>
