import {
  CHANGE_SELECT_CURRENCY_VALUE,
  CONVERT_ONE_TO_ANOTHER,
  FETCH_CURRENCIES_FAILURE,
  FETCH_CURRENCIES_REQUEST,
  FETCH_CURRENCIES_SUCCESS,
} from "../store/currency/action-variables";
import { IFormHomePageContainerState } from "./form";

export interface ICurrencyData {
  [key: string]: number;
}

export interface CurrencyState {
  currencyData: ICurrencyData;
  convertOneToAnother: string;
  selectCurrency: string;
  loading: boolean;
  error: string;
}

interface FetchCurrenciesRequestAction {
  type: typeof FETCH_CURRENCIES_REQUEST;
}

interface FetchCurrenciesFailureAction {
  type: typeof FETCH_CURRENCIES_FAILURE;
  payload: string;
}

interface FetchCurrenciesSuccessAction {
  type: typeof FETCH_CURRENCIES_SUCCESS;
  payload: ICurrencyData;
}

interface ConvertOneToAnotherAction {
  type: typeof CONVERT_ONE_TO_ANOTHER;
  payload: IFormHomePageContainerState;
}

interface ChangeSelectCurrencyValueAction {
  type: typeof CHANGE_SELECT_CURRENCY_VALUE;
  payload: string;
}

export type CurrencyActions =
  | FetchCurrenciesRequestAction
  | FetchCurrenciesFailureAction
  | FetchCurrenciesSuccessAction
  | ConvertOneToAnotherAction
  | ChangeSelectCurrencyValueAction;
