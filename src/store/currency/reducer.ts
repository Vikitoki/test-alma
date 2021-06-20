import { CurrencyActions, CurrencyState } from "../../types/currency";
import {
  CONVERT_ONE_TO_ANOTHER,
  FETCH_CURRENCIES_FAILURE,
  FETCH_CURRENCIES_REQUEST,
  FETCH_CURRENCIES_SUCCESS,
} from "./action-variables";

const initialState: CurrencyState = {
  currencyData: {},
  error: "",
  loading: false,
  convertOneToAnother: "",
};

export const currencyReducer = (
  state = initialState,
  action: CurrencyActions
): CurrencyState => {
  switch (action.type) {
    case FETCH_CURRENCIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CURRENCIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        currencyData: action.payload,
      };
    case FETCH_CURRENCIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CONVERT_ONE_TO_ANOTHER:
      const firstCurrency = action.payload.firstCurrency;
      const secondCurrency = action.payload.secondCurrency;
      const clientCurrencyAmount = action.payload.clientCurrencyAmount;
      const firstCurrencyValue = state.currencyData[firstCurrency];
      const secondCurrencyValue = state.currencyData[secondCurrency];
      const result =
        (Number(clientCurrencyAmount) / Number(firstCurrencyValue)) *
        Number(secondCurrencyValue);

      return {
        ...state,
        convertOneToAnother: String(result.toFixed(1)),
      };
    default:
      return state;
  }
};
