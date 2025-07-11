<script lang="ts" setup>
import { ref, computed, defineProps, onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';
import type { TabItem } from '@/types/TabTypes';

// Props 정의
const props = defineProps<{
  tabs: TabItem[]; //탭 배열값
  level?: number; // 탭 레벨값
}>();

// 현재 활성 탭 ID
const activeTab = ref<string>('');

// 컴포넌트가 마운트될 때 처음 한 번 첫 번째 탭을 선택
onMounted(() => {
  if (props.tabs.length > 0) {
    activeTab.value = props.tabs[0].id;
  }
});

// 탭 클릭 시 변경
const setActiveTab = (id: string) => {
  activeTab.value = id;
};

// 현재 활성 탭 컴포넌트 (필요시 async 컴포넌트로 감쌀 수 있음)
const activeTabComponent = computed(() => {
  const comp = props.tabs.find((tab) => tab.id === activeTab.value)?.component ?? null;
  // 만약 comp가 비동기 컴포넌트 함수라면, defineAsyncComponent로 감쌀 수 있음
  return typeof comp === 'function' ? defineAsyncComponent(comp) : comp;
});

// level 기반 클래스
const tabClass = computed(() => `tab-level${props.level ?? 1}`);
</script>

<template>
  <div class="tabs-contain">
    <div class="tab-head" :class="tabClass">
      <!-- 탭 버튼 -->
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="setActiveTab(tab.id)"
        :class="{ active: activeTab === tab.id }"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- 탭 내용 -->
    <div class="tab-body">
      <Suspense>
        <template #default>
          <div>
            <component :is="activeTabComponent" />
          </div>
        </template>
        <template #fallback>
          <USLoading dimmed />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@scss/components/tabs.scss'
</style>
