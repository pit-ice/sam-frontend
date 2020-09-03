<template>
  <div class="header">
    <h1>header</h1>
    <div class="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">소개</router-link></li>
        <li><router-link to="/sample">SKGC 오토소재</router-link></li>
        <li><router-link to="/sample">AUTO INFO</router-link></li>
        <li><router-link to="/sample">VIRTUAL R&D LAB</router-link></li>
        <li><router-link to="/sample">TECH-SUPPORT</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout-header',
};
</script>
