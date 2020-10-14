<template>
  <div class="component">
    <div class="t1">Components 모음</div>
    <br />

    <div class="t2">Text</div>
    <div class="t3">size</div>
    <div class="box">
      <p class="txt">Text size default</p>
      <p class="txt big">Text size big</p>
      <p class="txt small">Text size small</p>
    </div>

    <div class="t3">Color</div>
    <div class="box">
      <p class="txt point">Text color point</p>
      <p class="txt light">Text color light</p>
      <p class="txt black">Text color black</p>
      <p class="txt white">Text color white</p>
      <p class="txt link"><a href="#">Text Link color</a></p>
    </div>

    <div class="t2">Title</div>
    <div class="box">
      <h3>Title h3</h3>
      <h4>Title h4</h4>
      <h5>Title h5</h5>
    </div>

    <div class="t2">Buttons</div>
    <div class="t3">size</div>
    <div class="box">
      <router-link to="" tag="button" class="btn">default size button</router-link>
      <router-link to="" tag="button" class="btn big">big size button</router-link>
      <router-link to="" tag="button" class="btn small">small size button</router-link>
    </div>
    <br />
    <div class="t3">color</div>
    <div class="box">
      <router-link to="" tag="button" class="btn">default color button</router-link>
      <router-link to="" tag="button" class="btn btn-point">point color button</router-link>
      <router-link to="" tag="button" class="btn btn-light">light color button</router-link>
    </div>
    <div class="t2">Icons</div>
    <div class="box"></div>
    <div class="t2">Forms</div>
    <div class="t3">Input</div>
    <div class="box">aaaa</div>
    <div class="t3">Selecbox</div>
    <div class="box">aaaa</div>
    <div class="t3">Checkbox</div>
    <div class="box">aaaa</div>
    <div class="t3">Radio</div>
    <div class="box">aaaa</div>
    <div class="t3">File</div>
    <div class="box">aaaa</div>
    <div class="t2">Tab menu</div>
    <div class="t2">List</div>
  </div>
</template>

<style lang="scss" scoped>
.component {
  padding: 10px;
  background: #f2f2f2;
}
.t1 {
  text-align: center;
  font-size: 30px;
}
.t2 {
  background: #6494c4;
  color: #fff;
  margin: 0 0 10px 0;
  padding: 0 0 0 5px;
  height: 24px;
  font-size: 20px;
}
.t3 {
  display: inline-block;
  border-bottom: 2px solid #5496d8;
  margin: 10px 0 10px 10px;
  font-size: 16px;
  font-weight: bold;
}
.box {
  padding: 0 0 0 10px;
  margin: 0 0 20px 0;
}
</style>
