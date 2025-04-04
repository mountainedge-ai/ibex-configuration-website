export const DeviceType = {
  GroveAIWE2: 'we2',
  XiaoEsp32s3: 'xiaoEsp32s3',
};

export const DEVICE_LIST = [
  {
    id: DeviceType.GroveAIWE2,
    name: 'IBEX WE2',
    filter: [{ vendorId: 0x1a86, productId: 0x55d3 }],
  },
  {
    id: DeviceType.XiaoEsp32s3,
    name: 'Esp32s3',
    filter: [{ vendorId: 0x1a86, productId: 0x55d3 }],
  },
];

export const deviceTypeObj = DEVICE_LIST.reduce(
  (obj: Record<string, (typeof DEVICE_LIST)[0]>, e) => {
    obj[e.id] = { ...e };
    return obj;
  },
  {}
);
