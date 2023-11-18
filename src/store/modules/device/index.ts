import { defineStore } from 'pinia';
import { DeviceStatus, Model, Firmware } from '@/sscma/types';

const useDeviceStore = defineStore('device', {
  state: () => ({
    deviceStatus: DeviceStatus.UnConnected,
    tiou: 0,
    tscore: 0,
    ready: false,
    isInvoke: false,
    models: [] as Model[],
    firmware: null as Firmware | null | undefined,
    currentModel: null as Model | null | undefined,
  }),

  getters: {},

  actions: {
    setReady(ready: boolean) {
      this.ready = ready;
    },
    setDeviceStatus(deviceStatus: DeviceStatus) {
      this.deviceStatus = deviceStatus;
    },
    setIOU(tiou: number) {
      this.tiou = tiou;
    },
    setScore(tscore: number) {
      this.tscore = tscore;
    },
    setIsInvoke(isInvoke: boolean) {
      this.isInvoke = isInvoke;
    },
    setModels(models: Model[]) {
      this.models = models;
    },
    setFirmware(firmware: Firmware) {
      this.firmware = firmware;
    },
    setCurrentModel(currentModel?: Model) {
      this.currentModel = currentModel;
    },
  },
});

export default useDeviceStore;
