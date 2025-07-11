<template>
  
  <USTabs :tabs="tabItems" :level="1" />

  <USInput />

  <div class="group-field">
    <div class="group-row">
      <div class="group-item">라마바</div>
    </div>
    <div class="group-row">
      <div class="group-label">가나다</div>
      <div class="group-item">라마바</div>
    </div>
    <div class="group-row">
      <div class="group-label">가나다</div>
      <div class="group-item">라마바</div>
      <div class="group-label">가나다</div>
      <div class="group-item">라마바</div>
    </div>
    <div class="group-row">
      <div class="group-label">가나다</div>
      <div class="group-item">라마바</div>
      <div class="group-label">가나다</div>
      <div class="group-item">라마바</div>
      <div class="group-label">가나다</div>
      <div class="group-item">라마바</div>
    </div>
  </div>
 
</template>

<script lang="ts" setup>
import { tabItems } from '@/types/TabTypes';
</script>

<style lang="scss" scoped>
.group-field {
  display: flex;
  flex-direction: column;
  .group-row {
    display: flex;
  }
  .group-label {
    min-width: 100px;
    flex: 0 0 auto;
    background: blue;
  }
  .group-item {
    flex:1 1 auto;
    background: red;
  }
}
.test {
  display: flex;
  justify-content: start;
  width: 600px;
  background-color: red;
  .item {
    margin-left:20px;
    white-space: nowrap;
    background:#ccc;
    >span {
      display: inline-block;
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      background: #ddd;
    }
    &:first-child {
      margin-left: 0;
      max-width: clac(100%);
      flex-grow: 1;
      flex-basis: 310px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>