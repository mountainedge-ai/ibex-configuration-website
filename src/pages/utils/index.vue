<script setup lang="ts">
  import { DeviceType, deviceTypeObj } from '@/sscma/constants';
  import { useDeviceStore } from '@/store';
  import GroveAIWE2Tools from './grove_ai_we2/index.vue';

  const deviceStore = useDeviceStore();
</script>

<template>
  <GroveAIWE2Tools
    v-if="deviceStore.deviceType.id === deviceTypeObj[DeviceType.GroveAIWE2].id"
    key="IBEX WE2"
  />
</template>
