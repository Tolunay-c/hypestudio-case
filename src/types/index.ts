type Place = {
  id: string;
  name: string;
  street_address: string;
  city: string;
  state: string;
  logo: string | null;
  longitude: number;
  latitude: number;
  sub_category: string; 
  isTradeAreaAvailable: boolean;
  isHomeZipcodesAvailable: boolean;
}

type Polygon = {
  type: 'Polygon' | 'MultiPolygon';
  coordinates: number[][][];
}

type Zipcode = {
  id: string; 
  polygon: Polygon; 
}
type CustomLocation = {
  [id: string]: number
}


type TradeArea = {
  pid: string;
  polygon: Polygon; 
  trade_area: number; 
}
