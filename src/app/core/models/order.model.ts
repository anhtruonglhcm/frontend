export interface Order {
  bagType: string;
  packType: string;
  checkpointId: number;
  bvPriceId: number;
  weightControlId: number;
  customerId: number;
  contractId: number;
  productId: number;
  quantity: number;
  uomCode: string;
  priceId: number;
  unitPrice: number;
  discount: number;
  currencyCode: string;
  transportMethodId: number;
  areaId: number;
  shippointId: number;
  orderType: number;
  vehicleCode: string;
  moocCode: string;
  driverName: string;
  description: string;
}
export enum OrderType {}
