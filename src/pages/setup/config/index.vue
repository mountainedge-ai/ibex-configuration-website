<script setup lang="ts">
  import { DeviceType, deviceTypeObj } from '@/sscma/constants';
  import { useDeviceStore } from '@/store';
  import GroveAIWE2Config from './grove_ai_we2/index.vue';

  const deviceStore = useDeviceStore();
</script>

<template>
  <GroveAIWE2Config
    v-if="deviceStore.deviceType.id === deviceTypeObj[DeviceType.GroveAIWE2].id"
  />
</template>
