export const DeviceType = {
  GroveAIWE2: 'we2',
};

export const DEVICE_LIST = [
  {},
  {
    id: DeviceType.GroveAIWE2,
    name: 'IBEX WE2',
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
