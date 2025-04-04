<script setup lang="ts">
  import { DeviceType, deviceTypeObj } from '@/sscma/constants';
  import { useDeviceStore } from '@/store';
  import GroveAIWE2Output from './grove_ai_we2/index.vue';

  const deviceStore = useDeviceStore();
</script>

<template>
  <GroveAIWE2Output
    v-if="deviceStore.deviceType.id === deviceTypeObj[DeviceType.GroveAIWE2].id"
  />
</template>
