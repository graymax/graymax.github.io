import { defineAsyncComponent, type DefineComponent } from 'vue';

export interface TabItem {
  id: string;
  label: string;
  component: DefineComponent | any;
}

export const tabItems: TabItem[] = [
  { 
    id: 'cont1', 
    label: 'TabCont1', 
    component: defineAsyncComponent(() => import('@/pages/TabCont1.vue')),
  },
  { 
    id: 'cont2', 
    label: 'TabCont2', 
    component: defineAsyncComponent(() => import('@/pages/TabCont2.vue')), 
  },
  { 
    id: 'cont3', 
    label: 'TabCont3', 
    component: defineAsyncComponent(() => import('@/pages/TabCont3.vue')), 
  },
];