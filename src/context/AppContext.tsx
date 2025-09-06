import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Place, TradeArea, HomeZipcodes, DataType, TradeAreaPercentile } from '../types';

interface AppState {
  places: Place[];
  selectedPlace: Place | null;
  tradeAreas: TradeArea[];
  homeZipcodes: HomeZipcodes | null;
  dataType: DataType;
  selectedTradeAreaPercentiles: TradeAreaPercentile[];
  radius: number;
  selectedSubCategories: string[];
  showNearbyPlaces: boolean;
  showTradeAreas: boolean;
  showHomeZipcodes: boolean;
  hoveredPlace: Place | null;
  clickedPlace: Place | null;
}

type AppAction =
  | { type: 'SET_PLACES'; payload: Place[] }
  | { type: 'SET_SELECTED_PLACE'; payload: Place | null }
  | { type: 'SET_TRADE_AREAS'; payload: TradeArea[] }
  | { type: 'SET_HOME_ZIPCODES'; payload: HomeZipcodes | null }
  | { type: 'SET_DATA_TYPE'; payload: DataType }
  | { type: 'SET_TRADE_AREA_PERCENTILES'; payload: TradeAreaPercentile[] }
  | { type: 'SET_RADIUS'; payload: number }
  | { type: 'SET_SUB_CATEGORIES'; payload: string[] }
  | { type: 'SET_SHOW_NEARBY_PLACES'; payload: boolean }
  | { type: 'SET_SHOW_TRADE_AREAS'; payload: boolean }
  | { type: 'SET_SHOW_HOME_ZIPCODES'; payload: boolean }
  | { type: 'SET_HOVERED_PLACE'; payload: Place | null }
  | { type: 'SET_CLICKED_PLACE'; payload: Place | null };

const initialState: AppState = {
  places: [],
  selectedPlace: null,
  tradeAreas: [],
  homeZipcodes: null,
  dataType: 'Trade Area',
  selectedTradeAreaPercentiles: [],
  radius: 1000,
  selectedSubCategories: [],
  showNearbyPlaces: false,
  showTradeAreas: false,
  showHomeZipcodes: false,
  hoveredPlace: null,
  clickedPlace: null,
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_PLACES':
      return { ...state, places: action.payload };
    case 'SET_SELECTED_PLACE':
      return { ...state, selectedPlace: action.payload };
    case 'SET_TRADE_AREAS':
      return { ...state, tradeAreas: action.payload };
    case 'SET_HOME_ZIPCODES':
      return { ...state, homeZipcodes: action.payload };
    case 'SET_DATA_TYPE':
      return { ...state, dataType: action.payload };
    case 'SET_TRADE_AREA_PERCENTILES':
      return { ...state, selectedTradeAreaPercentiles: action.payload };
    case 'SET_RADIUS':
      return { ...state, radius: action.payload };
    case 'SET_SUB_CATEGORIES':
      return { ...state, selectedSubCategories: action.payload };
    case 'SET_SHOW_NEARBY_PLACES':
      return { ...state, showNearbyPlaces: action.payload };
    case 'SET_SHOW_TRADE_AREAS':
      return { ...state, showTradeAreas: action.payload };
    case 'SET_SHOW_HOME_ZIPCODES':
      return { ...state, showHomeZipcodes: action.payload };
    case 'SET_HOVERED_PLACE':
      return { ...state, hoveredPlace: action.payload };
    case 'SET_CLICKED_PLACE':
      return { ...state, clickedPlace: action.payload };
    default:
      return state;
  }
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
} 