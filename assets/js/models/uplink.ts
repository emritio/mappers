export interface UplinkResponse {
  uplinks: Uplink[];
}

export interface Uplink {
  hotspot_name: string;
  lat: number;
  lng: number;
  rssi: number;
  snr: number;
  timestamp: string;
  uplink_heard_id: string;
}
