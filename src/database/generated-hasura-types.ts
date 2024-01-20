export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamptz: string;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<Scalars['Float']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<Scalars['Float']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "companies_and_etfs" */
export type Companies_And_Etfs = {
  __typename?: 'companies_and_etfs';
  isVisible?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  ticker?: Maybe<Scalars['String']>;
};

/** aggregated selection of "companies_and_etfs" */
export type Companies_And_Etfs_Aggregate = {
  __typename?: 'companies_and_etfs_aggregate';
  aggregate?: Maybe<Companies_And_Etfs_Aggregate_Fields>;
  nodes: Array<Companies_And_Etfs>;
};

/** aggregate fields of "companies_and_etfs" */
export type Companies_And_Etfs_Aggregate_Fields = {
  __typename?: 'companies_and_etfs_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Companies_And_Etfs_Max_Fields>;
  min?: Maybe<Companies_And_Etfs_Min_Fields>;
};


/** aggregate fields of "companies_and_etfs" */
export type Companies_And_Etfs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Companies_And_Etfs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "companies_and_etfs". All fields are combined with a logical 'AND'. */
export type Companies_And_Etfs_Bool_Exp = {
  _and?: InputMaybe<Array<Companies_And_Etfs_Bool_Exp>>;
  _not?: InputMaybe<Companies_And_Etfs_Bool_Exp>;
  _or?: InputMaybe<Array<Companies_And_Etfs_Bool_Exp>>;
  isVisible?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  ticker?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Companies_And_Etfs_Max_Fields = {
  __typename?: 'companies_and_etfs_max_fields';
  name?: Maybe<Scalars['String']>;
  ticker?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Companies_And_Etfs_Min_Fields = {
  __typename?: 'companies_and_etfs_min_fields';
  name?: Maybe<Scalars['String']>;
  ticker?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "companies_and_etfs". */
export type Companies_And_Etfs_Order_By = {
  isVisible?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ticker?: InputMaybe<Order_By>;
};

/** select columns of table "companies_and_etfs" */
export enum Companies_And_Etfs_Select_Column {
  /** column name */
  IsVisible = 'isVisible',
  /** column name */
  Name = 'name',
  /** column name */
  Ticker = 'ticker'
}

/** Streaming cursor of the table "companies_and_etfs" */
export type Companies_And_Etfs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Companies_And_Etfs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Companies_And_Etfs_Stream_Cursor_Value_Input = {
  isVisible?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  ticker?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "company" */
export type Company = {
  __typename?: 'company';
  altmanZScore?: Maybe<Scalars['Float']>;
  balanceStars?: Maybe<Scalars['Int']>;
  benishMScore?: Maybe<Scalars['Float']>;
  capexOverNetIncomeLastYear?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatioTTM?: Maybe<Scalars['Float']>;
  ceo?: Maybe<Scalars['String']>;
  ceoSalary?: Maybe<Scalars['Float']>;
  ceoSalaryOverNetProfit?: Maybe<Scalars['Float']>;
  ceoShares?: Maybe<Scalars['Float']>;
  companyEquityMultiplierTTM?: Maybe<Scalars['Float']>;
  /** An object relationship */
  country?: Maybe<CountryCode>;
  countryCode?: Maybe<CountryCode_Enum>;
  currency?: Maybe<Scalars['String']>;
  currentRatioTTM?: Maybe<Scalars['Float']>;
  dcf?: Maybe<Scalars['Float']>;
  debtEquityRatioTTM?: Maybe<Scalars['Float']>;
  debtToIncomeTTM?: Maybe<Scalars['Float']>;
  didAppearThisYear: Scalars['Boolean'];
  dividendCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  dividendStars?: Maybe<Scalars['Int']>;
  dividendYieldTTM?: Maybe<Scalars['Float']>;
  enterpriseValueMultipleTTM?: Maybe<Scalars['Float']>;
  evoeg?: Maybe<Scalars['Float']>;
  exchangeShortName?: Maybe<Scalars['String']>;
  fiscalYearEnd?: Maybe<Month_Enum>;
  freeCashFlowCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  fullTimeEmployees?: Maybe<Scalars['Int']>;
  globalStars?: Maybe<Scalars['Int']>;
  grossProfitCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  grossProfitMarginLastYear?: Maybe<Scalars['Float']>;
  growthStars?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  industry?: Maybe<Scalars['String']>;
  insiderOwnership?: Maybe<Scalars['Float']>;
  institutionalOwnership?: Maybe<Scalars['Float']>;
  interestCoverageTTM?: Maybe<Scalars['Float']>;
  interestOverRexTTM?: Maybe<Scalars['Float']>;
  isDividendIncreasing?: Maybe<Scalars['Boolean']>;
  isDividendPositive?: Maybe<Scalars['Boolean']>;
  isTickerOfTheWeek: Scalars['Boolean'];
  isVisible: Scalars['Boolean'];
  isin?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  managementStars?: Maybe<Scalars['Int']>;
  marketCap?: Maybe<Scalars['Float']>;
  marketCapSize?: Maybe<MarketCapSize_Enum>;
  name?: Maybe<Scalars['String']>;
  netIncomeCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  netProfitMarginLastYear?: Maybe<Scalars['Float']>;
  numberDividendsLastYear?: Maybe<Scalars['Int']>;
  numberYearOfDividend?: Maybe<Scalars['Int']>;
  operatingProfitMarginLastYear?: Maybe<Scalars['Float']>;
  payoutRatioTTM?: Maybe<Scalars['Float']>;
  pegRatioTTM?: Maybe<Scalars['Float']>;
  piotroskiFScore?: Maybe<Scalars['Float']>;
  /** An object relationship */
  presentation?: Maybe<Presentation>;
  priceEarningsRatioTTM?: Maybe<Scalars['Float']>;
  priceToBookRatioTTM?: Maybe<Scalars['Float']>;
  priceToFreeCashFlowsRatioTTM?: Maybe<Scalars['Float']>;
  priceToSalesRatioTTM?: Maybe<Scalars['Float']>;
  profitabilityStars?: Maybe<Scalars['Int']>;
  quickRatioTTM?: Maybe<Scalars['Float']>;
  reportedCurrency?: Maybe<Scalars['String']>;
  returnOnAssetsTTM?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployedTTM?: Maybe<Scalars['Float']>;
  returnOnEquityTTM?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  rndOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  sector?: Maybe<Scalars['String']>;
  sgrTTM?: Maybe<Scalars['Float']>;
  /** An array relationship */
  sheets: Array<Sheet>;
  /** An aggregate relationship */
  sheets_aggregate: Sheet_Aggregate;
  sloanRatio?: Maybe<Scalars['Float']>;
  stockPrice?: Maybe<Scalars['Float']>;
  stockPriceOverDcf?: Maybe<Scalars['Float']>;
  ticker: Scalars['String'];
  valuationStars?: Maybe<Scalars['Int']>;
  vbaOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  visScore?: Maybe<Scalars['Int']>;
  website?: Maybe<Scalars['String']>;
};


/** columns and relationships of "company" */
export type CompanySheetsArgs = {
  distinct_on?: InputMaybe<Array<Sheet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sheet_Order_By>>;
  where?: InputMaybe<Sheet_Bool_Exp>;
};


/** columns and relationships of "company" */
export type CompanySheets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sheet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sheet_Order_By>>;
  where?: InputMaybe<Sheet_Bool_Exp>;
};

/** aggregated selection of "company" */
export type Company_Aggregate = {
  __typename?: 'company_aggregate';
  aggregate?: Maybe<Company_Aggregate_Fields>;
  nodes: Array<Company>;
};

/** aggregate fields of "company" */
export type Company_Aggregate_Fields = {
  __typename?: 'company_aggregate_fields';
  avg?: Maybe<Company_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Company_Max_Fields>;
  min?: Maybe<Company_Min_Fields>;
  stddev?: Maybe<Company_Stddev_Fields>;
  stddev_pop?: Maybe<Company_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Company_Stddev_Samp_Fields>;
  sum?: Maybe<Company_Sum_Fields>;
  var_pop?: Maybe<Company_Var_Pop_Fields>;
  var_samp?: Maybe<Company_Var_Samp_Fields>;
  variance?: Maybe<Company_Variance_Fields>;
};


/** aggregate fields of "company" */
export type Company_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Company_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Company_Avg_Fields = {
  __typename?: 'company_avg_fields';
  altmanZScore?: Maybe<Scalars['Float']>;
  balanceStars?: Maybe<Scalars['Float']>;
  benishMScore?: Maybe<Scalars['Float']>;
  capexOverNetIncomeLastYear?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatioTTM?: Maybe<Scalars['Float']>;
  ceoSalary?: Maybe<Scalars['Float']>;
  ceoSalaryOverNetProfit?: Maybe<Scalars['Float']>;
  ceoShares?: Maybe<Scalars['Float']>;
  companyEquityMultiplierTTM?: Maybe<Scalars['Float']>;
  currentRatioTTM?: Maybe<Scalars['Float']>;
  dcf?: Maybe<Scalars['Float']>;
  debtEquityRatioTTM?: Maybe<Scalars['Float']>;
  debtToIncomeTTM?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  dividendStars?: Maybe<Scalars['Float']>;
  dividendYieldTTM?: Maybe<Scalars['Float']>;
  enterpriseValueMultipleTTM?: Maybe<Scalars['Float']>;
  evoeg?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  fullTimeEmployees?: Maybe<Scalars['Float']>;
  globalStars?: Maybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  grossProfitMarginLastYear?: Maybe<Scalars['Float']>;
  growthStars?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insiderOwnership?: Maybe<Scalars['Float']>;
  institutionalOwnership?: Maybe<Scalars['Float']>;
  interestCoverageTTM?: Maybe<Scalars['Float']>;
  interestOverRexTTM?: Maybe<Scalars['Float']>;
  managementStars?: Maybe<Scalars['Float']>;
  marketCap?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  netProfitMarginLastYear?: Maybe<Scalars['Float']>;
  numberDividendsLastYear?: Maybe<Scalars['Float']>;
  numberYearOfDividend?: Maybe<Scalars['Float']>;
  operatingProfitMarginLastYear?: Maybe<Scalars['Float']>;
  payoutRatioTTM?: Maybe<Scalars['Float']>;
  pegRatioTTM?: Maybe<Scalars['Float']>;
  piotroskiFScore?: Maybe<Scalars['Float']>;
  priceEarningsRatioTTM?: Maybe<Scalars['Float']>;
  priceToBookRatioTTM?: Maybe<Scalars['Float']>;
  priceToFreeCashFlowsRatioTTM?: Maybe<Scalars['Float']>;
  priceToSalesRatioTTM?: Maybe<Scalars['Float']>;
  profitabilityStars?: Maybe<Scalars['Float']>;
  quickRatioTTM?: Maybe<Scalars['Float']>;
  returnOnAssetsTTM?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployedTTM?: Maybe<Scalars['Float']>;
  returnOnEquityTTM?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  rndOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  sgrTTM?: Maybe<Scalars['Float']>;
  sloanRatio?: Maybe<Scalars['Float']>;
  stockPrice?: Maybe<Scalars['Float']>;
  stockPriceOverDcf?: Maybe<Scalars['Float']>;
  valuationStars?: Maybe<Scalars['Float']>;
  vbaOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  visScore?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "company". All fields are combined with a logical 'AND'. */
export type Company_Bool_Exp = {
  _and?: InputMaybe<Array<Company_Bool_Exp>>;
  _not?: InputMaybe<Company_Bool_Exp>;
  _or?: InputMaybe<Array<Company_Bool_Exp>>;
  altmanZScore?: InputMaybe<Float_Comparison_Exp>;
  balanceStars?: InputMaybe<Int_Comparison_Exp>;
  benishMScore?: InputMaybe<Float_Comparison_Exp>;
  capexOverNetIncomeLastYear?: InputMaybe<Float_Comparison_Exp>;
  cashFlowToDebtRatioTTM?: InputMaybe<Float_Comparison_Exp>;
  ceo?: InputMaybe<String_Comparison_Exp>;
  ceoSalary?: InputMaybe<Float_Comparison_Exp>;
  ceoSalaryOverNetProfit?: InputMaybe<Float_Comparison_Exp>;
  ceoShares?: InputMaybe<Float_Comparison_Exp>;
  companyEquityMultiplierTTM?: InputMaybe<Float_Comparison_Exp>;
  country?: InputMaybe<CountryCode_Bool_Exp>;
  countryCode?: InputMaybe<CountryCode_Enum_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  currentRatioTTM?: InputMaybe<Float_Comparison_Exp>;
  dcf?: InputMaybe<Float_Comparison_Exp>;
  debtEquityRatioTTM?: InputMaybe<Float_Comparison_Exp>;
  debtToIncomeTTM?: InputMaybe<Float_Comparison_Exp>;
  didAppearThisYear?: InputMaybe<Boolean_Comparison_Exp>;
  dividendCompoundGrowthOver5Years?: InputMaybe<Float_Comparison_Exp>;
  dividendCompoundGrowthOver10Years?: InputMaybe<Float_Comparison_Exp>;
  dividendStars?: InputMaybe<Int_Comparison_Exp>;
  dividendYieldTTM?: InputMaybe<Float_Comparison_Exp>;
  enterpriseValueMultipleTTM?: InputMaybe<Float_Comparison_Exp>;
  evoeg?: InputMaybe<Float_Comparison_Exp>;
  exchangeShortName?: InputMaybe<String_Comparison_Exp>;
  fiscalYearEnd?: InputMaybe<Month_Enum_Comparison_Exp>;
  freeCashFlowCompoundGrowthOver5Years?: InputMaybe<Float_Comparison_Exp>;
  freeCashFlowCompoundGrowthOver10Years?: InputMaybe<Float_Comparison_Exp>;
  fullTimeEmployees?: InputMaybe<Int_Comparison_Exp>;
  globalStars?: InputMaybe<Int_Comparison_Exp>;
  grossProfitCompoundGrowthOver5Years?: InputMaybe<Float_Comparison_Exp>;
  grossProfitCompoundGrowthOver10Years?: InputMaybe<Float_Comparison_Exp>;
  grossProfitMarginLastYear?: InputMaybe<Float_Comparison_Exp>;
  growthStars?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  industry?: InputMaybe<String_Comparison_Exp>;
  insiderOwnership?: InputMaybe<Float_Comparison_Exp>;
  institutionalOwnership?: InputMaybe<Float_Comparison_Exp>;
  interestCoverageTTM?: InputMaybe<Float_Comparison_Exp>;
  interestOverRexTTM?: InputMaybe<Float_Comparison_Exp>;
  isDividendIncreasing?: InputMaybe<Boolean_Comparison_Exp>;
  isDividendPositive?: InputMaybe<Boolean_Comparison_Exp>;
  isTickerOfTheWeek?: InputMaybe<Boolean_Comparison_Exp>;
  isVisible?: InputMaybe<Boolean_Comparison_Exp>;
  isin?: InputMaybe<String_Comparison_Exp>;
  logo?: InputMaybe<String_Comparison_Exp>;
  managementStars?: InputMaybe<Int_Comparison_Exp>;
  marketCap?: InputMaybe<Float_Comparison_Exp>;
  marketCapSize?: InputMaybe<MarketCapSize_Enum_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  netIncomeCompoundGrowthOver5Years?: InputMaybe<Float_Comparison_Exp>;
  netIncomeCompoundGrowthOver10Years?: InputMaybe<Float_Comparison_Exp>;
  netProfitMarginLastYear?: InputMaybe<Float_Comparison_Exp>;
  numberDividendsLastYear?: InputMaybe<Int_Comparison_Exp>;
  numberYearOfDividend?: InputMaybe<Int_Comparison_Exp>;
  operatingProfitMarginLastYear?: InputMaybe<Float_Comparison_Exp>;
  payoutRatioTTM?: InputMaybe<Float_Comparison_Exp>;
  pegRatioTTM?: InputMaybe<Float_Comparison_Exp>;
  piotroskiFScore?: InputMaybe<Float_Comparison_Exp>;
  presentation?: InputMaybe<Presentation_Bool_Exp>;
  priceEarningsRatioTTM?: InputMaybe<Float_Comparison_Exp>;
  priceToBookRatioTTM?: InputMaybe<Float_Comparison_Exp>;
  priceToFreeCashFlowsRatioTTM?: InputMaybe<Float_Comparison_Exp>;
  priceToSalesRatioTTM?: InputMaybe<Float_Comparison_Exp>;
  profitabilityStars?: InputMaybe<Int_Comparison_Exp>;
  quickRatioTTM?: InputMaybe<Float_Comparison_Exp>;
  reportedCurrency?: InputMaybe<String_Comparison_Exp>;
  returnOnAssetsTTM?: InputMaybe<Float_Comparison_Exp>;
  returnOnCapitalEmployedTTM?: InputMaybe<Float_Comparison_Exp>;
  returnOnEquityTTM?: InputMaybe<Float_Comparison_Exp>;
  revenueCompoundGrowthOver5Years?: InputMaybe<Float_Comparison_Exp>;
  revenueCompoundGrowthOver10Years?: InputMaybe<Float_Comparison_Exp>;
  rndOverGrossProfitLastYear?: InputMaybe<Float_Comparison_Exp>;
  sector?: InputMaybe<String_Comparison_Exp>;
  sgrTTM?: InputMaybe<Float_Comparison_Exp>;
  sheets?: InputMaybe<Sheet_Bool_Exp>;
  sheets_aggregate?: InputMaybe<Sheet_Aggregate_Bool_Exp>;
  sloanRatio?: InputMaybe<Float_Comparison_Exp>;
  stockPrice?: InputMaybe<Float_Comparison_Exp>;
  stockPriceOverDcf?: InputMaybe<Float_Comparison_Exp>;
  ticker?: InputMaybe<String_Comparison_Exp>;
  valuationStars?: InputMaybe<Int_Comparison_Exp>;
  vbaOverGrossProfitLastYear?: InputMaybe<Float_Comparison_Exp>;
  visScore?: InputMaybe<Int_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "company" */
export enum Company_Constraint {
  /** unique or primary key constraint on columns "id" */
  CompanyIdKey = 'company_id_key',
  /** unique or primary key constraint on columns "ticker", "id" */
  CompanyPkey = 'company_pkey',
  /** unique or primary key constraint on columns "ticker" */
  CompanyTickerKey = 'company_ticker_key'
}

/** input type for incrementing numeric columns in table "company" */
export type Company_Inc_Input = {
  altmanZScore?: InputMaybe<Scalars['Float']>;
  balanceStars?: InputMaybe<Scalars['Int']>;
  benishMScore?: InputMaybe<Scalars['Float']>;
  capexOverNetIncomeLastYear?: InputMaybe<Scalars['Float']>;
  cashFlowToDebtRatioTTM?: InputMaybe<Scalars['Float']>;
  ceoSalary?: InputMaybe<Scalars['Float']>;
  ceoSalaryOverNetProfit?: InputMaybe<Scalars['Float']>;
  ceoShares?: InputMaybe<Scalars['Float']>;
  companyEquityMultiplierTTM?: InputMaybe<Scalars['Float']>;
  currentRatioTTM?: InputMaybe<Scalars['Float']>;
  dcf?: InputMaybe<Scalars['Float']>;
  debtEquityRatioTTM?: InputMaybe<Scalars['Float']>;
  debtToIncomeTTM?: InputMaybe<Scalars['Float']>;
  dividendCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  dividendCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  dividendStars?: InputMaybe<Scalars['Int']>;
  dividendYieldTTM?: InputMaybe<Scalars['Float']>;
  enterpriseValueMultipleTTM?: InputMaybe<Scalars['Float']>;
  evoeg?: InputMaybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  fullTimeEmployees?: InputMaybe<Scalars['Int']>;
  globalStars?: InputMaybe<Scalars['Int']>;
  grossProfitCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  grossProfitMarginLastYear?: InputMaybe<Scalars['Float']>;
  growthStars?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  insiderOwnership?: InputMaybe<Scalars['Float']>;
  institutionalOwnership?: InputMaybe<Scalars['Float']>;
  interestCoverageTTM?: InputMaybe<Scalars['Float']>;
  interestOverRexTTM?: InputMaybe<Scalars['Float']>;
  managementStars?: InputMaybe<Scalars['Int']>;
  marketCap?: InputMaybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  netProfitMarginLastYear?: InputMaybe<Scalars['Float']>;
  numberDividendsLastYear?: InputMaybe<Scalars['Int']>;
  numberYearOfDividend?: InputMaybe<Scalars['Int']>;
  operatingProfitMarginLastYear?: InputMaybe<Scalars['Float']>;
  payoutRatioTTM?: InputMaybe<Scalars['Float']>;
  pegRatioTTM?: InputMaybe<Scalars['Float']>;
  piotroskiFScore?: InputMaybe<Scalars['Float']>;
  priceEarningsRatioTTM?: InputMaybe<Scalars['Float']>;
  priceToBookRatioTTM?: InputMaybe<Scalars['Float']>;
  priceToFreeCashFlowsRatioTTM?: InputMaybe<Scalars['Float']>;
  priceToSalesRatioTTM?: InputMaybe<Scalars['Float']>;
  profitabilityStars?: InputMaybe<Scalars['Int']>;
  quickRatioTTM?: InputMaybe<Scalars['Float']>;
  returnOnAssetsTTM?: InputMaybe<Scalars['Float']>;
  returnOnCapitalEmployedTTM?: InputMaybe<Scalars['Float']>;
  returnOnEquityTTM?: InputMaybe<Scalars['Float']>;
  revenueCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  revenueCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  rndOverGrossProfitLastYear?: InputMaybe<Scalars['Float']>;
  sgrTTM?: InputMaybe<Scalars['Float']>;
  sloanRatio?: InputMaybe<Scalars['Float']>;
  stockPrice?: InputMaybe<Scalars['Float']>;
  stockPriceOverDcf?: InputMaybe<Scalars['Float']>;
  valuationStars?: InputMaybe<Scalars['Int']>;
  vbaOverGrossProfitLastYear?: InputMaybe<Scalars['Float']>;
  visScore?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "company" */
export type Company_Insert_Input = {
  altmanZScore?: InputMaybe<Scalars['Float']>;
  balanceStars?: InputMaybe<Scalars['Int']>;
  benishMScore?: InputMaybe<Scalars['Float']>;
  capexOverNetIncomeLastYear?: InputMaybe<Scalars['Float']>;
  cashFlowToDebtRatioTTM?: InputMaybe<Scalars['Float']>;
  ceo?: InputMaybe<Scalars['String']>;
  ceoSalary?: InputMaybe<Scalars['Float']>;
  ceoSalaryOverNetProfit?: InputMaybe<Scalars['Float']>;
  ceoShares?: InputMaybe<Scalars['Float']>;
  companyEquityMultiplierTTM?: InputMaybe<Scalars['Float']>;
  country?: InputMaybe<CountryCode_Obj_Rel_Insert_Input>;
  countryCode?: InputMaybe<CountryCode_Enum>;
  currency?: InputMaybe<Scalars['String']>;
  currentRatioTTM?: InputMaybe<Scalars['Float']>;
  dcf?: InputMaybe<Scalars['Float']>;
  debtEquityRatioTTM?: InputMaybe<Scalars['Float']>;
  debtToIncomeTTM?: InputMaybe<Scalars['Float']>;
  didAppearThisYear?: InputMaybe<Scalars['Boolean']>;
  dividendCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  dividendCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  dividendStars?: InputMaybe<Scalars['Int']>;
  dividendYieldTTM?: InputMaybe<Scalars['Float']>;
  enterpriseValueMultipleTTM?: InputMaybe<Scalars['Float']>;
  evoeg?: InputMaybe<Scalars['Float']>;
  exchangeShortName?: InputMaybe<Scalars['String']>;
  fiscalYearEnd?: InputMaybe<Month_Enum>;
  freeCashFlowCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  fullTimeEmployees?: InputMaybe<Scalars['Int']>;
  globalStars?: InputMaybe<Scalars['Int']>;
  grossProfitCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  grossProfitMarginLastYear?: InputMaybe<Scalars['Float']>;
  growthStars?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  industry?: InputMaybe<Scalars['String']>;
  insiderOwnership?: InputMaybe<Scalars['Float']>;
  institutionalOwnership?: InputMaybe<Scalars['Float']>;
  interestCoverageTTM?: InputMaybe<Scalars['Float']>;
  interestOverRexTTM?: InputMaybe<Scalars['Float']>;
  isDividendIncreasing?: InputMaybe<Scalars['Boolean']>;
  isDividendPositive?: InputMaybe<Scalars['Boolean']>;
  isTickerOfTheWeek?: InputMaybe<Scalars['Boolean']>;
  isVisible?: InputMaybe<Scalars['Boolean']>;
  isin?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  managementStars?: InputMaybe<Scalars['Int']>;
  marketCap?: InputMaybe<Scalars['Float']>;
  marketCapSize?: InputMaybe<MarketCapSize_Enum>;
  name?: InputMaybe<Scalars['String']>;
  netIncomeCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  netProfitMarginLastYear?: InputMaybe<Scalars['Float']>;
  numberDividendsLastYear?: InputMaybe<Scalars['Int']>;
  numberYearOfDividend?: InputMaybe<Scalars['Int']>;
  operatingProfitMarginLastYear?: InputMaybe<Scalars['Float']>;
  payoutRatioTTM?: InputMaybe<Scalars['Float']>;
  pegRatioTTM?: InputMaybe<Scalars['Float']>;
  piotroskiFScore?: InputMaybe<Scalars['Float']>;
  presentation?: InputMaybe<Presentation_Obj_Rel_Insert_Input>;
  priceEarningsRatioTTM?: InputMaybe<Scalars['Float']>;
  priceToBookRatioTTM?: InputMaybe<Scalars['Float']>;
  priceToFreeCashFlowsRatioTTM?: InputMaybe<Scalars['Float']>;
  priceToSalesRatioTTM?: InputMaybe<Scalars['Float']>;
  profitabilityStars?: InputMaybe<Scalars['Int']>;
  quickRatioTTM?: InputMaybe<Scalars['Float']>;
  reportedCurrency?: InputMaybe<Scalars['String']>;
  returnOnAssetsTTM?: InputMaybe<Scalars['Float']>;
  returnOnCapitalEmployedTTM?: InputMaybe<Scalars['Float']>;
  returnOnEquityTTM?: InputMaybe<Scalars['Float']>;
  revenueCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  revenueCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  rndOverGrossProfitLastYear?: InputMaybe<Scalars['Float']>;
  sector?: InputMaybe<Scalars['String']>;
  sgrTTM?: InputMaybe<Scalars['Float']>;
  sheets?: InputMaybe<Sheet_Arr_Rel_Insert_Input>;
  sloanRatio?: InputMaybe<Scalars['Float']>;
  stockPrice?: InputMaybe<Scalars['Float']>;
  stockPriceOverDcf?: InputMaybe<Scalars['Float']>;
  ticker?: InputMaybe<Scalars['String']>;
  valuationStars?: InputMaybe<Scalars['Int']>;
  vbaOverGrossProfitLastYear?: InputMaybe<Scalars['Float']>;
  visScore?: InputMaybe<Scalars['Int']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Company_Max_Fields = {
  __typename?: 'company_max_fields';
  altmanZScore?: Maybe<Scalars['Float']>;
  balanceStars?: Maybe<Scalars['Int']>;
  benishMScore?: Maybe<Scalars['Float']>;
  capexOverNetIncomeLastYear?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatioTTM?: Maybe<Scalars['Float']>;
  ceo?: Maybe<Scalars['String']>;
  ceoSalary?: Maybe<Scalars['Float']>;
  ceoSalaryOverNetProfit?: Maybe<Scalars['Float']>;
  ceoShares?: Maybe<Scalars['Float']>;
  companyEquityMultiplierTTM?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  currentRatioTTM?: Maybe<Scalars['Float']>;
  dcf?: Maybe<Scalars['Float']>;
  debtEquityRatioTTM?: Maybe<Scalars['Float']>;
  debtToIncomeTTM?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  dividendStars?: Maybe<Scalars['Int']>;
  dividendYieldTTM?: Maybe<Scalars['Float']>;
  enterpriseValueMultipleTTM?: Maybe<Scalars['Float']>;
  evoeg?: Maybe<Scalars['Float']>;
  exchangeShortName?: Maybe<Scalars['String']>;
  freeCashFlowCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  fullTimeEmployees?: Maybe<Scalars['Int']>;
  globalStars?: Maybe<Scalars['Int']>;
  grossProfitCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  grossProfitMarginLastYear?: Maybe<Scalars['Float']>;
  growthStars?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  industry?: Maybe<Scalars['String']>;
  insiderOwnership?: Maybe<Scalars['Float']>;
  institutionalOwnership?: Maybe<Scalars['Float']>;
  interestCoverageTTM?: Maybe<Scalars['Float']>;
  interestOverRexTTM?: Maybe<Scalars['Float']>;
  isin?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  managementStars?: Maybe<Scalars['Int']>;
  marketCap?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  netIncomeCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  netProfitMarginLastYear?: Maybe<Scalars['Float']>;
  numberDividendsLastYear?: Maybe<Scalars['Int']>;
  numberYearOfDividend?: Maybe<Scalars['Int']>;
  operatingProfitMarginLastYear?: Maybe<Scalars['Float']>;
  payoutRatioTTM?: Maybe<Scalars['Float']>;
  pegRatioTTM?: Maybe<Scalars['Float']>;
  piotroskiFScore?: Maybe<Scalars['Float']>;
  priceEarningsRatioTTM?: Maybe<Scalars['Float']>;
  priceToBookRatioTTM?: Maybe<Scalars['Float']>;
  priceToFreeCashFlowsRatioTTM?: Maybe<Scalars['Float']>;
  priceToSalesRatioTTM?: Maybe<Scalars['Float']>;
  profitabilityStars?: Maybe<Scalars['Int']>;
  quickRatioTTM?: Maybe<Scalars['Float']>;
  reportedCurrency?: Maybe<Scalars['String']>;
  returnOnAssetsTTM?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployedTTM?: Maybe<Scalars['Float']>;
  returnOnEquityTTM?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  rndOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  sector?: Maybe<Scalars['String']>;
  sgrTTM?: Maybe<Scalars['Float']>;
  sloanRatio?: Maybe<Scalars['Float']>;
  stockPrice?: Maybe<Scalars['Float']>;
  stockPriceOverDcf?: Maybe<Scalars['Float']>;
  ticker?: Maybe<Scalars['String']>;
  valuationStars?: Maybe<Scalars['Int']>;
  vbaOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  visScore?: Maybe<Scalars['Int']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Company_Min_Fields = {
  __typename?: 'company_min_fields';
  altmanZScore?: Maybe<Scalars['Float']>;
  balanceStars?: Maybe<Scalars['Int']>;
  benishMScore?: Maybe<Scalars['Float']>;
  capexOverNetIncomeLastYear?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatioTTM?: Maybe<Scalars['Float']>;
  ceo?: Maybe<Scalars['String']>;
  ceoSalary?: Maybe<Scalars['Float']>;
  ceoSalaryOverNetProfit?: Maybe<Scalars['Float']>;
  ceoShares?: Maybe<Scalars['Float']>;
  companyEquityMultiplierTTM?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  currentRatioTTM?: Maybe<Scalars['Float']>;
  dcf?: Maybe<Scalars['Float']>;
  debtEquityRatioTTM?: Maybe<Scalars['Float']>;
  debtToIncomeTTM?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  dividendStars?: Maybe<Scalars['Int']>;
  dividendYieldTTM?: Maybe<Scalars['Float']>;
  enterpriseValueMultipleTTM?: Maybe<Scalars['Float']>;
  evoeg?: Maybe<Scalars['Float']>;
  exchangeShortName?: Maybe<Scalars['String']>;
  freeCashFlowCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  fullTimeEmployees?: Maybe<Scalars['Int']>;
  globalStars?: Maybe<Scalars['Int']>;
  grossProfitCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  grossProfitMarginLastYear?: Maybe<Scalars['Float']>;
  growthStars?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  industry?: Maybe<Scalars['String']>;
  insiderOwnership?: Maybe<Scalars['Float']>;
  institutionalOwnership?: Maybe<Scalars['Float']>;
  interestCoverageTTM?: Maybe<Scalars['Float']>;
  interestOverRexTTM?: Maybe<Scalars['Float']>;
  isin?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  managementStars?: Maybe<Scalars['Int']>;
  marketCap?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  netIncomeCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  netProfitMarginLastYear?: Maybe<Scalars['Float']>;
  numberDividendsLastYear?: Maybe<Scalars['Int']>;
  numberYearOfDividend?: Maybe<Scalars['Int']>;
  operatingProfitMarginLastYear?: Maybe<Scalars['Float']>;
  payoutRatioTTM?: Maybe<Scalars['Float']>;
  pegRatioTTM?: Maybe<Scalars['Float']>;
  piotroskiFScore?: Maybe<Scalars['Float']>;
  priceEarningsRatioTTM?: Maybe<Scalars['Float']>;
  priceToBookRatioTTM?: Maybe<Scalars['Float']>;
  priceToFreeCashFlowsRatioTTM?: Maybe<Scalars['Float']>;
  priceToSalesRatioTTM?: Maybe<Scalars['Float']>;
  profitabilityStars?: Maybe<Scalars['Int']>;
  quickRatioTTM?: Maybe<Scalars['Float']>;
  reportedCurrency?: Maybe<Scalars['String']>;
  returnOnAssetsTTM?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployedTTM?: Maybe<Scalars['Float']>;
  returnOnEquityTTM?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  rndOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  sector?: Maybe<Scalars['String']>;
  sgrTTM?: Maybe<Scalars['Float']>;
  sloanRatio?: Maybe<Scalars['Float']>;
  stockPrice?: Maybe<Scalars['Float']>;
  stockPriceOverDcf?: Maybe<Scalars['Float']>;
  ticker?: Maybe<Scalars['String']>;
  valuationStars?: Maybe<Scalars['Int']>;
  vbaOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  visScore?: Maybe<Scalars['Int']>;
  website?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "company" */
export type Company_Mutation_Response = {
  __typename?: 'company_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Company>;
};

/** input type for inserting object relation for remote table "company" */
export type Company_Obj_Rel_Insert_Input = {
  data: Company_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Company_On_Conflict>;
};

/** on_conflict condition type for table "company" */
export type Company_On_Conflict = {
  constraint: Company_Constraint;
  update_columns?: Array<Company_Update_Column>;
  where?: InputMaybe<Company_Bool_Exp>;
};

/** Ordering options when selecting data from "company". */
export type Company_Order_By = {
  altmanZScore?: InputMaybe<Order_By>;
  balanceStars?: InputMaybe<Order_By>;
  benishMScore?: InputMaybe<Order_By>;
  capexOverNetIncomeLastYear?: InputMaybe<Order_By>;
  cashFlowToDebtRatioTTM?: InputMaybe<Order_By>;
  ceo?: InputMaybe<Order_By>;
  ceoSalary?: InputMaybe<Order_By>;
  ceoSalaryOverNetProfit?: InputMaybe<Order_By>;
  ceoShares?: InputMaybe<Order_By>;
  companyEquityMultiplierTTM?: InputMaybe<Order_By>;
  country?: InputMaybe<CountryCode_Order_By>;
  countryCode?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  currentRatioTTM?: InputMaybe<Order_By>;
  dcf?: InputMaybe<Order_By>;
  debtEquityRatioTTM?: InputMaybe<Order_By>;
  debtToIncomeTTM?: InputMaybe<Order_By>;
  didAppearThisYear?: InputMaybe<Order_By>;
  dividendCompoundGrowthOver5Years?: InputMaybe<Order_By>;
  dividendCompoundGrowthOver10Years?: InputMaybe<Order_By>;
  dividendStars?: InputMaybe<Order_By>;
  dividendYieldTTM?: InputMaybe<Order_By>;
  enterpriseValueMultipleTTM?: InputMaybe<Order_By>;
  evoeg?: InputMaybe<Order_By>;
  exchangeShortName?: InputMaybe<Order_By>;
  fiscalYearEnd?: InputMaybe<Order_By>;
  freeCashFlowCompoundGrowthOver5Years?: InputMaybe<Order_By>;
  freeCashFlowCompoundGrowthOver10Years?: InputMaybe<Order_By>;
  fullTimeEmployees?: InputMaybe<Order_By>;
  globalStars?: InputMaybe<Order_By>;
  grossProfitCompoundGrowthOver5Years?: InputMaybe<Order_By>;
  grossProfitCompoundGrowthOver10Years?: InputMaybe<Order_By>;
  grossProfitMarginLastYear?: InputMaybe<Order_By>;
  growthStars?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  industry?: InputMaybe<Order_By>;
  insiderOwnership?: InputMaybe<Order_By>;
  institutionalOwnership?: InputMaybe<Order_By>;
  interestCoverageTTM?: InputMaybe<Order_By>;
  interestOverRexTTM?: InputMaybe<Order_By>;
  isDividendIncreasing?: InputMaybe<Order_By>;
  isDividendPositive?: InputMaybe<Order_By>;
  isTickerOfTheWeek?: InputMaybe<Order_By>;
  isVisible?: InputMaybe<Order_By>;
  isin?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  managementStars?: InputMaybe<Order_By>;
  marketCap?: InputMaybe<Order_By>;
  marketCapSize?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  netIncomeCompoundGrowthOver5Years?: InputMaybe<Order_By>;
  netIncomeCompoundGrowthOver10Years?: InputMaybe<Order_By>;
  netProfitMarginLastYear?: InputMaybe<Order_By>;
  numberDividendsLastYear?: InputMaybe<Order_By>;
  numberYearOfDividend?: InputMaybe<Order_By>;
  operatingProfitMarginLastYear?: InputMaybe<Order_By>;
  payoutRatioTTM?: InputMaybe<Order_By>;
  pegRatioTTM?: InputMaybe<Order_By>;
  piotroskiFScore?: InputMaybe<Order_By>;
  presentation?: InputMaybe<Presentation_Order_By>;
  priceEarningsRatioTTM?: InputMaybe<Order_By>;
  priceToBookRatioTTM?: InputMaybe<Order_By>;
  priceToFreeCashFlowsRatioTTM?: InputMaybe<Order_By>;
  priceToSalesRatioTTM?: InputMaybe<Order_By>;
  profitabilityStars?: InputMaybe<Order_By>;
  quickRatioTTM?: InputMaybe<Order_By>;
  reportedCurrency?: InputMaybe<Order_By>;
  returnOnAssetsTTM?: InputMaybe<Order_By>;
  returnOnCapitalEmployedTTM?: InputMaybe<Order_By>;
  returnOnEquityTTM?: InputMaybe<Order_By>;
  revenueCompoundGrowthOver5Years?: InputMaybe<Order_By>;
  revenueCompoundGrowthOver10Years?: InputMaybe<Order_By>;
  rndOverGrossProfitLastYear?: InputMaybe<Order_By>;
  sector?: InputMaybe<Order_By>;
  sgrTTM?: InputMaybe<Order_By>;
  sheets_aggregate?: InputMaybe<Sheet_Aggregate_Order_By>;
  sloanRatio?: InputMaybe<Order_By>;
  stockPrice?: InputMaybe<Order_By>;
  stockPriceOverDcf?: InputMaybe<Order_By>;
  ticker?: InputMaybe<Order_By>;
  valuationStars?: InputMaybe<Order_By>;
  vbaOverGrossProfitLastYear?: InputMaybe<Order_By>;
  visScore?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** primary key columns input for table: company */
export type Company_Pk_Columns_Input = {
  id: Scalars['Int'];
  ticker: Scalars['String'];
};

/** select columns of table "company" */
export enum Company_Select_Column {
  /** column name */
  AltmanZScore = 'altmanZScore',
  /** column name */
  BalanceStars = 'balanceStars',
  /** column name */
  BenishMScore = 'benishMScore',
  /** column name */
  CapexOverNetIncomeLastYear = 'capexOverNetIncomeLastYear',
  /** column name */
  CashFlowToDebtRatioTtm = 'cashFlowToDebtRatioTTM',
  /** column name */
  Ceo = 'ceo',
  /** column name */
  CeoSalary = 'ceoSalary',
  /** column name */
  CeoSalaryOverNetProfit = 'ceoSalaryOverNetProfit',
  /** column name */
  CeoShares = 'ceoShares',
  /** column name */
  CompanyEquityMultiplierTtm = 'companyEquityMultiplierTTM',
  /** column name */
  CountryCode = 'countryCode',
  /** column name */
  Currency = 'currency',
  /** column name */
  CurrentRatioTtm = 'currentRatioTTM',
  /** column name */
  Dcf = 'dcf',
  /** column name */
  DebtEquityRatioTtm = 'debtEquityRatioTTM',
  /** column name */
  DebtToIncomeTtm = 'debtToIncomeTTM',
  /** column name */
  DidAppearThisYear = 'didAppearThisYear',
  /** column name */
  DividendCompoundGrowthOver5Years = 'dividendCompoundGrowthOver5Years',
  /** column name */
  DividendCompoundGrowthOver10Years = 'dividendCompoundGrowthOver10Years',
  /** column name */
  DividendStars = 'dividendStars',
  /** column name */
  DividendYieldTtm = 'dividendYieldTTM',
  /** column name */
  EnterpriseValueMultipleTtm = 'enterpriseValueMultipleTTM',
  /** column name */
  Evoeg = 'evoeg',
  /** column name */
  ExchangeShortName = 'exchangeShortName',
  /** column name */
  FiscalYearEnd = 'fiscalYearEnd',
  /** column name */
  FreeCashFlowCompoundGrowthOver5Years = 'freeCashFlowCompoundGrowthOver5Years',
  /** column name */
  FreeCashFlowCompoundGrowthOver10Years = 'freeCashFlowCompoundGrowthOver10Years',
  /** column name */
  FullTimeEmployees = 'fullTimeEmployees',
  /** column name */
  GlobalStars = 'globalStars',
  /** column name */
  GrossProfitCompoundGrowthOver5Years = 'grossProfitCompoundGrowthOver5Years',
  /** column name */
  GrossProfitCompoundGrowthOver10Years = 'grossProfitCompoundGrowthOver10Years',
  /** column name */
  GrossProfitMarginLastYear = 'grossProfitMarginLastYear',
  /** column name */
  GrowthStars = 'growthStars',
  /** column name */
  Id = 'id',
  /** column name */
  Industry = 'industry',
  /** column name */
  InsiderOwnership = 'insiderOwnership',
  /** column name */
  InstitutionalOwnership = 'institutionalOwnership',
  /** column name */
  InterestCoverageTtm = 'interestCoverageTTM',
  /** column name */
  InterestOverRexTtm = 'interestOverRexTTM',
  /** column name */
  IsDividendIncreasing = 'isDividendIncreasing',
  /** column name */
  IsDividendPositive = 'isDividendPositive',
  /** column name */
  IsTickerOfTheWeek = 'isTickerOfTheWeek',
  /** column name */
  IsVisible = 'isVisible',
  /** column name */
  Isin = 'isin',
  /** column name */
  Logo = 'logo',
  /** column name */
  ManagementStars = 'managementStars',
  /** column name */
  MarketCap = 'marketCap',
  /** column name */
  MarketCapSize = 'marketCapSize',
  /** column name */
  Name = 'name',
  /** column name */
  NetIncomeCompoundGrowthOver5Years = 'netIncomeCompoundGrowthOver5Years',
  /** column name */
  NetIncomeCompoundGrowthOver10Years = 'netIncomeCompoundGrowthOver10Years',
  /** column name */
  NetProfitMarginLastYear = 'netProfitMarginLastYear',
  /** column name */
  NumberDividendsLastYear = 'numberDividendsLastYear',
  /** column name */
  NumberYearOfDividend = 'numberYearOfDividend',
  /** column name */
  OperatingProfitMarginLastYear = 'operatingProfitMarginLastYear',
  /** column name */
  PayoutRatioTtm = 'payoutRatioTTM',
  /** column name */
  PegRatioTtm = 'pegRatioTTM',
  /** column name */
  PiotroskiFScore = 'piotroskiFScore',
  /** column name */
  PriceEarningsRatioTtm = 'priceEarningsRatioTTM',
  /** column name */
  PriceToBookRatioTtm = 'priceToBookRatioTTM',
  /** column name */
  PriceToFreeCashFlowsRatioTtm = 'priceToFreeCashFlowsRatioTTM',
  /** column name */
  PriceToSalesRatioTtm = 'priceToSalesRatioTTM',
  /** column name */
  ProfitabilityStars = 'profitabilityStars',
  /** column name */
  QuickRatioTtm = 'quickRatioTTM',
  /** column name */
  ReportedCurrency = 'reportedCurrency',
  /** column name */
  ReturnOnAssetsTtm = 'returnOnAssetsTTM',
  /** column name */
  ReturnOnCapitalEmployedTtm = 'returnOnCapitalEmployedTTM',
  /** column name */
  ReturnOnEquityTtm = 'returnOnEquityTTM',
  /** column name */
  RevenueCompoundGrowthOver5Years = 'revenueCompoundGrowthOver5Years',
  /** column name */
  RevenueCompoundGrowthOver10Years = 'revenueCompoundGrowthOver10Years',
  /** column name */
  RndOverGrossProfitLastYear = 'rndOverGrossProfitLastYear',
  /** column name */
  Sector = 'sector',
  /** column name */
  SgrTtm = 'sgrTTM',
  /** column name */
  SloanRatio = 'sloanRatio',
  /** column name */
  StockPrice = 'stockPrice',
  /** column name */
  StockPriceOverDcf = 'stockPriceOverDcf',
  /** column name */
  Ticker = 'ticker',
  /** column name */
  ValuationStars = 'valuationStars',
  /** column name */
  VbaOverGrossProfitLastYear = 'vbaOverGrossProfitLastYear',
  /** column name */
  VisScore = 'visScore',
  /** column name */
  Website = 'website'
}

/** input type for updating data in table "company" */
export type Company_Set_Input = {
  altmanZScore?: InputMaybe<Scalars['Float']>;
  balanceStars?: InputMaybe<Scalars['Int']>;
  benishMScore?: InputMaybe<Scalars['Float']>;
  capexOverNetIncomeLastYear?: InputMaybe<Scalars['Float']>;
  cashFlowToDebtRatioTTM?: InputMaybe<Scalars['Float']>;
  ceo?: InputMaybe<Scalars['String']>;
  ceoSalary?: InputMaybe<Scalars['Float']>;
  ceoSalaryOverNetProfit?: InputMaybe<Scalars['Float']>;
  ceoShares?: InputMaybe<Scalars['Float']>;
  companyEquityMultiplierTTM?: InputMaybe<Scalars['Float']>;
  countryCode?: InputMaybe<CountryCode_Enum>;
  currency?: InputMaybe<Scalars['String']>;
  currentRatioTTM?: InputMaybe<Scalars['Float']>;
  dcf?: InputMaybe<Scalars['Float']>;
  debtEquityRatioTTM?: InputMaybe<Scalars['Float']>;
  debtToIncomeTTM?: InputMaybe<Scalars['Float']>;
  didAppearThisYear?: InputMaybe<Scalars['Boolean']>;
  dividendCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  dividendCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  dividendStars?: InputMaybe<Scalars['Int']>;
  dividendYieldTTM?: InputMaybe<Scalars['Float']>;
  enterpriseValueMultipleTTM?: InputMaybe<Scalars['Float']>;
  evoeg?: InputMaybe<Scalars['Float']>;
  exchangeShortName?: InputMaybe<Scalars['String']>;
  fiscalYearEnd?: InputMaybe<Month_Enum>;
  freeCashFlowCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  fullTimeEmployees?: InputMaybe<Scalars['Int']>;
  globalStars?: InputMaybe<Scalars['Int']>;
  grossProfitCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  grossProfitMarginLastYear?: InputMaybe<Scalars['Float']>;
  growthStars?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  industry?: InputMaybe<Scalars['String']>;
  insiderOwnership?: InputMaybe<Scalars['Float']>;
  institutionalOwnership?: InputMaybe<Scalars['Float']>;
  interestCoverageTTM?: InputMaybe<Scalars['Float']>;
  interestOverRexTTM?: InputMaybe<Scalars['Float']>;
  isDividendIncreasing?: InputMaybe<Scalars['Boolean']>;
  isDividendPositive?: InputMaybe<Scalars['Boolean']>;
  isTickerOfTheWeek?: InputMaybe<Scalars['Boolean']>;
  isVisible?: InputMaybe<Scalars['Boolean']>;
  isin?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  managementStars?: InputMaybe<Scalars['Int']>;
  marketCap?: InputMaybe<Scalars['Float']>;
  marketCapSize?: InputMaybe<MarketCapSize_Enum>;
  name?: InputMaybe<Scalars['String']>;
  netIncomeCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  netProfitMarginLastYear?: InputMaybe<Scalars['Float']>;
  numberDividendsLastYear?: InputMaybe<Scalars['Int']>;
  numberYearOfDividend?: InputMaybe<Scalars['Int']>;
  operatingProfitMarginLastYear?: InputMaybe<Scalars['Float']>;
  payoutRatioTTM?: InputMaybe<Scalars['Float']>;
  pegRatioTTM?: InputMaybe<Scalars['Float']>;
  piotroskiFScore?: InputMaybe<Scalars['Float']>;
  priceEarningsRatioTTM?: InputMaybe<Scalars['Float']>;
  priceToBookRatioTTM?: InputMaybe<Scalars['Float']>;
  priceToFreeCashFlowsRatioTTM?: InputMaybe<Scalars['Float']>;
  priceToSalesRatioTTM?: InputMaybe<Scalars['Float']>;
  profitabilityStars?: InputMaybe<Scalars['Int']>;
  quickRatioTTM?: InputMaybe<Scalars['Float']>;
  reportedCurrency?: InputMaybe<Scalars['String']>;
  returnOnAssetsTTM?: InputMaybe<Scalars['Float']>;
  returnOnCapitalEmployedTTM?: InputMaybe<Scalars['Float']>;
  returnOnEquityTTM?: InputMaybe<Scalars['Float']>;
  revenueCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  revenueCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  rndOverGrossProfitLastYear?: InputMaybe<Scalars['Float']>;
  sector?: InputMaybe<Scalars['String']>;
  sgrTTM?: InputMaybe<Scalars['Float']>;
  sloanRatio?: InputMaybe<Scalars['Float']>;
  stockPrice?: InputMaybe<Scalars['Float']>;
  stockPriceOverDcf?: InputMaybe<Scalars['Float']>;
  ticker?: InputMaybe<Scalars['String']>;
  valuationStars?: InputMaybe<Scalars['Int']>;
  vbaOverGrossProfitLastYear?: InputMaybe<Scalars['Float']>;
  visScore?: InputMaybe<Scalars['Int']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Company_Stddev_Fields = {
  __typename?: 'company_stddev_fields';
  altmanZScore?: Maybe<Scalars['Float']>;
  balanceStars?: Maybe<Scalars['Float']>;
  benishMScore?: Maybe<Scalars['Float']>;
  capexOverNetIncomeLastYear?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatioTTM?: Maybe<Scalars['Float']>;
  ceoSalary?: Maybe<Scalars['Float']>;
  ceoSalaryOverNetProfit?: Maybe<Scalars['Float']>;
  ceoShares?: Maybe<Scalars['Float']>;
  companyEquityMultiplierTTM?: Maybe<Scalars['Float']>;
  currentRatioTTM?: Maybe<Scalars['Float']>;
  dcf?: Maybe<Scalars['Float']>;
  debtEquityRatioTTM?: Maybe<Scalars['Float']>;
  debtToIncomeTTM?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  dividendStars?: Maybe<Scalars['Float']>;
  dividendYieldTTM?: Maybe<Scalars['Float']>;
  enterpriseValueMultipleTTM?: Maybe<Scalars['Float']>;
  evoeg?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  fullTimeEmployees?: Maybe<Scalars['Float']>;
  globalStars?: Maybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  grossProfitMarginLastYear?: Maybe<Scalars['Float']>;
  growthStars?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insiderOwnership?: Maybe<Scalars['Float']>;
  institutionalOwnership?: Maybe<Scalars['Float']>;
  interestCoverageTTM?: Maybe<Scalars['Float']>;
  interestOverRexTTM?: Maybe<Scalars['Float']>;
  managementStars?: Maybe<Scalars['Float']>;
  marketCap?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  netProfitMarginLastYear?: Maybe<Scalars['Float']>;
  numberDividendsLastYear?: Maybe<Scalars['Float']>;
  numberYearOfDividend?: Maybe<Scalars['Float']>;
  operatingProfitMarginLastYear?: Maybe<Scalars['Float']>;
  payoutRatioTTM?: Maybe<Scalars['Float']>;
  pegRatioTTM?: Maybe<Scalars['Float']>;
  piotroskiFScore?: Maybe<Scalars['Float']>;
  priceEarningsRatioTTM?: Maybe<Scalars['Float']>;
  priceToBookRatioTTM?: Maybe<Scalars['Float']>;
  priceToFreeCashFlowsRatioTTM?: Maybe<Scalars['Float']>;
  priceToSalesRatioTTM?: Maybe<Scalars['Float']>;
  profitabilityStars?: Maybe<Scalars['Float']>;
  quickRatioTTM?: Maybe<Scalars['Float']>;
  returnOnAssetsTTM?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployedTTM?: Maybe<Scalars['Float']>;
  returnOnEquityTTM?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  rndOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  sgrTTM?: Maybe<Scalars['Float']>;
  sloanRatio?: Maybe<Scalars['Float']>;
  stockPrice?: Maybe<Scalars['Float']>;
  stockPriceOverDcf?: Maybe<Scalars['Float']>;
  valuationStars?: Maybe<Scalars['Float']>;
  vbaOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  visScore?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Company_Stddev_Pop_Fields = {
  __typename?: 'company_stddev_pop_fields';
  altmanZScore?: Maybe<Scalars['Float']>;
  balanceStars?: Maybe<Scalars['Float']>;
  benishMScore?: Maybe<Scalars['Float']>;
  capexOverNetIncomeLastYear?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatioTTM?: Maybe<Scalars['Float']>;
  ceoSalary?: Maybe<Scalars['Float']>;
  ceoSalaryOverNetProfit?: Maybe<Scalars['Float']>;
  ceoShares?: Maybe<Scalars['Float']>;
  companyEquityMultiplierTTM?: Maybe<Scalars['Float']>;
  currentRatioTTM?: Maybe<Scalars['Float']>;
  dcf?: Maybe<Scalars['Float']>;
  debtEquityRatioTTM?: Maybe<Scalars['Float']>;
  debtToIncomeTTM?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  dividendStars?: Maybe<Scalars['Float']>;
  dividendYieldTTM?: Maybe<Scalars['Float']>;
  enterpriseValueMultipleTTM?: Maybe<Scalars['Float']>;
  evoeg?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  fullTimeEmployees?: Maybe<Scalars['Float']>;
  globalStars?: Maybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  grossProfitMarginLastYear?: Maybe<Scalars['Float']>;
  growthStars?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insiderOwnership?: Maybe<Scalars['Float']>;
  institutionalOwnership?: Maybe<Scalars['Float']>;
  interestCoverageTTM?: Maybe<Scalars['Float']>;
  interestOverRexTTM?: Maybe<Scalars['Float']>;
  managementStars?: Maybe<Scalars['Float']>;
  marketCap?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  netProfitMarginLastYear?: Maybe<Scalars['Float']>;
  numberDividendsLastYear?: Maybe<Scalars['Float']>;
  numberYearOfDividend?: Maybe<Scalars['Float']>;
  operatingProfitMarginLastYear?: Maybe<Scalars['Float']>;
  payoutRatioTTM?: Maybe<Scalars['Float']>;
  pegRatioTTM?: Maybe<Scalars['Float']>;
  piotroskiFScore?: Maybe<Scalars['Float']>;
  priceEarningsRatioTTM?: Maybe<Scalars['Float']>;
  priceToBookRatioTTM?: Maybe<Scalars['Float']>;
  priceToFreeCashFlowsRatioTTM?: Maybe<Scalars['Float']>;
  priceToSalesRatioTTM?: Maybe<Scalars['Float']>;
  profitabilityStars?: Maybe<Scalars['Float']>;
  quickRatioTTM?: Maybe<Scalars['Float']>;
  returnOnAssetsTTM?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployedTTM?: Maybe<Scalars['Float']>;
  returnOnEquityTTM?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  rndOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  sgrTTM?: Maybe<Scalars['Float']>;
  sloanRatio?: Maybe<Scalars['Float']>;
  stockPrice?: Maybe<Scalars['Float']>;
  stockPriceOverDcf?: Maybe<Scalars['Float']>;
  valuationStars?: Maybe<Scalars['Float']>;
  vbaOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  visScore?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Company_Stddev_Samp_Fields = {
  __typename?: 'company_stddev_samp_fields';
  altmanZScore?: Maybe<Scalars['Float']>;
  balanceStars?: Maybe<Scalars['Float']>;
  benishMScore?: Maybe<Scalars['Float']>;
  capexOverNetIncomeLastYear?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatioTTM?: Maybe<Scalars['Float']>;
  ceoSalary?: Maybe<Scalars['Float']>;
  ceoSalaryOverNetProfit?: Maybe<Scalars['Float']>;
  ceoShares?: Maybe<Scalars['Float']>;
  companyEquityMultiplierTTM?: Maybe<Scalars['Float']>;
  currentRatioTTM?: Maybe<Scalars['Float']>;
  dcf?: Maybe<Scalars['Float']>;
  debtEquityRatioTTM?: Maybe<Scalars['Float']>;
  debtToIncomeTTM?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  dividendStars?: Maybe<Scalars['Float']>;
  dividendYieldTTM?: Maybe<Scalars['Float']>;
  enterpriseValueMultipleTTM?: Maybe<Scalars['Float']>;
  evoeg?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  fullTimeEmployees?: Maybe<Scalars['Float']>;
  globalStars?: Maybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  grossProfitMarginLastYear?: Maybe<Scalars['Float']>;
  growthStars?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insiderOwnership?: Maybe<Scalars['Float']>;
  institutionalOwnership?: Maybe<Scalars['Float']>;
  interestCoverageTTM?: Maybe<Scalars['Float']>;
  interestOverRexTTM?: Maybe<Scalars['Float']>;
  managementStars?: Maybe<Scalars['Float']>;
  marketCap?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  netProfitMarginLastYear?: Maybe<Scalars['Float']>;
  numberDividendsLastYear?: Maybe<Scalars['Float']>;
  numberYearOfDividend?: Maybe<Scalars['Float']>;
  operatingProfitMarginLastYear?: Maybe<Scalars['Float']>;
  payoutRatioTTM?: Maybe<Scalars['Float']>;
  pegRatioTTM?: Maybe<Scalars['Float']>;
  piotroskiFScore?: Maybe<Scalars['Float']>;
  priceEarningsRatioTTM?: Maybe<Scalars['Float']>;
  priceToBookRatioTTM?: Maybe<Scalars['Float']>;
  priceToFreeCashFlowsRatioTTM?: Maybe<Scalars['Float']>;
  priceToSalesRatioTTM?: Maybe<Scalars['Float']>;
  profitabilityStars?: Maybe<Scalars['Float']>;
  quickRatioTTM?: Maybe<Scalars['Float']>;
  returnOnAssetsTTM?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployedTTM?: Maybe<Scalars['Float']>;
  returnOnEquityTTM?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  rndOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  sgrTTM?: Maybe<Scalars['Float']>;
  sloanRatio?: Maybe<Scalars['Float']>;
  stockPrice?: Maybe<Scalars['Float']>;
  stockPriceOverDcf?: Maybe<Scalars['Float']>;
  valuationStars?: Maybe<Scalars['Float']>;
  vbaOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  visScore?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "company" */
export type Company_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Company_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Company_Stream_Cursor_Value_Input = {
  altmanZScore?: InputMaybe<Scalars['Float']>;
  balanceStars?: InputMaybe<Scalars['Int']>;
  benishMScore?: InputMaybe<Scalars['Float']>;
  capexOverNetIncomeLastYear?: InputMaybe<Scalars['Float']>;
  cashFlowToDebtRatioTTM?: InputMaybe<Scalars['Float']>;
  ceo?: InputMaybe<Scalars['String']>;
  ceoSalary?: InputMaybe<Scalars['Float']>;
  ceoSalaryOverNetProfit?: InputMaybe<Scalars['Float']>;
  ceoShares?: InputMaybe<Scalars['Float']>;
  companyEquityMultiplierTTM?: InputMaybe<Scalars['Float']>;
  countryCode?: InputMaybe<CountryCode_Enum>;
  currency?: InputMaybe<Scalars['String']>;
  currentRatioTTM?: InputMaybe<Scalars['Float']>;
  dcf?: InputMaybe<Scalars['Float']>;
  debtEquityRatioTTM?: InputMaybe<Scalars['Float']>;
  debtToIncomeTTM?: InputMaybe<Scalars['Float']>;
  didAppearThisYear?: InputMaybe<Scalars['Boolean']>;
  dividendCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  dividendCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  dividendStars?: InputMaybe<Scalars['Int']>;
  dividendYieldTTM?: InputMaybe<Scalars['Float']>;
  enterpriseValueMultipleTTM?: InputMaybe<Scalars['Float']>;
  evoeg?: InputMaybe<Scalars['Float']>;
  exchangeShortName?: InputMaybe<Scalars['String']>;
  fiscalYearEnd?: InputMaybe<Month_Enum>;
  freeCashFlowCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  fullTimeEmployees?: InputMaybe<Scalars['Int']>;
  globalStars?: InputMaybe<Scalars['Int']>;
  grossProfitCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  grossProfitMarginLastYear?: InputMaybe<Scalars['Float']>;
  growthStars?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  industry?: InputMaybe<Scalars['String']>;
  insiderOwnership?: InputMaybe<Scalars['Float']>;
  institutionalOwnership?: InputMaybe<Scalars['Float']>;
  interestCoverageTTM?: InputMaybe<Scalars['Float']>;
  interestOverRexTTM?: InputMaybe<Scalars['Float']>;
  isDividendIncreasing?: InputMaybe<Scalars['Boolean']>;
  isDividendPositive?: InputMaybe<Scalars['Boolean']>;
  isTickerOfTheWeek?: InputMaybe<Scalars['Boolean']>;
  isVisible?: InputMaybe<Scalars['Boolean']>;
  isin?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  managementStars?: InputMaybe<Scalars['Int']>;
  marketCap?: InputMaybe<Scalars['Float']>;
  marketCapSize?: InputMaybe<MarketCapSize_Enum>;
  name?: InputMaybe<Scalars['String']>;
  netIncomeCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  netProfitMarginLastYear?: InputMaybe<Scalars['Float']>;
  numberDividendsLastYear?: InputMaybe<Scalars['Int']>;
  numberYearOfDividend?: InputMaybe<Scalars['Int']>;
  operatingProfitMarginLastYear?: InputMaybe<Scalars['Float']>;
  payoutRatioTTM?: InputMaybe<Scalars['Float']>;
  pegRatioTTM?: InputMaybe<Scalars['Float']>;
  piotroskiFScore?: InputMaybe<Scalars['Float']>;
  priceEarningsRatioTTM?: InputMaybe<Scalars['Float']>;
  priceToBookRatioTTM?: InputMaybe<Scalars['Float']>;
  priceToFreeCashFlowsRatioTTM?: InputMaybe<Scalars['Float']>;
  priceToSalesRatioTTM?: InputMaybe<Scalars['Float']>;
  profitabilityStars?: InputMaybe<Scalars['Int']>;
  quickRatioTTM?: InputMaybe<Scalars['Float']>;
  reportedCurrency?: InputMaybe<Scalars['String']>;
  returnOnAssetsTTM?: InputMaybe<Scalars['Float']>;
  returnOnCapitalEmployedTTM?: InputMaybe<Scalars['Float']>;
  returnOnEquityTTM?: InputMaybe<Scalars['Float']>;
  revenueCompoundGrowthOver5Years?: InputMaybe<Scalars['Float']>;
  revenueCompoundGrowthOver10Years?: InputMaybe<Scalars['Float']>;
  rndOverGrossProfitLastYear?: InputMaybe<Scalars['Float']>;
  sector?: InputMaybe<Scalars['String']>;
  sgrTTM?: InputMaybe<Scalars['Float']>;
  sloanRatio?: InputMaybe<Scalars['Float']>;
  stockPrice?: InputMaybe<Scalars['Float']>;
  stockPriceOverDcf?: InputMaybe<Scalars['Float']>;
  ticker?: InputMaybe<Scalars['String']>;
  valuationStars?: InputMaybe<Scalars['Int']>;
  vbaOverGrossProfitLastYear?: InputMaybe<Scalars['Float']>;
  visScore?: InputMaybe<Scalars['Int']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Company_Sum_Fields = {
  __typename?: 'company_sum_fields';
  altmanZScore?: Maybe<Scalars['Float']>;
  balanceStars?: Maybe<Scalars['Int']>;
  benishMScore?: Maybe<Scalars['Float']>;
  capexOverNetIncomeLastYear?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatioTTM?: Maybe<Scalars['Float']>;
  ceoSalary?: Maybe<Scalars['Float']>;
  ceoSalaryOverNetProfit?: Maybe<Scalars['Float']>;
  ceoShares?: Maybe<Scalars['Float']>;
  companyEquityMultiplierTTM?: Maybe<Scalars['Float']>;
  currentRatioTTM?: Maybe<Scalars['Float']>;
  dcf?: Maybe<Scalars['Float']>;
  debtEquityRatioTTM?: Maybe<Scalars['Float']>;
  debtToIncomeTTM?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  dividendStars?: Maybe<Scalars['Int']>;
  dividendYieldTTM?: Maybe<Scalars['Float']>;
  enterpriseValueMultipleTTM?: Maybe<Scalars['Float']>;
  evoeg?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  fullTimeEmployees?: Maybe<Scalars['Int']>;
  globalStars?: Maybe<Scalars['Int']>;
  grossProfitCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  grossProfitMarginLastYear?: Maybe<Scalars['Float']>;
  growthStars?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  insiderOwnership?: Maybe<Scalars['Float']>;
  institutionalOwnership?: Maybe<Scalars['Float']>;
  interestCoverageTTM?: Maybe<Scalars['Float']>;
  interestOverRexTTM?: Maybe<Scalars['Float']>;
  managementStars?: Maybe<Scalars['Int']>;
  marketCap?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  netProfitMarginLastYear?: Maybe<Scalars['Float']>;
  numberDividendsLastYear?: Maybe<Scalars['Int']>;
  numberYearOfDividend?: Maybe<Scalars['Int']>;
  operatingProfitMarginLastYear?: Maybe<Scalars['Float']>;
  payoutRatioTTM?: Maybe<Scalars['Float']>;
  pegRatioTTM?: Maybe<Scalars['Float']>;
  piotroskiFScore?: Maybe<Scalars['Float']>;
  priceEarningsRatioTTM?: Maybe<Scalars['Float']>;
  priceToBookRatioTTM?: Maybe<Scalars['Float']>;
  priceToFreeCashFlowsRatioTTM?: Maybe<Scalars['Float']>;
  priceToSalesRatioTTM?: Maybe<Scalars['Float']>;
  profitabilityStars?: Maybe<Scalars['Int']>;
  quickRatioTTM?: Maybe<Scalars['Float']>;
  returnOnAssetsTTM?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployedTTM?: Maybe<Scalars['Float']>;
  returnOnEquityTTM?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  rndOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  sgrTTM?: Maybe<Scalars['Float']>;
  sloanRatio?: Maybe<Scalars['Float']>;
  stockPrice?: Maybe<Scalars['Float']>;
  stockPriceOverDcf?: Maybe<Scalars['Float']>;
  valuationStars?: Maybe<Scalars['Int']>;
  vbaOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  visScore?: Maybe<Scalars['Int']>;
};

/** update columns of table "company" */
export enum Company_Update_Column {
  /** column name */
  AltmanZScore = 'altmanZScore',
  /** column name */
  BalanceStars = 'balanceStars',
  /** column name */
  BenishMScore = 'benishMScore',
  /** column name */
  CapexOverNetIncomeLastYear = 'capexOverNetIncomeLastYear',
  /** column name */
  CashFlowToDebtRatioTtm = 'cashFlowToDebtRatioTTM',
  /** column name */
  Ceo = 'ceo',
  /** column name */
  CeoSalary = 'ceoSalary',
  /** column name */
  CeoSalaryOverNetProfit = 'ceoSalaryOverNetProfit',
  /** column name */
  CeoShares = 'ceoShares',
  /** column name */
  CompanyEquityMultiplierTtm = 'companyEquityMultiplierTTM',
  /** column name */
  CountryCode = 'countryCode',
  /** column name */
  Currency = 'currency',
  /** column name */
  CurrentRatioTtm = 'currentRatioTTM',
  /** column name */
  Dcf = 'dcf',
  /** column name */
  DebtEquityRatioTtm = 'debtEquityRatioTTM',
  /** column name */
  DebtToIncomeTtm = 'debtToIncomeTTM',
  /** column name */
  DidAppearThisYear = 'didAppearThisYear',
  /** column name */
  DividendCompoundGrowthOver5Years = 'dividendCompoundGrowthOver5Years',
  /** column name */
  DividendCompoundGrowthOver10Years = 'dividendCompoundGrowthOver10Years',
  /** column name */
  DividendStars = 'dividendStars',
  /** column name */
  DividendYieldTtm = 'dividendYieldTTM',
  /** column name */
  EnterpriseValueMultipleTtm = 'enterpriseValueMultipleTTM',
  /** column name */
  Evoeg = 'evoeg',
  /** column name */
  ExchangeShortName = 'exchangeShortName',
  /** column name */
  FiscalYearEnd = 'fiscalYearEnd',
  /** column name */
  FreeCashFlowCompoundGrowthOver5Years = 'freeCashFlowCompoundGrowthOver5Years',
  /** column name */
  FreeCashFlowCompoundGrowthOver10Years = 'freeCashFlowCompoundGrowthOver10Years',
  /** column name */
  FullTimeEmployees = 'fullTimeEmployees',
  /** column name */
  GlobalStars = 'globalStars',
  /** column name */
  GrossProfitCompoundGrowthOver5Years = 'grossProfitCompoundGrowthOver5Years',
  /** column name */
  GrossProfitCompoundGrowthOver10Years = 'grossProfitCompoundGrowthOver10Years',
  /** column name */
  GrossProfitMarginLastYear = 'grossProfitMarginLastYear',
  /** column name */
  GrowthStars = 'growthStars',
  /** column name */
  Id = 'id',
  /** column name */
  Industry = 'industry',
  /** column name */
  InsiderOwnership = 'insiderOwnership',
  /** column name */
  InstitutionalOwnership = 'institutionalOwnership',
  /** column name */
  InterestCoverageTtm = 'interestCoverageTTM',
  /** column name */
  InterestOverRexTtm = 'interestOverRexTTM',
  /** column name */
  IsDividendIncreasing = 'isDividendIncreasing',
  /** column name */
  IsDividendPositive = 'isDividendPositive',
  /** column name */
  IsTickerOfTheWeek = 'isTickerOfTheWeek',
  /** column name */
  IsVisible = 'isVisible',
  /** column name */
  Isin = 'isin',
  /** column name */
  Logo = 'logo',
  /** column name */
  ManagementStars = 'managementStars',
  /** column name */
  MarketCap = 'marketCap',
  /** column name */
  MarketCapSize = 'marketCapSize',
  /** column name */
  Name = 'name',
  /** column name */
  NetIncomeCompoundGrowthOver5Years = 'netIncomeCompoundGrowthOver5Years',
  /** column name */
  NetIncomeCompoundGrowthOver10Years = 'netIncomeCompoundGrowthOver10Years',
  /** column name */
  NetProfitMarginLastYear = 'netProfitMarginLastYear',
  /** column name */
  NumberDividendsLastYear = 'numberDividendsLastYear',
  /** column name */
  NumberYearOfDividend = 'numberYearOfDividend',
  /** column name */
  OperatingProfitMarginLastYear = 'operatingProfitMarginLastYear',
  /** column name */
  PayoutRatioTtm = 'payoutRatioTTM',
  /** column name */
  PegRatioTtm = 'pegRatioTTM',
  /** column name */
  PiotroskiFScore = 'piotroskiFScore',
  /** column name */
  PriceEarningsRatioTtm = 'priceEarningsRatioTTM',
  /** column name */
  PriceToBookRatioTtm = 'priceToBookRatioTTM',
  /** column name */
  PriceToFreeCashFlowsRatioTtm = 'priceToFreeCashFlowsRatioTTM',
  /** column name */
  PriceToSalesRatioTtm = 'priceToSalesRatioTTM',
  /** column name */
  ProfitabilityStars = 'profitabilityStars',
  /** column name */
  QuickRatioTtm = 'quickRatioTTM',
  /** column name */
  ReportedCurrency = 'reportedCurrency',
  /** column name */
  ReturnOnAssetsTtm = 'returnOnAssetsTTM',
  /** column name */
  ReturnOnCapitalEmployedTtm = 'returnOnCapitalEmployedTTM',
  /** column name */
  ReturnOnEquityTtm = 'returnOnEquityTTM',
  /** column name */
  RevenueCompoundGrowthOver5Years = 'revenueCompoundGrowthOver5Years',
  /** column name */
  RevenueCompoundGrowthOver10Years = 'revenueCompoundGrowthOver10Years',
  /** column name */
  RndOverGrossProfitLastYear = 'rndOverGrossProfitLastYear',
  /** column name */
  Sector = 'sector',
  /** column name */
  SgrTtm = 'sgrTTM',
  /** column name */
  SloanRatio = 'sloanRatio',
  /** column name */
  StockPrice = 'stockPrice',
  /** column name */
  StockPriceOverDcf = 'stockPriceOverDcf',
  /** column name */
  Ticker = 'ticker',
  /** column name */
  ValuationStars = 'valuationStars',
  /** column name */
  VbaOverGrossProfitLastYear = 'vbaOverGrossProfitLastYear',
  /** column name */
  VisScore = 'visScore',
  /** column name */
  Website = 'website'
}

export type Company_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Company_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Company_Set_Input>;
  /** filter the rows which have to be updated */
  where: Company_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Company_Var_Pop_Fields = {
  __typename?: 'company_var_pop_fields';
  altmanZScore?: Maybe<Scalars['Float']>;
  balanceStars?: Maybe<Scalars['Float']>;
  benishMScore?: Maybe<Scalars['Float']>;
  capexOverNetIncomeLastYear?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatioTTM?: Maybe<Scalars['Float']>;
  ceoSalary?: Maybe<Scalars['Float']>;
  ceoSalaryOverNetProfit?: Maybe<Scalars['Float']>;
  ceoShares?: Maybe<Scalars['Float']>;
  companyEquityMultiplierTTM?: Maybe<Scalars['Float']>;
  currentRatioTTM?: Maybe<Scalars['Float']>;
  dcf?: Maybe<Scalars['Float']>;
  debtEquityRatioTTM?: Maybe<Scalars['Float']>;
  debtToIncomeTTM?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  dividendStars?: Maybe<Scalars['Float']>;
  dividendYieldTTM?: Maybe<Scalars['Float']>;
  enterpriseValueMultipleTTM?: Maybe<Scalars['Float']>;
  evoeg?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  fullTimeEmployees?: Maybe<Scalars['Float']>;
  globalStars?: Maybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  grossProfitMarginLastYear?: Maybe<Scalars['Float']>;
  growthStars?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insiderOwnership?: Maybe<Scalars['Float']>;
  institutionalOwnership?: Maybe<Scalars['Float']>;
  interestCoverageTTM?: Maybe<Scalars['Float']>;
  interestOverRexTTM?: Maybe<Scalars['Float']>;
  managementStars?: Maybe<Scalars['Float']>;
  marketCap?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  netProfitMarginLastYear?: Maybe<Scalars['Float']>;
  numberDividendsLastYear?: Maybe<Scalars['Float']>;
  numberYearOfDividend?: Maybe<Scalars['Float']>;
  operatingProfitMarginLastYear?: Maybe<Scalars['Float']>;
  payoutRatioTTM?: Maybe<Scalars['Float']>;
  pegRatioTTM?: Maybe<Scalars['Float']>;
  piotroskiFScore?: Maybe<Scalars['Float']>;
  priceEarningsRatioTTM?: Maybe<Scalars['Float']>;
  priceToBookRatioTTM?: Maybe<Scalars['Float']>;
  priceToFreeCashFlowsRatioTTM?: Maybe<Scalars['Float']>;
  priceToSalesRatioTTM?: Maybe<Scalars['Float']>;
  profitabilityStars?: Maybe<Scalars['Float']>;
  quickRatioTTM?: Maybe<Scalars['Float']>;
  returnOnAssetsTTM?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployedTTM?: Maybe<Scalars['Float']>;
  returnOnEquityTTM?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  rndOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  sgrTTM?: Maybe<Scalars['Float']>;
  sloanRatio?: Maybe<Scalars['Float']>;
  stockPrice?: Maybe<Scalars['Float']>;
  stockPriceOverDcf?: Maybe<Scalars['Float']>;
  valuationStars?: Maybe<Scalars['Float']>;
  vbaOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  visScore?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Company_Var_Samp_Fields = {
  __typename?: 'company_var_samp_fields';
  altmanZScore?: Maybe<Scalars['Float']>;
  balanceStars?: Maybe<Scalars['Float']>;
  benishMScore?: Maybe<Scalars['Float']>;
  capexOverNetIncomeLastYear?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatioTTM?: Maybe<Scalars['Float']>;
  ceoSalary?: Maybe<Scalars['Float']>;
  ceoSalaryOverNetProfit?: Maybe<Scalars['Float']>;
  ceoShares?: Maybe<Scalars['Float']>;
  companyEquityMultiplierTTM?: Maybe<Scalars['Float']>;
  currentRatioTTM?: Maybe<Scalars['Float']>;
  dcf?: Maybe<Scalars['Float']>;
  debtEquityRatioTTM?: Maybe<Scalars['Float']>;
  debtToIncomeTTM?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  dividendStars?: Maybe<Scalars['Float']>;
  dividendYieldTTM?: Maybe<Scalars['Float']>;
  enterpriseValueMultipleTTM?: Maybe<Scalars['Float']>;
  evoeg?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  fullTimeEmployees?: Maybe<Scalars['Float']>;
  globalStars?: Maybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  grossProfitMarginLastYear?: Maybe<Scalars['Float']>;
  growthStars?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insiderOwnership?: Maybe<Scalars['Float']>;
  institutionalOwnership?: Maybe<Scalars['Float']>;
  interestCoverageTTM?: Maybe<Scalars['Float']>;
  interestOverRexTTM?: Maybe<Scalars['Float']>;
  managementStars?: Maybe<Scalars['Float']>;
  marketCap?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  netProfitMarginLastYear?: Maybe<Scalars['Float']>;
  numberDividendsLastYear?: Maybe<Scalars['Float']>;
  numberYearOfDividend?: Maybe<Scalars['Float']>;
  operatingProfitMarginLastYear?: Maybe<Scalars['Float']>;
  payoutRatioTTM?: Maybe<Scalars['Float']>;
  pegRatioTTM?: Maybe<Scalars['Float']>;
  piotroskiFScore?: Maybe<Scalars['Float']>;
  priceEarningsRatioTTM?: Maybe<Scalars['Float']>;
  priceToBookRatioTTM?: Maybe<Scalars['Float']>;
  priceToFreeCashFlowsRatioTTM?: Maybe<Scalars['Float']>;
  priceToSalesRatioTTM?: Maybe<Scalars['Float']>;
  profitabilityStars?: Maybe<Scalars['Float']>;
  quickRatioTTM?: Maybe<Scalars['Float']>;
  returnOnAssetsTTM?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployedTTM?: Maybe<Scalars['Float']>;
  returnOnEquityTTM?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  rndOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  sgrTTM?: Maybe<Scalars['Float']>;
  sloanRatio?: Maybe<Scalars['Float']>;
  stockPrice?: Maybe<Scalars['Float']>;
  stockPriceOverDcf?: Maybe<Scalars['Float']>;
  valuationStars?: Maybe<Scalars['Float']>;
  vbaOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  visScore?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Company_Variance_Fields = {
  __typename?: 'company_variance_fields';
  altmanZScore?: Maybe<Scalars['Float']>;
  balanceStars?: Maybe<Scalars['Float']>;
  benishMScore?: Maybe<Scalars['Float']>;
  capexOverNetIncomeLastYear?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatioTTM?: Maybe<Scalars['Float']>;
  ceoSalary?: Maybe<Scalars['Float']>;
  ceoSalaryOverNetProfit?: Maybe<Scalars['Float']>;
  ceoShares?: Maybe<Scalars['Float']>;
  companyEquityMultiplierTTM?: Maybe<Scalars['Float']>;
  currentRatioTTM?: Maybe<Scalars['Float']>;
  dcf?: Maybe<Scalars['Float']>;
  debtEquityRatioTTM?: Maybe<Scalars['Float']>;
  debtToIncomeTTM?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  dividendCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  dividendStars?: Maybe<Scalars['Float']>;
  dividendYieldTTM?: Maybe<Scalars['Float']>;
  enterpriseValueMultipleTTM?: Maybe<Scalars['Float']>;
  evoeg?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  freeCashFlowCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  fullTimeEmployees?: Maybe<Scalars['Float']>;
  globalStars?: Maybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  grossProfitCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  grossProfitMarginLastYear?: Maybe<Scalars['Float']>;
  growthStars?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insiderOwnership?: Maybe<Scalars['Float']>;
  institutionalOwnership?: Maybe<Scalars['Float']>;
  interestCoverageTTM?: Maybe<Scalars['Float']>;
  interestOverRexTTM?: Maybe<Scalars['Float']>;
  managementStars?: Maybe<Scalars['Float']>;
  marketCap?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  netIncomeCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  netProfitMarginLastYear?: Maybe<Scalars['Float']>;
  numberDividendsLastYear?: Maybe<Scalars['Float']>;
  numberYearOfDividend?: Maybe<Scalars['Float']>;
  operatingProfitMarginLastYear?: Maybe<Scalars['Float']>;
  payoutRatioTTM?: Maybe<Scalars['Float']>;
  pegRatioTTM?: Maybe<Scalars['Float']>;
  piotroskiFScore?: Maybe<Scalars['Float']>;
  priceEarningsRatioTTM?: Maybe<Scalars['Float']>;
  priceToBookRatioTTM?: Maybe<Scalars['Float']>;
  priceToFreeCashFlowsRatioTTM?: Maybe<Scalars['Float']>;
  priceToSalesRatioTTM?: Maybe<Scalars['Float']>;
  profitabilityStars?: Maybe<Scalars['Float']>;
  quickRatioTTM?: Maybe<Scalars['Float']>;
  returnOnAssetsTTM?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployedTTM?: Maybe<Scalars['Float']>;
  returnOnEquityTTM?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver5Years?: Maybe<Scalars['Float']>;
  revenueCompoundGrowthOver10Years?: Maybe<Scalars['Float']>;
  rndOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  sgrTTM?: Maybe<Scalars['Float']>;
  sloanRatio?: Maybe<Scalars['Float']>;
  stockPrice?: Maybe<Scalars['Float']>;
  stockPriceOverDcf?: Maybe<Scalars['Float']>;
  valuationStars?: Maybe<Scalars['Float']>;
  vbaOverGrossProfitLastYear?: Maybe<Scalars['Float']>;
  visScore?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "continentCode" */
export type ContinentCode = {
  __typename?: 'continentCode';
  code: Scalars['String'];
  textFr: Scalars['String'];
};

/** aggregated selection of "continentCode" */
export type ContinentCode_Aggregate = {
  __typename?: 'continentCode_aggregate';
  aggregate?: Maybe<ContinentCode_Aggregate_Fields>;
  nodes: Array<ContinentCode>;
};

/** aggregate fields of "continentCode" */
export type ContinentCode_Aggregate_Fields = {
  __typename?: 'continentCode_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ContinentCode_Max_Fields>;
  min?: Maybe<ContinentCode_Min_Fields>;
};


/** aggregate fields of "continentCode" */
export type ContinentCode_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ContinentCode_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "continentCode". All fields are combined with a logical 'AND'. */
export type ContinentCode_Bool_Exp = {
  _and?: InputMaybe<Array<ContinentCode_Bool_Exp>>;
  _not?: InputMaybe<ContinentCode_Bool_Exp>;
  _or?: InputMaybe<Array<ContinentCode_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  textFr?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "continentCode" */
export enum ContinentCode_Constraint {
  /** unique or primary key constraint on columns "code" */
  ContinentCodePkey = 'continentCode_pkey'
}

export enum ContinentCode_Enum {
  /** Afrique */
  Af = 'AF',
  /** Antarctique */
  An = 'AN',
  /** Asie */
  As = 'AS',
  /** Europe */
  Eu = 'EU',
  /** Amérique du nord */
  Na = 'NA',
  /** Océanie */
  Oc = 'OC',
  /** Amérique du sud */
  Sa = 'SA'
}

/** Boolean expression to compare columns of type "continentCode_enum". All fields are combined with logical 'AND'. */
export type ContinentCode_Enum_Comparison_Exp = {
  _eq?: InputMaybe<ContinentCode_Enum>;
  _in?: InputMaybe<Array<ContinentCode_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<ContinentCode_Enum>;
  _nin?: InputMaybe<Array<ContinentCode_Enum>>;
};

/** input type for inserting data into table "continentCode" */
export type ContinentCode_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
  textFr?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ContinentCode_Max_Fields = {
  __typename?: 'continentCode_max_fields';
  code?: Maybe<Scalars['String']>;
  textFr?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ContinentCode_Min_Fields = {
  __typename?: 'continentCode_min_fields';
  code?: Maybe<Scalars['String']>;
  textFr?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "continentCode" */
export type ContinentCode_Mutation_Response = {
  __typename?: 'continentCode_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ContinentCode>;
};

/** on_conflict condition type for table "continentCode" */
export type ContinentCode_On_Conflict = {
  constraint: ContinentCode_Constraint;
  update_columns?: Array<ContinentCode_Update_Column>;
  where?: InputMaybe<ContinentCode_Bool_Exp>;
};

/** Ordering options when selecting data from "continentCode". */
export type ContinentCode_Order_By = {
  code?: InputMaybe<Order_By>;
  textFr?: InputMaybe<Order_By>;
};

/** primary key columns input for table: continentCode */
export type ContinentCode_Pk_Columns_Input = {
  code: Scalars['String'];
};

/** select columns of table "continentCode" */
export enum ContinentCode_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  TextFr = 'textFr'
}

/** input type for updating data in table "continentCode" */
export type ContinentCode_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  textFr?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "continentCode" */
export type ContinentCode_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ContinentCode_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ContinentCode_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  textFr?: InputMaybe<Scalars['String']>;
};

/** update columns of table "continentCode" */
export enum ContinentCode_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  TextFr = 'textFr'
}

export type ContinentCode_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ContinentCode_Set_Input>;
  /** filter the rows which have to be updated */
  where: ContinentCode_Bool_Exp;
};

/** columns and relationships of "country" */
export type Country = {
  __typename?: 'country';
  continentCode: ContinentCode_Enum;
  countryCode: CountryCode_Enum;
};

/** columns and relationships of "countryCode" */
export type CountryCode = {
  __typename?: 'countryCode';
  code: Scalars['String'];
  /** An object relationship */
  continent?: Maybe<Country>;
  textFr: Scalars['String'];
};

/** aggregated selection of "countryCode" */
export type CountryCode_Aggregate = {
  __typename?: 'countryCode_aggregate';
  aggregate?: Maybe<CountryCode_Aggregate_Fields>;
  nodes: Array<CountryCode>;
};

/** aggregate fields of "countryCode" */
export type CountryCode_Aggregate_Fields = {
  __typename?: 'countryCode_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CountryCode_Max_Fields>;
  min?: Maybe<CountryCode_Min_Fields>;
};


/** aggregate fields of "countryCode" */
export type CountryCode_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<CountryCode_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "countryCode". All fields are combined with a logical 'AND'. */
export type CountryCode_Bool_Exp = {
  _and?: InputMaybe<Array<CountryCode_Bool_Exp>>;
  _not?: InputMaybe<CountryCode_Bool_Exp>;
  _or?: InputMaybe<Array<CountryCode_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  continent?: InputMaybe<Country_Bool_Exp>;
  textFr?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "countryCode" */
export enum CountryCode_Constraint {
  /** unique or primary key constraint on columns "code" */
  CountryPkey = 'country_pkey'
}

export enum CountryCode_Enum {
  /** Andorre */
  Ad = 'AD',
  /** Émirats Arabes Unis */
  Ae = 'AE',
  /** Afghanistan */
  Af = 'AF',
  /** Antigua-et-Barbuda */
  Ag = 'AG',
  /** Anguilla */
  Ai = 'AI',
  /** Albanie */
  Al = 'AL',
  /** Arménie */
  Am = 'AM',
  /** Angola */
  Ao = 'AO',
  /** Antarctique */
  Aq = 'AQ',
  /** Argentine */
  Ar = 'AR',
  /** Samoa américaines */
  As = 'AS',
  /** Autriche */
  At = 'AT',
  /** Australie */
  Au = 'AU',
  /** Aruba */
  Aw = 'AW',
  /** Åland */
  Ax = 'AX',
  /** Azerbaïdjan */
  Az = 'AZ',
  /** Bosnie-Herzégovine */
  Ba = 'BA',
  /** Barbade */
  Bb = 'BB',
  /** Bangladesh */
  Bd = 'BD',
  /** Belgique */
  Be = 'BE',
  /** Burkina Faso */
  Bf = 'BF',
  /** Bulgarie */
  Bg = 'BG',
  /** Bahreïn */
  Bh = 'BH',
  /** Burundi */
  Bi = 'BI',
  /** Bénin */
  Bj = 'BJ',
  /** Saint-Barthélemy */
  Bl = 'BL',
  /** Bermudes */
  Bm = 'BM',
  /** Brunei Darussalam */
  Bn = 'BN',
  /** Bolivie */
  Bo = 'BO',
  /** Bonaire */
  Bq = 'BQ',
  /** Brésil */
  Br = 'BR',
  /** Bahamas */
  Bs = 'BS',
  /** Bhoutan */
  Bt = 'BT',
  /** Île Bouvet */
  Bv = 'BV',
  /** Botswana */
  Bw = 'BW',
  /** Biélorussie */
  By = 'BY',
  /** Belize */
  Bz = 'BZ',
  /** Canada */
  Ca = 'CA',
  /** Îles Cocos */
  Cc = 'CC',
  /** République démocratique du Congo */
  Cd = 'CD',
  /** République Centrafricaine */
  Cf = 'CF',
  /** République du Congo */
  Cg = 'CG',
  /** Suisse */
  Ch = 'CH',
  /** Côte-d'Ivoire */
  Ci = 'CI',
  /** Îles Cook */
  Ck = 'CK',
  /** Chili */
  Cl = 'CL',
  /** Cameroun */
  Cm = 'CM',
  /** Chine */
  Cn = 'CN',
  /** Colombie */
  Co = 'CO',
  /** Costa Rica */
  Cr = 'CR',
  /** Cuba */
  Cu = 'CU',
  /** Cap-Vert */
  Cv = 'CV',
  /** Curaçao */
  Cw = 'CW',
  /** Île Christmas */
  Cx = 'CX',
  /** Chypre */
  Cy = 'CY',
  /** République Tchèque */
  Cz = 'CZ',
  /** Allemagne */
  De = 'DE',
  /** Djibouti */
  Dj = 'DJ',
  /** Danemark */
  Dk = 'DK',
  /** Dominique */
  Dm = 'DM',
  /** République Dominicaine */
  Do = 'DO',
  /** Algérie */
  Dz = 'DZ',
  /** Équateur */
  Ec = 'EC',
  /** Estonie */
  Ee = 'EE',
  /** Égypte */
  Eg = 'EG',
  /** Sahara occidental */
  Eh = 'EH',
  /** Érythrée */
  Er = 'ER',
  /** Espagne */
  Es = 'ES',
  /** Éthiopie */
  Et = 'ET',
  /** Finlande */
  Fi = 'FI',
  /** Fidji */
  Fj = 'FJ',
  /** Îles Malouines */
  Fk = 'FK',
  /** Micronésie */
  Fm = 'FM',
  /** Îles Féroé */
  Fo = 'FO',
  /** France */
  Fr = 'FR',
  /** Gabon */
  Ga = 'GA',
  /** Royaume-Uni */
  Gb = 'GB',
  /** Grenade */
  Gd = 'GD',
  /** Géorgie */
  Ge = 'GE',
  /** Guyane française */
  Gf = 'GF',
  /** Guernesey */
  Gg = 'GG',
  /** Ghana */
  Gh = 'GH',
  /** Gibraltar */
  Gi = 'GI',
  /** Groenland */
  Gl = 'GL',
  /** Gambie */
  Gm = 'GM',
  /** Guinée */
  Gn = 'GN',
  /** Guadeloupe */
  Gp = 'GP',
  /** Guinée équatoriale */
  Gq = 'GQ',
  /** Grèce */
  Gr = 'GR',
  /** Géorgie du Sud-et-les Îles Sandwich du Sud */
  Gs = 'GS',
  /** Guatemala */
  Gt = 'GT',
  /** Guam */
  Gu = 'GU',
  /** Guinée-Bissau */
  Gw = 'GW',
  /** Guyana */
  Gy = 'GY',
  /** Hong Kong */
  Hk = 'HK',
  /** Îles Heard-et-MacDonald */
  Hm = 'HM',
  /** Honduras */
  Hn = 'HN',
  /** Croatie */
  Hr = 'HR',
  /** Haïti */
  Ht = 'HT',
  /** Hongrie */
  Hu = 'HU',
  /** Indonésie */
  Id = 'ID',
  /** Irlande */
  Ie = 'IE',
  /** Israël */
  Il = 'IL',
  /** Île de Man */
  Im = 'IM',
  /** Inde */
  In = 'IN',
  /** Océan Indien Britannique */
  Io = 'IO',
  /** Irak */
  Iq = 'IQ',
  /** Iran */
  Ir = 'IR',
  /** Islande */
  Is = 'IS',
  /** Italie */
  It = 'IT',
  /** Jersey */
  Je = 'JE',
  /** Jamaïque */
  Jm = 'JM',
  /** Jordanie */
  Jo = 'JO',
  /** Japon */
  Jp = 'JP',
  /** Kenya */
  Ke = 'KE',
  /** Kirghizistan */
  Kg = 'KG',
  /** Cambodge */
  Kh = 'KH',
  /** Kiribati */
  Ki = 'KI',
  /** Comores */
  Km = 'KM',
  /** Saint-Christophe-et-Niévès */
  Kn = 'KN',
  /** Corée du Nord */
  Kp = 'KP',
  /** Corée du Sud */
  Kr = 'KR',
  /** Koweït */
  Kw = 'KW',
  /** Îles Caïmans */
  Ky = 'KY',
  /** Kazakhstan */
  Kz = 'KZ',
  /** Laos */
  La = 'LA',
  /** Liban */
  Lb = 'LB',
  /** Sainte-Lucie */
  Lc = 'LC',
  /** Liechtenstein */
  Li = 'LI',
  /** Sri Lanka */
  Lk = 'LK',
  /** Libéria */
  Lr = 'LR',
  /** Lesotho */
  Ls = 'LS',
  /** Lituanie */
  Lt = 'LT',
  /** Luxembourg */
  Lu = 'LU',
  /** Lettonie */
  Lv = 'LV',
  /** Libye */
  Ly = 'LY',
  /** Maroc */
  Ma = 'MA',
  /** Monaco */
  Mc = 'MC',
  /** Moldavie */
  Md = 'MD',
  /** Monténégro */
  Me = 'ME',
  /** Saint-Martin (partie française) */
  Mf = 'MF',
  /** Madagascar */
  Mg = 'MG',
  /** Îles Marshall */
  Mh = 'MH',
  /** Macédoine du Nord */
  Mk = 'MK',
  /** Mali */
  Ml = 'ML',
  /** Myanmar */
  Mm = 'MM',
  /** Mongolie */
  Mn = 'MN',
  /** Macao */
  Mo = 'MO',
  /** Îles Mariannes du Nord */
  Mp = 'MP',
  /** Martinique */
  Mq = 'MQ',
  /** Mauritanie */
  Mr = 'MR',
  /** Montserrat */
  Ms = 'MS',
  /** Malte */
  Mt = 'MT',
  /** Maurice */
  Mu = 'MU',
  /** Maldives */
  Mv = 'MV',
  /** Malawi */
  Mw = 'MW',
  /** Mexique */
  Mx = 'MX',
  /** Malaisie */
  My = 'MY',
  /** Mozambique */
  Mz = 'MZ',
  /** Namibie */
  Na = 'NA',
  /** Nouvelle-Calédonie */
  Nc = 'NC',
  /** Niger */
  Ne = 'NE',
  /** Île Norfolk */
  Nf = 'NF',
  /** Nigéria */
  Ng = 'NG',
  /** Nicaragua */
  Ni = 'NI',
  /** Pays-Bas */
  Nl = 'NL',
  /** Norvège */
  No = 'NO',
  /** Népal */
  Np = 'NP',
  /** Nauru */
  Nr = 'NR',
  /** Niué */
  Nu = 'NU',
  /** Nouvelle-Zélande */
  Nz = 'NZ',
  /** Oman */
  Om = 'OM',
  /** Panama */
  Pa = 'PA',
  /** Pérou */
  Pe = 'PE',
  /** Polynésie française */
  Pf = 'PF',
  /** Papouasie-Nouvelle-Guinée */
  Pg = 'PG',
  /** Philippines */
  Ph = 'PH',
  /** Pakistan */
  Pk = 'PK',
  /** Pologne */
  Pl = 'PL',
  /** Saint-Pierre-et-Miquelon */
  Pm = 'PM',
  /** Îles Pitcairn */
  Pn = 'PN',
  /** Porto Rico */
  Pr = 'PR',
  /** Palestine */
  Ps = 'PS',
  /** Portugal */
  Pt = 'PT',
  /** Palaos */
  Pw = 'PW',
  /** Paraguay */
  Py = 'PY',
  /** Qatar */
  Qa = 'QA',
  /** Réunion */
  Re = 'RE',
  /** Roumanie */
  Ro = 'RO',
  /** Serbie */
  Rs = 'RS',
  /** Russie */
  Ru = 'RU',
  /** Rwanda */
  Rw = 'RW',
  /** Arabie Saoudite */
  Sa = 'SA',
  /** Îles Salomon */
  Sb = 'SB',
  /** Seychelles */
  Sc = 'SC',
  /** Soudan */
  Sd = 'SD',
  /** Suède */
  Se = 'SE',
  /** Singapour */
  Sg = 'SG',
  /** Sainte-Hélène */
  Sh = 'SH',
  /** Slovénie */
  Si = 'SI',
  /** Svalbard et Île Jan Mayen */
  Sj = 'SJ',
  /** Slovaquie */
  Sk = 'SK',
  /** Sierra Leone */
  Sl = 'SL',
  /** Saint-Marin */
  Sm = 'SM',
  /** Sénégal */
  Sn = 'SN',
  /** Somalie */
  So = 'SO',
  /** Suriname */
  Sr = 'SR',
  /** Soudan du Sud */
  Ss = 'SS',
  /** São Tomé-et-Principe */
  St = 'ST',
  /** El Salvador */
  Sv = 'SV',
  /** Saint-Martin (partie néerlandaise) */
  Sx = 'SX',
  /** Syrie */
  Sy = 'SY',
  /** Royaume d'Eswatini */
  Sz = 'SZ',
  /** Îles Turques-et-Caïques */
  Tc = 'TC',
  /** Tchad */
  Td = 'TD',
  /** Terres australes françaises */
  Tf = 'TF',
  /** Togo */
  Tg = 'TG',
  /** Thaïlande */
  Th = 'TH',
  /** Tadjikistan */
  Tj = 'TJ',
  /** Tokelau */
  Tk = 'TK',
  /** Timor-Leste */
  Tl = 'TL',
  /** Turkménistan */
  Tm = 'TM',
  /** Tunisie */
  Tn = 'TN',
  /** Tonga */
  To = 'TO',
  /** Turquie */
  Tr = 'TR',
  /** Trinité-et-Tobago */
  Tt = 'TT',
  /** Tuvalu */
  Tv = 'TV',
  /** Taïwan */
  Tw = 'TW',
  /** République unie de Tanzanie */
  Tz = 'TZ',
  /** Ukraine */
  Ua = 'UA',
  /** Ouganda */
  Ug = 'UG',
  /** Îles mineures éloignées des États-Unis */
  Um = 'UM',
  /** États-Unis d'Amérique */
  Us = 'US',
  /** Uruguay */
  Uy = 'UY',
  /** Ouzbékistan */
  Uz = 'UZ',
  /** Saint-Siège (Vatican) */
  Va = 'VA',
  /** Saint-Vincent-et-les-Grenadines */
  Vc = 'VC',
  /** Venezuela */
  Ve = 'VE',
  /** Îles vierges britanniques */
  Vg = 'VG',
  /** Îles vierges américaines */
  Vi = 'VI',
  /** Vietnam */
  Vn = 'VN',
  /** Vanuatu */
  Vu = 'VU',
  /** Wallis-et-Futuna */
  Wf = 'WF',
  /** Samoa */
  Ws = 'WS',
  /** Kosovo */
  Xk = 'XK',
  /** Yémen */
  Ye = 'YE',
  /** Mayotte */
  Yt = 'YT',
  /** Afrique du Sud */
  Za = 'ZA',
  /** Zambie */
  Zm = 'ZM',
  /** Zimbabwe */
  Zw = 'ZW'
}

/** Boolean expression to compare columns of type "countryCode_enum". All fields are combined with logical 'AND'. */
export type CountryCode_Enum_Comparison_Exp = {
  _eq?: InputMaybe<CountryCode_Enum>;
  _in?: InputMaybe<Array<CountryCode_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<CountryCode_Enum>;
  _nin?: InputMaybe<Array<CountryCode_Enum>>;
};

/** input type for inserting data into table "countryCode" */
export type CountryCode_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
  continent?: InputMaybe<Country_Obj_Rel_Insert_Input>;
  textFr?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type CountryCode_Max_Fields = {
  __typename?: 'countryCode_max_fields';
  code?: Maybe<Scalars['String']>;
  textFr?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type CountryCode_Min_Fields = {
  __typename?: 'countryCode_min_fields';
  code?: Maybe<Scalars['String']>;
  textFr?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "countryCode" */
export type CountryCode_Mutation_Response = {
  __typename?: 'countryCode_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<CountryCode>;
};

/** input type for inserting object relation for remote table "countryCode" */
export type CountryCode_Obj_Rel_Insert_Input = {
  data: CountryCode_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<CountryCode_On_Conflict>;
};

/** on_conflict condition type for table "countryCode" */
export type CountryCode_On_Conflict = {
  constraint: CountryCode_Constraint;
  update_columns?: Array<CountryCode_Update_Column>;
  where?: InputMaybe<CountryCode_Bool_Exp>;
};

/** Ordering options when selecting data from "countryCode". */
export type CountryCode_Order_By = {
  code?: InputMaybe<Order_By>;
  continent?: InputMaybe<Country_Order_By>;
  textFr?: InputMaybe<Order_By>;
};

/** primary key columns input for table: countryCode */
export type CountryCode_Pk_Columns_Input = {
  code: Scalars['String'];
};

/** select columns of table "countryCode" */
export enum CountryCode_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  TextFr = 'textFr'
}

/** input type for updating data in table "countryCode" */
export type CountryCode_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  textFr?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "countryCode" */
export type CountryCode_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: CountryCode_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type CountryCode_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  textFr?: InputMaybe<Scalars['String']>;
};

/** update columns of table "countryCode" */
export enum CountryCode_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  TextFr = 'textFr'
}

export type CountryCode_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CountryCode_Set_Input>;
  /** filter the rows which have to be updated */
  where: CountryCode_Bool_Exp;
};

/** aggregated selection of "country" */
export type Country_Aggregate = {
  __typename?: 'country_aggregate';
  aggregate?: Maybe<Country_Aggregate_Fields>;
  nodes: Array<Country>;
};

/** aggregate fields of "country" */
export type Country_Aggregate_Fields = {
  __typename?: 'country_aggregate_fields';
  count: Scalars['Int'];
};


/** aggregate fields of "country" */
export type Country_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Country_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "country". All fields are combined with a logical 'AND'. */
export type Country_Bool_Exp = {
  _and?: InputMaybe<Array<Country_Bool_Exp>>;
  _not?: InputMaybe<Country_Bool_Exp>;
  _or?: InputMaybe<Array<Country_Bool_Exp>>;
  continentCode?: InputMaybe<ContinentCode_Enum_Comparison_Exp>;
  countryCode?: InputMaybe<CountryCode_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "country" */
export enum Country_Constraint {
  /** unique or primary key constraint on columns "countryCode" */
  CountryPkey1 = 'country_pkey1'
}

/** input type for inserting data into table "country" */
export type Country_Insert_Input = {
  continentCode?: InputMaybe<ContinentCode_Enum>;
  countryCode?: InputMaybe<CountryCode_Enum>;
};

/** response of any mutation on the table "country" */
export type Country_Mutation_Response = {
  __typename?: 'country_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Country>;
};

/** input type for inserting object relation for remote table "country" */
export type Country_Obj_Rel_Insert_Input = {
  data: Country_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Country_On_Conflict>;
};

/** on_conflict condition type for table "country" */
export type Country_On_Conflict = {
  constraint: Country_Constraint;
  update_columns?: Array<Country_Update_Column>;
  where?: InputMaybe<Country_Bool_Exp>;
};

/** Ordering options when selecting data from "country". */
export type Country_Order_By = {
  continentCode?: InputMaybe<Order_By>;
  countryCode?: InputMaybe<Order_By>;
};

/** primary key columns input for table: country */
export type Country_Pk_Columns_Input = {
  countryCode: CountryCode_Enum;
};

/** select columns of table "country" */
export enum Country_Select_Column {
  /** column name */
  ContinentCode = 'continentCode',
  /** column name */
  CountryCode = 'countryCode'
}

/** input type for updating data in table "country" */
export type Country_Set_Input = {
  continentCode?: InputMaybe<ContinentCode_Enum>;
  countryCode?: InputMaybe<CountryCode_Enum>;
};

/** Streaming cursor of the table "country" */
export type Country_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Country_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Country_Stream_Cursor_Value_Input = {
  continentCode?: InputMaybe<ContinentCode_Enum>;
  countryCode?: InputMaybe<CountryCode_Enum>;
};

/** update columns of table "country" */
export enum Country_Update_Column {
  /** column name */
  ContinentCode = 'continentCode',
  /** column name */
  CountryCode = 'countryCode'
}

export type Country_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Country_Set_Input>;
  /** filter the rows which have to be updated */
  where: Country_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "documents" */
export type Documents = {
  __typename?: 'documents';
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  prompted_documents: Array<Prompted_Document>;
  /** An aggregate relationship */
  prompted_documents_aggregate: Prompted_Document_Aggregate;
  version: Scalars['Int'];
};


/** columns and relationships of "documents" */
export type DocumentsPrompted_DocumentsArgs = {
  distinct_on?: InputMaybe<Array<Prompted_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prompted_Document_Order_By>>;
  where?: InputMaybe<Prompted_Document_Bool_Exp>;
};


/** columns and relationships of "documents" */
export type DocumentsPrompted_Documents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prompted_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prompted_Document_Order_By>>;
  where?: InputMaybe<Prompted_Document_Bool_Exp>;
};

/** aggregated selection of "documents" */
export type Documents_Aggregate = {
  __typename?: 'documents_aggregate';
  aggregate?: Maybe<Documents_Aggregate_Fields>;
  nodes: Array<Documents>;
};

/** aggregate fields of "documents" */
export type Documents_Aggregate_Fields = {
  __typename?: 'documents_aggregate_fields';
  avg?: Maybe<Documents_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Documents_Max_Fields>;
  min?: Maybe<Documents_Min_Fields>;
  stddev?: Maybe<Documents_Stddev_Fields>;
  stddev_pop?: Maybe<Documents_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Documents_Stddev_Samp_Fields>;
  sum?: Maybe<Documents_Sum_Fields>;
  var_pop?: Maybe<Documents_Var_Pop_Fields>;
  var_samp?: Maybe<Documents_Var_Samp_Fields>;
  variance?: Maybe<Documents_Variance_Fields>;
};


/** aggregate fields of "documents" */
export type Documents_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Documents_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Documents_Avg_Fields = {
  __typename?: 'documents_avg_fields';
  version?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "documents". All fields are combined with a logical 'AND'. */
export type Documents_Bool_Exp = {
  _and?: InputMaybe<Array<Documents_Bool_Exp>>;
  _not?: InputMaybe<Documents_Bool_Exp>;
  _or?: InputMaybe<Array<Documents_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  prompted_documents?: InputMaybe<Prompted_Document_Bool_Exp>;
  prompted_documents_aggregate?: InputMaybe<Prompted_Document_Aggregate_Bool_Exp>;
  version?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "documents" */
export enum Documents_Constraint {
  /** unique or primary key constraint on columns "version", "name" */
  DocumentsNameVersionKey = 'documents_name_version_key',
  /** unique or primary key constraint on columns "id" */
  DocumentsPkey = 'documents_pkey'
}

/** input type for incrementing numeric columns in table "documents" */
export type Documents_Inc_Input = {
  version?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "documents" */
export type Documents_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  prompted_documents?: InputMaybe<Prompted_Document_Arr_Rel_Insert_Input>;
  version?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Documents_Max_Fields = {
  __typename?: 'documents_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Documents_Min_Fields = {
  __typename?: 'documents_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "documents" */
export type Documents_Mutation_Response = {
  __typename?: 'documents_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Documents>;
};

/** input type for inserting object relation for remote table "documents" */
export type Documents_Obj_Rel_Insert_Input = {
  data: Documents_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Documents_On_Conflict>;
};

/** on_conflict condition type for table "documents" */
export type Documents_On_Conflict = {
  constraint: Documents_Constraint;
  update_columns?: Array<Documents_Update_Column>;
  where?: InputMaybe<Documents_Bool_Exp>;
};

/** Ordering options when selecting data from "documents". */
export type Documents_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  prompted_documents_aggregate?: InputMaybe<Prompted_Document_Aggregate_Order_By>;
  version?: InputMaybe<Order_By>;
};

/** primary key columns input for table: documents */
export type Documents_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "documents" */
export enum Documents_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Version = 'version'
}

/** input type for updating data in table "documents" */
export type Documents_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Documents_Stddev_Fields = {
  __typename?: 'documents_stddev_fields';
  version?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Documents_Stddev_Pop_Fields = {
  __typename?: 'documents_stddev_pop_fields';
  version?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Documents_Stddev_Samp_Fields = {
  __typename?: 'documents_stddev_samp_fields';
  version?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "documents" */
export type Documents_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Documents_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Documents_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Documents_Sum_Fields = {
  __typename?: 'documents_sum_fields';
  version?: Maybe<Scalars['Int']>;
};

/** update columns of table "documents" */
export enum Documents_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Version = 'version'
}

export type Documents_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Documents_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Documents_Set_Input>;
  /** filter the rows which have to be updated */
  where: Documents_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Documents_Var_Pop_Fields = {
  __typename?: 'documents_var_pop_fields';
  version?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Documents_Var_Samp_Fields = {
  __typename?: 'documents_var_samp_fields';
  version?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Documents_Variance_Fields = {
  __typename?: 'documents_variance_fields';
  version?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "etf" */
export type Etf = {
  __typename?: 'etf';
  currency?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ticker: Scalars['String'];
  type: EtfType_Enum;
};

/** columns and relationships of "etfType" */
export type EtfType = {
  __typename?: 'etfType';
  type: Scalars['String'];
};

/** aggregated selection of "etfType" */
export type EtfType_Aggregate = {
  __typename?: 'etfType_aggregate';
  aggregate?: Maybe<EtfType_Aggregate_Fields>;
  nodes: Array<EtfType>;
};

/** aggregate fields of "etfType" */
export type EtfType_Aggregate_Fields = {
  __typename?: 'etfType_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<EtfType_Max_Fields>;
  min?: Maybe<EtfType_Min_Fields>;
};


/** aggregate fields of "etfType" */
export type EtfType_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<EtfType_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "etfType". All fields are combined with a logical 'AND'. */
export type EtfType_Bool_Exp = {
  _and?: InputMaybe<Array<EtfType_Bool_Exp>>;
  _not?: InputMaybe<EtfType_Bool_Exp>;
  _or?: InputMaybe<Array<EtfType_Bool_Exp>>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "etfType" */
export enum EtfType_Constraint {
  /** unique or primary key constraint on columns "type" */
  EtfTypePkey = 'etfType_pkey'
}

export enum EtfType_Enum {
  Bonds = 'Bonds',
  Commodities = 'Commodities',
  Etf = 'ETF'
}

/** Boolean expression to compare columns of type "etfType_enum". All fields are combined with logical 'AND'. */
export type EtfType_Enum_Comparison_Exp = {
  _eq?: InputMaybe<EtfType_Enum>;
  _in?: InputMaybe<Array<EtfType_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<EtfType_Enum>;
  _nin?: InputMaybe<Array<EtfType_Enum>>;
};

/** input type for inserting data into table "etfType" */
export type EtfType_Insert_Input = {
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EtfType_Max_Fields = {
  __typename?: 'etfType_max_fields';
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type EtfType_Min_Fields = {
  __typename?: 'etfType_min_fields';
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "etfType" */
export type EtfType_Mutation_Response = {
  __typename?: 'etfType_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<EtfType>;
};

/** on_conflict condition type for table "etfType" */
export type EtfType_On_Conflict = {
  constraint: EtfType_Constraint;
  update_columns?: Array<EtfType_Update_Column>;
  where?: InputMaybe<EtfType_Bool_Exp>;
};

/** Ordering options when selecting data from "etfType". */
export type EtfType_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: etfType */
export type EtfType_Pk_Columns_Input = {
  type: Scalars['String'];
};

/** select columns of table "etfType" */
export enum EtfType_Select_Column {
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "etfType" */
export type EtfType_Set_Input = {
  type?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "etfType" */
export type EtfType_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: EtfType_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type EtfType_Stream_Cursor_Value_Input = {
  type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "etfType" */
export enum EtfType_Update_Column {
  /** column name */
  Type = 'type'
}

export type EtfType_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EtfType_Set_Input>;
  /** filter the rows which have to be updated */
  where: EtfType_Bool_Exp;
};

/** aggregated selection of "etf" */
export type Etf_Aggregate = {
  __typename?: 'etf_aggregate';
  aggregate?: Maybe<Etf_Aggregate_Fields>;
  nodes: Array<Etf>;
};

/** aggregate fields of "etf" */
export type Etf_Aggregate_Fields = {
  __typename?: 'etf_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Etf_Max_Fields>;
  min?: Maybe<Etf_Min_Fields>;
};


/** aggregate fields of "etf" */
export type Etf_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Etf_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "etf". All fields are combined with a logical 'AND'. */
export type Etf_Bool_Exp = {
  _and?: InputMaybe<Array<Etf_Bool_Exp>>;
  _not?: InputMaybe<Etf_Bool_Exp>;
  _or?: InputMaybe<Array<Etf_Bool_Exp>>;
  currency?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  ticker?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<EtfType_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "etf" */
export enum Etf_Constraint {
  /** unique or primary key constraint on columns "ticker" */
  EtfPkey = 'etf_pkey'
}

/** input type for inserting data into table "etf" */
export type Etf_Insert_Input = {
  currency?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  ticker?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EtfType_Enum>;
};

/** aggregate max on columns */
export type Etf_Max_Fields = {
  __typename?: 'etf_max_fields';
  currency?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ticker?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Etf_Min_Fields = {
  __typename?: 'etf_min_fields';
  currency?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ticker?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "etf" */
export type Etf_Mutation_Response = {
  __typename?: 'etf_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Etf>;
};

/** on_conflict condition type for table "etf" */
export type Etf_On_Conflict = {
  constraint: Etf_Constraint;
  update_columns?: Array<Etf_Update_Column>;
  where?: InputMaybe<Etf_Bool_Exp>;
};

/** Ordering options when selecting data from "etf". */
export type Etf_Order_By = {
  currency?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ticker?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: etf */
export type Etf_Pk_Columns_Input = {
  ticker: Scalars['String'];
};

/** select columns of table "etf" */
export enum Etf_Select_Column {
  /** column name */
  Currency = 'currency',
  /** column name */
  Name = 'name',
  /** column name */
  Ticker = 'ticker',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "etf" */
export type Etf_Set_Input = {
  currency?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  ticker?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EtfType_Enum>;
};

/** Streaming cursor of the table "etf" */
export type Etf_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Etf_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Etf_Stream_Cursor_Value_Input = {
  currency?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  ticker?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EtfType_Enum>;
};

/** update columns of table "etf" */
export enum Etf_Update_Column {
  /** column name */
  Currency = 'currency',
  /** column name */
  Name = 'name',
  /** column name */
  Ticker = 'ticker',
  /** column name */
  Type = 'type'
}

export type Etf_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Etf_Set_Input>;
  /** filter the rows which have to be updated */
  where: Etf_Bool_Exp;
};

/** columns and relationships of "favoriteCompany" */
export type FavoriteCompany = {
  __typename?: 'favoriteCompany';
  /** An object relationship */
  company: Company;
  companyId: Scalars['Int'];
  favoriteListId: Scalars['Int'];
  id: Scalars['Int'];
  userEmail: Scalars['String'];
};

/** aggregated selection of "favoriteCompany" */
export type FavoriteCompany_Aggregate = {
  __typename?: 'favoriteCompany_aggregate';
  aggregate?: Maybe<FavoriteCompany_Aggregate_Fields>;
  nodes: Array<FavoriteCompany>;
};

export type FavoriteCompany_Aggregate_Bool_Exp = {
  count?: InputMaybe<FavoriteCompany_Aggregate_Bool_Exp_Count>;
};

export type FavoriteCompany_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<FavoriteCompany_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<FavoriteCompany_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "favoriteCompany" */
export type FavoriteCompany_Aggregate_Fields = {
  __typename?: 'favoriteCompany_aggregate_fields';
  avg?: Maybe<FavoriteCompany_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<FavoriteCompany_Max_Fields>;
  min?: Maybe<FavoriteCompany_Min_Fields>;
  stddev?: Maybe<FavoriteCompany_Stddev_Fields>;
  stddev_pop?: Maybe<FavoriteCompany_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<FavoriteCompany_Stddev_Samp_Fields>;
  sum?: Maybe<FavoriteCompany_Sum_Fields>;
  var_pop?: Maybe<FavoriteCompany_Var_Pop_Fields>;
  var_samp?: Maybe<FavoriteCompany_Var_Samp_Fields>;
  variance?: Maybe<FavoriteCompany_Variance_Fields>;
};


/** aggregate fields of "favoriteCompany" */
export type FavoriteCompany_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<FavoriteCompany_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "favoriteCompany" */
export type FavoriteCompany_Aggregate_Order_By = {
  avg?: InputMaybe<FavoriteCompany_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<FavoriteCompany_Max_Order_By>;
  min?: InputMaybe<FavoriteCompany_Min_Order_By>;
  stddev?: InputMaybe<FavoriteCompany_Stddev_Order_By>;
  stddev_pop?: InputMaybe<FavoriteCompany_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<FavoriteCompany_Stddev_Samp_Order_By>;
  sum?: InputMaybe<FavoriteCompany_Sum_Order_By>;
  var_pop?: InputMaybe<FavoriteCompany_Var_Pop_Order_By>;
  var_samp?: InputMaybe<FavoriteCompany_Var_Samp_Order_By>;
  variance?: InputMaybe<FavoriteCompany_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "favoriteCompany" */
export type FavoriteCompany_Arr_Rel_Insert_Input = {
  data: Array<FavoriteCompany_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<FavoriteCompany_On_Conflict>;
};

/** aggregate avg on columns */
export type FavoriteCompany_Avg_Fields = {
  __typename?: 'favoriteCompany_avg_fields';
  companyId?: Maybe<Scalars['Float']>;
  favoriteListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "favoriteCompany" */
export type FavoriteCompany_Avg_Order_By = {
  companyId?: InputMaybe<Order_By>;
  favoriteListId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "favoriteCompany". All fields are combined with a logical 'AND'. */
export type FavoriteCompany_Bool_Exp = {
  _and?: InputMaybe<Array<FavoriteCompany_Bool_Exp>>;
  _not?: InputMaybe<FavoriteCompany_Bool_Exp>;
  _or?: InputMaybe<Array<FavoriteCompany_Bool_Exp>>;
  company?: InputMaybe<Company_Bool_Exp>;
  companyId?: InputMaybe<Int_Comparison_Exp>;
  favoriteListId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  userEmail?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "favoriteCompany" */
export enum FavoriteCompany_Constraint {
  /** unique or primary key constraint on columns "favoriteListId", "companyId" */
  FavoriteCompanyPkey = 'favoriteCompany_pkey'
}

/** input type for incrementing numeric columns in table "favoriteCompany" */
export type FavoriteCompany_Inc_Input = {
  companyId?: InputMaybe<Scalars['Int']>;
  favoriteListId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "favoriteCompany" */
export type FavoriteCompany_Insert_Input = {
  company?: InputMaybe<Company_Obj_Rel_Insert_Input>;
  companyId?: InputMaybe<Scalars['Int']>;
  favoriteListId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type FavoriteCompany_Max_Fields = {
  __typename?: 'favoriteCompany_max_fields';
  companyId?: Maybe<Scalars['Int']>;
  favoriteListId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userEmail?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "favoriteCompany" */
export type FavoriteCompany_Max_Order_By = {
  companyId?: InputMaybe<Order_By>;
  favoriteListId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type FavoriteCompany_Min_Fields = {
  __typename?: 'favoriteCompany_min_fields';
  companyId?: Maybe<Scalars['Int']>;
  favoriteListId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userEmail?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "favoriteCompany" */
export type FavoriteCompany_Min_Order_By = {
  companyId?: InputMaybe<Order_By>;
  favoriteListId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "favoriteCompany" */
export type FavoriteCompany_Mutation_Response = {
  __typename?: 'favoriteCompany_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FavoriteCompany>;
};

/** on_conflict condition type for table "favoriteCompany" */
export type FavoriteCompany_On_Conflict = {
  constraint: FavoriteCompany_Constraint;
  update_columns?: Array<FavoriteCompany_Update_Column>;
  where?: InputMaybe<FavoriteCompany_Bool_Exp>;
};

/** Ordering options when selecting data from "favoriteCompany". */
export type FavoriteCompany_Order_By = {
  company?: InputMaybe<Company_Order_By>;
  companyId?: InputMaybe<Order_By>;
  favoriteListId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** primary key columns input for table: favoriteCompany */
export type FavoriteCompany_Pk_Columns_Input = {
  companyId: Scalars['Int'];
  favoriteListId: Scalars['Int'];
};

/** select columns of table "favoriteCompany" */
export enum FavoriteCompany_Select_Column {
  /** column name */
  CompanyId = 'companyId',
  /** column name */
  FavoriteListId = 'favoriteListId',
  /** column name */
  Id = 'id',
  /** column name */
  UserEmail = 'userEmail'
}

/** input type for updating data in table "favoriteCompany" */
export type FavoriteCompany_Set_Input = {
  companyId?: InputMaybe<Scalars['Int']>;
  favoriteListId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type FavoriteCompany_Stddev_Fields = {
  __typename?: 'favoriteCompany_stddev_fields';
  companyId?: Maybe<Scalars['Float']>;
  favoriteListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "favoriteCompany" */
export type FavoriteCompany_Stddev_Order_By = {
  companyId?: InputMaybe<Order_By>;
  favoriteListId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type FavoriteCompany_Stddev_Pop_Fields = {
  __typename?: 'favoriteCompany_stddev_pop_fields';
  companyId?: Maybe<Scalars['Float']>;
  favoriteListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "favoriteCompany" */
export type FavoriteCompany_Stddev_Pop_Order_By = {
  companyId?: InputMaybe<Order_By>;
  favoriteListId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type FavoriteCompany_Stddev_Samp_Fields = {
  __typename?: 'favoriteCompany_stddev_samp_fields';
  companyId?: Maybe<Scalars['Float']>;
  favoriteListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "favoriteCompany" */
export type FavoriteCompany_Stddev_Samp_Order_By = {
  companyId?: InputMaybe<Order_By>;
  favoriteListId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "favoriteCompany" */
export type FavoriteCompany_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: FavoriteCompany_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FavoriteCompany_Stream_Cursor_Value_Input = {
  companyId?: InputMaybe<Scalars['Int']>;
  favoriteListId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type FavoriteCompany_Sum_Fields = {
  __typename?: 'favoriteCompany_sum_fields';
  companyId?: Maybe<Scalars['Int']>;
  favoriteListId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "favoriteCompany" */
export type FavoriteCompany_Sum_Order_By = {
  companyId?: InputMaybe<Order_By>;
  favoriteListId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "favoriteCompany" */
export enum FavoriteCompany_Update_Column {
  /** column name */
  CompanyId = 'companyId',
  /** column name */
  FavoriteListId = 'favoriteListId',
  /** column name */
  Id = 'id',
  /** column name */
  UserEmail = 'userEmail'
}

export type FavoriteCompany_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FavoriteCompany_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FavoriteCompany_Set_Input>;
  /** filter the rows which have to be updated */
  where: FavoriteCompany_Bool_Exp;
};

/** aggregate var_pop on columns */
export type FavoriteCompany_Var_Pop_Fields = {
  __typename?: 'favoriteCompany_var_pop_fields';
  companyId?: Maybe<Scalars['Float']>;
  favoriteListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "favoriteCompany" */
export type FavoriteCompany_Var_Pop_Order_By = {
  companyId?: InputMaybe<Order_By>;
  favoriteListId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type FavoriteCompany_Var_Samp_Fields = {
  __typename?: 'favoriteCompany_var_samp_fields';
  companyId?: Maybe<Scalars['Float']>;
  favoriteListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "favoriteCompany" */
export type FavoriteCompany_Var_Samp_Order_By = {
  companyId?: InputMaybe<Order_By>;
  favoriteListId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type FavoriteCompany_Variance_Fields = {
  __typename?: 'favoriteCompany_variance_fields';
  companyId?: Maybe<Scalars['Float']>;
  favoriteListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "favoriteCompany" */
export type FavoriteCompany_Variance_Order_By = {
  companyId?: InputMaybe<Order_By>;
  favoriteListId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "favoriteList" */
export type FavoriteList = {
  __typename?: 'favoriteList';
  /** An array relationship */
  favoriteCompanies: Array<FavoriteCompany>;
  /** An aggregate relationship */
  favoriteCompanies_aggregate: FavoriteCompany_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
  userEmail: Scalars['String'];
};


/** columns and relationships of "favoriteList" */
export type FavoriteListFavoriteCompaniesArgs = {
  distinct_on?: InputMaybe<Array<FavoriteCompany_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteCompany_Order_By>>;
  where?: InputMaybe<FavoriteCompany_Bool_Exp>;
};


/** columns and relationships of "favoriteList" */
export type FavoriteListFavoriteCompanies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FavoriteCompany_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteCompany_Order_By>>;
  where?: InputMaybe<FavoriteCompany_Bool_Exp>;
};

/** aggregated selection of "favoriteList" */
export type FavoriteList_Aggregate = {
  __typename?: 'favoriteList_aggregate';
  aggregate?: Maybe<FavoriteList_Aggregate_Fields>;
  nodes: Array<FavoriteList>;
};

export type FavoriteList_Aggregate_Bool_Exp = {
  count?: InputMaybe<FavoriteList_Aggregate_Bool_Exp_Count>;
};

export type FavoriteList_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<FavoriteList_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<FavoriteList_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "favoriteList" */
export type FavoriteList_Aggregate_Fields = {
  __typename?: 'favoriteList_aggregate_fields';
  avg?: Maybe<FavoriteList_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<FavoriteList_Max_Fields>;
  min?: Maybe<FavoriteList_Min_Fields>;
  stddev?: Maybe<FavoriteList_Stddev_Fields>;
  stddev_pop?: Maybe<FavoriteList_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<FavoriteList_Stddev_Samp_Fields>;
  sum?: Maybe<FavoriteList_Sum_Fields>;
  var_pop?: Maybe<FavoriteList_Var_Pop_Fields>;
  var_samp?: Maybe<FavoriteList_Var_Samp_Fields>;
  variance?: Maybe<FavoriteList_Variance_Fields>;
};


/** aggregate fields of "favoriteList" */
export type FavoriteList_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<FavoriteList_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "favoriteList" */
export type FavoriteList_Aggregate_Order_By = {
  avg?: InputMaybe<FavoriteList_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<FavoriteList_Max_Order_By>;
  min?: InputMaybe<FavoriteList_Min_Order_By>;
  stddev?: InputMaybe<FavoriteList_Stddev_Order_By>;
  stddev_pop?: InputMaybe<FavoriteList_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<FavoriteList_Stddev_Samp_Order_By>;
  sum?: InputMaybe<FavoriteList_Sum_Order_By>;
  var_pop?: InputMaybe<FavoriteList_Var_Pop_Order_By>;
  var_samp?: InputMaybe<FavoriteList_Var_Samp_Order_By>;
  variance?: InputMaybe<FavoriteList_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "favoriteList" */
export type FavoriteList_Arr_Rel_Insert_Input = {
  data: Array<FavoriteList_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<FavoriteList_On_Conflict>;
};

/** aggregate avg on columns */
export type FavoriteList_Avg_Fields = {
  __typename?: 'favoriteList_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "favoriteList" */
export type FavoriteList_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "favoriteList". All fields are combined with a logical 'AND'. */
export type FavoriteList_Bool_Exp = {
  _and?: InputMaybe<Array<FavoriteList_Bool_Exp>>;
  _not?: InputMaybe<FavoriteList_Bool_Exp>;
  _or?: InputMaybe<Array<FavoriteList_Bool_Exp>>;
  favoriteCompanies?: InputMaybe<FavoriteCompany_Bool_Exp>;
  favoriteCompanies_aggregate?: InputMaybe<FavoriteCompany_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  userEmail?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "favoriteList" */
export enum FavoriteList_Constraint {
  /** unique or primary key constraint on columns "id" */
  FavoriteListPkey = 'favoriteList_pkey'
}

/** input type for incrementing numeric columns in table "favoriteList" */
export type FavoriteList_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "favoriteList" */
export type FavoriteList_Insert_Input = {
  favoriteCompanies?: InputMaybe<FavoriteCompany_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type FavoriteList_Max_Fields = {
  __typename?: 'favoriteList_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  userEmail?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "favoriteList" */
export type FavoriteList_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type FavoriteList_Min_Fields = {
  __typename?: 'favoriteList_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  userEmail?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "favoriteList" */
export type FavoriteList_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "favoriteList" */
export type FavoriteList_Mutation_Response = {
  __typename?: 'favoriteList_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FavoriteList>;
};

/** on_conflict condition type for table "favoriteList" */
export type FavoriteList_On_Conflict = {
  constraint: FavoriteList_Constraint;
  update_columns?: Array<FavoriteList_Update_Column>;
  where?: InputMaybe<FavoriteList_Bool_Exp>;
};

/** Ordering options when selecting data from "favoriteList". */
export type FavoriteList_Order_By = {
  favoriteCompanies_aggregate?: InputMaybe<FavoriteCompany_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** primary key columns input for table: favoriteList */
export type FavoriteList_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "favoriteList" */
export enum FavoriteList_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserEmail = 'userEmail'
}

/** input type for updating data in table "favoriteList" */
export type FavoriteList_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type FavoriteList_Stddev_Fields = {
  __typename?: 'favoriteList_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "favoriteList" */
export type FavoriteList_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type FavoriteList_Stddev_Pop_Fields = {
  __typename?: 'favoriteList_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "favoriteList" */
export type FavoriteList_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type FavoriteList_Stddev_Samp_Fields = {
  __typename?: 'favoriteList_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "favoriteList" */
export type FavoriteList_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "favoriteList" */
export type FavoriteList_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: FavoriteList_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FavoriteList_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type FavoriteList_Sum_Fields = {
  __typename?: 'favoriteList_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "favoriteList" */
export type FavoriteList_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "favoriteList" */
export enum FavoriteList_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserEmail = 'userEmail'
}

export type FavoriteList_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FavoriteList_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FavoriteList_Set_Input>;
  /** filter the rows which have to be updated */
  where: FavoriteList_Bool_Exp;
};

/** aggregate var_pop on columns */
export type FavoriteList_Var_Pop_Fields = {
  __typename?: 'favoriteList_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "favoriteList" */
export type FavoriteList_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type FavoriteList_Var_Samp_Fields = {
  __typename?: 'favoriteList_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "favoriteList" */
export type FavoriteList_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type FavoriteList_Variance_Fields = {
  __typename?: 'favoriteList_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "favoriteList" */
export type FavoriteList_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "filter" */
export type Filter = {
  __typename?: 'filter';
  filterSource: FilterType_Enum;
  filterVariables: Scalars['jsonb'];
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "filter" */
export type FilterFilterVariablesArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "filterType" */
export type FilterType = {
  __typename?: 'filterType';
  type: Scalars['String'];
};

/** aggregated selection of "filterType" */
export type FilterType_Aggregate = {
  __typename?: 'filterType_aggregate';
  aggregate?: Maybe<FilterType_Aggregate_Fields>;
  nodes: Array<FilterType>;
};

/** aggregate fields of "filterType" */
export type FilterType_Aggregate_Fields = {
  __typename?: 'filterType_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<FilterType_Max_Fields>;
  min?: Maybe<FilterType_Min_Fields>;
};


/** aggregate fields of "filterType" */
export type FilterType_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<FilterType_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "filterType". All fields are combined with a logical 'AND'. */
export type FilterType_Bool_Exp = {
  _and?: InputMaybe<Array<FilterType_Bool_Exp>>;
  _not?: InputMaybe<FilterType_Bool_Exp>;
  _or?: InputMaybe<Array<FilterType_Bool_Exp>>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "filterType" */
export enum FilterType_Constraint {
  /** unique or primary key constraint on columns "type" */
  FilterTypePkey = 'filterType_pkey'
}

export enum FilterType_Enum {
  CustomerInput = 'CustomerInput',
  Default = 'Default'
}

/** Boolean expression to compare columns of type "filterType_enum". All fields are combined with logical 'AND'. */
export type FilterType_Enum_Comparison_Exp = {
  _eq?: InputMaybe<FilterType_Enum>;
  _in?: InputMaybe<Array<FilterType_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<FilterType_Enum>;
  _nin?: InputMaybe<Array<FilterType_Enum>>;
};

/** input type for inserting data into table "filterType" */
export type FilterType_Insert_Input = {
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type FilterType_Max_Fields = {
  __typename?: 'filterType_max_fields';
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type FilterType_Min_Fields = {
  __typename?: 'filterType_min_fields';
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "filterType" */
export type FilterType_Mutation_Response = {
  __typename?: 'filterType_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FilterType>;
};

/** on_conflict condition type for table "filterType" */
export type FilterType_On_Conflict = {
  constraint: FilterType_Constraint;
  update_columns?: Array<FilterType_Update_Column>;
  where?: InputMaybe<FilterType_Bool_Exp>;
};

/** Ordering options when selecting data from "filterType". */
export type FilterType_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: filterType */
export type FilterType_Pk_Columns_Input = {
  type: Scalars['String'];
};

/** select columns of table "filterType" */
export enum FilterType_Select_Column {
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "filterType" */
export type FilterType_Set_Input = {
  type?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "filterType" */
export type FilterType_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: FilterType_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FilterType_Stream_Cursor_Value_Input = {
  type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "filterType" */
export enum FilterType_Update_Column {
  /** column name */
  Type = 'type'
}

export type FilterType_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FilterType_Set_Input>;
  /** filter the rows which have to be updated */
  where: FilterType_Bool_Exp;
};

/** aggregated selection of "filter" */
export type Filter_Aggregate = {
  __typename?: 'filter_aggregate';
  aggregate?: Maybe<Filter_Aggregate_Fields>;
  nodes: Array<Filter>;
};

/** aggregate fields of "filter" */
export type Filter_Aggregate_Fields = {
  __typename?: 'filter_aggregate_fields';
  avg?: Maybe<Filter_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Filter_Max_Fields>;
  min?: Maybe<Filter_Min_Fields>;
  stddev?: Maybe<Filter_Stddev_Fields>;
  stddev_pop?: Maybe<Filter_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Filter_Stddev_Samp_Fields>;
  sum?: Maybe<Filter_Sum_Fields>;
  var_pop?: Maybe<Filter_Var_Pop_Fields>;
  var_samp?: Maybe<Filter_Var_Samp_Fields>;
  variance?: Maybe<Filter_Variance_Fields>;
};


/** aggregate fields of "filter" */
export type Filter_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Filter_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Filter_Append_Input = {
  filterVariables?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Filter_Avg_Fields = {
  __typename?: 'filter_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "filter". All fields are combined with a logical 'AND'. */
export type Filter_Bool_Exp = {
  _and?: InputMaybe<Array<Filter_Bool_Exp>>;
  _not?: InputMaybe<Filter_Bool_Exp>;
  _or?: InputMaybe<Array<Filter_Bool_Exp>>;
  filterSource?: InputMaybe<FilterType_Enum_Comparison_Exp>;
  filterVariables?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "filter" */
export enum Filter_Constraint {
  /** unique or primary key constraint on columns "id" */
  FiltersPkey = 'filters_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Filter_Delete_At_Path_Input = {
  filterVariables?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Filter_Delete_Elem_Input = {
  filterVariables?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Filter_Delete_Key_Input = {
  filterVariables?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "filter" */
export type Filter_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "filter" */
export type Filter_Insert_Input = {
  filterSource?: InputMaybe<FilterType_Enum>;
  filterVariables?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Filter_Max_Fields = {
  __typename?: 'filter_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Filter_Min_Fields = {
  __typename?: 'filter_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "filter" */
export type Filter_Mutation_Response = {
  __typename?: 'filter_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Filter>;
};

/** input type for inserting object relation for remote table "filter" */
export type Filter_Obj_Rel_Insert_Input = {
  data: Filter_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Filter_On_Conflict>;
};

/** on_conflict condition type for table "filter" */
export type Filter_On_Conflict = {
  constraint: Filter_Constraint;
  update_columns?: Array<Filter_Update_Column>;
  where?: InputMaybe<Filter_Bool_Exp>;
};

/** Ordering options when selecting data from "filter". */
export type Filter_Order_By = {
  filterSource?: InputMaybe<Order_By>;
  filterVariables?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: filter */
export type Filter_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Filter_Prepend_Input = {
  filterVariables?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "filter" */
export enum Filter_Select_Column {
  /** column name */
  FilterSource = 'filterSource',
  /** column name */
  FilterVariables = 'filterVariables',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "filter" */
export type Filter_Set_Input = {
  filterSource?: InputMaybe<FilterType_Enum>;
  filterVariables?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Filter_Stddev_Fields = {
  __typename?: 'filter_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Filter_Stddev_Pop_Fields = {
  __typename?: 'filter_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Filter_Stddev_Samp_Fields = {
  __typename?: 'filter_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "filter" */
export type Filter_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Filter_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Filter_Stream_Cursor_Value_Input = {
  filterSource?: InputMaybe<FilterType_Enum>;
  filterVariables?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Filter_Sum_Fields = {
  __typename?: 'filter_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "filter" */
export enum Filter_Update_Column {
  /** column name */
  FilterSource = 'filterSource',
  /** column name */
  FilterVariables = 'filterVariables',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Filter_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Filter_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Filter_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Filter_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Filter_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Filter_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Filter_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Filter_Set_Input>;
  /** filter the rows which have to be updated */
  where: Filter_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Filter_Var_Pop_Fields = {
  __typename?: 'filter_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Filter_Var_Samp_Fields = {
  __typename?: 'filter_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Filter_Variance_Fields = {
  __typename?: 'filter_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "marketCapSize" */
export type MarketCapSize = {
  __typename?: 'marketCapSize';
  size: Scalars['String'];
};

/** aggregated selection of "marketCapSize" */
export type MarketCapSize_Aggregate = {
  __typename?: 'marketCapSize_aggregate';
  aggregate?: Maybe<MarketCapSize_Aggregate_Fields>;
  nodes: Array<MarketCapSize>;
};

/** aggregate fields of "marketCapSize" */
export type MarketCapSize_Aggregate_Fields = {
  __typename?: 'marketCapSize_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MarketCapSize_Max_Fields>;
  min?: Maybe<MarketCapSize_Min_Fields>;
};


/** aggregate fields of "marketCapSize" */
export type MarketCapSize_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MarketCapSize_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "marketCapSize". All fields are combined with a logical 'AND'. */
export type MarketCapSize_Bool_Exp = {
  _and?: InputMaybe<Array<MarketCapSize_Bool_Exp>>;
  _not?: InputMaybe<MarketCapSize_Bool_Exp>;
  _or?: InputMaybe<Array<MarketCapSize_Bool_Exp>>;
  size?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "marketCapSize" */
export enum MarketCapSize_Constraint {
  /** unique or primary key constraint on columns "size" */
  MarketCapSizePkey = 'marketCapSize_pkey'
}

export enum MarketCapSize_Enum {
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

/** Boolean expression to compare columns of type "marketCapSize_enum". All fields are combined with logical 'AND'. */
export type MarketCapSize_Enum_Comparison_Exp = {
  _eq?: InputMaybe<MarketCapSize_Enum>;
  _in?: InputMaybe<Array<MarketCapSize_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<MarketCapSize_Enum>;
  _nin?: InputMaybe<Array<MarketCapSize_Enum>>;
};

/** input type for inserting data into table "marketCapSize" */
export type MarketCapSize_Insert_Input = {
  size?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type MarketCapSize_Max_Fields = {
  __typename?: 'marketCapSize_max_fields';
  size?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type MarketCapSize_Min_Fields = {
  __typename?: 'marketCapSize_min_fields';
  size?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "marketCapSize" */
export type MarketCapSize_Mutation_Response = {
  __typename?: 'marketCapSize_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<MarketCapSize>;
};

/** on_conflict condition type for table "marketCapSize" */
export type MarketCapSize_On_Conflict = {
  constraint: MarketCapSize_Constraint;
  update_columns?: Array<MarketCapSize_Update_Column>;
  where?: InputMaybe<MarketCapSize_Bool_Exp>;
};

/** Ordering options when selecting data from "marketCapSize". */
export type MarketCapSize_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** primary key columns input for table: marketCapSize */
export type MarketCapSize_Pk_Columns_Input = {
  size: Scalars['String'];
};

/** select columns of table "marketCapSize" */
export enum MarketCapSize_Select_Column {
  /** column name */
  Size = 'size'
}

/** input type for updating data in table "marketCapSize" */
export type MarketCapSize_Set_Input = {
  size?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "marketCapSize" */
export type MarketCapSize_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MarketCapSize_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MarketCapSize_Stream_Cursor_Value_Input = {
  size?: InputMaybe<Scalars['String']>;
};

/** update columns of table "marketCapSize" */
export enum MarketCapSize_Update_Column {
  /** column name */
  Size = 'size'
}

export type MarketCapSize_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MarketCapSize_Set_Input>;
  /** filter the rows which have to be updated */
  where: MarketCapSize_Bool_Exp;
};

/** columns and relationships of "month" */
export type Month = {
  __typename?: 'month';
  name: Scalars['String'];
};

/** aggregated selection of "month" */
export type Month_Aggregate = {
  __typename?: 'month_aggregate';
  aggregate?: Maybe<Month_Aggregate_Fields>;
  nodes: Array<Month>;
};

/** aggregate fields of "month" */
export type Month_Aggregate_Fields = {
  __typename?: 'month_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Month_Max_Fields>;
  min?: Maybe<Month_Min_Fields>;
};


/** aggregate fields of "month" */
export type Month_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Month_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "month". All fields are combined with a logical 'AND'. */
export type Month_Bool_Exp = {
  _and?: InputMaybe<Array<Month_Bool_Exp>>;
  _not?: InputMaybe<Month_Bool_Exp>;
  _or?: InputMaybe<Array<Month_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "month" */
export enum Month_Constraint {
  /** unique or primary key constraint on columns "name" */
  MonthPkey = 'month_pkey'
}

export enum Month_Enum {
  April = 'april',
  August = 'august',
  December = 'december',
  February = 'february',
  January = 'january',
  July = 'july',
  June = 'june',
  March = 'march',
  May = 'may',
  November = 'november',
  October = 'october',
  September = 'september'
}

/** Boolean expression to compare columns of type "month_enum". All fields are combined with logical 'AND'. */
export type Month_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Month_Enum>;
  _in?: InputMaybe<Array<Month_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Month_Enum>;
  _nin?: InputMaybe<Array<Month_Enum>>;
};

/** input type for inserting data into table "month" */
export type Month_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Month_Max_Fields = {
  __typename?: 'month_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Month_Min_Fields = {
  __typename?: 'month_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "month" */
export type Month_Mutation_Response = {
  __typename?: 'month_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Month>;
};

/** on_conflict condition type for table "month" */
export type Month_On_Conflict = {
  constraint: Month_Constraint;
  update_columns?: Array<Month_Update_Column>;
  where?: InputMaybe<Month_Bool_Exp>;
};

/** Ordering options when selecting data from "month". */
export type Month_Order_By = {
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: month */
export type Month_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "month" */
export enum Month_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "month" */
export type Month_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "month" */
export type Month_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Month_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Month_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "month" */
export enum Month_Update_Column {
  /** column name */
  Name = 'name'
}

export type Month_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Month_Set_Input>;
  /** filter the rows which have to be updated */
  where: Month_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "company" */
  delete_company?: Maybe<Company_Mutation_Response>;
  /** delete single row from the table: "company" */
  delete_company_by_pk?: Maybe<Company>;
  /** delete data from the table: "continentCode" */
  delete_continentCode?: Maybe<ContinentCode_Mutation_Response>;
  /** delete single row from the table: "continentCode" */
  delete_continentCode_by_pk?: Maybe<ContinentCode>;
  /** delete data from the table: "country" */
  delete_country?: Maybe<Country_Mutation_Response>;
  /** delete data from the table: "countryCode" */
  delete_countryCode?: Maybe<CountryCode_Mutation_Response>;
  /** delete single row from the table: "countryCode" */
  delete_countryCode_by_pk?: Maybe<CountryCode>;
  /** delete single row from the table: "country" */
  delete_country_by_pk?: Maybe<Country>;
  /** delete data from the table: "documents" */
  delete_documents?: Maybe<Documents_Mutation_Response>;
  /** delete single row from the table: "documents" */
  delete_documents_by_pk?: Maybe<Documents>;
  /** delete data from the table: "etf" */
  delete_etf?: Maybe<Etf_Mutation_Response>;
  /** delete data from the table: "etfType" */
  delete_etfType?: Maybe<EtfType_Mutation_Response>;
  /** delete single row from the table: "etfType" */
  delete_etfType_by_pk?: Maybe<EtfType>;
  /** delete single row from the table: "etf" */
  delete_etf_by_pk?: Maybe<Etf>;
  /** delete data from the table: "favoriteCompany" */
  delete_favoriteCompany?: Maybe<FavoriteCompany_Mutation_Response>;
  /** delete single row from the table: "favoriteCompany" */
  delete_favoriteCompany_by_pk?: Maybe<FavoriteCompany>;
  /** delete data from the table: "favoriteList" */
  delete_favoriteList?: Maybe<FavoriteList_Mutation_Response>;
  /** delete single row from the table: "favoriteList" */
  delete_favoriteList_by_pk?: Maybe<FavoriteList>;
  /** delete data from the table: "filter" */
  delete_filter?: Maybe<Filter_Mutation_Response>;
  /** delete data from the table: "filterType" */
  delete_filterType?: Maybe<FilterType_Mutation_Response>;
  /** delete single row from the table: "filterType" */
  delete_filterType_by_pk?: Maybe<FilterType>;
  /** delete single row from the table: "filter" */
  delete_filter_by_pk?: Maybe<Filter>;
  /** delete data from the table: "marketCapSize" */
  delete_marketCapSize?: Maybe<MarketCapSize_Mutation_Response>;
  /** delete single row from the table: "marketCapSize" */
  delete_marketCapSize_by_pk?: Maybe<MarketCapSize>;
  /** delete data from the table: "month" */
  delete_month?: Maybe<Month_Mutation_Response>;
  /** delete single row from the table: "month" */
  delete_month_by_pk?: Maybe<Month>;
  /** delete data from the table: "paymentMethod" */
  delete_paymentMethod?: Maybe<PaymentMethod_Mutation_Response>;
  /** delete single row from the table: "paymentMethod" */
  delete_paymentMethod_by_pk?: Maybe<PaymentMethod>;
  /** delete data from the table: "portfolio" */
  delete_portfolio?: Maybe<Portfolio_Mutation_Response>;
  /** delete data from the table: "portfolioAllocation" */
  delete_portfolioAllocation?: Maybe<PortfolioAllocation_Mutation_Response>;
  /** delete single row from the table: "portfolioAllocation" */
  delete_portfolioAllocation_by_pk?: Maybe<PortfolioAllocation>;
  /** delete single row from the table: "portfolio" */
  delete_portfolio_by_pk?: Maybe<Portfolio>;
  /** delete data from the table: "presentation" */
  delete_presentation?: Maybe<Presentation_Mutation_Response>;
  /** delete single row from the table: "presentation" */
  delete_presentation_by_pk?: Maybe<Presentation>;
  /** delete data from the table: "prompted_document" */
  delete_prompted_document?: Maybe<Prompted_Document_Mutation_Response>;
  /** delete single row from the table: "prompted_document" */
  delete_prompted_document_by_pk?: Maybe<Prompted_Document>;
  /** delete data from the table: "prompts" */
  delete_prompts?: Maybe<Prompts_Mutation_Response>;
  /** delete single row from the table: "prompts" */
  delete_prompts_by_pk?: Maybe<Prompts>;
  /** delete data from the table: "role" */
  delete_role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "role" */
  delete_role_by_pk?: Maybe<Role>;
  /** delete data from the table: "savedFilter" */
  delete_savedFilter?: Maybe<SavedFilter_Mutation_Response>;
  /** delete single row from the table: "savedFilter" */
  delete_savedFilter_by_pk?: Maybe<SavedFilter>;
  /** delete data from the table: "sheet" */
  delete_sheet?: Maybe<Sheet_Mutation_Response>;
  /** delete single row from the table: "sheet" */
  delete_sheet_by_pk?: Maybe<Sheet>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "company" */
  insert_company?: Maybe<Company_Mutation_Response>;
  /** insert a single row into the table: "company" */
  insert_company_one?: Maybe<Company>;
  /** insert data into the table: "continentCode" */
  insert_continentCode?: Maybe<ContinentCode_Mutation_Response>;
  /** insert a single row into the table: "continentCode" */
  insert_continentCode_one?: Maybe<ContinentCode>;
  /** insert data into the table: "country" */
  insert_country?: Maybe<Country_Mutation_Response>;
  /** insert data into the table: "countryCode" */
  insert_countryCode?: Maybe<CountryCode_Mutation_Response>;
  /** insert a single row into the table: "countryCode" */
  insert_countryCode_one?: Maybe<CountryCode>;
  /** insert a single row into the table: "country" */
  insert_country_one?: Maybe<Country>;
  /** insert data into the table: "documents" */
  insert_documents?: Maybe<Documents_Mutation_Response>;
  /** insert a single row into the table: "documents" */
  insert_documents_one?: Maybe<Documents>;
  /** insert data into the table: "etf" */
  insert_etf?: Maybe<Etf_Mutation_Response>;
  /** insert data into the table: "etfType" */
  insert_etfType?: Maybe<EtfType_Mutation_Response>;
  /** insert a single row into the table: "etfType" */
  insert_etfType_one?: Maybe<EtfType>;
  /** insert a single row into the table: "etf" */
  insert_etf_one?: Maybe<Etf>;
  /** insert data into the table: "favoriteCompany" */
  insert_favoriteCompany?: Maybe<FavoriteCompany_Mutation_Response>;
  /** insert a single row into the table: "favoriteCompany" */
  insert_favoriteCompany_one?: Maybe<FavoriteCompany>;
  /** insert data into the table: "favoriteList" */
  insert_favoriteList?: Maybe<FavoriteList_Mutation_Response>;
  /** insert a single row into the table: "favoriteList" */
  insert_favoriteList_one?: Maybe<FavoriteList>;
  /** insert data into the table: "filter" */
  insert_filter?: Maybe<Filter_Mutation_Response>;
  /** insert data into the table: "filterType" */
  insert_filterType?: Maybe<FilterType_Mutation_Response>;
  /** insert a single row into the table: "filterType" */
  insert_filterType_one?: Maybe<FilterType>;
  /** insert a single row into the table: "filter" */
  insert_filter_one?: Maybe<Filter>;
  /** insert data into the table: "marketCapSize" */
  insert_marketCapSize?: Maybe<MarketCapSize_Mutation_Response>;
  /** insert a single row into the table: "marketCapSize" */
  insert_marketCapSize_one?: Maybe<MarketCapSize>;
  /** insert data into the table: "month" */
  insert_month?: Maybe<Month_Mutation_Response>;
  /** insert a single row into the table: "month" */
  insert_month_one?: Maybe<Month>;
  /** insert data into the table: "paymentMethod" */
  insert_paymentMethod?: Maybe<PaymentMethod_Mutation_Response>;
  /** insert a single row into the table: "paymentMethod" */
  insert_paymentMethod_one?: Maybe<PaymentMethod>;
  /** insert data into the table: "portfolio" */
  insert_portfolio?: Maybe<Portfolio_Mutation_Response>;
  /** insert data into the table: "portfolioAllocation" */
  insert_portfolioAllocation?: Maybe<PortfolioAllocation_Mutation_Response>;
  /** insert a single row into the table: "portfolioAllocation" */
  insert_portfolioAllocation_one?: Maybe<PortfolioAllocation>;
  /** insert a single row into the table: "portfolio" */
  insert_portfolio_one?: Maybe<Portfolio>;
  /** insert data into the table: "presentation" */
  insert_presentation?: Maybe<Presentation_Mutation_Response>;
  /** insert a single row into the table: "presentation" */
  insert_presentation_one?: Maybe<Presentation>;
  /** insert data into the table: "prompted_document" */
  insert_prompted_document?: Maybe<Prompted_Document_Mutation_Response>;
  /** insert a single row into the table: "prompted_document" */
  insert_prompted_document_one?: Maybe<Prompted_Document>;
  /** insert data into the table: "prompts" */
  insert_prompts?: Maybe<Prompts_Mutation_Response>;
  /** insert a single row into the table: "prompts" */
  insert_prompts_one?: Maybe<Prompts>;
  /** insert data into the table: "role" */
  insert_role?: Maybe<Role_Mutation_Response>;
  /** insert a single row into the table: "role" */
  insert_role_one?: Maybe<Role>;
  /** insert data into the table: "savedFilter" */
  insert_savedFilter?: Maybe<SavedFilter_Mutation_Response>;
  /** insert a single row into the table: "savedFilter" */
  insert_savedFilter_one?: Maybe<SavedFilter>;
  /** insert data into the table: "sheet" */
  insert_sheet?: Maybe<Sheet_Mutation_Response>;
  /** insert a single row into the table: "sheet" */
  insert_sheet_one?: Maybe<Sheet>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "company" */
  update_company?: Maybe<Company_Mutation_Response>;
  /** update single row of the table: "company" */
  update_company_by_pk?: Maybe<Company>;
  /** update multiples rows of table: "company" */
  update_company_many?: Maybe<Array<Maybe<Company_Mutation_Response>>>;
  /** update data of the table: "continentCode" */
  update_continentCode?: Maybe<ContinentCode_Mutation_Response>;
  /** update single row of the table: "continentCode" */
  update_continentCode_by_pk?: Maybe<ContinentCode>;
  /** update multiples rows of table: "continentCode" */
  update_continentCode_many?: Maybe<Array<Maybe<ContinentCode_Mutation_Response>>>;
  /** update data of the table: "country" */
  update_country?: Maybe<Country_Mutation_Response>;
  /** update data of the table: "countryCode" */
  update_countryCode?: Maybe<CountryCode_Mutation_Response>;
  /** update single row of the table: "countryCode" */
  update_countryCode_by_pk?: Maybe<CountryCode>;
  /** update multiples rows of table: "countryCode" */
  update_countryCode_many?: Maybe<Array<Maybe<CountryCode_Mutation_Response>>>;
  /** update single row of the table: "country" */
  update_country_by_pk?: Maybe<Country>;
  /** update multiples rows of table: "country" */
  update_country_many?: Maybe<Array<Maybe<Country_Mutation_Response>>>;
  /** update data of the table: "documents" */
  update_documents?: Maybe<Documents_Mutation_Response>;
  /** update single row of the table: "documents" */
  update_documents_by_pk?: Maybe<Documents>;
  /** update multiples rows of table: "documents" */
  update_documents_many?: Maybe<Array<Maybe<Documents_Mutation_Response>>>;
  /** update data of the table: "etf" */
  update_etf?: Maybe<Etf_Mutation_Response>;
  /** update data of the table: "etfType" */
  update_etfType?: Maybe<EtfType_Mutation_Response>;
  /** update single row of the table: "etfType" */
  update_etfType_by_pk?: Maybe<EtfType>;
  /** update multiples rows of table: "etfType" */
  update_etfType_many?: Maybe<Array<Maybe<EtfType_Mutation_Response>>>;
  /** update single row of the table: "etf" */
  update_etf_by_pk?: Maybe<Etf>;
  /** update multiples rows of table: "etf" */
  update_etf_many?: Maybe<Array<Maybe<Etf_Mutation_Response>>>;
  /** update data of the table: "favoriteCompany" */
  update_favoriteCompany?: Maybe<FavoriteCompany_Mutation_Response>;
  /** update single row of the table: "favoriteCompany" */
  update_favoriteCompany_by_pk?: Maybe<FavoriteCompany>;
  /** update multiples rows of table: "favoriteCompany" */
  update_favoriteCompany_many?: Maybe<Array<Maybe<FavoriteCompany_Mutation_Response>>>;
  /** update data of the table: "favoriteList" */
  update_favoriteList?: Maybe<FavoriteList_Mutation_Response>;
  /** update single row of the table: "favoriteList" */
  update_favoriteList_by_pk?: Maybe<FavoriteList>;
  /** update multiples rows of table: "favoriteList" */
  update_favoriteList_many?: Maybe<Array<Maybe<FavoriteList_Mutation_Response>>>;
  /** update data of the table: "filter" */
  update_filter?: Maybe<Filter_Mutation_Response>;
  /** update data of the table: "filterType" */
  update_filterType?: Maybe<FilterType_Mutation_Response>;
  /** update single row of the table: "filterType" */
  update_filterType_by_pk?: Maybe<FilterType>;
  /** update multiples rows of table: "filterType" */
  update_filterType_many?: Maybe<Array<Maybe<FilterType_Mutation_Response>>>;
  /** update single row of the table: "filter" */
  update_filter_by_pk?: Maybe<Filter>;
  /** update multiples rows of table: "filter" */
  update_filter_many?: Maybe<Array<Maybe<Filter_Mutation_Response>>>;
  /** update data of the table: "marketCapSize" */
  update_marketCapSize?: Maybe<MarketCapSize_Mutation_Response>;
  /** update single row of the table: "marketCapSize" */
  update_marketCapSize_by_pk?: Maybe<MarketCapSize>;
  /** update multiples rows of table: "marketCapSize" */
  update_marketCapSize_many?: Maybe<Array<Maybe<MarketCapSize_Mutation_Response>>>;
  /** update data of the table: "month" */
  update_month?: Maybe<Month_Mutation_Response>;
  /** update single row of the table: "month" */
  update_month_by_pk?: Maybe<Month>;
  /** update multiples rows of table: "month" */
  update_month_many?: Maybe<Array<Maybe<Month_Mutation_Response>>>;
  /** update data of the table: "paymentMethod" */
  update_paymentMethod?: Maybe<PaymentMethod_Mutation_Response>;
  /** update single row of the table: "paymentMethod" */
  update_paymentMethod_by_pk?: Maybe<PaymentMethod>;
  /** update multiples rows of table: "paymentMethod" */
  update_paymentMethod_many?: Maybe<Array<Maybe<PaymentMethod_Mutation_Response>>>;
  /** update data of the table: "portfolio" */
  update_portfolio?: Maybe<Portfolio_Mutation_Response>;
  /** update data of the table: "portfolioAllocation" */
  update_portfolioAllocation?: Maybe<PortfolioAllocation_Mutation_Response>;
  /** update single row of the table: "portfolioAllocation" */
  update_portfolioAllocation_by_pk?: Maybe<PortfolioAllocation>;
  /** update multiples rows of table: "portfolioAllocation" */
  update_portfolioAllocation_many?: Maybe<Array<Maybe<PortfolioAllocation_Mutation_Response>>>;
  /** update single row of the table: "portfolio" */
  update_portfolio_by_pk?: Maybe<Portfolio>;
  /** update multiples rows of table: "portfolio" */
  update_portfolio_many?: Maybe<Array<Maybe<Portfolio_Mutation_Response>>>;
  /** update data of the table: "presentation" */
  update_presentation?: Maybe<Presentation_Mutation_Response>;
  /** update single row of the table: "presentation" */
  update_presentation_by_pk?: Maybe<Presentation>;
  /** update multiples rows of table: "presentation" */
  update_presentation_many?: Maybe<Array<Maybe<Presentation_Mutation_Response>>>;
  /** update data of the table: "prompted_document" */
  update_prompted_document?: Maybe<Prompted_Document_Mutation_Response>;
  /** update single row of the table: "prompted_document" */
  update_prompted_document_by_pk?: Maybe<Prompted_Document>;
  /** update multiples rows of table: "prompted_document" */
  update_prompted_document_many?: Maybe<Array<Maybe<Prompted_Document_Mutation_Response>>>;
  /** update data of the table: "prompts" */
  update_prompts?: Maybe<Prompts_Mutation_Response>;
  /** update single row of the table: "prompts" */
  update_prompts_by_pk?: Maybe<Prompts>;
  /** update multiples rows of table: "prompts" */
  update_prompts_many?: Maybe<Array<Maybe<Prompts_Mutation_Response>>>;
  /** update data of the table: "role" */
  update_role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "role" */
  update_role_by_pk?: Maybe<Role>;
  /** update multiples rows of table: "role" */
  update_role_many?: Maybe<Array<Maybe<Role_Mutation_Response>>>;
  /** update data of the table: "savedFilter" */
  update_savedFilter?: Maybe<SavedFilter_Mutation_Response>;
  /** update single row of the table: "savedFilter" */
  update_savedFilter_by_pk?: Maybe<SavedFilter>;
  /** update multiples rows of table: "savedFilter" */
  update_savedFilter_many?: Maybe<Array<Maybe<SavedFilter_Mutation_Response>>>;
  /** update data of the table: "sheet" */
  update_sheet?: Maybe<Sheet_Mutation_Response>;
  /** update single row of the table: "sheet" */
  update_sheet_by_pk?: Maybe<Sheet>;
  /** update multiples rows of table: "sheet" */
  update_sheet_many?: Maybe<Array<Maybe<Sheet_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CompanyArgs = {
  where: Company_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Company_By_PkArgs = {
  id: Scalars['Int'];
  ticker: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ContinentCodeArgs = {
  where: ContinentCode_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ContinentCode_By_PkArgs = {
  code: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CountryArgs = {
  where: Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CountryCodeArgs = {
  where: CountryCode_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CountryCode_By_PkArgs = {
  code: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Country_By_PkArgs = {
  countryCode: CountryCode_Enum;
};


/** mutation root */
export type Mutation_RootDelete_DocumentsArgs = {
  where: Documents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Documents_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_EtfArgs = {
  where: Etf_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_EtfTypeArgs = {
  where: EtfType_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_EtfType_By_PkArgs = {
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Etf_By_PkArgs = {
  ticker: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_FavoriteCompanyArgs = {
  where: FavoriteCompany_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_FavoriteCompany_By_PkArgs = {
  companyId: Scalars['Int'];
  favoriteListId: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_FavoriteListArgs = {
  where: FavoriteList_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_FavoriteList_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_FilterArgs = {
  where: Filter_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_FilterTypeArgs = {
  where: FilterType_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_FilterType_By_PkArgs = {
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Filter_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_MarketCapSizeArgs = {
  where: MarketCapSize_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_MarketCapSize_By_PkArgs = {
  size: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_MonthArgs = {
  where: Month_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Month_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_PaymentMethodArgs = {
  where: PaymentMethod_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_PaymentMethod_By_PkArgs = {
  userEmail: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_PortfolioArgs = {
  where: Portfolio_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_PortfolioAllocationArgs = {
  where: PortfolioAllocation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_PortfolioAllocation_By_PkArgs = {
  companyId: Scalars['Int'];
  portfolioId: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Portfolio_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PresentationArgs = {
  where: Presentation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Presentation_By_PkArgs = {
  companyId: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Prompted_DocumentArgs = {
  where: Prompted_Document_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Prompted_Document_By_PkArgs = {
  document_id: Scalars['uuid'];
  prompt_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PromptsArgs = {
  where: Prompts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Prompts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_SavedFilterArgs = {
  where: SavedFilter_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_SavedFilter_By_PkArgs = {
  filterId: Scalars['Int'];
  userEmail: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_SheetArgs = {
  where: Sheet_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sheet_By_PkArgs = {
  companyId: Scalars['Int'];
  year: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  email: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_CompanyArgs = {
  objects: Array<Company_Insert_Input>;
  on_conflict?: InputMaybe<Company_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_OneArgs = {
  object: Company_Insert_Input;
  on_conflict?: InputMaybe<Company_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ContinentCodeArgs = {
  objects: Array<ContinentCode_Insert_Input>;
  on_conflict?: InputMaybe<ContinentCode_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ContinentCode_OneArgs = {
  object: ContinentCode_Insert_Input;
  on_conflict?: InputMaybe<ContinentCode_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CountryArgs = {
  objects: Array<Country_Insert_Input>;
  on_conflict?: InputMaybe<Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CountryCodeArgs = {
  objects: Array<CountryCode_Insert_Input>;
  on_conflict?: InputMaybe<CountryCode_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CountryCode_OneArgs = {
  object: CountryCode_Insert_Input;
  on_conflict?: InputMaybe<CountryCode_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Country_OneArgs = {
  object: Country_Insert_Input;
  on_conflict?: InputMaybe<Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DocumentsArgs = {
  objects: Array<Documents_Insert_Input>;
  on_conflict?: InputMaybe<Documents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Documents_OneArgs = {
  object: Documents_Insert_Input;
  on_conflict?: InputMaybe<Documents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EtfArgs = {
  objects: Array<Etf_Insert_Input>;
  on_conflict?: InputMaybe<Etf_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EtfTypeArgs = {
  objects: Array<EtfType_Insert_Input>;
  on_conflict?: InputMaybe<EtfType_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EtfType_OneArgs = {
  object: EtfType_Insert_Input;
  on_conflict?: InputMaybe<EtfType_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Etf_OneArgs = {
  object: Etf_Insert_Input;
  on_conflict?: InputMaybe<Etf_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FavoriteCompanyArgs = {
  objects: Array<FavoriteCompany_Insert_Input>;
  on_conflict?: InputMaybe<FavoriteCompany_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FavoriteCompany_OneArgs = {
  object: FavoriteCompany_Insert_Input;
  on_conflict?: InputMaybe<FavoriteCompany_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FavoriteListArgs = {
  objects: Array<FavoriteList_Insert_Input>;
  on_conflict?: InputMaybe<FavoriteList_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FavoriteList_OneArgs = {
  object: FavoriteList_Insert_Input;
  on_conflict?: InputMaybe<FavoriteList_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FilterArgs = {
  objects: Array<Filter_Insert_Input>;
  on_conflict?: InputMaybe<Filter_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FilterTypeArgs = {
  objects: Array<FilterType_Insert_Input>;
  on_conflict?: InputMaybe<FilterType_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FilterType_OneArgs = {
  object: FilterType_Insert_Input;
  on_conflict?: InputMaybe<FilterType_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Filter_OneArgs = {
  object: Filter_Insert_Input;
  on_conflict?: InputMaybe<Filter_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MarketCapSizeArgs = {
  objects: Array<MarketCapSize_Insert_Input>;
  on_conflict?: InputMaybe<MarketCapSize_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MarketCapSize_OneArgs = {
  object: MarketCapSize_Insert_Input;
  on_conflict?: InputMaybe<MarketCapSize_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MonthArgs = {
  objects: Array<Month_Insert_Input>;
  on_conflict?: InputMaybe<Month_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Month_OneArgs = {
  object: Month_Insert_Input;
  on_conflict?: InputMaybe<Month_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PaymentMethodArgs = {
  objects: Array<PaymentMethod_Insert_Input>;
  on_conflict?: InputMaybe<PaymentMethod_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PaymentMethod_OneArgs = {
  object: PaymentMethod_Insert_Input;
  on_conflict?: InputMaybe<PaymentMethod_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PortfolioArgs = {
  objects: Array<Portfolio_Insert_Input>;
  on_conflict?: InputMaybe<Portfolio_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PortfolioAllocationArgs = {
  objects: Array<PortfolioAllocation_Insert_Input>;
  on_conflict?: InputMaybe<PortfolioAllocation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PortfolioAllocation_OneArgs = {
  object: PortfolioAllocation_Insert_Input;
  on_conflict?: InputMaybe<PortfolioAllocation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Portfolio_OneArgs = {
  object: Portfolio_Insert_Input;
  on_conflict?: InputMaybe<Portfolio_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PresentationArgs = {
  objects: Array<Presentation_Insert_Input>;
  on_conflict?: InputMaybe<Presentation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Presentation_OneArgs = {
  object: Presentation_Insert_Input;
  on_conflict?: InputMaybe<Presentation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Prompted_DocumentArgs = {
  objects: Array<Prompted_Document_Insert_Input>;
  on_conflict?: InputMaybe<Prompted_Document_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Prompted_Document_OneArgs = {
  object: Prompted_Document_Insert_Input;
  on_conflict?: InputMaybe<Prompted_Document_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PromptsArgs = {
  objects: Array<Prompts_Insert_Input>;
  on_conflict?: InputMaybe<Prompts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Prompts_OneArgs = {
  object: Prompts_Insert_Input;
  on_conflict?: InputMaybe<Prompts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SavedFilterArgs = {
  objects: Array<SavedFilter_Insert_Input>;
  on_conflict?: InputMaybe<SavedFilter_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SavedFilter_OneArgs = {
  object: SavedFilter_Insert_Input;
  on_conflict?: InputMaybe<SavedFilter_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SheetArgs = {
  objects: Array<Sheet_Insert_Input>;
  on_conflict?: InputMaybe<Sheet_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sheet_OneArgs = {
  object: Sheet_Insert_Input;
  on_conflict?: InputMaybe<Sheet_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CompanyArgs = {
  _inc?: InputMaybe<Company_Inc_Input>;
  _set?: InputMaybe<Company_Set_Input>;
  where: Company_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Company_By_PkArgs = {
  _inc?: InputMaybe<Company_Inc_Input>;
  _set?: InputMaybe<Company_Set_Input>;
  pk_columns: Company_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Company_ManyArgs = {
  updates: Array<Company_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ContinentCodeArgs = {
  _set?: InputMaybe<ContinentCode_Set_Input>;
  where: ContinentCode_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ContinentCode_By_PkArgs = {
  _set?: InputMaybe<ContinentCode_Set_Input>;
  pk_columns: ContinentCode_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ContinentCode_ManyArgs = {
  updates: Array<ContinentCode_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CountryArgs = {
  _set?: InputMaybe<Country_Set_Input>;
  where: Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CountryCodeArgs = {
  _set?: InputMaybe<CountryCode_Set_Input>;
  where: CountryCode_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CountryCode_By_PkArgs = {
  _set?: InputMaybe<CountryCode_Set_Input>;
  pk_columns: CountryCode_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CountryCode_ManyArgs = {
  updates: Array<CountryCode_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Country_By_PkArgs = {
  _set?: InputMaybe<Country_Set_Input>;
  pk_columns: Country_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Country_ManyArgs = {
  updates: Array<Country_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DocumentsArgs = {
  _inc?: InputMaybe<Documents_Inc_Input>;
  _set?: InputMaybe<Documents_Set_Input>;
  where: Documents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Documents_By_PkArgs = {
  _inc?: InputMaybe<Documents_Inc_Input>;
  _set?: InputMaybe<Documents_Set_Input>;
  pk_columns: Documents_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Documents_ManyArgs = {
  updates: Array<Documents_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_EtfArgs = {
  _set?: InputMaybe<Etf_Set_Input>;
  where: Etf_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_EtfTypeArgs = {
  _set?: InputMaybe<EtfType_Set_Input>;
  where: EtfType_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_EtfType_By_PkArgs = {
  _set?: InputMaybe<EtfType_Set_Input>;
  pk_columns: EtfType_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EtfType_ManyArgs = {
  updates: Array<EtfType_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Etf_By_PkArgs = {
  _set?: InputMaybe<Etf_Set_Input>;
  pk_columns: Etf_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Etf_ManyArgs = {
  updates: Array<Etf_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FavoriteCompanyArgs = {
  _inc?: InputMaybe<FavoriteCompany_Inc_Input>;
  _set?: InputMaybe<FavoriteCompany_Set_Input>;
  where: FavoriteCompany_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_FavoriteCompany_By_PkArgs = {
  _inc?: InputMaybe<FavoriteCompany_Inc_Input>;
  _set?: InputMaybe<FavoriteCompany_Set_Input>;
  pk_columns: FavoriteCompany_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FavoriteCompany_ManyArgs = {
  updates: Array<FavoriteCompany_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FavoriteListArgs = {
  _inc?: InputMaybe<FavoriteList_Inc_Input>;
  _set?: InputMaybe<FavoriteList_Set_Input>;
  where: FavoriteList_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_FavoriteList_By_PkArgs = {
  _inc?: InputMaybe<FavoriteList_Inc_Input>;
  _set?: InputMaybe<FavoriteList_Set_Input>;
  pk_columns: FavoriteList_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FavoriteList_ManyArgs = {
  updates: Array<FavoriteList_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FilterArgs = {
  _append?: InputMaybe<Filter_Append_Input>;
  _delete_at_path?: InputMaybe<Filter_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Filter_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Filter_Delete_Key_Input>;
  _inc?: InputMaybe<Filter_Inc_Input>;
  _prepend?: InputMaybe<Filter_Prepend_Input>;
  _set?: InputMaybe<Filter_Set_Input>;
  where: Filter_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_FilterTypeArgs = {
  _set?: InputMaybe<FilterType_Set_Input>;
  where: FilterType_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_FilterType_By_PkArgs = {
  _set?: InputMaybe<FilterType_Set_Input>;
  pk_columns: FilterType_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FilterType_ManyArgs = {
  updates: Array<FilterType_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Filter_By_PkArgs = {
  _append?: InputMaybe<Filter_Append_Input>;
  _delete_at_path?: InputMaybe<Filter_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Filter_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Filter_Delete_Key_Input>;
  _inc?: InputMaybe<Filter_Inc_Input>;
  _prepend?: InputMaybe<Filter_Prepend_Input>;
  _set?: InputMaybe<Filter_Set_Input>;
  pk_columns: Filter_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Filter_ManyArgs = {
  updates: Array<Filter_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MarketCapSizeArgs = {
  _set?: InputMaybe<MarketCapSize_Set_Input>;
  where: MarketCapSize_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_MarketCapSize_By_PkArgs = {
  _set?: InputMaybe<MarketCapSize_Set_Input>;
  pk_columns: MarketCapSize_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MarketCapSize_ManyArgs = {
  updates: Array<MarketCapSize_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MonthArgs = {
  _set?: InputMaybe<Month_Set_Input>;
  where: Month_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Month_By_PkArgs = {
  _set?: InputMaybe<Month_Set_Input>;
  pk_columns: Month_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Month_ManyArgs = {
  updates: Array<Month_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PaymentMethodArgs = {
  _set?: InputMaybe<PaymentMethod_Set_Input>;
  where: PaymentMethod_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_PaymentMethod_By_PkArgs = {
  _set?: InputMaybe<PaymentMethod_Set_Input>;
  pk_columns: PaymentMethod_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PaymentMethod_ManyArgs = {
  updates: Array<PaymentMethod_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PortfolioArgs = {
  _inc?: InputMaybe<Portfolio_Inc_Input>;
  _set?: InputMaybe<Portfolio_Set_Input>;
  where: Portfolio_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_PortfolioAllocationArgs = {
  _inc?: InputMaybe<PortfolioAllocation_Inc_Input>;
  _set?: InputMaybe<PortfolioAllocation_Set_Input>;
  where: PortfolioAllocation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_PortfolioAllocation_By_PkArgs = {
  _inc?: InputMaybe<PortfolioAllocation_Inc_Input>;
  _set?: InputMaybe<PortfolioAllocation_Set_Input>;
  pk_columns: PortfolioAllocation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PortfolioAllocation_ManyArgs = {
  updates: Array<PortfolioAllocation_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Portfolio_By_PkArgs = {
  _inc?: InputMaybe<Portfolio_Inc_Input>;
  _set?: InputMaybe<Portfolio_Set_Input>;
  pk_columns: Portfolio_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Portfolio_ManyArgs = {
  updates: Array<Portfolio_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PresentationArgs = {
  _inc?: InputMaybe<Presentation_Inc_Input>;
  _set?: InputMaybe<Presentation_Set_Input>;
  where: Presentation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Presentation_By_PkArgs = {
  _inc?: InputMaybe<Presentation_Inc_Input>;
  _set?: InputMaybe<Presentation_Set_Input>;
  pk_columns: Presentation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Presentation_ManyArgs = {
  updates: Array<Presentation_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Prompted_DocumentArgs = {
  _set?: InputMaybe<Prompted_Document_Set_Input>;
  where: Prompted_Document_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Prompted_Document_By_PkArgs = {
  _set?: InputMaybe<Prompted_Document_Set_Input>;
  pk_columns: Prompted_Document_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Prompted_Document_ManyArgs = {
  updates: Array<Prompted_Document_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PromptsArgs = {
  _inc?: InputMaybe<Prompts_Inc_Input>;
  _set?: InputMaybe<Prompts_Set_Input>;
  where: Prompts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Prompts_By_PkArgs = {
  _inc?: InputMaybe<Prompts_Inc_Input>;
  _set?: InputMaybe<Prompts_Set_Input>;
  pk_columns: Prompts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Prompts_ManyArgs = {
  updates: Array<Prompts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _set?: InputMaybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _set?: InputMaybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_ManyArgs = {
  updates: Array<Role_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SavedFilterArgs = {
  _inc?: InputMaybe<SavedFilter_Inc_Input>;
  _set?: InputMaybe<SavedFilter_Set_Input>;
  where: SavedFilter_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_SavedFilter_By_PkArgs = {
  _inc?: InputMaybe<SavedFilter_Inc_Input>;
  _set?: InputMaybe<SavedFilter_Set_Input>;
  pk_columns: SavedFilter_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SavedFilter_ManyArgs = {
  updates: Array<SavedFilter_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SheetArgs = {
  _inc?: InputMaybe<Sheet_Inc_Input>;
  _set?: InputMaybe<Sheet_Set_Input>;
  where: Sheet_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sheet_By_PkArgs = {
  _inc?: InputMaybe<Sheet_Inc_Input>;
  _set?: InputMaybe<Sheet_Set_Input>;
  pk_columns: Sheet_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sheet_ManyArgs = {
  updates: Array<Sheet_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "paymentMethod" */
export type PaymentMethod = {
  __typename?: 'paymentMethod';
  expirationDate: Scalars['String'];
  last4Digits: Scalars['String'];
  ownerName?: Maybe<Scalars['String']>;
  userEmail: Scalars['String'];
};

/** aggregated selection of "paymentMethod" */
export type PaymentMethod_Aggregate = {
  __typename?: 'paymentMethod_aggregate';
  aggregate?: Maybe<PaymentMethod_Aggregate_Fields>;
  nodes: Array<PaymentMethod>;
};

/** aggregate fields of "paymentMethod" */
export type PaymentMethod_Aggregate_Fields = {
  __typename?: 'paymentMethod_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<PaymentMethod_Max_Fields>;
  min?: Maybe<PaymentMethod_Min_Fields>;
};


/** aggregate fields of "paymentMethod" */
export type PaymentMethod_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<PaymentMethod_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "paymentMethod". All fields are combined with a logical 'AND'. */
export type PaymentMethod_Bool_Exp = {
  _and?: InputMaybe<Array<PaymentMethod_Bool_Exp>>;
  _not?: InputMaybe<PaymentMethod_Bool_Exp>;
  _or?: InputMaybe<Array<PaymentMethod_Bool_Exp>>;
  expirationDate?: InputMaybe<String_Comparison_Exp>;
  last4Digits?: InputMaybe<String_Comparison_Exp>;
  ownerName?: InputMaybe<String_Comparison_Exp>;
  userEmail?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "paymentMethod" */
export enum PaymentMethod_Constraint {
  /** unique or primary key constraint on columns "userEmail" */
  PaymentMethodPkey = 'paymentMethod_pkey',
  /** unique or primary key constraint on columns "userEmail" */
  PaymentMethodUserEmailKey = 'paymentMethod_userEmail_key'
}

/** input type for inserting data into table "paymentMethod" */
export type PaymentMethod_Insert_Input = {
  expirationDate?: InputMaybe<Scalars['String']>;
  last4Digits?: InputMaybe<Scalars['String']>;
  ownerName?: InputMaybe<Scalars['String']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PaymentMethod_Max_Fields = {
  __typename?: 'paymentMethod_max_fields';
  expirationDate?: Maybe<Scalars['String']>;
  last4Digits?: Maybe<Scalars['String']>;
  ownerName?: Maybe<Scalars['String']>;
  userEmail?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type PaymentMethod_Min_Fields = {
  __typename?: 'paymentMethod_min_fields';
  expirationDate?: Maybe<Scalars['String']>;
  last4Digits?: Maybe<Scalars['String']>;
  ownerName?: Maybe<Scalars['String']>;
  userEmail?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "paymentMethod" */
export type PaymentMethod_Mutation_Response = {
  __typename?: 'paymentMethod_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PaymentMethod>;
};

/** input type for inserting object relation for remote table "paymentMethod" */
export type PaymentMethod_Obj_Rel_Insert_Input = {
  data: PaymentMethod_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<PaymentMethod_On_Conflict>;
};

/** on_conflict condition type for table "paymentMethod" */
export type PaymentMethod_On_Conflict = {
  constraint: PaymentMethod_Constraint;
  update_columns?: Array<PaymentMethod_Update_Column>;
  where?: InputMaybe<PaymentMethod_Bool_Exp>;
};

/** Ordering options when selecting data from "paymentMethod". */
export type PaymentMethod_Order_By = {
  expirationDate?: InputMaybe<Order_By>;
  last4Digits?: InputMaybe<Order_By>;
  ownerName?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** primary key columns input for table: paymentMethod */
export type PaymentMethod_Pk_Columns_Input = {
  userEmail: Scalars['String'];
};

/** select columns of table "paymentMethod" */
export enum PaymentMethod_Select_Column {
  /** column name */
  ExpirationDate = 'expirationDate',
  /** column name */
  Last4Digits = 'last4Digits',
  /** column name */
  OwnerName = 'ownerName',
  /** column name */
  UserEmail = 'userEmail'
}

/** input type for updating data in table "paymentMethod" */
export type PaymentMethod_Set_Input = {
  expirationDate?: InputMaybe<Scalars['String']>;
  last4Digits?: InputMaybe<Scalars['String']>;
  ownerName?: InputMaybe<Scalars['String']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "paymentMethod" */
export type PaymentMethod_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: PaymentMethod_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type PaymentMethod_Stream_Cursor_Value_Input = {
  expirationDate?: InputMaybe<Scalars['String']>;
  last4Digits?: InputMaybe<Scalars['String']>;
  ownerName?: InputMaybe<Scalars['String']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** update columns of table "paymentMethod" */
export enum PaymentMethod_Update_Column {
  /** column name */
  ExpirationDate = 'expirationDate',
  /** column name */
  Last4Digits = 'last4Digits',
  /** column name */
  OwnerName = 'ownerName',
  /** column name */
  UserEmail = 'userEmail'
}

export type PaymentMethod_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PaymentMethod_Set_Input>;
  /** filter the rows which have to be updated */
  where: PaymentMethod_Bool_Exp;
};

/** columns and relationships of "portfolio" */
export type Portfolio = {
  __typename?: 'portfolio';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  portfolioAllocations: Array<PortfolioAllocation>;
  /** An aggregate relationship */
  portfolioAllocations_aggregate: PortfolioAllocation_Aggregate;
  /** An object relationship */
  user: User;
  userEmail: Scalars['String'];
};


/** columns and relationships of "portfolio" */
export type PortfolioPortfolioAllocationsArgs = {
  distinct_on?: InputMaybe<Array<PortfolioAllocation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PortfolioAllocation_Order_By>>;
  where?: InputMaybe<PortfolioAllocation_Bool_Exp>;
};


/** columns and relationships of "portfolio" */
export type PortfolioPortfolioAllocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PortfolioAllocation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PortfolioAllocation_Order_By>>;
  where?: InputMaybe<PortfolioAllocation_Bool_Exp>;
};

/** columns and relationships of "portfolioAllocation" */
export type PortfolioAllocation = {
  __typename?: 'portfolioAllocation';
  allocation: Scalars['Float'];
  /** An object relationship */
  company: Company;
  companyId: Scalars['Int'];
  portfolioId: Scalars['Int'];
};

/** aggregated selection of "portfolioAllocation" */
export type PortfolioAllocation_Aggregate = {
  __typename?: 'portfolioAllocation_aggregate';
  aggregate?: Maybe<PortfolioAllocation_Aggregate_Fields>;
  nodes: Array<PortfolioAllocation>;
};

export type PortfolioAllocation_Aggregate_Bool_Exp = {
  count?: InputMaybe<PortfolioAllocation_Aggregate_Bool_Exp_Count>;
};

export type PortfolioAllocation_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<PortfolioAllocation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PortfolioAllocation_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "portfolioAllocation" */
export type PortfolioAllocation_Aggregate_Fields = {
  __typename?: 'portfolioAllocation_aggregate_fields';
  avg?: Maybe<PortfolioAllocation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<PortfolioAllocation_Max_Fields>;
  min?: Maybe<PortfolioAllocation_Min_Fields>;
  stddev?: Maybe<PortfolioAllocation_Stddev_Fields>;
  stddev_pop?: Maybe<PortfolioAllocation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<PortfolioAllocation_Stddev_Samp_Fields>;
  sum?: Maybe<PortfolioAllocation_Sum_Fields>;
  var_pop?: Maybe<PortfolioAllocation_Var_Pop_Fields>;
  var_samp?: Maybe<PortfolioAllocation_Var_Samp_Fields>;
  variance?: Maybe<PortfolioAllocation_Variance_Fields>;
};


/** aggregate fields of "portfolioAllocation" */
export type PortfolioAllocation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<PortfolioAllocation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "portfolioAllocation" */
export type PortfolioAllocation_Aggregate_Order_By = {
  avg?: InputMaybe<PortfolioAllocation_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<PortfolioAllocation_Max_Order_By>;
  min?: InputMaybe<PortfolioAllocation_Min_Order_By>;
  stddev?: InputMaybe<PortfolioAllocation_Stddev_Order_By>;
  stddev_pop?: InputMaybe<PortfolioAllocation_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<PortfolioAllocation_Stddev_Samp_Order_By>;
  sum?: InputMaybe<PortfolioAllocation_Sum_Order_By>;
  var_pop?: InputMaybe<PortfolioAllocation_Var_Pop_Order_By>;
  var_samp?: InputMaybe<PortfolioAllocation_Var_Samp_Order_By>;
  variance?: InputMaybe<PortfolioAllocation_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "portfolioAllocation" */
export type PortfolioAllocation_Arr_Rel_Insert_Input = {
  data: Array<PortfolioAllocation_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<PortfolioAllocation_On_Conflict>;
};

/** aggregate avg on columns */
export type PortfolioAllocation_Avg_Fields = {
  __typename?: 'portfolioAllocation_avg_fields';
  allocation?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Float']>;
  portfolioId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "portfolioAllocation" */
export type PortfolioAllocation_Avg_Order_By = {
  allocation?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  portfolioId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "portfolioAllocation". All fields are combined with a logical 'AND'. */
export type PortfolioAllocation_Bool_Exp = {
  _and?: InputMaybe<Array<PortfolioAllocation_Bool_Exp>>;
  _not?: InputMaybe<PortfolioAllocation_Bool_Exp>;
  _or?: InputMaybe<Array<PortfolioAllocation_Bool_Exp>>;
  allocation?: InputMaybe<Float_Comparison_Exp>;
  company?: InputMaybe<Company_Bool_Exp>;
  companyId?: InputMaybe<Int_Comparison_Exp>;
  portfolioId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "portfolioAllocation" */
export enum PortfolioAllocation_Constraint {
  /** unique or primary key constraint on columns "portfolioId", "companyId" */
  PortfolioAllocationPkey = 'portfolioAllocation_pkey'
}

/** input type for incrementing numeric columns in table "portfolioAllocation" */
export type PortfolioAllocation_Inc_Input = {
  allocation?: InputMaybe<Scalars['Float']>;
  companyId?: InputMaybe<Scalars['Int']>;
  portfolioId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "portfolioAllocation" */
export type PortfolioAllocation_Insert_Input = {
  allocation?: InputMaybe<Scalars['Float']>;
  company?: InputMaybe<Company_Obj_Rel_Insert_Input>;
  companyId?: InputMaybe<Scalars['Int']>;
  portfolioId?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type PortfolioAllocation_Max_Fields = {
  __typename?: 'portfolioAllocation_max_fields';
  allocation?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Int']>;
  portfolioId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "portfolioAllocation" */
export type PortfolioAllocation_Max_Order_By = {
  allocation?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  portfolioId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type PortfolioAllocation_Min_Fields = {
  __typename?: 'portfolioAllocation_min_fields';
  allocation?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Int']>;
  portfolioId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "portfolioAllocation" */
export type PortfolioAllocation_Min_Order_By = {
  allocation?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  portfolioId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "portfolioAllocation" */
export type PortfolioAllocation_Mutation_Response = {
  __typename?: 'portfolioAllocation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PortfolioAllocation>;
};

/** on_conflict condition type for table "portfolioAllocation" */
export type PortfolioAllocation_On_Conflict = {
  constraint: PortfolioAllocation_Constraint;
  update_columns?: Array<PortfolioAllocation_Update_Column>;
  where?: InputMaybe<PortfolioAllocation_Bool_Exp>;
};

/** Ordering options when selecting data from "portfolioAllocation". */
export type PortfolioAllocation_Order_By = {
  allocation?: InputMaybe<Order_By>;
  company?: InputMaybe<Company_Order_By>;
  companyId?: InputMaybe<Order_By>;
  portfolioId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: portfolioAllocation */
export type PortfolioAllocation_Pk_Columns_Input = {
  companyId: Scalars['Int'];
  portfolioId: Scalars['Int'];
};

/** select columns of table "portfolioAllocation" */
export enum PortfolioAllocation_Select_Column {
  /** column name */
  Allocation = 'allocation',
  /** column name */
  CompanyId = 'companyId',
  /** column name */
  PortfolioId = 'portfolioId'
}

/** input type for updating data in table "portfolioAllocation" */
export type PortfolioAllocation_Set_Input = {
  allocation?: InputMaybe<Scalars['Float']>;
  companyId?: InputMaybe<Scalars['Int']>;
  portfolioId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type PortfolioAllocation_Stddev_Fields = {
  __typename?: 'portfolioAllocation_stddev_fields';
  allocation?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Float']>;
  portfolioId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "portfolioAllocation" */
export type PortfolioAllocation_Stddev_Order_By = {
  allocation?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  portfolioId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type PortfolioAllocation_Stddev_Pop_Fields = {
  __typename?: 'portfolioAllocation_stddev_pop_fields';
  allocation?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Float']>;
  portfolioId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "portfolioAllocation" */
export type PortfolioAllocation_Stddev_Pop_Order_By = {
  allocation?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  portfolioId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type PortfolioAllocation_Stddev_Samp_Fields = {
  __typename?: 'portfolioAllocation_stddev_samp_fields';
  allocation?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Float']>;
  portfolioId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "portfolioAllocation" */
export type PortfolioAllocation_Stddev_Samp_Order_By = {
  allocation?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  portfolioId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "portfolioAllocation" */
export type PortfolioAllocation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: PortfolioAllocation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type PortfolioAllocation_Stream_Cursor_Value_Input = {
  allocation?: InputMaybe<Scalars['Float']>;
  companyId?: InputMaybe<Scalars['Int']>;
  portfolioId?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type PortfolioAllocation_Sum_Fields = {
  __typename?: 'portfolioAllocation_sum_fields';
  allocation?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Int']>;
  portfolioId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "portfolioAllocation" */
export type PortfolioAllocation_Sum_Order_By = {
  allocation?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  portfolioId?: InputMaybe<Order_By>;
};

/** update columns of table "portfolioAllocation" */
export enum PortfolioAllocation_Update_Column {
  /** column name */
  Allocation = 'allocation',
  /** column name */
  CompanyId = 'companyId',
  /** column name */
  PortfolioId = 'portfolioId'
}

export type PortfolioAllocation_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PortfolioAllocation_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PortfolioAllocation_Set_Input>;
  /** filter the rows which have to be updated */
  where: PortfolioAllocation_Bool_Exp;
};

/** aggregate var_pop on columns */
export type PortfolioAllocation_Var_Pop_Fields = {
  __typename?: 'portfolioAllocation_var_pop_fields';
  allocation?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Float']>;
  portfolioId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "portfolioAllocation" */
export type PortfolioAllocation_Var_Pop_Order_By = {
  allocation?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  portfolioId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type PortfolioAllocation_Var_Samp_Fields = {
  __typename?: 'portfolioAllocation_var_samp_fields';
  allocation?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Float']>;
  portfolioId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "portfolioAllocation" */
export type PortfolioAllocation_Var_Samp_Order_By = {
  allocation?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  portfolioId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type PortfolioAllocation_Variance_Fields = {
  __typename?: 'portfolioAllocation_variance_fields';
  allocation?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Float']>;
  portfolioId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "portfolioAllocation" */
export type PortfolioAllocation_Variance_Order_By = {
  allocation?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  portfolioId?: InputMaybe<Order_By>;
};

/** aggregated selection of "portfolio" */
export type Portfolio_Aggregate = {
  __typename?: 'portfolio_aggregate';
  aggregate?: Maybe<Portfolio_Aggregate_Fields>;
  nodes: Array<Portfolio>;
};

export type Portfolio_Aggregate_Bool_Exp = {
  count?: InputMaybe<Portfolio_Aggregate_Bool_Exp_Count>;
};

export type Portfolio_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Portfolio_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Portfolio_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "portfolio" */
export type Portfolio_Aggregate_Fields = {
  __typename?: 'portfolio_aggregate_fields';
  avg?: Maybe<Portfolio_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Portfolio_Max_Fields>;
  min?: Maybe<Portfolio_Min_Fields>;
  stddev?: Maybe<Portfolio_Stddev_Fields>;
  stddev_pop?: Maybe<Portfolio_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Portfolio_Stddev_Samp_Fields>;
  sum?: Maybe<Portfolio_Sum_Fields>;
  var_pop?: Maybe<Portfolio_Var_Pop_Fields>;
  var_samp?: Maybe<Portfolio_Var_Samp_Fields>;
  variance?: Maybe<Portfolio_Variance_Fields>;
};


/** aggregate fields of "portfolio" */
export type Portfolio_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Portfolio_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "portfolio" */
export type Portfolio_Aggregate_Order_By = {
  avg?: InputMaybe<Portfolio_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Portfolio_Max_Order_By>;
  min?: InputMaybe<Portfolio_Min_Order_By>;
  stddev?: InputMaybe<Portfolio_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Portfolio_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Portfolio_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Portfolio_Sum_Order_By>;
  var_pop?: InputMaybe<Portfolio_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Portfolio_Var_Samp_Order_By>;
  variance?: InputMaybe<Portfolio_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "portfolio" */
export type Portfolio_Arr_Rel_Insert_Input = {
  data: Array<Portfolio_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Portfolio_On_Conflict>;
};

/** aggregate avg on columns */
export type Portfolio_Avg_Fields = {
  __typename?: 'portfolio_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "portfolio" */
export type Portfolio_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "portfolio". All fields are combined with a logical 'AND'. */
export type Portfolio_Bool_Exp = {
  _and?: InputMaybe<Array<Portfolio_Bool_Exp>>;
  _not?: InputMaybe<Portfolio_Bool_Exp>;
  _or?: InputMaybe<Array<Portfolio_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  portfolioAllocations?: InputMaybe<PortfolioAllocation_Bool_Exp>;
  portfolioAllocations_aggregate?: InputMaybe<PortfolioAllocation_Aggregate_Bool_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userEmail?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "portfolio" */
export enum Portfolio_Constraint {
  /** unique or primary key constraint on columns "id" */
  PortfolioListPkey = 'portfolioList_pkey'
}

/** input type for incrementing numeric columns in table "portfolio" */
export type Portfolio_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "portfolio" */
export type Portfolio_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  portfolioAllocations?: InputMaybe<PortfolioAllocation_Arr_Rel_Insert_Input>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Portfolio_Max_Fields = {
  __typename?: 'portfolio_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  userEmail?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "portfolio" */
export type Portfolio_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Portfolio_Min_Fields = {
  __typename?: 'portfolio_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  userEmail?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "portfolio" */
export type Portfolio_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "portfolio" */
export type Portfolio_Mutation_Response = {
  __typename?: 'portfolio_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Portfolio>;
};

/** on_conflict condition type for table "portfolio" */
export type Portfolio_On_Conflict = {
  constraint: Portfolio_Constraint;
  update_columns?: Array<Portfolio_Update_Column>;
  where?: InputMaybe<Portfolio_Bool_Exp>;
};

/** Ordering options when selecting data from "portfolio". */
export type Portfolio_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  portfolioAllocations_aggregate?: InputMaybe<PortfolioAllocation_Aggregate_Order_By>;
  user?: InputMaybe<User_Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** primary key columns input for table: portfolio */
export type Portfolio_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "portfolio" */
export enum Portfolio_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserEmail = 'userEmail'
}

/** input type for updating data in table "portfolio" */
export type Portfolio_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Portfolio_Stddev_Fields = {
  __typename?: 'portfolio_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "portfolio" */
export type Portfolio_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Portfolio_Stddev_Pop_Fields = {
  __typename?: 'portfolio_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "portfolio" */
export type Portfolio_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Portfolio_Stddev_Samp_Fields = {
  __typename?: 'portfolio_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "portfolio" */
export type Portfolio_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "portfolio" */
export type Portfolio_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Portfolio_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Portfolio_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Portfolio_Sum_Fields = {
  __typename?: 'portfolio_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "portfolio" */
export type Portfolio_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "portfolio" */
export enum Portfolio_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserEmail = 'userEmail'
}

export type Portfolio_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Portfolio_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Portfolio_Set_Input>;
  /** filter the rows which have to be updated */
  where: Portfolio_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Portfolio_Var_Pop_Fields = {
  __typename?: 'portfolio_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "portfolio" */
export type Portfolio_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Portfolio_Var_Samp_Fields = {
  __typename?: 'portfolio_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "portfolio" */
export type Portfolio_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Portfolio_Variance_Fields = {
  __typename?: 'portfolio_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "portfolio" */
export type Portfolio_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "presentation" */
export type Presentation = {
  __typename?: 'presentation';
  companyId: Scalars['Int'];
  presentationEn?: Maybe<Scalars['String']>;
  presentationFr?: Maybe<Scalars['String']>;
};

/** aggregated selection of "presentation" */
export type Presentation_Aggregate = {
  __typename?: 'presentation_aggregate';
  aggregate?: Maybe<Presentation_Aggregate_Fields>;
  nodes: Array<Presentation>;
};

/** aggregate fields of "presentation" */
export type Presentation_Aggregate_Fields = {
  __typename?: 'presentation_aggregate_fields';
  avg?: Maybe<Presentation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Presentation_Max_Fields>;
  min?: Maybe<Presentation_Min_Fields>;
  stddev?: Maybe<Presentation_Stddev_Fields>;
  stddev_pop?: Maybe<Presentation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Presentation_Stddev_Samp_Fields>;
  sum?: Maybe<Presentation_Sum_Fields>;
  var_pop?: Maybe<Presentation_Var_Pop_Fields>;
  var_samp?: Maybe<Presentation_Var_Samp_Fields>;
  variance?: Maybe<Presentation_Variance_Fields>;
};


/** aggregate fields of "presentation" */
export type Presentation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Presentation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Presentation_Avg_Fields = {
  __typename?: 'presentation_avg_fields';
  companyId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "presentation". All fields are combined with a logical 'AND'. */
export type Presentation_Bool_Exp = {
  _and?: InputMaybe<Array<Presentation_Bool_Exp>>;
  _not?: InputMaybe<Presentation_Bool_Exp>;
  _or?: InputMaybe<Array<Presentation_Bool_Exp>>;
  companyId?: InputMaybe<Int_Comparison_Exp>;
  presentationEn?: InputMaybe<String_Comparison_Exp>;
  presentationFr?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "presentation" */
export enum Presentation_Constraint {
  /** unique or primary key constraint on columns "companyId" */
  PresentationPkey = 'presentation_pkey'
}

/** input type for incrementing numeric columns in table "presentation" */
export type Presentation_Inc_Input = {
  companyId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "presentation" */
export type Presentation_Insert_Input = {
  companyId?: InputMaybe<Scalars['Int']>;
  presentationEn?: InputMaybe<Scalars['String']>;
  presentationFr?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Presentation_Max_Fields = {
  __typename?: 'presentation_max_fields';
  companyId?: Maybe<Scalars['Int']>;
  presentationEn?: Maybe<Scalars['String']>;
  presentationFr?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Presentation_Min_Fields = {
  __typename?: 'presentation_min_fields';
  companyId?: Maybe<Scalars['Int']>;
  presentationEn?: Maybe<Scalars['String']>;
  presentationFr?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "presentation" */
export type Presentation_Mutation_Response = {
  __typename?: 'presentation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Presentation>;
};

/** input type for inserting object relation for remote table "presentation" */
export type Presentation_Obj_Rel_Insert_Input = {
  data: Presentation_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Presentation_On_Conflict>;
};

/** on_conflict condition type for table "presentation" */
export type Presentation_On_Conflict = {
  constraint: Presentation_Constraint;
  update_columns?: Array<Presentation_Update_Column>;
  where?: InputMaybe<Presentation_Bool_Exp>;
};

/** Ordering options when selecting data from "presentation". */
export type Presentation_Order_By = {
  companyId?: InputMaybe<Order_By>;
  presentationEn?: InputMaybe<Order_By>;
  presentationFr?: InputMaybe<Order_By>;
};

/** primary key columns input for table: presentation */
export type Presentation_Pk_Columns_Input = {
  companyId: Scalars['Int'];
};

/** select columns of table "presentation" */
export enum Presentation_Select_Column {
  /** column name */
  CompanyId = 'companyId',
  /** column name */
  PresentationEn = 'presentationEn',
  /** column name */
  PresentationFr = 'presentationFr'
}

/** input type for updating data in table "presentation" */
export type Presentation_Set_Input = {
  companyId?: InputMaybe<Scalars['Int']>;
  presentationEn?: InputMaybe<Scalars['String']>;
  presentationFr?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Presentation_Stddev_Fields = {
  __typename?: 'presentation_stddev_fields';
  companyId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Presentation_Stddev_Pop_Fields = {
  __typename?: 'presentation_stddev_pop_fields';
  companyId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Presentation_Stddev_Samp_Fields = {
  __typename?: 'presentation_stddev_samp_fields';
  companyId?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "presentation" */
export type Presentation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Presentation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Presentation_Stream_Cursor_Value_Input = {
  companyId?: InputMaybe<Scalars['Int']>;
  presentationEn?: InputMaybe<Scalars['String']>;
  presentationFr?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Presentation_Sum_Fields = {
  __typename?: 'presentation_sum_fields';
  companyId?: Maybe<Scalars['Int']>;
};

/** update columns of table "presentation" */
export enum Presentation_Update_Column {
  /** column name */
  CompanyId = 'companyId',
  /** column name */
  PresentationEn = 'presentationEn',
  /** column name */
  PresentationFr = 'presentationFr'
}

export type Presentation_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Presentation_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Presentation_Set_Input>;
  /** filter the rows which have to be updated */
  where: Presentation_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Presentation_Var_Pop_Fields = {
  __typename?: 'presentation_var_pop_fields';
  companyId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Presentation_Var_Samp_Fields = {
  __typename?: 'presentation_var_samp_fields';
  companyId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Presentation_Variance_Fields = {
  __typename?: 'presentation_variance_fields';
  companyId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "prompted_document" */
export type Prompted_Document = {
  __typename?: 'prompted_document';
  /** An object relationship */
  document: Documents;
  document_id: Scalars['uuid'];
  /** An object relationship */
  prompt: Prompts;
  prompt_id: Scalars['uuid'];
  text: Scalars['String'];
};

/** aggregated selection of "prompted_document" */
export type Prompted_Document_Aggregate = {
  __typename?: 'prompted_document_aggregate';
  aggregate?: Maybe<Prompted_Document_Aggregate_Fields>;
  nodes: Array<Prompted_Document>;
};

export type Prompted_Document_Aggregate_Bool_Exp = {
  count?: InputMaybe<Prompted_Document_Aggregate_Bool_Exp_Count>;
};

export type Prompted_Document_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Prompted_Document_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Prompted_Document_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "prompted_document" */
export type Prompted_Document_Aggregate_Fields = {
  __typename?: 'prompted_document_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Prompted_Document_Max_Fields>;
  min?: Maybe<Prompted_Document_Min_Fields>;
};


/** aggregate fields of "prompted_document" */
export type Prompted_Document_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Prompted_Document_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "prompted_document" */
export type Prompted_Document_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Prompted_Document_Max_Order_By>;
  min?: InputMaybe<Prompted_Document_Min_Order_By>;
};

/** input type for inserting array relation for remote table "prompted_document" */
export type Prompted_Document_Arr_Rel_Insert_Input = {
  data: Array<Prompted_Document_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Prompted_Document_On_Conflict>;
};

/** Boolean expression to filter rows from the table "prompted_document". All fields are combined with a logical 'AND'. */
export type Prompted_Document_Bool_Exp = {
  _and?: InputMaybe<Array<Prompted_Document_Bool_Exp>>;
  _not?: InputMaybe<Prompted_Document_Bool_Exp>;
  _or?: InputMaybe<Array<Prompted_Document_Bool_Exp>>;
  document?: InputMaybe<Documents_Bool_Exp>;
  document_id?: InputMaybe<Uuid_Comparison_Exp>;
  prompt?: InputMaybe<Prompts_Bool_Exp>;
  prompt_id?: InputMaybe<Uuid_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "prompted_document" */
export enum Prompted_Document_Constraint {
  /** unique or primary key constraint on columns "document_id", "prompt_id" */
  PromptedDocumentPkey = 'prompted_document_pkey'
}

/** input type for inserting data into table "prompted_document" */
export type Prompted_Document_Insert_Input = {
  document?: InputMaybe<Documents_Obj_Rel_Insert_Input>;
  document_id?: InputMaybe<Scalars['uuid']>;
  prompt?: InputMaybe<Prompts_Obj_Rel_Insert_Input>;
  prompt_id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Prompted_Document_Max_Fields = {
  __typename?: 'prompted_document_max_fields';
  document_id?: Maybe<Scalars['uuid']>;
  prompt_id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "prompted_document" */
export type Prompted_Document_Max_Order_By = {
  document_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Prompted_Document_Min_Fields = {
  __typename?: 'prompted_document_min_fields';
  document_id?: Maybe<Scalars['uuid']>;
  prompt_id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "prompted_document" */
export type Prompted_Document_Min_Order_By = {
  document_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "prompted_document" */
export type Prompted_Document_Mutation_Response = {
  __typename?: 'prompted_document_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Prompted_Document>;
};

/** on_conflict condition type for table "prompted_document" */
export type Prompted_Document_On_Conflict = {
  constraint: Prompted_Document_Constraint;
  update_columns?: Array<Prompted_Document_Update_Column>;
  where?: InputMaybe<Prompted_Document_Bool_Exp>;
};

/** Ordering options when selecting data from "prompted_document". */
export type Prompted_Document_Order_By = {
  document?: InputMaybe<Documents_Order_By>;
  document_id?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Prompts_Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: prompted_document */
export type Prompted_Document_Pk_Columns_Input = {
  document_id: Scalars['uuid'];
  prompt_id: Scalars['uuid'];
};

/** select columns of table "prompted_document" */
export enum Prompted_Document_Select_Column {
  /** column name */
  DocumentId = 'document_id',
  /** column name */
  PromptId = 'prompt_id',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "prompted_document" */
export type Prompted_Document_Set_Input = {
  document_id?: InputMaybe<Scalars['uuid']>;
  prompt_id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "prompted_document" */
export type Prompted_Document_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Prompted_Document_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Prompted_Document_Stream_Cursor_Value_Input = {
  document_id?: InputMaybe<Scalars['uuid']>;
  prompt_id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
};

/** update columns of table "prompted_document" */
export enum Prompted_Document_Update_Column {
  /** column name */
  DocumentId = 'document_id',
  /** column name */
  PromptId = 'prompt_id',
  /** column name */
  Text = 'text'
}

export type Prompted_Document_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Prompted_Document_Set_Input>;
  /** filter the rows which have to be updated */
  where: Prompted_Document_Bool_Exp;
};

/** columns and relationships of "prompts" */
export type Prompts = {
  __typename?: 'prompts';
  id: Scalars['uuid'];
  order?: Maybe<Scalars['Int']>;
  /** An array relationship */
  prompted_documents: Array<Prompted_Document>;
  /** An aggregate relationship */
  prompted_documents_aggregate: Prompted_Document_Aggregate;
  text: Scalars['String'];
  title: Scalars['String'];
};


/** columns and relationships of "prompts" */
export type PromptsPrompted_DocumentsArgs = {
  distinct_on?: InputMaybe<Array<Prompted_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prompted_Document_Order_By>>;
  where?: InputMaybe<Prompted_Document_Bool_Exp>;
};


/** columns and relationships of "prompts" */
export type PromptsPrompted_Documents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prompted_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prompted_Document_Order_By>>;
  where?: InputMaybe<Prompted_Document_Bool_Exp>;
};

/** aggregated selection of "prompts" */
export type Prompts_Aggregate = {
  __typename?: 'prompts_aggregate';
  aggregate?: Maybe<Prompts_Aggregate_Fields>;
  nodes: Array<Prompts>;
};

/** aggregate fields of "prompts" */
export type Prompts_Aggregate_Fields = {
  __typename?: 'prompts_aggregate_fields';
  avg?: Maybe<Prompts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Prompts_Max_Fields>;
  min?: Maybe<Prompts_Min_Fields>;
  stddev?: Maybe<Prompts_Stddev_Fields>;
  stddev_pop?: Maybe<Prompts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Prompts_Stddev_Samp_Fields>;
  sum?: Maybe<Prompts_Sum_Fields>;
  var_pop?: Maybe<Prompts_Var_Pop_Fields>;
  var_samp?: Maybe<Prompts_Var_Samp_Fields>;
  variance?: Maybe<Prompts_Variance_Fields>;
};


/** aggregate fields of "prompts" */
export type Prompts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Prompts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Prompts_Avg_Fields = {
  __typename?: 'prompts_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "prompts". All fields are combined with a logical 'AND'. */
export type Prompts_Bool_Exp = {
  _and?: InputMaybe<Array<Prompts_Bool_Exp>>;
  _not?: InputMaybe<Prompts_Bool_Exp>;
  _or?: InputMaybe<Array<Prompts_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  prompted_documents?: InputMaybe<Prompted_Document_Bool_Exp>;
  prompted_documents_aggregate?: InputMaybe<Prompted_Document_Aggregate_Bool_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "prompts" */
export enum Prompts_Constraint {
  /** unique or primary key constraint on columns "id" */
  PromptsPkey = 'prompts_pkey'
}

/** input type for incrementing numeric columns in table "prompts" */
export type Prompts_Inc_Input = {
  order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "prompts" */
export type Prompts_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
  prompted_documents?: InputMaybe<Prompted_Document_Arr_Rel_Insert_Input>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Prompts_Max_Fields = {
  __typename?: 'prompts_max_fields';
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Prompts_Min_Fields = {
  __typename?: 'prompts_min_fields';
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "prompts" */
export type Prompts_Mutation_Response = {
  __typename?: 'prompts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Prompts>;
};

/** input type for inserting object relation for remote table "prompts" */
export type Prompts_Obj_Rel_Insert_Input = {
  data: Prompts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Prompts_On_Conflict>;
};

/** on_conflict condition type for table "prompts" */
export type Prompts_On_Conflict = {
  constraint: Prompts_Constraint;
  update_columns?: Array<Prompts_Update_Column>;
  where?: InputMaybe<Prompts_Bool_Exp>;
};

/** Ordering options when selecting data from "prompts". */
export type Prompts_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  prompted_documents_aggregate?: InputMaybe<Prompted_Document_Aggregate_Order_By>;
  text?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: prompts */
export type Prompts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "prompts" */
export enum Prompts_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  Text = 'text',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "prompts" */
export type Prompts_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Prompts_Stddev_Fields = {
  __typename?: 'prompts_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Prompts_Stddev_Pop_Fields = {
  __typename?: 'prompts_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Prompts_Stddev_Samp_Fields = {
  __typename?: 'prompts_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "prompts" */
export type Prompts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Prompts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Prompts_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Prompts_Sum_Fields = {
  __typename?: 'prompts_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** update columns of table "prompts" */
export enum Prompts_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  Text = 'text',
  /** column name */
  Title = 'title'
}

export type Prompts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Prompts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Prompts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Prompts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Prompts_Var_Pop_Fields = {
  __typename?: 'prompts_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Prompts_Var_Samp_Fields = {
  __typename?: 'prompts_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Prompts_Variance_Fields = {
  __typename?: 'prompts_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "companies_and_etfs" */
  companies_and_etfs: Array<Companies_And_Etfs>;
  /** fetch aggregated fields from the table: "companies_and_etfs" */
  companies_and_etfs_aggregate: Companies_And_Etfs_Aggregate;
  /** fetch data from the table: "company" */
  company: Array<Company>;
  /** fetch aggregated fields from the table: "company" */
  company_aggregate: Company_Aggregate;
  /** fetch data from the table: "company" using primary key columns */
  company_by_pk?: Maybe<Company>;
  /** fetch data from the table: "continentCode" */
  continentCode: Array<ContinentCode>;
  /** fetch aggregated fields from the table: "continentCode" */
  continentCode_aggregate: ContinentCode_Aggregate;
  /** fetch data from the table: "continentCode" using primary key columns */
  continentCode_by_pk?: Maybe<ContinentCode>;
  /** fetch data from the table: "country" */
  country: Array<Country>;
  /** fetch data from the table: "countryCode" */
  countryCode: Array<CountryCode>;
  /** fetch aggregated fields from the table: "countryCode" */
  countryCode_aggregate: CountryCode_Aggregate;
  /** fetch data from the table: "countryCode" using primary key columns */
  countryCode_by_pk?: Maybe<CountryCode>;
  /** fetch aggregated fields from the table: "country" */
  country_aggregate: Country_Aggregate;
  /** fetch data from the table: "country" using primary key columns */
  country_by_pk?: Maybe<Country>;
  /** fetch data from the table: "documents" */
  documents: Array<Documents>;
  /** fetch aggregated fields from the table: "documents" */
  documents_aggregate: Documents_Aggregate;
  /** fetch data from the table: "documents" using primary key columns */
  documents_by_pk?: Maybe<Documents>;
  /** fetch data from the table: "etf" */
  etf: Array<Etf>;
  /** fetch data from the table: "etfType" */
  etfType: Array<EtfType>;
  /** fetch aggregated fields from the table: "etfType" */
  etfType_aggregate: EtfType_Aggregate;
  /** fetch data from the table: "etfType" using primary key columns */
  etfType_by_pk?: Maybe<EtfType>;
  /** fetch aggregated fields from the table: "etf" */
  etf_aggregate: Etf_Aggregate;
  /** fetch data from the table: "etf" using primary key columns */
  etf_by_pk?: Maybe<Etf>;
  /** fetch data from the table: "favoriteCompany" */
  favoriteCompany: Array<FavoriteCompany>;
  /** fetch aggregated fields from the table: "favoriteCompany" */
  favoriteCompany_aggregate: FavoriteCompany_Aggregate;
  /** fetch data from the table: "favoriteCompany" using primary key columns */
  favoriteCompany_by_pk?: Maybe<FavoriteCompany>;
  /** fetch data from the table: "favoriteList" */
  favoriteList: Array<FavoriteList>;
  /** fetch aggregated fields from the table: "favoriteList" */
  favoriteList_aggregate: FavoriteList_Aggregate;
  /** fetch data from the table: "favoriteList" using primary key columns */
  favoriteList_by_pk?: Maybe<FavoriteList>;
  /** fetch data from the table: "filter" */
  filter: Array<Filter>;
  /** fetch data from the table: "filterType" */
  filterType: Array<FilterType>;
  /** fetch aggregated fields from the table: "filterType" */
  filterType_aggregate: FilterType_Aggregate;
  /** fetch data from the table: "filterType" using primary key columns */
  filterType_by_pk?: Maybe<FilterType>;
  /** fetch aggregated fields from the table: "filter" */
  filter_aggregate: Filter_Aggregate;
  /** fetch data from the table: "filter" using primary key columns */
  filter_by_pk?: Maybe<Filter>;
  /** fetch data from the table: "marketCapSize" */
  marketCapSize: Array<MarketCapSize>;
  /** fetch aggregated fields from the table: "marketCapSize" */
  marketCapSize_aggregate: MarketCapSize_Aggregate;
  /** fetch data from the table: "marketCapSize" using primary key columns */
  marketCapSize_by_pk?: Maybe<MarketCapSize>;
  /** fetch data from the table: "month" */
  month: Array<Month>;
  /** fetch aggregated fields from the table: "month" */
  month_aggregate: Month_Aggregate;
  /** fetch data from the table: "month" using primary key columns */
  month_by_pk?: Maybe<Month>;
  /** fetch data from the table: "paymentMethod" */
  paymentMethod: Array<PaymentMethod>;
  /** fetch aggregated fields from the table: "paymentMethod" */
  paymentMethod_aggregate: PaymentMethod_Aggregate;
  /** fetch data from the table: "paymentMethod" using primary key columns */
  paymentMethod_by_pk?: Maybe<PaymentMethod>;
  /** fetch data from the table: "portfolio" */
  portfolio: Array<Portfolio>;
  /** fetch data from the table: "portfolioAllocation" */
  portfolioAllocation: Array<PortfolioAllocation>;
  /** fetch aggregated fields from the table: "portfolioAllocation" */
  portfolioAllocation_aggregate: PortfolioAllocation_Aggregate;
  /** fetch data from the table: "portfolioAllocation" using primary key columns */
  portfolioAllocation_by_pk?: Maybe<PortfolioAllocation>;
  /** fetch aggregated fields from the table: "portfolio" */
  portfolio_aggregate: Portfolio_Aggregate;
  /** fetch data from the table: "portfolio" using primary key columns */
  portfolio_by_pk?: Maybe<Portfolio>;
  /** fetch data from the table: "presentation" */
  presentation: Array<Presentation>;
  /** fetch aggregated fields from the table: "presentation" */
  presentation_aggregate: Presentation_Aggregate;
  /** fetch data from the table: "presentation" using primary key columns */
  presentation_by_pk?: Maybe<Presentation>;
  /** fetch data from the table: "prompted_document" */
  prompted_document: Array<Prompted_Document>;
  /** fetch aggregated fields from the table: "prompted_document" */
  prompted_document_aggregate: Prompted_Document_Aggregate;
  /** fetch data from the table: "prompted_document" using primary key columns */
  prompted_document_by_pk?: Maybe<Prompted_Document>;
  /** fetch data from the table: "prompts" */
  prompts: Array<Prompts>;
  /** fetch aggregated fields from the table: "prompts" */
  prompts_aggregate: Prompts_Aggregate;
  /** fetch data from the table: "prompts" using primary key columns */
  prompts_by_pk?: Maybe<Prompts>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "savedFilter" */
  savedFilter: Array<SavedFilter>;
  /** fetch aggregated fields from the table: "savedFilter" */
  savedFilter_aggregate: SavedFilter_Aggregate;
  /** fetch data from the table: "savedFilter" using primary key columns */
  savedFilter_by_pk?: Maybe<SavedFilter>;
  /** execute function "search_companies" which returns "company" */
  search_companies: Array<Company>;
  /** execute function "search_companies" and query aggregates on result of table type "company" */
  search_companies_aggregate: Company_Aggregate;
  /** execute function "search_companies_or_etfs" which returns "companies_and_etfs" */
  search_companies_or_etfs: Array<Companies_And_Etfs>;
  /** execute function "search_companies_or_etfs" and query aggregates on result of table type "companies_and_etfs" */
  search_companies_or_etfs_aggregate: Companies_And_Etfs_Aggregate;
  /** fetch data from the table: "sheet" */
  sheet: Array<Sheet>;
  /** fetch aggregated fields from the table: "sheet" */
  sheet_aggregate: Sheet_Aggregate;
  /** fetch data from the table: "sheet" using primary key columns */
  sheet_by_pk?: Maybe<Sheet>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootCompanies_And_EtfsArgs = {
  distinct_on?: InputMaybe<Array<Companies_And_Etfs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Companies_And_Etfs_Order_By>>;
  where?: InputMaybe<Companies_And_Etfs_Bool_Exp>;
};


export type Query_RootCompanies_And_Etfs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Companies_And_Etfs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Companies_And_Etfs_Order_By>>;
  where?: InputMaybe<Companies_And_Etfs_Bool_Exp>;
};


export type Query_RootCompanyArgs = {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Query_RootCompany_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Query_RootCompany_By_PkArgs = {
  id: Scalars['Int'];
  ticker: Scalars['String'];
};


export type Query_RootContinentCodeArgs = {
  distinct_on?: InputMaybe<Array<ContinentCode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ContinentCode_Order_By>>;
  where?: InputMaybe<ContinentCode_Bool_Exp>;
};


export type Query_RootContinentCode_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ContinentCode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ContinentCode_Order_By>>;
  where?: InputMaybe<ContinentCode_Bool_Exp>;
};


export type Query_RootContinentCode_By_PkArgs = {
  code: Scalars['String'];
};


export type Query_RootCountryArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Query_RootCountryCodeArgs = {
  distinct_on?: InputMaybe<Array<CountryCode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CountryCode_Order_By>>;
  where?: InputMaybe<CountryCode_Bool_Exp>;
};


export type Query_RootCountryCode_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CountryCode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CountryCode_Order_By>>;
  where?: InputMaybe<CountryCode_Bool_Exp>;
};


export type Query_RootCountryCode_By_PkArgs = {
  code: Scalars['String'];
};


export type Query_RootCountry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Query_RootCountry_By_PkArgs = {
  countryCode: CountryCode_Enum;
};


export type Query_RootDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Query_RootDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Query_RootDocuments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEtfArgs = {
  distinct_on?: InputMaybe<Array<Etf_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Etf_Order_By>>;
  where?: InputMaybe<Etf_Bool_Exp>;
};


export type Query_RootEtfTypeArgs = {
  distinct_on?: InputMaybe<Array<EtfType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EtfType_Order_By>>;
  where?: InputMaybe<EtfType_Bool_Exp>;
};


export type Query_RootEtfType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<EtfType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EtfType_Order_By>>;
  where?: InputMaybe<EtfType_Bool_Exp>;
};


export type Query_RootEtfType_By_PkArgs = {
  type: Scalars['String'];
};


export type Query_RootEtf_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Etf_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Etf_Order_By>>;
  where?: InputMaybe<Etf_Bool_Exp>;
};


export type Query_RootEtf_By_PkArgs = {
  ticker: Scalars['String'];
};


export type Query_RootFavoriteCompanyArgs = {
  distinct_on?: InputMaybe<Array<FavoriteCompany_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteCompany_Order_By>>;
  where?: InputMaybe<FavoriteCompany_Bool_Exp>;
};


export type Query_RootFavoriteCompany_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FavoriteCompany_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteCompany_Order_By>>;
  where?: InputMaybe<FavoriteCompany_Bool_Exp>;
};


export type Query_RootFavoriteCompany_By_PkArgs = {
  companyId: Scalars['Int'];
  favoriteListId: Scalars['Int'];
};


export type Query_RootFavoriteListArgs = {
  distinct_on?: InputMaybe<Array<FavoriteList_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteList_Order_By>>;
  where?: InputMaybe<FavoriteList_Bool_Exp>;
};


export type Query_RootFavoriteList_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FavoriteList_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteList_Order_By>>;
  where?: InputMaybe<FavoriteList_Bool_Exp>;
};


export type Query_RootFavoriteList_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFilterArgs = {
  distinct_on?: InputMaybe<Array<Filter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Filter_Order_By>>;
  where?: InputMaybe<Filter_Bool_Exp>;
};


export type Query_RootFilterTypeArgs = {
  distinct_on?: InputMaybe<Array<FilterType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilterType_Order_By>>;
  where?: InputMaybe<FilterType_Bool_Exp>;
};


export type Query_RootFilterType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FilterType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilterType_Order_By>>;
  where?: InputMaybe<FilterType_Bool_Exp>;
};


export type Query_RootFilterType_By_PkArgs = {
  type: Scalars['String'];
};


export type Query_RootFilter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Filter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Filter_Order_By>>;
  where?: InputMaybe<Filter_Bool_Exp>;
};


export type Query_RootFilter_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMarketCapSizeArgs = {
  distinct_on?: InputMaybe<Array<MarketCapSize_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MarketCapSize_Order_By>>;
  where?: InputMaybe<MarketCapSize_Bool_Exp>;
};


export type Query_RootMarketCapSize_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MarketCapSize_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MarketCapSize_Order_By>>;
  where?: InputMaybe<MarketCapSize_Bool_Exp>;
};


export type Query_RootMarketCapSize_By_PkArgs = {
  size: Scalars['String'];
};


export type Query_RootMonthArgs = {
  distinct_on?: InputMaybe<Array<Month_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Month_Order_By>>;
  where?: InputMaybe<Month_Bool_Exp>;
};


export type Query_RootMonth_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Month_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Month_Order_By>>;
  where?: InputMaybe<Month_Bool_Exp>;
};


export type Query_RootMonth_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootPaymentMethodArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethod_Order_By>>;
  where?: InputMaybe<PaymentMethod_Bool_Exp>;
};


export type Query_RootPaymentMethod_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethod_Order_By>>;
  where?: InputMaybe<PaymentMethod_Bool_Exp>;
};


export type Query_RootPaymentMethod_By_PkArgs = {
  userEmail: Scalars['String'];
};


export type Query_RootPortfolioArgs = {
  distinct_on?: InputMaybe<Array<Portfolio_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Portfolio_Order_By>>;
  where?: InputMaybe<Portfolio_Bool_Exp>;
};


export type Query_RootPortfolioAllocationArgs = {
  distinct_on?: InputMaybe<Array<PortfolioAllocation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PortfolioAllocation_Order_By>>;
  where?: InputMaybe<PortfolioAllocation_Bool_Exp>;
};


export type Query_RootPortfolioAllocation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PortfolioAllocation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PortfolioAllocation_Order_By>>;
  where?: InputMaybe<PortfolioAllocation_Bool_Exp>;
};


export type Query_RootPortfolioAllocation_By_PkArgs = {
  companyId: Scalars['Int'];
  portfolioId: Scalars['Int'];
};


export type Query_RootPortfolio_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Portfolio_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Portfolio_Order_By>>;
  where?: InputMaybe<Portfolio_Bool_Exp>;
};


export type Query_RootPortfolio_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPresentationArgs = {
  distinct_on?: InputMaybe<Array<Presentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Presentation_Order_By>>;
  where?: InputMaybe<Presentation_Bool_Exp>;
};


export type Query_RootPresentation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Presentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Presentation_Order_By>>;
  where?: InputMaybe<Presentation_Bool_Exp>;
};


export type Query_RootPresentation_By_PkArgs = {
  companyId: Scalars['Int'];
};


export type Query_RootPrompted_DocumentArgs = {
  distinct_on?: InputMaybe<Array<Prompted_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prompted_Document_Order_By>>;
  where?: InputMaybe<Prompted_Document_Bool_Exp>;
};


export type Query_RootPrompted_Document_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prompted_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prompted_Document_Order_By>>;
  where?: InputMaybe<Prompted_Document_Bool_Exp>;
};


export type Query_RootPrompted_Document_By_PkArgs = {
  document_id: Scalars['uuid'];
  prompt_id: Scalars['uuid'];
};


export type Query_RootPromptsArgs = {
  distinct_on?: InputMaybe<Array<Prompts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prompts_Order_By>>;
  where?: InputMaybe<Prompts_Bool_Exp>;
};


export type Query_RootPrompts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prompts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prompts_Order_By>>;
  where?: InputMaybe<Prompts_Bool_Exp>;
};


export type Query_RootPrompts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_By_PkArgs = {
  role: Scalars['String'];
};


export type Query_RootSavedFilterArgs = {
  distinct_on?: InputMaybe<Array<SavedFilter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SavedFilter_Order_By>>;
  where?: InputMaybe<SavedFilter_Bool_Exp>;
};


export type Query_RootSavedFilter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<SavedFilter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SavedFilter_Order_By>>;
  where?: InputMaybe<SavedFilter_Bool_Exp>;
};


export type Query_RootSavedFilter_By_PkArgs = {
  filterId: Scalars['Int'];
  userEmail: Scalars['String'];
};


export type Query_RootSearch_CompaniesArgs = {
  args: Search_Companies_Args;
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Query_RootSearch_Companies_AggregateArgs = {
  args: Search_Companies_Args;
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Query_RootSearch_Companies_Or_EtfsArgs = {
  args: Search_Companies_Or_Etfs_Args;
  distinct_on?: InputMaybe<Array<Companies_And_Etfs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Companies_And_Etfs_Order_By>>;
  where?: InputMaybe<Companies_And_Etfs_Bool_Exp>;
};


export type Query_RootSearch_Companies_Or_Etfs_AggregateArgs = {
  args: Search_Companies_Or_Etfs_Args;
  distinct_on?: InputMaybe<Array<Companies_And_Etfs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Companies_And_Etfs_Order_By>>;
  where?: InputMaybe<Companies_And_Etfs_Bool_Exp>;
};


export type Query_RootSheetArgs = {
  distinct_on?: InputMaybe<Array<Sheet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sheet_Order_By>>;
  where?: InputMaybe<Sheet_Bool_Exp>;
};


export type Query_RootSheet_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sheet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sheet_Order_By>>;
  where?: InputMaybe<Sheet_Bool_Exp>;
};


export type Query_RootSheet_By_PkArgs = {
  companyId: Scalars['Int'];
  year: Scalars['Int'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  email: Scalars['String'];
};

/** columns and relationships of "role" */
export type Role = {
  __typename?: 'role';
  role: Scalars['String'];
};

/** aggregated selection of "role" */
export type Role_Aggregate = {
  __typename?: 'role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "role" */
export type Role_Aggregate_Fields = {
  __typename?: 'role_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
};


/** aggregate fields of "role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Bool_Exp>>;
  _not?: InputMaybe<Role_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "role" */
export enum Role_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolePkey = 'role_pkey'
}

export enum Role_Enum {
  Admin = 'admin',
  User = 'user'
}

/** Boolean expression to compare columns of type "role_enum". All fields are combined with logical 'AND'. */
export type Role_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Role_Enum>;
  _in?: InputMaybe<Array<Role_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Role_Enum>;
  _nin?: InputMaybe<Array<Role_Enum>>;
};

/** input type for inserting data into table "role" */
export type Role_Insert_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'role_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'role_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "role" */
export type Role_Mutation_Response = {
  __typename?: 'role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** on_conflict condition type for table "role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns?: Array<Role_Update_Column>;
  where?: InputMaybe<Role_Bool_Exp>;
};

/** Ordering options when selecting data from "role". */
export type Role_Order_By = {
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: role */
export type Role_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "role" */
export enum Role_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "role" */
export type Role_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "role" */
export type Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "role" */
export enum Role_Update_Column {
  /** column name */
  Role = 'role'
}

export type Role_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: Role_Bool_Exp;
};

/** columns and relationships of "savedFilter" */
export type SavedFilter = {
  __typename?: 'savedFilter';
  /** An object relationship */
  filter: Filter;
  filterId: Scalars['Int'];
  id: Scalars['Int'];
  userEmail: Scalars['String'];
};

/** aggregated selection of "savedFilter" */
export type SavedFilter_Aggregate = {
  __typename?: 'savedFilter_aggregate';
  aggregate?: Maybe<SavedFilter_Aggregate_Fields>;
  nodes: Array<SavedFilter>;
};

export type SavedFilter_Aggregate_Bool_Exp = {
  count?: InputMaybe<SavedFilter_Aggregate_Bool_Exp_Count>;
};

export type SavedFilter_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<SavedFilter_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<SavedFilter_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "savedFilter" */
export type SavedFilter_Aggregate_Fields = {
  __typename?: 'savedFilter_aggregate_fields';
  avg?: Maybe<SavedFilter_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<SavedFilter_Max_Fields>;
  min?: Maybe<SavedFilter_Min_Fields>;
  stddev?: Maybe<SavedFilter_Stddev_Fields>;
  stddev_pop?: Maybe<SavedFilter_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<SavedFilter_Stddev_Samp_Fields>;
  sum?: Maybe<SavedFilter_Sum_Fields>;
  var_pop?: Maybe<SavedFilter_Var_Pop_Fields>;
  var_samp?: Maybe<SavedFilter_Var_Samp_Fields>;
  variance?: Maybe<SavedFilter_Variance_Fields>;
};


/** aggregate fields of "savedFilter" */
export type SavedFilter_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<SavedFilter_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "savedFilter" */
export type SavedFilter_Aggregate_Order_By = {
  avg?: InputMaybe<SavedFilter_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<SavedFilter_Max_Order_By>;
  min?: InputMaybe<SavedFilter_Min_Order_By>;
  stddev?: InputMaybe<SavedFilter_Stddev_Order_By>;
  stddev_pop?: InputMaybe<SavedFilter_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<SavedFilter_Stddev_Samp_Order_By>;
  sum?: InputMaybe<SavedFilter_Sum_Order_By>;
  var_pop?: InputMaybe<SavedFilter_Var_Pop_Order_By>;
  var_samp?: InputMaybe<SavedFilter_Var_Samp_Order_By>;
  variance?: InputMaybe<SavedFilter_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "savedFilter" */
export type SavedFilter_Arr_Rel_Insert_Input = {
  data: Array<SavedFilter_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<SavedFilter_On_Conflict>;
};

/** aggregate avg on columns */
export type SavedFilter_Avg_Fields = {
  __typename?: 'savedFilter_avg_fields';
  filterId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "savedFilter" */
export type SavedFilter_Avg_Order_By = {
  filterId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "savedFilter". All fields are combined with a logical 'AND'. */
export type SavedFilter_Bool_Exp = {
  _and?: InputMaybe<Array<SavedFilter_Bool_Exp>>;
  _not?: InputMaybe<SavedFilter_Bool_Exp>;
  _or?: InputMaybe<Array<SavedFilter_Bool_Exp>>;
  filter?: InputMaybe<Filter_Bool_Exp>;
  filterId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  userEmail?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "savedFilter" */
export enum SavedFilter_Constraint {
  /** unique or primary key constraint on columns "id" */
  SavedFiltersIdKey = 'savedFilters_id_key',
  /** unique or primary key constraint on columns "filterId", "userEmail" */
  SavedFiltersPkey = 'savedFilters_pkey'
}

/** input type for incrementing numeric columns in table "savedFilter" */
export type SavedFilter_Inc_Input = {
  filterId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "savedFilter" */
export type SavedFilter_Insert_Input = {
  filter?: InputMaybe<Filter_Obj_Rel_Insert_Input>;
  filterId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type SavedFilter_Max_Fields = {
  __typename?: 'savedFilter_max_fields';
  filterId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userEmail?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "savedFilter" */
export type SavedFilter_Max_Order_By = {
  filterId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type SavedFilter_Min_Fields = {
  __typename?: 'savedFilter_min_fields';
  filterId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userEmail?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "savedFilter" */
export type SavedFilter_Min_Order_By = {
  filterId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "savedFilter" */
export type SavedFilter_Mutation_Response = {
  __typename?: 'savedFilter_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<SavedFilter>;
};

/** on_conflict condition type for table "savedFilter" */
export type SavedFilter_On_Conflict = {
  constraint: SavedFilter_Constraint;
  update_columns?: Array<SavedFilter_Update_Column>;
  where?: InputMaybe<SavedFilter_Bool_Exp>;
};

/** Ordering options when selecting data from "savedFilter". */
export type SavedFilter_Order_By = {
  filter?: InputMaybe<Filter_Order_By>;
  filterId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** primary key columns input for table: savedFilter */
export type SavedFilter_Pk_Columns_Input = {
  filterId: Scalars['Int'];
  userEmail: Scalars['String'];
};

/** select columns of table "savedFilter" */
export enum SavedFilter_Select_Column {
  /** column name */
  FilterId = 'filterId',
  /** column name */
  Id = 'id',
  /** column name */
  UserEmail = 'userEmail'
}

/** input type for updating data in table "savedFilter" */
export type SavedFilter_Set_Input = {
  filterId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type SavedFilter_Stddev_Fields = {
  __typename?: 'savedFilter_stddev_fields';
  filterId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "savedFilter" */
export type SavedFilter_Stddev_Order_By = {
  filterId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type SavedFilter_Stddev_Pop_Fields = {
  __typename?: 'savedFilter_stddev_pop_fields';
  filterId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "savedFilter" */
export type SavedFilter_Stddev_Pop_Order_By = {
  filterId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type SavedFilter_Stddev_Samp_Fields = {
  __typename?: 'savedFilter_stddev_samp_fields';
  filterId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "savedFilter" */
export type SavedFilter_Stddev_Samp_Order_By = {
  filterId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "savedFilter" */
export type SavedFilter_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: SavedFilter_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type SavedFilter_Stream_Cursor_Value_Input = {
  filterId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type SavedFilter_Sum_Fields = {
  __typename?: 'savedFilter_sum_fields';
  filterId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "savedFilter" */
export type SavedFilter_Sum_Order_By = {
  filterId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "savedFilter" */
export enum SavedFilter_Update_Column {
  /** column name */
  FilterId = 'filterId',
  /** column name */
  Id = 'id',
  /** column name */
  UserEmail = 'userEmail'
}

export type SavedFilter_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<SavedFilter_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<SavedFilter_Set_Input>;
  /** filter the rows which have to be updated */
  where: SavedFilter_Bool_Exp;
};

/** aggregate var_pop on columns */
export type SavedFilter_Var_Pop_Fields = {
  __typename?: 'savedFilter_var_pop_fields';
  filterId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "savedFilter" */
export type SavedFilter_Var_Pop_Order_By = {
  filterId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type SavedFilter_Var_Samp_Fields = {
  __typename?: 'savedFilter_var_samp_fields';
  filterId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "savedFilter" */
export type SavedFilter_Var_Samp_Order_By = {
  filterId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type SavedFilter_Variance_Fields = {
  __typename?: 'savedFilter_variance_fields';
  filterId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "savedFilter" */
export type SavedFilter_Variance_Order_By = {
  filterId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type Search_Companies_Args = {
  search?: InputMaybe<Scalars['String']>;
};

export type Search_Companies_Or_Etfs_Args = {
  search?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "sheet" */
export type Sheet = {
  __typename?: 'sheet';
  accountPayables?: Maybe<Scalars['Float']>;
  accumulatedOtherComprehensiveIncomeLoss?: Maybe<Scalars['Float']>;
  annualMarketCap?: Maybe<Scalars['Float']>;
  buybackYield?: Maybe<Scalars['Float']>;
  capexOverNetIncome?: Maybe<Scalars['Float']>;
  cashAndShortTermInvestments?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatio?: Maybe<Scalars['Float']>;
  commonStock?: Maybe<Scalars['Float']>;
  companyEquityMultiplier?: Maybe<Scalars['Float']>;
  companyId: Scalars['Int'];
  currentRatio?: Maybe<Scalars['Float']>;
  debtEquityRatio?: Maybe<Scalars['Float']>;
  debtToIncome?: Maybe<Scalars['Float']>;
  deferredRevenue?: Maybe<Scalars['Float']>;
  dividendYield?: Maybe<Scalars['Float']>;
  freeCashFlow?: Maybe<Scalars['Float']>;
  goodwill?: Maybe<Scalars['Float']>;
  grossProfit?: Maybe<Scalars['Float']>;
  grossProfitMargin?: Maybe<Scalars['Float']>;
  intangibleAssets?: Maybe<Scalars['Float']>;
  interestCoverage?: Maybe<Scalars['Float']>;
  interestOverRex?: Maybe<Scalars['Float']>;
  inventory?: Maybe<Scalars['Float']>;
  longTermDebt?: Maybe<Scalars['Float']>;
  longTermInvestments?: Maybe<Scalars['Float']>;
  netIncome?: Maybe<Scalars['Float']>;
  netProfitMargin?: Maybe<Scalars['Float']>;
  netReceivables?: Maybe<Scalars['Float']>;
  operatingProfitMargin?: Maybe<Scalars['Float']>;
  otherCurrentAssets?: Maybe<Scalars['Float']>;
  otherCurrentLiabilities?: Maybe<Scalars['Float']>;
  otherNonCurrentAssets?: Maybe<Scalars['Float']>;
  otherNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  payoutRatio?: Maybe<Scalars['Float']>;
  priceToBookRatio?: Maybe<Scalars['Float']>;
  propertyPlantEquipmentNet?: Maybe<Scalars['Float']>;
  quickRatio?: Maybe<Scalars['Float']>;
  retainedEarnings?: Maybe<Scalars['Float']>;
  returnOnAssets?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployed?: Maybe<Scalars['Float']>;
  returnOnEquity?: Maybe<Scalars['Float']>;
  revenue?: Maybe<Scalars['Float']>;
  rndOverGrossProfit?: Maybe<Scalars['Float']>;
  sgr?: Maybe<Scalars['Float']>;
  shortTermDebt?: Maybe<Scalars['Float']>;
  stocksNumber?: Maybe<Scalars['Float']>;
  totalCurrentAssets?: Maybe<Scalars['Float']>;
  totalCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalEquity?: Maybe<Scalars['Float']>;
  totalNonCurrentAssets?: Maybe<Scalars['Float']>;
  totalNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalStockholdersEquity?: Maybe<Scalars['Float']>;
  vbaOverGrossProfit?: Maybe<Scalars['Float']>;
  year: Scalars['Int'];
};

/** aggregated selection of "sheet" */
export type Sheet_Aggregate = {
  __typename?: 'sheet_aggregate';
  aggregate?: Maybe<Sheet_Aggregate_Fields>;
  nodes: Array<Sheet>;
};

export type Sheet_Aggregate_Bool_Exp = {
  count?: InputMaybe<Sheet_Aggregate_Bool_Exp_Count>;
};

export type Sheet_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Sheet_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Sheet_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "sheet" */
export type Sheet_Aggregate_Fields = {
  __typename?: 'sheet_aggregate_fields';
  avg?: Maybe<Sheet_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Sheet_Max_Fields>;
  min?: Maybe<Sheet_Min_Fields>;
  stddev?: Maybe<Sheet_Stddev_Fields>;
  stddev_pop?: Maybe<Sheet_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sheet_Stddev_Samp_Fields>;
  sum?: Maybe<Sheet_Sum_Fields>;
  var_pop?: Maybe<Sheet_Var_Pop_Fields>;
  var_samp?: Maybe<Sheet_Var_Samp_Fields>;
  variance?: Maybe<Sheet_Variance_Fields>;
};


/** aggregate fields of "sheet" */
export type Sheet_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sheet_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sheet" */
export type Sheet_Aggregate_Order_By = {
  avg?: InputMaybe<Sheet_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sheet_Max_Order_By>;
  min?: InputMaybe<Sheet_Min_Order_By>;
  stddev?: InputMaybe<Sheet_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Sheet_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Sheet_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Sheet_Sum_Order_By>;
  var_pop?: InputMaybe<Sheet_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Sheet_Var_Samp_Order_By>;
  variance?: InputMaybe<Sheet_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "sheet" */
export type Sheet_Arr_Rel_Insert_Input = {
  data: Array<Sheet_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sheet_On_Conflict>;
};

/** aggregate avg on columns */
export type Sheet_Avg_Fields = {
  __typename?: 'sheet_avg_fields';
  accountPayables?: Maybe<Scalars['Float']>;
  accumulatedOtherComprehensiveIncomeLoss?: Maybe<Scalars['Float']>;
  annualMarketCap?: Maybe<Scalars['Float']>;
  buybackYield?: Maybe<Scalars['Float']>;
  capexOverNetIncome?: Maybe<Scalars['Float']>;
  cashAndShortTermInvestments?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatio?: Maybe<Scalars['Float']>;
  commonStock?: Maybe<Scalars['Float']>;
  companyEquityMultiplier?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Float']>;
  currentRatio?: Maybe<Scalars['Float']>;
  debtEquityRatio?: Maybe<Scalars['Float']>;
  debtToIncome?: Maybe<Scalars['Float']>;
  deferredRevenue?: Maybe<Scalars['Float']>;
  dividendYield?: Maybe<Scalars['Float']>;
  freeCashFlow?: Maybe<Scalars['Float']>;
  goodwill?: Maybe<Scalars['Float']>;
  grossProfit?: Maybe<Scalars['Float']>;
  grossProfitMargin?: Maybe<Scalars['Float']>;
  intangibleAssets?: Maybe<Scalars['Float']>;
  interestCoverage?: Maybe<Scalars['Float']>;
  interestOverRex?: Maybe<Scalars['Float']>;
  inventory?: Maybe<Scalars['Float']>;
  longTermDebt?: Maybe<Scalars['Float']>;
  longTermInvestments?: Maybe<Scalars['Float']>;
  netIncome?: Maybe<Scalars['Float']>;
  netProfitMargin?: Maybe<Scalars['Float']>;
  netReceivables?: Maybe<Scalars['Float']>;
  operatingProfitMargin?: Maybe<Scalars['Float']>;
  otherCurrentAssets?: Maybe<Scalars['Float']>;
  otherCurrentLiabilities?: Maybe<Scalars['Float']>;
  otherNonCurrentAssets?: Maybe<Scalars['Float']>;
  otherNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  payoutRatio?: Maybe<Scalars['Float']>;
  priceToBookRatio?: Maybe<Scalars['Float']>;
  propertyPlantEquipmentNet?: Maybe<Scalars['Float']>;
  quickRatio?: Maybe<Scalars['Float']>;
  retainedEarnings?: Maybe<Scalars['Float']>;
  returnOnAssets?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployed?: Maybe<Scalars['Float']>;
  returnOnEquity?: Maybe<Scalars['Float']>;
  revenue?: Maybe<Scalars['Float']>;
  rndOverGrossProfit?: Maybe<Scalars['Float']>;
  sgr?: Maybe<Scalars['Float']>;
  shortTermDebt?: Maybe<Scalars['Float']>;
  stocksNumber?: Maybe<Scalars['Float']>;
  totalCurrentAssets?: Maybe<Scalars['Float']>;
  totalCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalEquity?: Maybe<Scalars['Float']>;
  totalNonCurrentAssets?: Maybe<Scalars['Float']>;
  totalNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalStockholdersEquity?: Maybe<Scalars['Float']>;
  vbaOverGrossProfit?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "sheet" */
export type Sheet_Avg_Order_By = {
  accountPayables?: InputMaybe<Order_By>;
  accumulatedOtherComprehensiveIncomeLoss?: InputMaybe<Order_By>;
  annualMarketCap?: InputMaybe<Order_By>;
  buybackYield?: InputMaybe<Order_By>;
  capexOverNetIncome?: InputMaybe<Order_By>;
  cashAndShortTermInvestments?: InputMaybe<Order_By>;
  cashFlowToDebtRatio?: InputMaybe<Order_By>;
  commonStock?: InputMaybe<Order_By>;
  companyEquityMultiplier?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  currentRatio?: InputMaybe<Order_By>;
  debtEquityRatio?: InputMaybe<Order_By>;
  debtToIncome?: InputMaybe<Order_By>;
  deferredRevenue?: InputMaybe<Order_By>;
  dividendYield?: InputMaybe<Order_By>;
  freeCashFlow?: InputMaybe<Order_By>;
  goodwill?: InputMaybe<Order_By>;
  grossProfit?: InputMaybe<Order_By>;
  grossProfitMargin?: InputMaybe<Order_By>;
  intangibleAssets?: InputMaybe<Order_By>;
  interestCoverage?: InputMaybe<Order_By>;
  interestOverRex?: InputMaybe<Order_By>;
  inventory?: InputMaybe<Order_By>;
  longTermDebt?: InputMaybe<Order_By>;
  longTermInvestments?: InputMaybe<Order_By>;
  netIncome?: InputMaybe<Order_By>;
  netProfitMargin?: InputMaybe<Order_By>;
  netReceivables?: InputMaybe<Order_By>;
  operatingProfitMargin?: InputMaybe<Order_By>;
  otherCurrentAssets?: InputMaybe<Order_By>;
  otherCurrentLiabilities?: InputMaybe<Order_By>;
  otherNonCurrentAssets?: InputMaybe<Order_By>;
  otherNonCurrentLiabilities?: InputMaybe<Order_By>;
  payoutRatio?: InputMaybe<Order_By>;
  priceToBookRatio?: InputMaybe<Order_By>;
  propertyPlantEquipmentNet?: InputMaybe<Order_By>;
  quickRatio?: InputMaybe<Order_By>;
  retainedEarnings?: InputMaybe<Order_By>;
  returnOnAssets?: InputMaybe<Order_By>;
  returnOnCapitalEmployed?: InputMaybe<Order_By>;
  returnOnEquity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  rndOverGrossProfit?: InputMaybe<Order_By>;
  sgr?: InputMaybe<Order_By>;
  shortTermDebt?: InputMaybe<Order_By>;
  stocksNumber?: InputMaybe<Order_By>;
  totalCurrentAssets?: InputMaybe<Order_By>;
  totalCurrentLiabilities?: InputMaybe<Order_By>;
  totalEquity?: InputMaybe<Order_By>;
  totalNonCurrentAssets?: InputMaybe<Order_By>;
  totalNonCurrentLiabilities?: InputMaybe<Order_By>;
  totalStockholdersEquity?: InputMaybe<Order_By>;
  vbaOverGrossProfit?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sheet". All fields are combined with a logical 'AND'. */
export type Sheet_Bool_Exp = {
  _and?: InputMaybe<Array<Sheet_Bool_Exp>>;
  _not?: InputMaybe<Sheet_Bool_Exp>;
  _or?: InputMaybe<Array<Sheet_Bool_Exp>>;
  accountPayables?: InputMaybe<Float_Comparison_Exp>;
  accumulatedOtherComprehensiveIncomeLoss?: InputMaybe<Float_Comparison_Exp>;
  annualMarketCap?: InputMaybe<Float_Comparison_Exp>;
  buybackYield?: InputMaybe<Float_Comparison_Exp>;
  capexOverNetIncome?: InputMaybe<Float_Comparison_Exp>;
  cashAndShortTermInvestments?: InputMaybe<Float_Comparison_Exp>;
  cashFlowToDebtRatio?: InputMaybe<Float_Comparison_Exp>;
  commonStock?: InputMaybe<Float_Comparison_Exp>;
  companyEquityMultiplier?: InputMaybe<Float_Comparison_Exp>;
  companyId?: InputMaybe<Int_Comparison_Exp>;
  currentRatio?: InputMaybe<Float_Comparison_Exp>;
  debtEquityRatio?: InputMaybe<Float_Comparison_Exp>;
  debtToIncome?: InputMaybe<Float_Comparison_Exp>;
  deferredRevenue?: InputMaybe<Float_Comparison_Exp>;
  dividendYield?: InputMaybe<Float_Comparison_Exp>;
  freeCashFlow?: InputMaybe<Float_Comparison_Exp>;
  goodwill?: InputMaybe<Float_Comparison_Exp>;
  grossProfit?: InputMaybe<Float_Comparison_Exp>;
  grossProfitMargin?: InputMaybe<Float_Comparison_Exp>;
  intangibleAssets?: InputMaybe<Float_Comparison_Exp>;
  interestCoverage?: InputMaybe<Float_Comparison_Exp>;
  interestOverRex?: InputMaybe<Float_Comparison_Exp>;
  inventory?: InputMaybe<Float_Comparison_Exp>;
  longTermDebt?: InputMaybe<Float_Comparison_Exp>;
  longTermInvestments?: InputMaybe<Float_Comparison_Exp>;
  netIncome?: InputMaybe<Float_Comparison_Exp>;
  netProfitMargin?: InputMaybe<Float_Comparison_Exp>;
  netReceivables?: InputMaybe<Float_Comparison_Exp>;
  operatingProfitMargin?: InputMaybe<Float_Comparison_Exp>;
  otherCurrentAssets?: InputMaybe<Float_Comparison_Exp>;
  otherCurrentLiabilities?: InputMaybe<Float_Comparison_Exp>;
  otherNonCurrentAssets?: InputMaybe<Float_Comparison_Exp>;
  otherNonCurrentLiabilities?: InputMaybe<Float_Comparison_Exp>;
  payoutRatio?: InputMaybe<Float_Comparison_Exp>;
  priceToBookRatio?: InputMaybe<Float_Comparison_Exp>;
  propertyPlantEquipmentNet?: InputMaybe<Float_Comparison_Exp>;
  quickRatio?: InputMaybe<Float_Comparison_Exp>;
  retainedEarnings?: InputMaybe<Float_Comparison_Exp>;
  returnOnAssets?: InputMaybe<Float_Comparison_Exp>;
  returnOnCapitalEmployed?: InputMaybe<Float_Comparison_Exp>;
  returnOnEquity?: InputMaybe<Float_Comparison_Exp>;
  revenue?: InputMaybe<Float_Comparison_Exp>;
  rndOverGrossProfit?: InputMaybe<Float_Comparison_Exp>;
  sgr?: InputMaybe<Float_Comparison_Exp>;
  shortTermDebt?: InputMaybe<Float_Comparison_Exp>;
  stocksNumber?: InputMaybe<Float_Comparison_Exp>;
  totalCurrentAssets?: InputMaybe<Float_Comparison_Exp>;
  totalCurrentLiabilities?: InputMaybe<Float_Comparison_Exp>;
  totalEquity?: InputMaybe<Float_Comparison_Exp>;
  totalNonCurrentAssets?: InputMaybe<Float_Comparison_Exp>;
  totalNonCurrentLiabilities?: InputMaybe<Float_Comparison_Exp>;
  totalStockholdersEquity?: InputMaybe<Float_Comparison_Exp>;
  vbaOverGrossProfit?: InputMaybe<Float_Comparison_Exp>;
  year?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "sheet" */
export enum Sheet_Constraint {
  /** unique or primary key constraint on columns "year", "companyId" */
  SheetPkey = 'sheet_pkey'
}

/** input type for incrementing numeric columns in table "sheet" */
export type Sheet_Inc_Input = {
  accountPayables?: InputMaybe<Scalars['Float']>;
  accumulatedOtherComprehensiveIncomeLoss?: InputMaybe<Scalars['Float']>;
  annualMarketCap?: InputMaybe<Scalars['Float']>;
  buybackYield?: InputMaybe<Scalars['Float']>;
  capexOverNetIncome?: InputMaybe<Scalars['Float']>;
  cashAndShortTermInvestments?: InputMaybe<Scalars['Float']>;
  cashFlowToDebtRatio?: InputMaybe<Scalars['Float']>;
  commonStock?: InputMaybe<Scalars['Float']>;
  companyEquityMultiplier?: InputMaybe<Scalars['Float']>;
  companyId?: InputMaybe<Scalars['Int']>;
  currentRatio?: InputMaybe<Scalars['Float']>;
  debtEquityRatio?: InputMaybe<Scalars['Float']>;
  debtToIncome?: InputMaybe<Scalars['Float']>;
  deferredRevenue?: InputMaybe<Scalars['Float']>;
  dividendYield?: InputMaybe<Scalars['Float']>;
  freeCashFlow?: InputMaybe<Scalars['Float']>;
  goodwill?: InputMaybe<Scalars['Float']>;
  grossProfit?: InputMaybe<Scalars['Float']>;
  grossProfitMargin?: InputMaybe<Scalars['Float']>;
  intangibleAssets?: InputMaybe<Scalars['Float']>;
  interestCoverage?: InputMaybe<Scalars['Float']>;
  interestOverRex?: InputMaybe<Scalars['Float']>;
  inventory?: InputMaybe<Scalars['Float']>;
  longTermDebt?: InputMaybe<Scalars['Float']>;
  longTermInvestments?: InputMaybe<Scalars['Float']>;
  netIncome?: InputMaybe<Scalars['Float']>;
  netProfitMargin?: InputMaybe<Scalars['Float']>;
  netReceivables?: InputMaybe<Scalars['Float']>;
  operatingProfitMargin?: InputMaybe<Scalars['Float']>;
  otherCurrentAssets?: InputMaybe<Scalars['Float']>;
  otherCurrentLiabilities?: InputMaybe<Scalars['Float']>;
  otherNonCurrentAssets?: InputMaybe<Scalars['Float']>;
  otherNonCurrentLiabilities?: InputMaybe<Scalars['Float']>;
  payoutRatio?: InputMaybe<Scalars['Float']>;
  priceToBookRatio?: InputMaybe<Scalars['Float']>;
  propertyPlantEquipmentNet?: InputMaybe<Scalars['Float']>;
  quickRatio?: InputMaybe<Scalars['Float']>;
  retainedEarnings?: InputMaybe<Scalars['Float']>;
  returnOnAssets?: InputMaybe<Scalars['Float']>;
  returnOnCapitalEmployed?: InputMaybe<Scalars['Float']>;
  returnOnEquity?: InputMaybe<Scalars['Float']>;
  revenue?: InputMaybe<Scalars['Float']>;
  rndOverGrossProfit?: InputMaybe<Scalars['Float']>;
  sgr?: InputMaybe<Scalars['Float']>;
  shortTermDebt?: InputMaybe<Scalars['Float']>;
  stocksNumber?: InputMaybe<Scalars['Float']>;
  totalCurrentAssets?: InputMaybe<Scalars['Float']>;
  totalCurrentLiabilities?: InputMaybe<Scalars['Float']>;
  totalEquity?: InputMaybe<Scalars['Float']>;
  totalNonCurrentAssets?: InputMaybe<Scalars['Float']>;
  totalNonCurrentLiabilities?: InputMaybe<Scalars['Float']>;
  totalStockholdersEquity?: InputMaybe<Scalars['Float']>;
  vbaOverGrossProfit?: InputMaybe<Scalars['Float']>;
  year?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "sheet" */
export type Sheet_Insert_Input = {
  accountPayables?: InputMaybe<Scalars['Float']>;
  accumulatedOtherComprehensiveIncomeLoss?: InputMaybe<Scalars['Float']>;
  annualMarketCap?: InputMaybe<Scalars['Float']>;
  buybackYield?: InputMaybe<Scalars['Float']>;
  capexOverNetIncome?: InputMaybe<Scalars['Float']>;
  cashAndShortTermInvestments?: InputMaybe<Scalars['Float']>;
  cashFlowToDebtRatio?: InputMaybe<Scalars['Float']>;
  commonStock?: InputMaybe<Scalars['Float']>;
  companyEquityMultiplier?: InputMaybe<Scalars['Float']>;
  companyId?: InputMaybe<Scalars['Int']>;
  currentRatio?: InputMaybe<Scalars['Float']>;
  debtEquityRatio?: InputMaybe<Scalars['Float']>;
  debtToIncome?: InputMaybe<Scalars['Float']>;
  deferredRevenue?: InputMaybe<Scalars['Float']>;
  dividendYield?: InputMaybe<Scalars['Float']>;
  freeCashFlow?: InputMaybe<Scalars['Float']>;
  goodwill?: InputMaybe<Scalars['Float']>;
  grossProfit?: InputMaybe<Scalars['Float']>;
  grossProfitMargin?: InputMaybe<Scalars['Float']>;
  intangibleAssets?: InputMaybe<Scalars['Float']>;
  interestCoverage?: InputMaybe<Scalars['Float']>;
  interestOverRex?: InputMaybe<Scalars['Float']>;
  inventory?: InputMaybe<Scalars['Float']>;
  longTermDebt?: InputMaybe<Scalars['Float']>;
  longTermInvestments?: InputMaybe<Scalars['Float']>;
  netIncome?: InputMaybe<Scalars['Float']>;
  netProfitMargin?: InputMaybe<Scalars['Float']>;
  netReceivables?: InputMaybe<Scalars['Float']>;
  operatingProfitMargin?: InputMaybe<Scalars['Float']>;
  otherCurrentAssets?: InputMaybe<Scalars['Float']>;
  otherCurrentLiabilities?: InputMaybe<Scalars['Float']>;
  otherNonCurrentAssets?: InputMaybe<Scalars['Float']>;
  otherNonCurrentLiabilities?: InputMaybe<Scalars['Float']>;
  payoutRatio?: InputMaybe<Scalars['Float']>;
  priceToBookRatio?: InputMaybe<Scalars['Float']>;
  propertyPlantEquipmentNet?: InputMaybe<Scalars['Float']>;
  quickRatio?: InputMaybe<Scalars['Float']>;
  retainedEarnings?: InputMaybe<Scalars['Float']>;
  returnOnAssets?: InputMaybe<Scalars['Float']>;
  returnOnCapitalEmployed?: InputMaybe<Scalars['Float']>;
  returnOnEquity?: InputMaybe<Scalars['Float']>;
  revenue?: InputMaybe<Scalars['Float']>;
  rndOverGrossProfit?: InputMaybe<Scalars['Float']>;
  sgr?: InputMaybe<Scalars['Float']>;
  shortTermDebt?: InputMaybe<Scalars['Float']>;
  stocksNumber?: InputMaybe<Scalars['Float']>;
  totalCurrentAssets?: InputMaybe<Scalars['Float']>;
  totalCurrentLiabilities?: InputMaybe<Scalars['Float']>;
  totalEquity?: InputMaybe<Scalars['Float']>;
  totalNonCurrentAssets?: InputMaybe<Scalars['Float']>;
  totalNonCurrentLiabilities?: InputMaybe<Scalars['Float']>;
  totalStockholdersEquity?: InputMaybe<Scalars['Float']>;
  vbaOverGrossProfit?: InputMaybe<Scalars['Float']>;
  year?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Sheet_Max_Fields = {
  __typename?: 'sheet_max_fields';
  accountPayables?: Maybe<Scalars['Float']>;
  accumulatedOtherComprehensiveIncomeLoss?: Maybe<Scalars['Float']>;
  annualMarketCap?: Maybe<Scalars['Float']>;
  buybackYield?: Maybe<Scalars['Float']>;
  capexOverNetIncome?: Maybe<Scalars['Float']>;
  cashAndShortTermInvestments?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatio?: Maybe<Scalars['Float']>;
  commonStock?: Maybe<Scalars['Float']>;
  companyEquityMultiplier?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Int']>;
  currentRatio?: Maybe<Scalars['Float']>;
  debtEquityRatio?: Maybe<Scalars['Float']>;
  debtToIncome?: Maybe<Scalars['Float']>;
  deferredRevenue?: Maybe<Scalars['Float']>;
  dividendYield?: Maybe<Scalars['Float']>;
  freeCashFlow?: Maybe<Scalars['Float']>;
  goodwill?: Maybe<Scalars['Float']>;
  grossProfit?: Maybe<Scalars['Float']>;
  grossProfitMargin?: Maybe<Scalars['Float']>;
  intangibleAssets?: Maybe<Scalars['Float']>;
  interestCoverage?: Maybe<Scalars['Float']>;
  interestOverRex?: Maybe<Scalars['Float']>;
  inventory?: Maybe<Scalars['Float']>;
  longTermDebt?: Maybe<Scalars['Float']>;
  longTermInvestments?: Maybe<Scalars['Float']>;
  netIncome?: Maybe<Scalars['Float']>;
  netProfitMargin?: Maybe<Scalars['Float']>;
  netReceivables?: Maybe<Scalars['Float']>;
  operatingProfitMargin?: Maybe<Scalars['Float']>;
  otherCurrentAssets?: Maybe<Scalars['Float']>;
  otherCurrentLiabilities?: Maybe<Scalars['Float']>;
  otherNonCurrentAssets?: Maybe<Scalars['Float']>;
  otherNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  payoutRatio?: Maybe<Scalars['Float']>;
  priceToBookRatio?: Maybe<Scalars['Float']>;
  propertyPlantEquipmentNet?: Maybe<Scalars['Float']>;
  quickRatio?: Maybe<Scalars['Float']>;
  retainedEarnings?: Maybe<Scalars['Float']>;
  returnOnAssets?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployed?: Maybe<Scalars['Float']>;
  returnOnEquity?: Maybe<Scalars['Float']>;
  revenue?: Maybe<Scalars['Float']>;
  rndOverGrossProfit?: Maybe<Scalars['Float']>;
  sgr?: Maybe<Scalars['Float']>;
  shortTermDebt?: Maybe<Scalars['Float']>;
  stocksNumber?: Maybe<Scalars['Float']>;
  totalCurrentAssets?: Maybe<Scalars['Float']>;
  totalCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalEquity?: Maybe<Scalars['Float']>;
  totalNonCurrentAssets?: Maybe<Scalars['Float']>;
  totalNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalStockholdersEquity?: Maybe<Scalars['Float']>;
  vbaOverGrossProfit?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "sheet" */
export type Sheet_Max_Order_By = {
  accountPayables?: InputMaybe<Order_By>;
  accumulatedOtherComprehensiveIncomeLoss?: InputMaybe<Order_By>;
  annualMarketCap?: InputMaybe<Order_By>;
  buybackYield?: InputMaybe<Order_By>;
  capexOverNetIncome?: InputMaybe<Order_By>;
  cashAndShortTermInvestments?: InputMaybe<Order_By>;
  cashFlowToDebtRatio?: InputMaybe<Order_By>;
  commonStock?: InputMaybe<Order_By>;
  companyEquityMultiplier?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  currentRatio?: InputMaybe<Order_By>;
  debtEquityRatio?: InputMaybe<Order_By>;
  debtToIncome?: InputMaybe<Order_By>;
  deferredRevenue?: InputMaybe<Order_By>;
  dividendYield?: InputMaybe<Order_By>;
  freeCashFlow?: InputMaybe<Order_By>;
  goodwill?: InputMaybe<Order_By>;
  grossProfit?: InputMaybe<Order_By>;
  grossProfitMargin?: InputMaybe<Order_By>;
  intangibleAssets?: InputMaybe<Order_By>;
  interestCoverage?: InputMaybe<Order_By>;
  interestOverRex?: InputMaybe<Order_By>;
  inventory?: InputMaybe<Order_By>;
  longTermDebt?: InputMaybe<Order_By>;
  longTermInvestments?: InputMaybe<Order_By>;
  netIncome?: InputMaybe<Order_By>;
  netProfitMargin?: InputMaybe<Order_By>;
  netReceivables?: InputMaybe<Order_By>;
  operatingProfitMargin?: InputMaybe<Order_By>;
  otherCurrentAssets?: InputMaybe<Order_By>;
  otherCurrentLiabilities?: InputMaybe<Order_By>;
  otherNonCurrentAssets?: InputMaybe<Order_By>;
  otherNonCurrentLiabilities?: InputMaybe<Order_By>;
  payoutRatio?: InputMaybe<Order_By>;
  priceToBookRatio?: InputMaybe<Order_By>;
  propertyPlantEquipmentNet?: InputMaybe<Order_By>;
  quickRatio?: InputMaybe<Order_By>;
  retainedEarnings?: InputMaybe<Order_By>;
  returnOnAssets?: InputMaybe<Order_By>;
  returnOnCapitalEmployed?: InputMaybe<Order_By>;
  returnOnEquity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  rndOverGrossProfit?: InputMaybe<Order_By>;
  sgr?: InputMaybe<Order_By>;
  shortTermDebt?: InputMaybe<Order_By>;
  stocksNumber?: InputMaybe<Order_By>;
  totalCurrentAssets?: InputMaybe<Order_By>;
  totalCurrentLiabilities?: InputMaybe<Order_By>;
  totalEquity?: InputMaybe<Order_By>;
  totalNonCurrentAssets?: InputMaybe<Order_By>;
  totalNonCurrentLiabilities?: InputMaybe<Order_By>;
  totalStockholdersEquity?: InputMaybe<Order_By>;
  vbaOverGrossProfit?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sheet_Min_Fields = {
  __typename?: 'sheet_min_fields';
  accountPayables?: Maybe<Scalars['Float']>;
  accumulatedOtherComprehensiveIncomeLoss?: Maybe<Scalars['Float']>;
  annualMarketCap?: Maybe<Scalars['Float']>;
  buybackYield?: Maybe<Scalars['Float']>;
  capexOverNetIncome?: Maybe<Scalars['Float']>;
  cashAndShortTermInvestments?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatio?: Maybe<Scalars['Float']>;
  commonStock?: Maybe<Scalars['Float']>;
  companyEquityMultiplier?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Int']>;
  currentRatio?: Maybe<Scalars['Float']>;
  debtEquityRatio?: Maybe<Scalars['Float']>;
  debtToIncome?: Maybe<Scalars['Float']>;
  deferredRevenue?: Maybe<Scalars['Float']>;
  dividendYield?: Maybe<Scalars['Float']>;
  freeCashFlow?: Maybe<Scalars['Float']>;
  goodwill?: Maybe<Scalars['Float']>;
  grossProfit?: Maybe<Scalars['Float']>;
  grossProfitMargin?: Maybe<Scalars['Float']>;
  intangibleAssets?: Maybe<Scalars['Float']>;
  interestCoverage?: Maybe<Scalars['Float']>;
  interestOverRex?: Maybe<Scalars['Float']>;
  inventory?: Maybe<Scalars['Float']>;
  longTermDebt?: Maybe<Scalars['Float']>;
  longTermInvestments?: Maybe<Scalars['Float']>;
  netIncome?: Maybe<Scalars['Float']>;
  netProfitMargin?: Maybe<Scalars['Float']>;
  netReceivables?: Maybe<Scalars['Float']>;
  operatingProfitMargin?: Maybe<Scalars['Float']>;
  otherCurrentAssets?: Maybe<Scalars['Float']>;
  otherCurrentLiabilities?: Maybe<Scalars['Float']>;
  otherNonCurrentAssets?: Maybe<Scalars['Float']>;
  otherNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  payoutRatio?: Maybe<Scalars['Float']>;
  priceToBookRatio?: Maybe<Scalars['Float']>;
  propertyPlantEquipmentNet?: Maybe<Scalars['Float']>;
  quickRatio?: Maybe<Scalars['Float']>;
  retainedEarnings?: Maybe<Scalars['Float']>;
  returnOnAssets?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployed?: Maybe<Scalars['Float']>;
  returnOnEquity?: Maybe<Scalars['Float']>;
  revenue?: Maybe<Scalars['Float']>;
  rndOverGrossProfit?: Maybe<Scalars['Float']>;
  sgr?: Maybe<Scalars['Float']>;
  shortTermDebt?: Maybe<Scalars['Float']>;
  stocksNumber?: Maybe<Scalars['Float']>;
  totalCurrentAssets?: Maybe<Scalars['Float']>;
  totalCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalEquity?: Maybe<Scalars['Float']>;
  totalNonCurrentAssets?: Maybe<Scalars['Float']>;
  totalNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalStockholdersEquity?: Maybe<Scalars['Float']>;
  vbaOverGrossProfit?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "sheet" */
export type Sheet_Min_Order_By = {
  accountPayables?: InputMaybe<Order_By>;
  accumulatedOtherComprehensiveIncomeLoss?: InputMaybe<Order_By>;
  annualMarketCap?: InputMaybe<Order_By>;
  buybackYield?: InputMaybe<Order_By>;
  capexOverNetIncome?: InputMaybe<Order_By>;
  cashAndShortTermInvestments?: InputMaybe<Order_By>;
  cashFlowToDebtRatio?: InputMaybe<Order_By>;
  commonStock?: InputMaybe<Order_By>;
  companyEquityMultiplier?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  currentRatio?: InputMaybe<Order_By>;
  debtEquityRatio?: InputMaybe<Order_By>;
  debtToIncome?: InputMaybe<Order_By>;
  deferredRevenue?: InputMaybe<Order_By>;
  dividendYield?: InputMaybe<Order_By>;
  freeCashFlow?: InputMaybe<Order_By>;
  goodwill?: InputMaybe<Order_By>;
  grossProfit?: InputMaybe<Order_By>;
  grossProfitMargin?: InputMaybe<Order_By>;
  intangibleAssets?: InputMaybe<Order_By>;
  interestCoverage?: InputMaybe<Order_By>;
  interestOverRex?: InputMaybe<Order_By>;
  inventory?: InputMaybe<Order_By>;
  longTermDebt?: InputMaybe<Order_By>;
  longTermInvestments?: InputMaybe<Order_By>;
  netIncome?: InputMaybe<Order_By>;
  netProfitMargin?: InputMaybe<Order_By>;
  netReceivables?: InputMaybe<Order_By>;
  operatingProfitMargin?: InputMaybe<Order_By>;
  otherCurrentAssets?: InputMaybe<Order_By>;
  otherCurrentLiabilities?: InputMaybe<Order_By>;
  otherNonCurrentAssets?: InputMaybe<Order_By>;
  otherNonCurrentLiabilities?: InputMaybe<Order_By>;
  payoutRatio?: InputMaybe<Order_By>;
  priceToBookRatio?: InputMaybe<Order_By>;
  propertyPlantEquipmentNet?: InputMaybe<Order_By>;
  quickRatio?: InputMaybe<Order_By>;
  retainedEarnings?: InputMaybe<Order_By>;
  returnOnAssets?: InputMaybe<Order_By>;
  returnOnCapitalEmployed?: InputMaybe<Order_By>;
  returnOnEquity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  rndOverGrossProfit?: InputMaybe<Order_By>;
  sgr?: InputMaybe<Order_By>;
  shortTermDebt?: InputMaybe<Order_By>;
  stocksNumber?: InputMaybe<Order_By>;
  totalCurrentAssets?: InputMaybe<Order_By>;
  totalCurrentLiabilities?: InputMaybe<Order_By>;
  totalEquity?: InputMaybe<Order_By>;
  totalNonCurrentAssets?: InputMaybe<Order_By>;
  totalNonCurrentLiabilities?: InputMaybe<Order_By>;
  totalStockholdersEquity?: InputMaybe<Order_By>;
  vbaOverGrossProfit?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sheet" */
export type Sheet_Mutation_Response = {
  __typename?: 'sheet_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sheet>;
};

/** on_conflict condition type for table "sheet" */
export type Sheet_On_Conflict = {
  constraint: Sheet_Constraint;
  update_columns?: Array<Sheet_Update_Column>;
  where?: InputMaybe<Sheet_Bool_Exp>;
};

/** Ordering options when selecting data from "sheet". */
export type Sheet_Order_By = {
  accountPayables?: InputMaybe<Order_By>;
  accumulatedOtherComprehensiveIncomeLoss?: InputMaybe<Order_By>;
  annualMarketCap?: InputMaybe<Order_By>;
  buybackYield?: InputMaybe<Order_By>;
  capexOverNetIncome?: InputMaybe<Order_By>;
  cashAndShortTermInvestments?: InputMaybe<Order_By>;
  cashFlowToDebtRatio?: InputMaybe<Order_By>;
  commonStock?: InputMaybe<Order_By>;
  companyEquityMultiplier?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  currentRatio?: InputMaybe<Order_By>;
  debtEquityRatio?: InputMaybe<Order_By>;
  debtToIncome?: InputMaybe<Order_By>;
  deferredRevenue?: InputMaybe<Order_By>;
  dividendYield?: InputMaybe<Order_By>;
  freeCashFlow?: InputMaybe<Order_By>;
  goodwill?: InputMaybe<Order_By>;
  grossProfit?: InputMaybe<Order_By>;
  grossProfitMargin?: InputMaybe<Order_By>;
  intangibleAssets?: InputMaybe<Order_By>;
  interestCoverage?: InputMaybe<Order_By>;
  interestOverRex?: InputMaybe<Order_By>;
  inventory?: InputMaybe<Order_By>;
  longTermDebt?: InputMaybe<Order_By>;
  longTermInvestments?: InputMaybe<Order_By>;
  netIncome?: InputMaybe<Order_By>;
  netProfitMargin?: InputMaybe<Order_By>;
  netReceivables?: InputMaybe<Order_By>;
  operatingProfitMargin?: InputMaybe<Order_By>;
  otherCurrentAssets?: InputMaybe<Order_By>;
  otherCurrentLiabilities?: InputMaybe<Order_By>;
  otherNonCurrentAssets?: InputMaybe<Order_By>;
  otherNonCurrentLiabilities?: InputMaybe<Order_By>;
  payoutRatio?: InputMaybe<Order_By>;
  priceToBookRatio?: InputMaybe<Order_By>;
  propertyPlantEquipmentNet?: InputMaybe<Order_By>;
  quickRatio?: InputMaybe<Order_By>;
  retainedEarnings?: InputMaybe<Order_By>;
  returnOnAssets?: InputMaybe<Order_By>;
  returnOnCapitalEmployed?: InputMaybe<Order_By>;
  returnOnEquity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  rndOverGrossProfit?: InputMaybe<Order_By>;
  sgr?: InputMaybe<Order_By>;
  shortTermDebt?: InputMaybe<Order_By>;
  stocksNumber?: InputMaybe<Order_By>;
  totalCurrentAssets?: InputMaybe<Order_By>;
  totalCurrentLiabilities?: InputMaybe<Order_By>;
  totalEquity?: InputMaybe<Order_By>;
  totalNonCurrentAssets?: InputMaybe<Order_By>;
  totalNonCurrentLiabilities?: InputMaybe<Order_By>;
  totalStockholdersEquity?: InputMaybe<Order_By>;
  vbaOverGrossProfit?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sheet */
export type Sheet_Pk_Columns_Input = {
  companyId: Scalars['Int'];
  year: Scalars['Int'];
};

/** select columns of table "sheet" */
export enum Sheet_Select_Column {
  /** column name */
  AccountPayables = 'accountPayables',
  /** column name */
  AccumulatedOtherComprehensiveIncomeLoss = 'accumulatedOtherComprehensiveIncomeLoss',
  /** column name */
  AnnualMarketCap = 'annualMarketCap',
  /** column name */
  BuybackYield = 'buybackYield',
  /** column name */
  CapexOverNetIncome = 'capexOverNetIncome',
  /** column name */
  CashAndShortTermInvestments = 'cashAndShortTermInvestments',
  /** column name */
  CashFlowToDebtRatio = 'cashFlowToDebtRatio',
  /** column name */
  CommonStock = 'commonStock',
  /** column name */
  CompanyEquityMultiplier = 'companyEquityMultiplier',
  /** column name */
  CompanyId = 'companyId',
  /** column name */
  CurrentRatio = 'currentRatio',
  /** column name */
  DebtEquityRatio = 'debtEquityRatio',
  /** column name */
  DebtToIncome = 'debtToIncome',
  /** column name */
  DeferredRevenue = 'deferredRevenue',
  /** column name */
  DividendYield = 'dividendYield',
  /** column name */
  FreeCashFlow = 'freeCashFlow',
  /** column name */
  Goodwill = 'goodwill',
  /** column name */
  GrossProfit = 'grossProfit',
  /** column name */
  GrossProfitMargin = 'grossProfitMargin',
  /** column name */
  IntangibleAssets = 'intangibleAssets',
  /** column name */
  InterestCoverage = 'interestCoverage',
  /** column name */
  InterestOverRex = 'interestOverRex',
  /** column name */
  Inventory = 'inventory',
  /** column name */
  LongTermDebt = 'longTermDebt',
  /** column name */
  LongTermInvestments = 'longTermInvestments',
  /** column name */
  NetIncome = 'netIncome',
  /** column name */
  NetProfitMargin = 'netProfitMargin',
  /** column name */
  NetReceivables = 'netReceivables',
  /** column name */
  OperatingProfitMargin = 'operatingProfitMargin',
  /** column name */
  OtherCurrentAssets = 'otherCurrentAssets',
  /** column name */
  OtherCurrentLiabilities = 'otherCurrentLiabilities',
  /** column name */
  OtherNonCurrentAssets = 'otherNonCurrentAssets',
  /** column name */
  OtherNonCurrentLiabilities = 'otherNonCurrentLiabilities',
  /** column name */
  PayoutRatio = 'payoutRatio',
  /** column name */
  PriceToBookRatio = 'priceToBookRatio',
  /** column name */
  PropertyPlantEquipmentNet = 'propertyPlantEquipmentNet',
  /** column name */
  QuickRatio = 'quickRatio',
  /** column name */
  RetainedEarnings = 'retainedEarnings',
  /** column name */
  ReturnOnAssets = 'returnOnAssets',
  /** column name */
  ReturnOnCapitalEmployed = 'returnOnCapitalEmployed',
  /** column name */
  ReturnOnEquity = 'returnOnEquity',
  /** column name */
  Revenue = 'revenue',
  /** column name */
  RndOverGrossProfit = 'rndOverGrossProfit',
  /** column name */
  Sgr = 'sgr',
  /** column name */
  ShortTermDebt = 'shortTermDebt',
  /** column name */
  StocksNumber = 'stocksNumber',
  /** column name */
  TotalCurrentAssets = 'totalCurrentAssets',
  /** column name */
  TotalCurrentLiabilities = 'totalCurrentLiabilities',
  /** column name */
  TotalEquity = 'totalEquity',
  /** column name */
  TotalNonCurrentAssets = 'totalNonCurrentAssets',
  /** column name */
  TotalNonCurrentLiabilities = 'totalNonCurrentLiabilities',
  /** column name */
  TotalStockholdersEquity = 'totalStockholdersEquity',
  /** column name */
  VbaOverGrossProfit = 'vbaOverGrossProfit',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "sheet" */
export type Sheet_Set_Input = {
  accountPayables?: InputMaybe<Scalars['Float']>;
  accumulatedOtherComprehensiveIncomeLoss?: InputMaybe<Scalars['Float']>;
  annualMarketCap?: InputMaybe<Scalars['Float']>;
  buybackYield?: InputMaybe<Scalars['Float']>;
  capexOverNetIncome?: InputMaybe<Scalars['Float']>;
  cashAndShortTermInvestments?: InputMaybe<Scalars['Float']>;
  cashFlowToDebtRatio?: InputMaybe<Scalars['Float']>;
  commonStock?: InputMaybe<Scalars['Float']>;
  companyEquityMultiplier?: InputMaybe<Scalars['Float']>;
  companyId?: InputMaybe<Scalars['Int']>;
  currentRatio?: InputMaybe<Scalars['Float']>;
  debtEquityRatio?: InputMaybe<Scalars['Float']>;
  debtToIncome?: InputMaybe<Scalars['Float']>;
  deferredRevenue?: InputMaybe<Scalars['Float']>;
  dividendYield?: InputMaybe<Scalars['Float']>;
  freeCashFlow?: InputMaybe<Scalars['Float']>;
  goodwill?: InputMaybe<Scalars['Float']>;
  grossProfit?: InputMaybe<Scalars['Float']>;
  grossProfitMargin?: InputMaybe<Scalars['Float']>;
  intangibleAssets?: InputMaybe<Scalars['Float']>;
  interestCoverage?: InputMaybe<Scalars['Float']>;
  interestOverRex?: InputMaybe<Scalars['Float']>;
  inventory?: InputMaybe<Scalars['Float']>;
  longTermDebt?: InputMaybe<Scalars['Float']>;
  longTermInvestments?: InputMaybe<Scalars['Float']>;
  netIncome?: InputMaybe<Scalars['Float']>;
  netProfitMargin?: InputMaybe<Scalars['Float']>;
  netReceivables?: InputMaybe<Scalars['Float']>;
  operatingProfitMargin?: InputMaybe<Scalars['Float']>;
  otherCurrentAssets?: InputMaybe<Scalars['Float']>;
  otherCurrentLiabilities?: InputMaybe<Scalars['Float']>;
  otherNonCurrentAssets?: InputMaybe<Scalars['Float']>;
  otherNonCurrentLiabilities?: InputMaybe<Scalars['Float']>;
  payoutRatio?: InputMaybe<Scalars['Float']>;
  priceToBookRatio?: InputMaybe<Scalars['Float']>;
  propertyPlantEquipmentNet?: InputMaybe<Scalars['Float']>;
  quickRatio?: InputMaybe<Scalars['Float']>;
  retainedEarnings?: InputMaybe<Scalars['Float']>;
  returnOnAssets?: InputMaybe<Scalars['Float']>;
  returnOnCapitalEmployed?: InputMaybe<Scalars['Float']>;
  returnOnEquity?: InputMaybe<Scalars['Float']>;
  revenue?: InputMaybe<Scalars['Float']>;
  rndOverGrossProfit?: InputMaybe<Scalars['Float']>;
  sgr?: InputMaybe<Scalars['Float']>;
  shortTermDebt?: InputMaybe<Scalars['Float']>;
  stocksNumber?: InputMaybe<Scalars['Float']>;
  totalCurrentAssets?: InputMaybe<Scalars['Float']>;
  totalCurrentLiabilities?: InputMaybe<Scalars['Float']>;
  totalEquity?: InputMaybe<Scalars['Float']>;
  totalNonCurrentAssets?: InputMaybe<Scalars['Float']>;
  totalNonCurrentLiabilities?: InputMaybe<Scalars['Float']>;
  totalStockholdersEquity?: InputMaybe<Scalars['Float']>;
  vbaOverGrossProfit?: InputMaybe<Scalars['Float']>;
  year?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Sheet_Stddev_Fields = {
  __typename?: 'sheet_stddev_fields';
  accountPayables?: Maybe<Scalars['Float']>;
  accumulatedOtherComprehensiveIncomeLoss?: Maybe<Scalars['Float']>;
  annualMarketCap?: Maybe<Scalars['Float']>;
  buybackYield?: Maybe<Scalars['Float']>;
  capexOverNetIncome?: Maybe<Scalars['Float']>;
  cashAndShortTermInvestments?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatio?: Maybe<Scalars['Float']>;
  commonStock?: Maybe<Scalars['Float']>;
  companyEquityMultiplier?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Float']>;
  currentRatio?: Maybe<Scalars['Float']>;
  debtEquityRatio?: Maybe<Scalars['Float']>;
  debtToIncome?: Maybe<Scalars['Float']>;
  deferredRevenue?: Maybe<Scalars['Float']>;
  dividendYield?: Maybe<Scalars['Float']>;
  freeCashFlow?: Maybe<Scalars['Float']>;
  goodwill?: Maybe<Scalars['Float']>;
  grossProfit?: Maybe<Scalars['Float']>;
  grossProfitMargin?: Maybe<Scalars['Float']>;
  intangibleAssets?: Maybe<Scalars['Float']>;
  interestCoverage?: Maybe<Scalars['Float']>;
  interestOverRex?: Maybe<Scalars['Float']>;
  inventory?: Maybe<Scalars['Float']>;
  longTermDebt?: Maybe<Scalars['Float']>;
  longTermInvestments?: Maybe<Scalars['Float']>;
  netIncome?: Maybe<Scalars['Float']>;
  netProfitMargin?: Maybe<Scalars['Float']>;
  netReceivables?: Maybe<Scalars['Float']>;
  operatingProfitMargin?: Maybe<Scalars['Float']>;
  otherCurrentAssets?: Maybe<Scalars['Float']>;
  otherCurrentLiabilities?: Maybe<Scalars['Float']>;
  otherNonCurrentAssets?: Maybe<Scalars['Float']>;
  otherNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  payoutRatio?: Maybe<Scalars['Float']>;
  priceToBookRatio?: Maybe<Scalars['Float']>;
  propertyPlantEquipmentNet?: Maybe<Scalars['Float']>;
  quickRatio?: Maybe<Scalars['Float']>;
  retainedEarnings?: Maybe<Scalars['Float']>;
  returnOnAssets?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployed?: Maybe<Scalars['Float']>;
  returnOnEquity?: Maybe<Scalars['Float']>;
  revenue?: Maybe<Scalars['Float']>;
  rndOverGrossProfit?: Maybe<Scalars['Float']>;
  sgr?: Maybe<Scalars['Float']>;
  shortTermDebt?: Maybe<Scalars['Float']>;
  stocksNumber?: Maybe<Scalars['Float']>;
  totalCurrentAssets?: Maybe<Scalars['Float']>;
  totalCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalEquity?: Maybe<Scalars['Float']>;
  totalNonCurrentAssets?: Maybe<Scalars['Float']>;
  totalNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalStockholdersEquity?: Maybe<Scalars['Float']>;
  vbaOverGrossProfit?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "sheet" */
export type Sheet_Stddev_Order_By = {
  accountPayables?: InputMaybe<Order_By>;
  accumulatedOtherComprehensiveIncomeLoss?: InputMaybe<Order_By>;
  annualMarketCap?: InputMaybe<Order_By>;
  buybackYield?: InputMaybe<Order_By>;
  capexOverNetIncome?: InputMaybe<Order_By>;
  cashAndShortTermInvestments?: InputMaybe<Order_By>;
  cashFlowToDebtRatio?: InputMaybe<Order_By>;
  commonStock?: InputMaybe<Order_By>;
  companyEquityMultiplier?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  currentRatio?: InputMaybe<Order_By>;
  debtEquityRatio?: InputMaybe<Order_By>;
  debtToIncome?: InputMaybe<Order_By>;
  deferredRevenue?: InputMaybe<Order_By>;
  dividendYield?: InputMaybe<Order_By>;
  freeCashFlow?: InputMaybe<Order_By>;
  goodwill?: InputMaybe<Order_By>;
  grossProfit?: InputMaybe<Order_By>;
  grossProfitMargin?: InputMaybe<Order_By>;
  intangibleAssets?: InputMaybe<Order_By>;
  interestCoverage?: InputMaybe<Order_By>;
  interestOverRex?: InputMaybe<Order_By>;
  inventory?: InputMaybe<Order_By>;
  longTermDebt?: InputMaybe<Order_By>;
  longTermInvestments?: InputMaybe<Order_By>;
  netIncome?: InputMaybe<Order_By>;
  netProfitMargin?: InputMaybe<Order_By>;
  netReceivables?: InputMaybe<Order_By>;
  operatingProfitMargin?: InputMaybe<Order_By>;
  otherCurrentAssets?: InputMaybe<Order_By>;
  otherCurrentLiabilities?: InputMaybe<Order_By>;
  otherNonCurrentAssets?: InputMaybe<Order_By>;
  otherNonCurrentLiabilities?: InputMaybe<Order_By>;
  payoutRatio?: InputMaybe<Order_By>;
  priceToBookRatio?: InputMaybe<Order_By>;
  propertyPlantEquipmentNet?: InputMaybe<Order_By>;
  quickRatio?: InputMaybe<Order_By>;
  retainedEarnings?: InputMaybe<Order_By>;
  returnOnAssets?: InputMaybe<Order_By>;
  returnOnCapitalEmployed?: InputMaybe<Order_By>;
  returnOnEquity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  rndOverGrossProfit?: InputMaybe<Order_By>;
  sgr?: InputMaybe<Order_By>;
  shortTermDebt?: InputMaybe<Order_By>;
  stocksNumber?: InputMaybe<Order_By>;
  totalCurrentAssets?: InputMaybe<Order_By>;
  totalCurrentLiabilities?: InputMaybe<Order_By>;
  totalEquity?: InputMaybe<Order_By>;
  totalNonCurrentAssets?: InputMaybe<Order_By>;
  totalNonCurrentLiabilities?: InputMaybe<Order_By>;
  totalStockholdersEquity?: InputMaybe<Order_By>;
  vbaOverGrossProfit?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Sheet_Stddev_Pop_Fields = {
  __typename?: 'sheet_stddev_pop_fields';
  accountPayables?: Maybe<Scalars['Float']>;
  accumulatedOtherComprehensiveIncomeLoss?: Maybe<Scalars['Float']>;
  annualMarketCap?: Maybe<Scalars['Float']>;
  buybackYield?: Maybe<Scalars['Float']>;
  capexOverNetIncome?: Maybe<Scalars['Float']>;
  cashAndShortTermInvestments?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatio?: Maybe<Scalars['Float']>;
  commonStock?: Maybe<Scalars['Float']>;
  companyEquityMultiplier?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Float']>;
  currentRatio?: Maybe<Scalars['Float']>;
  debtEquityRatio?: Maybe<Scalars['Float']>;
  debtToIncome?: Maybe<Scalars['Float']>;
  deferredRevenue?: Maybe<Scalars['Float']>;
  dividendYield?: Maybe<Scalars['Float']>;
  freeCashFlow?: Maybe<Scalars['Float']>;
  goodwill?: Maybe<Scalars['Float']>;
  grossProfit?: Maybe<Scalars['Float']>;
  grossProfitMargin?: Maybe<Scalars['Float']>;
  intangibleAssets?: Maybe<Scalars['Float']>;
  interestCoverage?: Maybe<Scalars['Float']>;
  interestOverRex?: Maybe<Scalars['Float']>;
  inventory?: Maybe<Scalars['Float']>;
  longTermDebt?: Maybe<Scalars['Float']>;
  longTermInvestments?: Maybe<Scalars['Float']>;
  netIncome?: Maybe<Scalars['Float']>;
  netProfitMargin?: Maybe<Scalars['Float']>;
  netReceivables?: Maybe<Scalars['Float']>;
  operatingProfitMargin?: Maybe<Scalars['Float']>;
  otherCurrentAssets?: Maybe<Scalars['Float']>;
  otherCurrentLiabilities?: Maybe<Scalars['Float']>;
  otherNonCurrentAssets?: Maybe<Scalars['Float']>;
  otherNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  payoutRatio?: Maybe<Scalars['Float']>;
  priceToBookRatio?: Maybe<Scalars['Float']>;
  propertyPlantEquipmentNet?: Maybe<Scalars['Float']>;
  quickRatio?: Maybe<Scalars['Float']>;
  retainedEarnings?: Maybe<Scalars['Float']>;
  returnOnAssets?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployed?: Maybe<Scalars['Float']>;
  returnOnEquity?: Maybe<Scalars['Float']>;
  revenue?: Maybe<Scalars['Float']>;
  rndOverGrossProfit?: Maybe<Scalars['Float']>;
  sgr?: Maybe<Scalars['Float']>;
  shortTermDebt?: Maybe<Scalars['Float']>;
  stocksNumber?: Maybe<Scalars['Float']>;
  totalCurrentAssets?: Maybe<Scalars['Float']>;
  totalCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalEquity?: Maybe<Scalars['Float']>;
  totalNonCurrentAssets?: Maybe<Scalars['Float']>;
  totalNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalStockholdersEquity?: Maybe<Scalars['Float']>;
  vbaOverGrossProfit?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "sheet" */
export type Sheet_Stddev_Pop_Order_By = {
  accountPayables?: InputMaybe<Order_By>;
  accumulatedOtherComprehensiveIncomeLoss?: InputMaybe<Order_By>;
  annualMarketCap?: InputMaybe<Order_By>;
  buybackYield?: InputMaybe<Order_By>;
  capexOverNetIncome?: InputMaybe<Order_By>;
  cashAndShortTermInvestments?: InputMaybe<Order_By>;
  cashFlowToDebtRatio?: InputMaybe<Order_By>;
  commonStock?: InputMaybe<Order_By>;
  companyEquityMultiplier?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  currentRatio?: InputMaybe<Order_By>;
  debtEquityRatio?: InputMaybe<Order_By>;
  debtToIncome?: InputMaybe<Order_By>;
  deferredRevenue?: InputMaybe<Order_By>;
  dividendYield?: InputMaybe<Order_By>;
  freeCashFlow?: InputMaybe<Order_By>;
  goodwill?: InputMaybe<Order_By>;
  grossProfit?: InputMaybe<Order_By>;
  grossProfitMargin?: InputMaybe<Order_By>;
  intangibleAssets?: InputMaybe<Order_By>;
  interestCoverage?: InputMaybe<Order_By>;
  interestOverRex?: InputMaybe<Order_By>;
  inventory?: InputMaybe<Order_By>;
  longTermDebt?: InputMaybe<Order_By>;
  longTermInvestments?: InputMaybe<Order_By>;
  netIncome?: InputMaybe<Order_By>;
  netProfitMargin?: InputMaybe<Order_By>;
  netReceivables?: InputMaybe<Order_By>;
  operatingProfitMargin?: InputMaybe<Order_By>;
  otherCurrentAssets?: InputMaybe<Order_By>;
  otherCurrentLiabilities?: InputMaybe<Order_By>;
  otherNonCurrentAssets?: InputMaybe<Order_By>;
  otherNonCurrentLiabilities?: InputMaybe<Order_By>;
  payoutRatio?: InputMaybe<Order_By>;
  priceToBookRatio?: InputMaybe<Order_By>;
  propertyPlantEquipmentNet?: InputMaybe<Order_By>;
  quickRatio?: InputMaybe<Order_By>;
  retainedEarnings?: InputMaybe<Order_By>;
  returnOnAssets?: InputMaybe<Order_By>;
  returnOnCapitalEmployed?: InputMaybe<Order_By>;
  returnOnEquity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  rndOverGrossProfit?: InputMaybe<Order_By>;
  sgr?: InputMaybe<Order_By>;
  shortTermDebt?: InputMaybe<Order_By>;
  stocksNumber?: InputMaybe<Order_By>;
  totalCurrentAssets?: InputMaybe<Order_By>;
  totalCurrentLiabilities?: InputMaybe<Order_By>;
  totalEquity?: InputMaybe<Order_By>;
  totalNonCurrentAssets?: InputMaybe<Order_By>;
  totalNonCurrentLiabilities?: InputMaybe<Order_By>;
  totalStockholdersEquity?: InputMaybe<Order_By>;
  vbaOverGrossProfit?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Sheet_Stddev_Samp_Fields = {
  __typename?: 'sheet_stddev_samp_fields';
  accountPayables?: Maybe<Scalars['Float']>;
  accumulatedOtherComprehensiveIncomeLoss?: Maybe<Scalars['Float']>;
  annualMarketCap?: Maybe<Scalars['Float']>;
  buybackYield?: Maybe<Scalars['Float']>;
  capexOverNetIncome?: Maybe<Scalars['Float']>;
  cashAndShortTermInvestments?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatio?: Maybe<Scalars['Float']>;
  commonStock?: Maybe<Scalars['Float']>;
  companyEquityMultiplier?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Float']>;
  currentRatio?: Maybe<Scalars['Float']>;
  debtEquityRatio?: Maybe<Scalars['Float']>;
  debtToIncome?: Maybe<Scalars['Float']>;
  deferredRevenue?: Maybe<Scalars['Float']>;
  dividendYield?: Maybe<Scalars['Float']>;
  freeCashFlow?: Maybe<Scalars['Float']>;
  goodwill?: Maybe<Scalars['Float']>;
  grossProfit?: Maybe<Scalars['Float']>;
  grossProfitMargin?: Maybe<Scalars['Float']>;
  intangibleAssets?: Maybe<Scalars['Float']>;
  interestCoverage?: Maybe<Scalars['Float']>;
  interestOverRex?: Maybe<Scalars['Float']>;
  inventory?: Maybe<Scalars['Float']>;
  longTermDebt?: Maybe<Scalars['Float']>;
  longTermInvestments?: Maybe<Scalars['Float']>;
  netIncome?: Maybe<Scalars['Float']>;
  netProfitMargin?: Maybe<Scalars['Float']>;
  netReceivables?: Maybe<Scalars['Float']>;
  operatingProfitMargin?: Maybe<Scalars['Float']>;
  otherCurrentAssets?: Maybe<Scalars['Float']>;
  otherCurrentLiabilities?: Maybe<Scalars['Float']>;
  otherNonCurrentAssets?: Maybe<Scalars['Float']>;
  otherNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  payoutRatio?: Maybe<Scalars['Float']>;
  priceToBookRatio?: Maybe<Scalars['Float']>;
  propertyPlantEquipmentNet?: Maybe<Scalars['Float']>;
  quickRatio?: Maybe<Scalars['Float']>;
  retainedEarnings?: Maybe<Scalars['Float']>;
  returnOnAssets?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployed?: Maybe<Scalars['Float']>;
  returnOnEquity?: Maybe<Scalars['Float']>;
  revenue?: Maybe<Scalars['Float']>;
  rndOverGrossProfit?: Maybe<Scalars['Float']>;
  sgr?: Maybe<Scalars['Float']>;
  shortTermDebt?: Maybe<Scalars['Float']>;
  stocksNumber?: Maybe<Scalars['Float']>;
  totalCurrentAssets?: Maybe<Scalars['Float']>;
  totalCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalEquity?: Maybe<Scalars['Float']>;
  totalNonCurrentAssets?: Maybe<Scalars['Float']>;
  totalNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalStockholdersEquity?: Maybe<Scalars['Float']>;
  vbaOverGrossProfit?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "sheet" */
export type Sheet_Stddev_Samp_Order_By = {
  accountPayables?: InputMaybe<Order_By>;
  accumulatedOtherComprehensiveIncomeLoss?: InputMaybe<Order_By>;
  annualMarketCap?: InputMaybe<Order_By>;
  buybackYield?: InputMaybe<Order_By>;
  capexOverNetIncome?: InputMaybe<Order_By>;
  cashAndShortTermInvestments?: InputMaybe<Order_By>;
  cashFlowToDebtRatio?: InputMaybe<Order_By>;
  commonStock?: InputMaybe<Order_By>;
  companyEquityMultiplier?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  currentRatio?: InputMaybe<Order_By>;
  debtEquityRatio?: InputMaybe<Order_By>;
  debtToIncome?: InputMaybe<Order_By>;
  deferredRevenue?: InputMaybe<Order_By>;
  dividendYield?: InputMaybe<Order_By>;
  freeCashFlow?: InputMaybe<Order_By>;
  goodwill?: InputMaybe<Order_By>;
  grossProfit?: InputMaybe<Order_By>;
  grossProfitMargin?: InputMaybe<Order_By>;
  intangibleAssets?: InputMaybe<Order_By>;
  interestCoverage?: InputMaybe<Order_By>;
  interestOverRex?: InputMaybe<Order_By>;
  inventory?: InputMaybe<Order_By>;
  longTermDebt?: InputMaybe<Order_By>;
  longTermInvestments?: InputMaybe<Order_By>;
  netIncome?: InputMaybe<Order_By>;
  netProfitMargin?: InputMaybe<Order_By>;
  netReceivables?: InputMaybe<Order_By>;
  operatingProfitMargin?: InputMaybe<Order_By>;
  otherCurrentAssets?: InputMaybe<Order_By>;
  otherCurrentLiabilities?: InputMaybe<Order_By>;
  otherNonCurrentAssets?: InputMaybe<Order_By>;
  otherNonCurrentLiabilities?: InputMaybe<Order_By>;
  payoutRatio?: InputMaybe<Order_By>;
  priceToBookRatio?: InputMaybe<Order_By>;
  propertyPlantEquipmentNet?: InputMaybe<Order_By>;
  quickRatio?: InputMaybe<Order_By>;
  retainedEarnings?: InputMaybe<Order_By>;
  returnOnAssets?: InputMaybe<Order_By>;
  returnOnCapitalEmployed?: InputMaybe<Order_By>;
  returnOnEquity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  rndOverGrossProfit?: InputMaybe<Order_By>;
  sgr?: InputMaybe<Order_By>;
  shortTermDebt?: InputMaybe<Order_By>;
  stocksNumber?: InputMaybe<Order_By>;
  totalCurrentAssets?: InputMaybe<Order_By>;
  totalCurrentLiabilities?: InputMaybe<Order_By>;
  totalEquity?: InputMaybe<Order_By>;
  totalNonCurrentAssets?: InputMaybe<Order_By>;
  totalNonCurrentLiabilities?: InputMaybe<Order_By>;
  totalStockholdersEquity?: InputMaybe<Order_By>;
  vbaOverGrossProfit?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "sheet" */
export type Sheet_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sheet_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sheet_Stream_Cursor_Value_Input = {
  accountPayables?: InputMaybe<Scalars['Float']>;
  accumulatedOtherComprehensiveIncomeLoss?: InputMaybe<Scalars['Float']>;
  annualMarketCap?: InputMaybe<Scalars['Float']>;
  buybackYield?: InputMaybe<Scalars['Float']>;
  capexOverNetIncome?: InputMaybe<Scalars['Float']>;
  cashAndShortTermInvestments?: InputMaybe<Scalars['Float']>;
  cashFlowToDebtRatio?: InputMaybe<Scalars['Float']>;
  commonStock?: InputMaybe<Scalars['Float']>;
  companyEquityMultiplier?: InputMaybe<Scalars['Float']>;
  companyId?: InputMaybe<Scalars['Int']>;
  currentRatio?: InputMaybe<Scalars['Float']>;
  debtEquityRatio?: InputMaybe<Scalars['Float']>;
  debtToIncome?: InputMaybe<Scalars['Float']>;
  deferredRevenue?: InputMaybe<Scalars['Float']>;
  dividendYield?: InputMaybe<Scalars['Float']>;
  freeCashFlow?: InputMaybe<Scalars['Float']>;
  goodwill?: InputMaybe<Scalars['Float']>;
  grossProfit?: InputMaybe<Scalars['Float']>;
  grossProfitMargin?: InputMaybe<Scalars['Float']>;
  intangibleAssets?: InputMaybe<Scalars['Float']>;
  interestCoverage?: InputMaybe<Scalars['Float']>;
  interestOverRex?: InputMaybe<Scalars['Float']>;
  inventory?: InputMaybe<Scalars['Float']>;
  longTermDebt?: InputMaybe<Scalars['Float']>;
  longTermInvestments?: InputMaybe<Scalars['Float']>;
  netIncome?: InputMaybe<Scalars['Float']>;
  netProfitMargin?: InputMaybe<Scalars['Float']>;
  netReceivables?: InputMaybe<Scalars['Float']>;
  operatingProfitMargin?: InputMaybe<Scalars['Float']>;
  otherCurrentAssets?: InputMaybe<Scalars['Float']>;
  otherCurrentLiabilities?: InputMaybe<Scalars['Float']>;
  otherNonCurrentAssets?: InputMaybe<Scalars['Float']>;
  otherNonCurrentLiabilities?: InputMaybe<Scalars['Float']>;
  payoutRatio?: InputMaybe<Scalars['Float']>;
  priceToBookRatio?: InputMaybe<Scalars['Float']>;
  propertyPlantEquipmentNet?: InputMaybe<Scalars['Float']>;
  quickRatio?: InputMaybe<Scalars['Float']>;
  retainedEarnings?: InputMaybe<Scalars['Float']>;
  returnOnAssets?: InputMaybe<Scalars['Float']>;
  returnOnCapitalEmployed?: InputMaybe<Scalars['Float']>;
  returnOnEquity?: InputMaybe<Scalars['Float']>;
  revenue?: InputMaybe<Scalars['Float']>;
  rndOverGrossProfit?: InputMaybe<Scalars['Float']>;
  sgr?: InputMaybe<Scalars['Float']>;
  shortTermDebt?: InputMaybe<Scalars['Float']>;
  stocksNumber?: InputMaybe<Scalars['Float']>;
  totalCurrentAssets?: InputMaybe<Scalars['Float']>;
  totalCurrentLiabilities?: InputMaybe<Scalars['Float']>;
  totalEquity?: InputMaybe<Scalars['Float']>;
  totalNonCurrentAssets?: InputMaybe<Scalars['Float']>;
  totalNonCurrentLiabilities?: InputMaybe<Scalars['Float']>;
  totalStockholdersEquity?: InputMaybe<Scalars['Float']>;
  vbaOverGrossProfit?: InputMaybe<Scalars['Float']>;
  year?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Sheet_Sum_Fields = {
  __typename?: 'sheet_sum_fields';
  accountPayables?: Maybe<Scalars['Float']>;
  accumulatedOtherComprehensiveIncomeLoss?: Maybe<Scalars['Float']>;
  annualMarketCap?: Maybe<Scalars['Float']>;
  buybackYield?: Maybe<Scalars['Float']>;
  capexOverNetIncome?: Maybe<Scalars['Float']>;
  cashAndShortTermInvestments?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatio?: Maybe<Scalars['Float']>;
  commonStock?: Maybe<Scalars['Float']>;
  companyEquityMultiplier?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Int']>;
  currentRatio?: Maybe<Scalars['Float']>;
  debtEquityRatio?: Maybe<Scalars['Float']>;
  debtToIncome?: Maybe<Scalars['Float']>;
  deferredRevenue?: Maybe<Scalars['Float']>;
  dividendYield?: Maybe<Scalars['Float']>;
  freeCashFlow?: Maybe<Scalars['Float']>;
  goodwill?: Maybe<Scalars['Float']>;
  grossProfit?: Maybe<Scalars['Float']>;
  grossProfitMargin?: Maybe<Scalars['Float']>;
  intangibleAssets?: Maybe<Scalars['Float']>;
  interestCoverage?: Maybe<Scalars['Float']>;
  interestOverRex?: Maybe<Scalars['Float']>;
  inventory?: Maybe<Scalars['Float']>;
  longTermDebt?: Maybe<Scalars['Float']>;
  longTermInvestments?: Maybe<Scalars['Float']>;
  netIncome?: Maybe<Scalars['Float']>;
  netProfitMargin?: Maybe<Scalars['Float']>;
  netReceivables?: Maybe<Scalars['Float']>;
  operatingProfitMargin?: Maybe<Scalars['Float']>;
  otherCurrentAssets?: Maybe<Scalars['Float']>;
  otherCurrentLiabilities?: Maybe<Scalars['Float']>;
  otherNonCurrentAssets?: Maybe<Scalars['Float']>;
  otherNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  payoutRatio?: Maybe<Scalars['Float']>;
  priceToBookRatio?: Maybe<Scalars['Float']>;
  propertyPlantEquipmentNet?: Maybe<Scalars['Float']>;
  quickRatio?: Maybe<Scalars['Float']>;
  retainedEarnings?: Maybe<Scalars['Float']>;
  returnOnAssets?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployed?: Maybe<Scalars['Float']>;
  returnOnEquity?: Maybe<Scalars['Float']>;
  revenue?: Maybe<Scalars['Float']>;
  rndOverGrossProfit?: Maybe<Scalars['Float']>;
  sgr?: Maybe<Scalars['Float']>;
  shortTermDebt?: Maybe<Scalars['Float']>;
  stocksNumber?: Maybe<Scalars['Float']>;
  totalCurrentAssets?: Maybe<Scalars['Float']>;
  totalCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalEquity?: Maybe<Scalars['Float']>;
  totalNonCurrentAssets?: Maybe<Scalars['Float']>;
  totalNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalStockholdersEquity?: Maybe<Scalars['Float']>;
  vbaOverGrossProfit?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "sheet" */
export type Sheet_Sum_Order_By = {
  accountPayables?: InputMaybe<Order_By>;
  accumulatedOtherComprehensiveIncomeLoss?: InputMaybe<Order_By>;
  annualMarketCap?: InputMaybe<Order_By>;
  buybackYield?: InputMaybe<Order_By>;
  capexOverNetIncome?: InputMaybe<Order_By>;
  cashAndShortTermInvestments?: InputMaybe<Order_By>;
  cashFlowToDebtRatio?: InputMaybe<Order_By>;
  commonStock?: InputMaybe<Order_By>;
  companyEquityMultiplier?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  currentRatio?: InputMaybe<Order_By>;
  debtEquityRatio?: InputMaybe<Order_By>;
  debtToIncome?: InputMaybe<Order_By>;
  deferredRevenue?: InputMaybe<Order_By>;
  dividendYield?: InputMaybe<Order_By>;
  freeCashFlow?: InputMaybe<Order_By>;
  goodwill?: InputMaybe<Order_By>;
  grossProfit?: InputMaybe<Order_By>;
  grossProfitMargin?: InputMaybe<Order_By>;
  intangibleAssets?: InputMaybe<Order_By>;
  interestCoverage?: InputMaybe<Order_By>;
  interestOverRex?: InputMaybe<Order_By>;
  inventory?: InputMaybe<Order_By>;
  longTermDebt?: InputMaybe<Order_By>;
  longTermInvestments?: InputMaybe<Order_By>;
  netIncome?: InputMaybe<Order_By>;
  netProfitMargin?: InputMaybe<Order_By>;
  netReceivables?: InputMaybe<Order_By>;
  operatingProfitMargin?: InputMaybe<Order_By>;
  otherCurrentAssets?: InputMaybe<Order_By>;
  otherCurrentLiabilities?: InputMaybe<Order_By>;
  otherNonCurrentAssets?: InputMaybe<Order_By>;
  otherNonCurrentLiabilities?: InputMaybe<Order_By>;
  payoutRatio?: InputMaybe<Order_By>;
  priceToBookRatio?: InputMaybe<Order_By>;
  propertyPlantEquipmentNet?: InputMaybe<Order_By>;
  quickRatio?: InputMaybe<Order_By>;
  retainedEarnings?: InputMaybe<Order_By>;
  returnOnAssets?: InputMaybe<Order_By>;
  returnOnCapitalEmployed?: InputMaybe<Order_By>;
  returnOnEquity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  rndOverGrossProfit?: InputMaybe<Order_By>;
  sgr?: InputMaybe<Order_By>;
  shortTermDebt?: InputMaybe<Order_By>;
  stocksNumber?: InputMaybe<Order_By>;
  totalCurrentAssets?: InputMaybe<Order_By>;
  totalCurrentLiabilities?: InputMaybe<Order_By>;
  totalEquity?: InputMaybe<Order_By>;
  totalNonCurrentAssets?: InputMaybe<Order_By>;
  totalNonCurrentLiabilities?: InputMaybe<Order_By>;
  totalStockholdersEquity?: InputMaybe<Order_By>;
  vbaOverGrossProfit?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** update columns of table "sheet" */
export enum Sheet_Update_Column {
  /** column name */
  AccountPayables = 'accountPayables',
  /** column name */
  AccumulatedOtherComprehensiveIncomeLoss = 'accumulatedOtherComprehensiveIncomeLoss',
  /** column name */
  AnnualMarketCap = 'annualMarketCap',
  /** column name */
  BuybackYield = 'buybackYield',
  /** column name */
  CapexOverNetIncome = 'capexOverNetIncome',
  /** column name */
  CashAndShortTermInvestments = 'cashAndShortTermInvestments',
  /** column name */
  CashFlowToDebtRatio = 'cashFlowToDebtRatio',
  /** column name */
  CommonStock = 'commonStock',
  /** column name */
  CompanyEquityMultiplier = 'companyEquityMultiplier',
  /** column name */
  CompanyId = 'companyId',
  /** column name */
  CurrentRatio = 'currentRatio',
  /** column name */
  DebtEquityRatio = 'debtEquityRatio',
  /** column name */
  DebtToIncome = 'debtToIncome',
  /** column name */
  DeferredRevenue = 'deferredRevenue',
  /** column name */
  DividendYield = 'dividendYield',
  /** column name */
  FreeCashFlow = 'freeCashFlow',
  /** column name */
  Goodwill = 'goodwill',
  /** column name */
  GrossProfit = 'grossProfit',
  /** column name */
  GrossProfitMargin = 'grossProfitMargin',
  /** column name */
  IntangibleAssets = 'intangibleAssets',
  /** column name */
  InterestCoverage = 'interestCoverage',
  /** column name */
  InterestOverRex = 'interestOverRex',
  /** column name */
  Inventory = 'inventory',
  /** column name */
  LongTermDebt = 'longTermDebt',
  /** column name */
  LongTermInvestments = 'longTermInvestments',
  /** column name */
  NetIncome = 'netIncome',
  /** column name */
  NetProfitMargin = 'netProfitMargin',
  /** column name */
  NetReceivables = 'netReceivables',
  /** column name */
  OperatingProfitMargin = 'operatingProfitMargin',
  /** column name */
  OtherCurrentAssets = 'otherCurrentAssets',
  /** column name */
  OtherCurrentLiabilities = 'otherCurrentLiabilities',
  /** column name */
  OtherNonCurrentAssets = 'otherNonCurrentAssets',
  /** column name */
  OtherNonCurrentLiabilities = 'otherNonCurrentLiabilities',
  /** column name */
  PayoutRatio = 'payoutRatio',
  /** column name */
  PriceToBookRatio = 'priceToBookRatio',
  /** column name */
  PropertyPlantEquipmentNet = 'propertyPlantEquipmentNet',
  /** column name */
  QuickRatio = 'quickRatio',
  /** column name */
  RetainedEarnings = 'retainedEarnings',
  /** column name */
  ReturnOnAssets = 'returnOnAssets',
  /** column name */
  ReturnOnCapitalEmployed = 'returnOnCapitalEmployed',
  /** column name */
  ReturnOnEquity = 'returnOnEquity',
  /** column name */
  Revenue = 'revenue',
  /** column name */
  RndOverGrossProfit = 'rndOverGrossProfit',
  /** column name */
  Sgr = 'sgr',
  /** column name */
  ShortTermDebt = 'shortTermDebt',
  /** column name */
  StocksNumber = 'stocksNumber',
  /** column name */
  TotalCurrentAssets = 'totalCurrentAssets',
  /** column name */
  TotalCurrentLiabilities = 'totalCurrentLiabilities',
  /** column name */
  TotalEquity = 'totalEquity',
  /** column name */
  TotalNonCurrentAssets = 'totalNonCurrentAssets',
  /** column name */
  TotalNonCurrentLiabilities = 'totalNonCurrentLiabilities',
  /** column name */
  TotalStockholdersEquity = 'totalStockholdersEquity',
  /** column name */
  VbaOverGrossProfit = 'vbaOverGrossProfit',
  /** column name */
  Year = 'year'
}

export type Sheet_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Sheet_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sheet_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sheet_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Sheet_Var_Pop_Fields = {
  __typename?: 'sheet_var_pop_fields';
  accountPayables?: Maybe<Scalars['Float']>;
  accumulatedOtherComprehensiveIncomeLoss?: Maybe<Scalars['Float']>;
  annualMarketCap?: Maybe<Scalars['Float']>;
  buybackYield?: Maybe<Scalars['Float']>;
  capexOverNetIncome?: Maybe<Scalars['Float']>;
  cashAndShortTermInvestments?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatio?: Maybe<Scalars['Float']>;
  commonStock?: Maybe<Scalars['Float']>;
  companyEquityMultiplier?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Float']>;
  currentRatio?: Maybe<Scalars['Float']>;
  debtEquityRatio?: Maybe<Scalars['Float']>;
  debtToIncome?: Maybe<Scalars['Float']>;
  deferredRevenue?: Maybe<Scalars['Float']>;
  dividendYield?: Maybe<Scalars['Float']>;
  freeCashFlow?: Maybe<Scalars['Float']>;
  goodwill?: Maybe<Scalars['Float']>;
  grossProfit?: Maybe<Scalars['Float']>;
  grossProfitMargin?: Maybe<Scalars['Float']>;
  intangibleAssets?: Maybe<Scalars['Float']>;
  interestCoverage?: Maybe<Scalars['Float']>;
  interestOverRex?: Maybe<Scalars['Float']>;
  inventory?: Maybe<Scalars['Float']>;
  longTermDebt?: Maybe<Scalars['Float']>;
  longTermInvestments?: Maybe<Scalars['Float']>;
  netIncome?: Maybe<Scalars['Float']>;
  netProfitMargin?: Maybe<Scalars['Float']>;
  netReceivables?: Maybe<Scalars['Float']>;
  operatingProfitMargin?: Maybe<Scalars['Float']>;
  otherCurrentAssets?: Maybe<Scalars['Float']>;
  otherCurrentLiabilities?: Maybe<Scalars['Float']>;
  otherNonCurrentAssets?: Maybe<Scalars['Float']>;
  otherNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  payoutRatio?: Maybe<Scalars['Float']>;
  priceToBookRatio?: Maybe<Scalars['Float']>;
  propertyPlantEquipmentNet?: Maybe<Scalars['Float']>;
  quickRatio?: Maybe<Scalars['Float']>;
  retainedEarnings?: Maybe<Scalars['Float']>;
  returnOnAssets?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployed?: Maybe<Scalars['Float']>;
  returnOnEquity?: Maybe<Scalars['Float']>;
  revenue?: Maybe<Scalars['Float']>;
  rndOverGrossProfit?: Maybe<Scalars['Float']>;
  sgr?: Maybe<Scalars['Float']>;
  shortTermDebt?: Maybe<Scalars['Float']>;
  stocksNumber?: Maybe<Scalars['Float']>;
  totalCurrentAssets?: Maybe<Scalars['Float']>;
  totalCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalEquity?: Maybe<Scalars['Float']>;
  totalNonCurrentAssets?: Maybe<Scalars['Float']>;
  totalNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalStockholdersEquity?: Maybe<Scalars['Float']>;
  vbaOverGrossProfit?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "sheet" */
export type Sheet_Var_Pop_Order_By = {
  accountPayables?: InputMaybe<Order_By>;
  accumulatedOtherComprehensiveIncomeLoss?: InputMaybe<Order_By>;
  annualMarketCap?: InputMaybe<Order_By>;
  buybackYield?: InputMaybe<Order_By>;
  capexOverNetIncome?: InputMaybe<Order_By>;
  cashAndShortTermInvestments?: InputMaybe<Order_By>;
  cashFlowToDebtRatio?: InputMaybe<Order_By>;
  commonStock?: InputMaybe<Order_By>;
  companyEquityMultiplier?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  currentRatio?: InputMaybe<Order_By>;
  debtEquityRatio?: InputMaybe<Order_By>;
  debtToIncome?: InputMaybe<Order_By>;
  deferredRevenue?: InputMaybe<Order_By>;
  dividendYield?: InputMaybe<Order_By>;
  freeCashFlow?: InputMaybe<Order_By>;
  goodwill?: InputMaybe<Order_By>;
  grossProfit?: InputMaybe<Order_By>;
  grossProfitMargin?: InputMaybe<Order_By>;
  intangibleAssets?: InputMaybe<Order_By>;
  interestCoverage?: InputMaybe<Order_By>;
  interestOverRex?: InputMaybe<Order_By>;
  inventory?: InputMaybe<Order_By>;
  longTermDebt?: InputMaybe<Order_By>;
  longTermInvestments?: InputMaybe<Order_By>;
  netIncome?: InputMaybe<Order_By>;
  netProfitMargin?: InputMaybe<Order_By>;
  netReceivables?: InputMaybe<Order_By>;
  operatingProfitMargin?: InputMaybe<Order_By>;
  otherCurrentAssets?: InputMaybe<Order_By>;
  otherCurrentLiabilities?: InputMaybe<Order_By>;
  otherNonCurrentAssets?: InputMaybe<Order_By>;
  otherNonCurrentLiabilities?: InputMaybe<Order_By>;
  payoutRatio?: InputMaybe<Order_By>;
  priceToBookRatio?: InputMaybe<Order_By>;
  propertyPlantEquipmentNet?: InputMaybe<Order_By>;
  quickRatio?: InputMaybe<Order_By>;
  retainedEarnings?: InputMaybe<Order_By>;
  returnOnAssets?: InputMaybe<Order_By>;
  returnOnCapitalEmployed?: InputMaybe<Order_By>;
  returnOnEquity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  rndOverGrossProfit?: InputMaybe<Order_By>;
  sgr?: InputMaybe<Order_By>;
  shortTermDebt?: InputMaybe<Order_By>;
  stocksNumber?: InputMaybe<Order_By>;
  totalCurrentAssets?: InputMaybe<Order_By>;
  totalCurrentLiabilities?: InputMaybe<Order_By>;
  totalEquity?: InputMaybe<Order_By>;
  totalNonCurrentAssets?: InputMaybe<Order_By>;
  totalNonCurrentLiabilities?: InputMaybe<Order_By>;
  totalStockholdersEquity?: InputMaybe<Order_By>;
  vbaOverGrossProfit?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Sheet_Var_Samp_Fields = {
  __typename?: 'sheet_var_samp_fields';
  accountPayables?: Maybe<Scalars['Float']>;
  accumulatedOtherComprehensiveIncomeLoss?: Maybe<Scalars['Float']>;
  annualMarketCap?: Maybe<Scalars['Float']>;
  buybackYield?: Maybe<Scalars['Float']>;
  capexOverNetIncome?: Maybe<Scalars['Float']>;
  cashAndShortTermInvestments?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatio?: Maybe<Scalars['Float']>;
  commonStock?: Maybe<Scalars['Float']>;
  companyEquityMultiplier?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Float']>;
  currentRatio?: Maybe<Scalars['Float']>;
  debtEquityRatio?: Maybe<Scalars['Float']>;
  debtToIncome?: Maybe<Scalars['Float']>;
  deferredRevenue?: Maybe<Scalars['Float']>;
  dividendYield?: Maybe<Scalars['Float']>;
  freeCashFlow?: Maybe<Scalars['Float']>;
  goodwill?: Maybe<Scalars['Float']>;
  grossProfit?: Maybe<Scalars['Float']>;
  grossProfitMargin?: Maybe<Scalars['Float']>;
  intangibleAssets?: Maybe<Scalars['Float']>;
  interestCoverage?: Maybe<Scalars['Float']>;
  interestOverRex?: Maybe<Scalars['Float']>;
  inventory?: Maybe<Scalars['Float']>;
  longTermDebt?: Maybe<Scalars['Float']>;
  longTermInvestments?: Maybe<Scalars['Float']>;
  netIncome?: Maybe<Scalars['Float']>;
  netProfitMargin?: Maybe<Scalars['Float']>;
  netReceivables?: Maybe<Scalars['Float']>;
  operatingProfitMargin?: Maybe<Scalars['Float']>;
  otherCurrentAssets?: Maybe<Scalars['Float']>;
  otherCurrentLiabilities?: Maybe<Scalars['Float']>;
  otherNonCurrentAssets?: Maybe<Scalars['Float']>;
  otherNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  payoutRatio?: Maybe<Scalars['Float']>;
  priceToBookRatio?: Maybe<Scalars['Float']>;
  propertyPlantEquipmentNet?: Maybe<Scalars['Float']>;
  quickRatio?: Maybe<Scalars['Float']>;
  retainedEarnings?: Maybe<Scalars['Float']>;
  returnOnAssets?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployed?: Maybe<Scalars['Float']>;
  returnOnEquity?: Maybe<Scalars['Float']>;
  revenue?: Maybe<Scalars['Float']>;
  rndOverGrossProfit?: Maybe<Scalars['Float']>;
  sgr?: Maybe<Scalars['Float']>;
  shortTermDebt?: Maybe<Scalars['Float']>;
  stocksNumber?: Maybe<Scalars['Float']>;
  totalCurrentAssets?: Maybe<Scalars['Float']>;
  totalCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalEquity?: Maybe<Scalars['Float']>;
  totalNonCurrentAssets?: Maybe<Scalars['Float']>;
  totalNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalStockholdersEquity?: Maybe<Scalars['Float']>;
  vbaOverGrossProfit?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "sheet" */
export type Sheet_Var_Samp_Order_By = {
  accountPayables?: InputMaybe<Order_By>;
  accumulatedOtherComprehensiveIncomeLoss?: InputMaybe<Order_By>;
  annualMarketCap?: InputMaybe<Order_By>;
  buybackYield?: InputMaybe<Order_By>;
  capexOverNetIncome?: InputMaybe<Order_By>;
  cashAndShortTermInvestments?: InputMaybe<Order_By>;
  cashFlowToDebtRatio?: InputMaybe<Order_By>;
  commonStock?: InputMaybe<Order_By>;
  companyEquityMultiplier?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  currentRatio?: InputMaybe<Order_By>;
  debtEquityRatio?: InputMaybe<Order_By>;
  debtToIncome?: InputMaybe<Order_By>;
  deferredRevenue?: InputMaybe<Order_By>;
  dividendYield?: InputMaybe<Order_By>;
  freeCashFlow?: InputMaybe<Order_By>;
  goodwill?: InputMaybe<Order_By>;
  grossProfit?: InputMaybe<Order_By>;
  grossProfitMargin?: InputMaybe<Order_By>;
  intangibleAssets?: InputMaybe<Order_By>;
  interestCoverage?: InputMaybe<Order_By>;
  interestOverRex?: InputMaybe<Order_By>;
  inventory?: InputMaybe<Order_By>;
  longTermDebt?: InputMaybe<Order_By>;
  longTermInvestments?: InputMaybe<Order_By>;
  netIncome?: InputMaybe<Order_By>;
  netProfitMargin?: InputMaybe<Order_By>;
  netReceivables?: InputMaybe<Order_By>;
  operatingProfitMargin?: InputMaybe<Order_By>;
  otherCurrentAssets?: InputMaybe<Order_By>;
  otherCurrentLiabilities?: InputMaybe<Order_By>;
  otherNonCurrentAssets?: InputMaybe<Order_By>;
  otherNonCurrentLiabilities?: InputMaybe<Order_By>;
  payoutRatio?: InputMaybe<Order_By>;
  priceToBookRatio?: InputMaybe<Order_By>;
  propertyPlantEquipmentNet?: InputMaybe<Order_By>;
  quickRatio?: InputMaybe<Order_By>;
  retainedEarnings?: InputMaybe<Order_By>;
  returnOnAssets?: InputMaybe<Order_By>;
  returnOnCapitalEmployed?: InputMaybe<Order_By>;
  returnOnEquity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  rndOverGrossProfit?: InputMaybe<Order_By>;
  sgr?: InputMaybe<Order_By>;
  shortTermDebt?: InputMaybe<Order_By>;
  stocksNumber?: InputMaybe<Order_By>;
  totalCurrentAssets?: InputMaybe<Order_By>;
  totalCurrentLiabilities?: InputMaybe<Order_By>;
  totalEquity?: InputMaybe<Order_By>;
  totalNonCurrentAssets?: InputMaybe<Order_By>;
  totalNonCurrentLiabilities?: InputMaybe<Order_By>;
  totalStockholdersEquity?: InputMaybe<Order_By>;
  vbaOverGrossProfit?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Sheet_Variance_Fields = {
  __typename?: 'sheet_variance_fields';
  accountPayables?: Maybe<Scalars['Float']>;
  accumulatedOtherComprehensiveIncomeLoss?: Maybe<Scalars['Float']>;
  annualMarketCap?: Maybe<Scalars['Float']>;
  buybackYield?: Maybe<Scalars['Float']>;
  capexOverNetIncome?: Maybe<Scalars['Float']>;
  cashAndShortTermInvestments?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatio?: Maybe<Scalars['Float']>;
  commonStock?: Maybe<Scalars['Float']>;
  companyEquityMultiplier?: Maybe<Scalars['Float']>;
  companyId?: Maybe<Scalars['Float']>;
  currentRatio?: Maybe<Scalars['Float']>;
  debtEquityRatio?: Maybe<Scalars['Float']>;
  debtToIncome?: Maybe<Scalars['Float']>;
  deferredRevenue?: Maybe<Scalars['Float']>;
  dividendYield?: Maybe<Scalars['Float']>;
  freeCashFlow?: Maybe<Scalars['Float']>;
  goodwill?: Maybe<Scalars['Float']>;
  grossProfit?: Maybe<Scalars['Float']>;
  grossProfitMargin?: Maybe<Scalars['Float']>;
  intangibleAssets?: Maybe<Scalars['Float']>;
  interestCoverage?: Maybe<Scalars['Float']>;
  interestOverRex?: Maybe<Scalars['Float']>;
  inventory?: Maybe<Scalars['Float']>;
  longTermDebt?: Maybe<Scalars['Float']>;
  longTermInvestments?: Maybe<Scalars['Float']>;
  netIncome?: Maybe<Scalars['Float']>;
  netProfitMargin?: Maybe<Scalars['Float']>;
  netReceivables?: Maybe<Scalars['Float']>;
  operatingProfitMargin?: Maybe<Scalars['Float']>;
  otherCurrentAssets?: Maybe<Scalars['Float']>;
  otherCurrentLiabilities?: Maybe<Scalars['Float']>;
  otherNonCurrentAssets?: Maybe<Scalars['Float']>;
  otherNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  payoutRatio?: Maybe<Scalars['Float']>;
  priceToBookRatio?: Maybe<Scalars['Float']>;
  propertyPlantEquipmentNet?: Maybe<Scalars['Float']>;
  quickRatio?: Maybe<Scalars['Float']>;
  retainedEarnings?: Maybe<Scalars['Float']>;
  returnOnAssets?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployed?: Maybe<Scalars['Float']>;
  returnOnEquity?: Maybe<Scalars['Float']>;
  revenue?: Maybe<Scalars['Float']>;
  rndOverGrossProfit?: Maybe<Scalars['Float']>;
  sgr?: Maybe<Scalars['Float']>;
  shortTermDebt?: Maybe<Scalars['Float']>;
  stocksNumber?: Maybe<Scalars['Float']>;
  totalCurrentAssets?: Maybe<Scalars['Float']>;
  totalCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalEquity?: Maybe<Scalars['Float']>;
  totalNonCurrentAssets?: Maybe<Scalars['Float']>;
  totalNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalStockholdersEquity?: Maybe<Scalars['Float']>;
  vbaOverGrossProfit?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "sheet" */
export type Sheet_Variance_Order_By = {
  accountPayables?: InputMaybe<Order_By>;
  accumulatedOtherComprehensiveIncomeLoss?: InputMaybe<Order_By>;
  annualMarketCap?: InputMaybe<Order_By>;
  buybackYield?: InputMaybe<Order_By>;
  capexOverNetIncome?: InputMaybe<Order_By>;
  cashAndShortTermInvestments?: InputMaybe<Order_By>;
  cashFlowToDebtRatio?: InputMaybe<Order_By>;
  commonStock?: InputMaybe<Order_By>;
  companyEquityMultiplier?: InputMaybe<Order_By>;
  companyId?: InputMaybe<Order_By>;
  currentRatio?: InputMaybe<Order_By>;
  debtEquityRatio?: InputMaybe<Order_By>;
  debtToIncome?: InputMaybe<Order_By>;
  deferredRevenue?: InputMaybe<Order_By>;
  dividendYield?: InputMaybe<Order_By>;
  freeCashFlow?: InputMaybe<Order_By>;
  goodwill?: InputMaybe<Order_By>;
  grossProfit?: InputMaybe<Order_By>;
  grossProfitMargin?: InputMaybe<Order_By>;
  intangibleAssets?: InputMaybe<Order_By>;
  interestCoverage?: InputMaybe<Order_By>;
  interestOverRex?: InputMaybe<Order_By>;
  inventory?: InputMaybe<Order_By>;
  longTermDebt?: InputMaybe<Order_By>;
  longTermInvestments?: InputMaybe<Order_By>;
  netIncome?: InputMaybe<Order_By>;
  netProfitMargin?: InputMaybe<Order_By>;
  netReceivables?: InputMaybe<Order_By>;
  operatingProfitMargin?: InputMaybe<Order_By>;
  otherCurrentAssets?: InputMaybe<Order_By>;
  otherCurrentLiabilities?: InputMaybe<Order_By>;
  otherNonCurrentAssets?: InputMaybe<Order_By>;
  otherNonCurrentLiabilities?: InputMaybe<Order_By>;
  payoutRatio?: InputMaybe<Order_By>;
  priceToBookRatio?: InputMaybe<Order_By>;
  propertyPlantEquipmentNet?: InputMaybe<Order_By>;
  quickRatio?: InputMaybe<Order_By>;
  retainedEarnings?: InputMaybe<Order_By>;
  returnOnAssets?: InputMaybe<Order_By>;
  returnOnCapitalEmployed?: InputMaybe<Order_By>;
  returnOnEquity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  rndOverGrossProfit?: InputMaybe<Order_By>;
  sgr?: InputMaybe<Order_By>;
  shortTermDebt?: InputMaybe<Order_By>;
  stocksNumber?: InputMaybe<Order_By>;
  totalCurrentAssets?: InputMaybe<Order_By>;
  totalCurrentLiabilities?: InputMaybe<Order_By>;
  totalEquity?: InputMaybe<Order_By>;
  totalNonCurrentAssets?: InputMaybe<Order_By>;
  totalNonCurrentLiabilities?: InputMaybe<Order_By>;
  totalStockholdersEquity?: InputMaybe<Order_By>;
  vbaOverGrossProfit?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "companies_and_etfs" */
  companies_and_etfs: Array<Companies_And_Etfs>;
  /** fetch aggregated fields from the table: "companies_and_etfs" */
  companies_and_etfs_aggregate: Companies_And_Etfs_Aggregate;
  /** fetch data from the table in a streaming manner: "companies_and_etfs" */
  companies_and_etfs_stream: Array<Companies_And_Etfs>;
  /** fetch data from the table: "company" */
  company: Array<Company>;
  /** fetch aggregated fields from the table: "company" */
  company_aggregate: Company_Aggregate;
  /** fetch data from the table: "company" using primary key columns */
  company_by_pk?: Maybe<Company>;
  /** fetch data from the table in a streaming manner: "company" */
  company_stream: Array<Company>;
  /** fetch data from the table: "continentCode" */
  continentCode: Array<ContinentCode>;
  /** fetch aggregated fields from the table: "continentCode" */
  continentCode_aggregate: ContinentCode_Aggregate;
  /** fetch data from the table: "continentCode" using primary key columns */
  continentCode_by_pk?: Maybe<ContinentCode>;
  /** fetch data from the table in a streaming manner: "continentCode" */
  continentCode_stream: Array<ContinentCode>;
  /** fetch data from the table: "country" */
  country: Array<Country>;
  /** fetch data from the table: "countryCode" */
  countryCode: Array<CountryCode>;
  /** fetch aggregated fields from the table: "countryCode" */
  countryCode_aggregate: CountryCode_Aggregate;
  /** fetch data from the table: "countryCode" using primary key columns */
  countryCode_by_pk?: Maybe<CountryCode>;
  /** fetch data from the table in a streaming manner: "countryCode" */
  countryCode_stream: Array<CountryCode>;
  /** fetch aggregated fields from the table: "country" */
  country_aggregate: Country_Aggregate;
  /** fetch data from the table: "country" using primary key columns */
  country_by_pk?: Maybe<Country>;
  /** fetch data from the table in a streaming manner: "country" */
  country_stream: Array<Country>;
  /** fetch data from the table: "documents" */
  documents: Array<Documents>;
  /** fetch aggregated fields from the table: "documents" */
  documents_aggregate: Documents_Aggregate;
  /** fetch data from the table: "documents" using primary key columns */
  documents_by_pk?: Maybe<Documents>;
  /** fetch data from the table in a streaming manner: "documents" */
  documents_stream: Array<Documents>;
  /** fetch data from the table: "etf" */
  etf: Array<Etf>;
  /** fetch data from the table: "etfType" */
  etfType: Array<EtfType>;
  /** fetch aggregated fields from the table: "etfType" */
  etfType_aggregate: EtfType_Aggregate;
  /** fetch data from the table: "etfType" using primary key columns */
  etfType_by_pk?: Maybe<EtfType>;
  /** fetch data from the table in a streaming manner: "etfType" */
  etfType_stream: Array<EtfType>;
  /** fetch aggregated fields from the table: "etf" */
  etf_aggregate: Etf_Aggregate;
  /** fetch data from the table: "etf" using primary key columns */
  etf_by_pk?: Maybe<Etf>;
  /** fetch data from the table in a streaming manner: "etf" */
  etf_stream: Array<Etf>;
  /** fetch data from the table: "favoriteCompany" */
  favoriteCompany: Array<FavoriteCompany>;
  /** fetch aggregated fields from the table: "favoriteCompany" */
  favoriteCompany_aggregate: FavoriteCompany_Aggregate;
  /** fetch data from the table: "favoriteCompany" using primary key columns */
  favoriteCompany_by_pk?: Maybe<FavoriteCompany>;
  /** fetch data from the table in a streaming manner: "favoriteCompany" */
  favoriteCompany_stream: Array<FavoriteCompany>;
  /** fetch data from the table: "favoriteList" */
  favoriteList: Array<FavoriteList>;
  /** fetch aggregated fields from the table: "favoriteList" */
  favoriteList_aggregate: FavoriteList_Aggregate;
  /** fetch data from the table: "favoriteList" using primary key columns */
  favoriteList_by_pk?: Maybe<FavoriteList>;
  /** fetch data from the table in a streaming manner: "favoriteList" */
  favoriteList_stream: Array<FavoriteList>;
  /** fetch data from the table: "filter" */
  filter: Array<Filter>;
  /** fetch data from the table: "filterType" */
  filterType: Array<FilterType>;
  /** fetch aggregated fields from the table: "filterType" */
  filterType_aggregate: FilterType_Aggregate;
  /** fetch data from the table: "filterType" using primary key columns */
  filterType_by_pk?: Maybe<FilterType>;
  /** fetch data from the table in a streaming manner: "filterType" */
  filterType_stream: Array<FilterType>;
  /** fetch aggregated fields from the table: "filter" */
  filter_aggregate: Filter_Aggregate;
  /** fetch data from the table: "filter" using primary key columns */
  filter_by_pk?: Maybe<Filter>;
  /** fetch data from the table in a streaming manner: "filter" */
  filter_stream: Array<Filter>;
  /** fetch data from the table: "marketCapSize" */
  marketCapSize: Array<MarketCapSize>;
  /** fetch aggregated fields from the table: "marketCapSize" */
  marketCapSize_aggregate: MarketCapSize_Aggregate;
  /** fetch data from the table: "marketCapSize" using primary key columns */
  marketCapSize_by_pk?: Maybe<MarketCapSize>;
  /** fetch data from the table in a streaming manner: "marketCapSize" */
  marketCapSize_stream: Array<MarketCapSize>;
  /** fetch data from the table: "month" */
  month: Array<Month>;
  /** fetch aggregated fields from the table: "month" */
  month_aggregate: Month_Aggregate;
  /** fetch data from the table: "month" using primary key columns */
  month_by_pk?: Maybe<Month>;
  /** fetch data from the table in a streaming manner: "month" */
  month_stream: Array<Month>;
  /** fetch data from the table: "paymentMethod" */
  paymentMethod: Array<PaymentMethod>;
  /** fetch aggregated fields from the table: "paymentMethod" */
  paymentMethod_aggregate: PaymentMethod_Aggregate;
  /** fetch data from the table: "paymentMethod" using primary key columns */
  paymentMethod_by_pk?: Maybe<PaymentMethod>;
  /** fetch data from the table in a streaming manner: "paymentMethod" */
  paymentMethod_stream: Array<PaymentMethod>;
  /** fetch data from the table: "portfolio" */
  portfolio: Array<Portfolio>;
  /** fetch data from the table: "portfolioAllocation" */
  portfolioAllocation: Array<PortfolioAllocation>;
  /** fetch aggregated fields from the table: "portfolioAllocation" */
  portfolioAllocation_aggregate: PortfolioAllocation_Aggregate;
  /** fetch data from the table: "portfolioAllocation" using primary key columns */
  portfolioAllocation_by_pk?: Maybe<PortfolioAllocation>;
  /** fetch data from the table in a streaming manner: "portfolioAllocation" */
  portfolioAllocation_stream: Array<PortfolioAllocation>;
  /** fetch aggregated fields from the table: "portfolio" */
  portfolio_aggregate: Portfolio_Aggregate;
  /** fetch data from the table: "portfolio" using primary key columns */
  portfolio_by_pk?: Maybe<Portfolio>;
  /** fetch data from the table in a streaming manner: "portfolio" */
  portfolio_stream: Array<Portfolio>;
  /** fetch data from the table: "presentation" */
  presentation: Array<Presentation>;
  /** fetch aggregated fields from the table: "presentation" */
  presentation_aggregate: Presentation_Aggregate;
  /** fetch data from the table: "presentation" using primary key columns */
  presentation_by_pk?: Maybe<Presentation>;
  /** fetch data from the table in a streaming manner: "presentation" */
  presentation_stream: Array<Presentation>;
  /** fetch data from the table: "prompted_document" */
  prompted_document: Array<Prompted_Document>;
  /** fetch aggregated fields from the table: "prompted_document" */
  prompted_document_aggregate: Prompted_Document_Aggregate;
  /** fetch data from the table: "prompted_document" using primary key columns */
  prompted_document_by_pk?: Maybe<Prompted_Document>;
  /** fetch data from the table in a streaming manner: "prompted_document" */
  prompted_document_stream: Array<Prompted_Document>;
  /** fetch data from the table: "prompts" */
  prompts: Array<Prompts>;
  /** fetch aggregated fields from the table: "prompts" */
  prompts_aggregate: Prompts_Aggregate;
  /** fetch data from the table: "prompts" using primary key columns */
  prompts_by_pk?: Maybe<Prompts>;
  /** fetch data from the table in a streaming manner: "prompts" */
  prompts_stream: Array<Prompts>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table in a streaming manner: "role" */
  role_stream: Array<Role>;
  /** fetch data from the table: "savedFilter" */
  savedFilter: Array<SavedFilter>;
  /** fetch aggregated fields from the table: "savedFilter" */
  savedFilter_aggregate: SavedFilter_Aggregate;
  /** fetch data from the table: "savedFilter" using primary key columns */
  savedFilter_by_pk?: Maybe<SavedFilter>;
  /** fetch data from the table in a streaming manner: "savedFilter" */
  savedFilter_stream: Array<SavedFilter>;
  /** execute function "search_companies" which returns "company" */
  search_companies: Array<Company>;
  /** execute function "search_companies" and query aggregates on result of table type "company" */
  search_companies_aggregate: Company_Aggregate;
  /** execute function "search_companies_or_etfs" which returns "companies_and_etfs" */
  search_companies_or_etfs: Array<Companies_And_Etfs>;
  /** execute function "search_companies_or_etfs" and query aggregates on result of table type "companies_and_etfs" */
  search_companies_or_etfs_aggregate: Companies_And_Etfs_Aggregate;
  /** fetch data from the table: "sheet" */
  sheet: Array<Sheet>;
  /** fetch aggregated fields from the table: "sheet" */
  sheet_aggregate: Sheet_Aggregate;
  /** fetch data from the table: "sheet" using primary key columns */
  sheet_by_pk?: Maybe<Sheet>;
  /** fetch data from the table in a streaming manner: "sheet" */
  sheet_stream: Array<Sheet>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
};


export type Subscription_RootCompanies_And_EtfsArgs = {
  distinct_on?: InputMaybe<Array<Companies_And_Etfs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Companies_And_Etfs_Order_By>>;
  where?: InputMaybe<Companies_And_Etfs_Bool_Exp>;
};


export type Subscription_RootCompanies_And_Etfs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Companies_And_Etfs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Companies_And_Etfs_Order_By>>;
  where?: InputMaybe<Companies_And_Etfs_Bool_Exp>;
};


export type Subscription_RootCompanies_And_Etfs_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Companies_And_Etfs_Stream_Cursor_Input>>;
  where?: InputMaybe<Companies_And_Etfs_Bool_Exp>;
};


export type Subscription_RootCompanyArgs = {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Subscription_RootCompany_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Subscription_RootCompany_By_PkArgs = {
  id: Scalars['Int'];
  ticker: Scalars['String'];
};


export type Subscription_RootCompany_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Company_Stream_Cursor_Input>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Subscription_RootContinentCodeArgs = {
  distinct_on?: InputMaybe<Array<ContinentCode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ContinentCode_Order_By>>;
  where?: InputMaybe<ContinentCode_Bool_Exp>;
};


export type Subscription_RootContinentCode_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ContinentCode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ContinentCode_Order_By>>;
  where?: InputMaybe<ContinentCode_Bool_Exp>;
};


export type Subscription_RootContinentCode_By_PkArgs = {
  code: Scalars['String'];
};


export type Subscription_RootContinentCode_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ContinentCode_Stream_Cursor_Input>>;
  where?: InputMaybe<ContinentCode_Bool_Exp>;
};


export type Subscription_RootCountryArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootCountryCodeArgs = {
  distinct_on?: InputMaybe<Array<CountryCode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CountryCode_Order_By>>;
  where?: InputMaybe<CountryCode_Bool_Exp>;
};


export type Subscription_RootCountryCode_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CountryCode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CountryCode_Order_By>>;
  where?: InputMaybe<CountryCode_Bool_Exp>;
};


export type Subscription_RootCountryCode_By_PkArgs = {
  code: Scalars['String'];
};


export type Subscription_RootCountryCode_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<CountryCode_Stream_Cursor_Input>>;
  where?: InputMaybe<CountryCode_Bool_Exp>;
};


export type Subscription_RootCountry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootCountry_By_PkArgs = {
  countryCode: CountryCode_Enum;
};


export type Subscription_RootCountry_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Country_Stream_Cursor_Input>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Subscription_RootDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Subscription_RootDocuments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDocuments_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Documents_Stream_Cursor_Input>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Subscription_RootEtfArgs = {
  distinct_on?: InputMaybe<Array<Etf_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Etf_Order_By>>;
  where?: InputMaybe<Etf_Bool_Exp>;
};


export type Subscription_RootEtfTypeArgs = {
  distinct_on?: InputMaybe<Array<EtfType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EtfType_Order_By>>;
  where?: InputMaybe<EtfType_Bool_Exp>;
};


export type Subscription_RootEtfType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<EtfType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EtfType_Order_By>>;
  where?: InputMaybe<EtfType_Bool_Exp>;
};


export type Subscription_RootEtfType_By_PkArgs = {
  type: Scalars['String'];
};


export type Subscription_RootEtfType_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<EtfType_Stream_Cursor_Input>>;
  where?: InputMaybe<EtfType_Bool_Exp>;
};


export type Subscription_RootEtf_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Etf_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Etf_Order_By>>;
  where?: InputMaybe<Etf_Bool_Exp>;
};


export type Subscription_RootEtf_By_PkArgs = {
  ticker: Scalars['String'];
};


export type Subscription_RootEtf_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Etf_Stream_Cursor_Input>>;
  where?: InputMaybe<Etf_Bool_Exp>;
};


export type Subscription_RootFavoriteCompanyArgs = {
  distinct_on?: InputMaybe<Array<FavoriteCompany_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteCompany_Order_By>>;
  where?: InputMaybe<FavoriteCompany_Bool_Exp>;
};


export type Subscription_RootFavoriteCompany_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FavoriteCompany_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteCompany_Order_By>>;
  where?: InputMaybe<FavoriteCompany_Bool_Exp>;
};


export type Subscription_RootFavoriteCompany_By_PkArgs = {
  companyId: Scalars['Int'];
  favoriteListId: Scalars['Int'];
};


export type Subscription_RootFavoriteCompany_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FavoriteCompany_Stream_Cursor_Input>>;
  where?: InputMaybe<FavoriteCompany_Bool_Exp>;
};


export type Subscription_RootFavoriteListArgs = {
  distinct_on?: InputMaybe<Array<FavoriteList_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteList_Order_By>>;
  where?: InputMaybe<FavoriteList_Bool_Exp>;
};


export type Subscription_RootFavoriteList_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FavoriteList_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteList_Order_By>>;
  where?: InputMaybe<FavoriteList_Bool_Exp>;
};


export type Subscription_RootFavoriteList_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFavoriteList_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FavoriteList_Stream_Cursor_Input>>;
  where?: InputMaybe<FavoriteList_Bool_Exp>;
};


export type Subscription_RootFilterArgs = {
  distinct_on?: InputMaybe<Array<Filter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Filter_Order_By>>;
  where?: InputMaybe<Filter_Bool_Exp>;
};


export type Subscription_RootFilterTypeArgs = {
  distinct_on?: InputMaybe<Array<FilterType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilterType_Order_By>>;
  where?: InputMaybe<FilterType_Bool_Exp>;
};


export type Subscription_RootFilterType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FilterType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilterType_Order_By>>;
  where?: InputMaybe<FilterType_Bool_Exp>;
};


export type Subscription_RootFilterType_By_PkArgs = {
  type: Scalars['String'];
};


export type Subscription_RootFilterType_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FilterType_Stream_Cursor_Input>>;
  where?: InputMaybe<FilterType_Bool_Exp>;
};


export type Subscription_RootFilter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Filter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Filter_Order_By>>;
  where?: InputMaybe<Filter_Bool_Exp>;
};


export type Subscription_RootFilter_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFilter_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Filter_Stream_Cursor_Input>>;
  where?: InputMaybe<Filter_Bool_Exp>;
};


export type Subscription_RootMarketCapSizeArgs = {
  distinct_on?: InputMaybe<Array<MarketCapSize_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MarketCapSize_Order_By>>;
  where?: InputMaybe<MarketCapSize_Bool_Exp>;
};


export type Subscription_RootMarketCapSize_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MarketCapSize_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MarketCapSize_Order_By>>;
  where?: InputMaybe<MarketCapSize_Bool_Exp>;
};


export type Subscription_RootMarketCapSize_By_PkArgs = {
  size: Scalars['String'];
};


export type Subscription_RootMarketCapSize_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<MarketCapSize_Stream_Cursor_Input>>;
  where?: InputMaybe<MarketCapSize_Bool_Exp>;
};


export type Subscription_RootMonthArgs = {
  distinct_on?: InputMaybe<Array<Month_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Month_Order_By>>;
  where?: InputMaybe<Month_Bool_Exp>;
};


export type Subscription_RootMonth_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Month_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Month_Order_By>>;
  where?: InputMaybe<Month_Bool_Exp>;
};


export type Subscription_RootMonth_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootMonth_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Month_Stream_Cursor_Input>>;
  where?: InputMaybe<Month_Bool_Exp>;
};


export type Subscription_RootPaymentMethodArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethod_Order_By>>;
  where?: InputMaybe<PaymentMethod_Bool_Exp>;
};


export type Subscription_RootPaymentMethod_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethod_Order_By>>;
  where?: InputMaybe<PaymentMethod_Bool_Exp>;
};


export type Subscription_RootPaymentMethod_By_PkArgs = {
  userEmail: Scalars['String'];
};


export type Subscription_RootPaymentMethod_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<PaymentMethod_Stream_Cursor_Input>>;
  where?: InputMaybe<PaymentMethod_Bool_Exp>;
};


export type Subscription_RootPortfolioArgs = {
  distinct_on?: InputMaybe<Array<Portfolio_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Portfolio_Order_By>>;
  where?: InputMaybe<Portfolio_Bool_Exp>;
};


export type Subscription_RootPortfolioAllocationArgs = {
  distinct_on?: InputMaybe<Array<PortfolioAllocation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PortfolioAllocation_Order_By>>;
  where?: InputMaybe<PortfolioAllocation_Bool_Exp>;
};


export type Subscription_RootPortfolioAllocation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PortfolioAllocation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PortfolioAllocation_Order_By>>;
  where?: InputMaybe<PortfolioAllocation_Bool_Exp>;
};


export type Subscription_RootPortfolioAllocation_By_PkArgs = {
  companyId: Scalars['Int'];
  portfolioId: Scalars['Int'];
};


export type Subscription_RootPortfolioAllocation_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<PortfolioAllocation_Stream_Cursor_Input>>;
  where?: InputMaybe<PortfolioAllocation_Bool_Exp>;
};


export type Subscription_RootPortfolio_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Portfolio_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Portfolio_Order_By>>;
  where?: InputMaybe<Portfolio_Bool_Exp>;
};


export type Subscription_RootPortfolio_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPortfolio_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Portfolio_Stream_Cursor_Input>>;
  where?: InputMaybe<Portfolio_Bool_Exp>;
};


export type Subscription_RootPresentationArgs = {
  distinct_on?: InputMaybe<Array<Presentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Presentation_Order_By>>;
  where?: InputMaybe<Presentation_Bool_Exp>;
};


export type Subscription_RootPresentation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Presentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Presentation_Order_By>>;
  where?: InputMaybe<Presentation_Bool_Exp>;
};


export type Subscription_RootPresentation_By_PkArgs = {
  companyId: Scalars['Int'];
};


export type Subscription_RootPresentation_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Presentation_Stream_Cursor_Input>>;
  where?: InputMaybe<Presentation_Bool_Exp>;
};


export type Subscription_RootPrompted_DocumentArgs = {
  distinct_on?: InputMaybe<Array<Prompted_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prompted_Document_Order_By>>;
  where?: InputMaybe<Prompted_Document_Bool_Exp>;
};


export type Subscription_RootPrompted_Document_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prompted_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prompted_Document_Order_By>>;
  where?: InputMaybe<Prompted_Document_Bool_Exp>;
};


export type Subscription_RootPrompted_Document_By_PkArgs = {
  document_id: Scalars['uuid'];
  prompt_id: Scalars['uuid'];
};


export type Subscription_RootPrompted_Document_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Prompted_Document_Stream_Cursor_Input>>;
  where?: InputMaybe<Prompted_Document_Bool_Exp>;
};


export type Subscription_RootPromptsArgs = {
  distinct_on?: InputMaybe<Array<Prompts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prompts_Order_By>>;
  where?: InputMaybe<Prompts_Bool_Exp>;
};


export type Subscription_RootPrompts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prompts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prompts_Order_By>>;
  where?: InputMaybe<Prompts_Bool_Exp>;
};


export type Subscription_RootPrompts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPrompts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Prompts_Stream_Cursor_Input>>;
  where?: InputMaybe<Prompts_Bool_Exp>;
};


export type Subscription_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_By_PkArgs = {
  role: Scalars['String'];
};


export type Subscription_RootRole_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Role_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootSavedFilterArgs = {
  distinct_on?: InputMaybe<Array<SavedFilter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SavedFilter_Order_By>>;
  where?: InputMaybe<SavedFilter_Bool_Exp>;
};


export type Subscription_RootSavedFilter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<SavedFilter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SavedFilter_Order_By>>;
  where?: InputMaybe<SavedFilter_Bool_Exp>;
};


export type Subscription_RootSavedFilter_By_PkArgs = {
  filterId: Scalars['Int'];
  userEmail: Scalars['String'];
};


export type Subscription_RootSavedFilter_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<SavedFilter_Stream_Cursor_Input>>;
  where?: InputMaybe<SavedFilter_Bool_Exp>;
};


export type Subscription_RootSearch_CompaniesArgs = {
  args: Search_Companies_Args;
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Subscription_RootSearch_Companies_AggregateArgs = {
  args: Search_Companies_Args;
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Subscription_RootSearch_Companies_Or_EtfsArgs = {
  args: Search_Companies_Or_Etfs_Args;
  distinct_on?: InputMaybe<Array<Companies_And_Etfs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Companies_And_Etfs_Order_By>>;
  where?: InputMaybe<Companies_And_Etfs_Bool_Exp>;
};


export type Subscription_RootSearch_Companies_Or_Etfs_AggregateArgs = {
  args: Search_Companies_Or_Etfs_Args;
  distinct_on?: InputMaybe<Array<Companies_And_Etfs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Companies_And_Etfs_Order_By>>;
  where?: InputMaybe<Companies_And_Etfs_Bool_Exp>;
};


export type Subscription_RootSheetArgs = {
  distinct_on?: InputMaybe<Array<Sheet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sheet_Order_By>>;
  where?: InputMaybe<Sheet_Bool_Exp>;
};


export type Subscription_RootSheet_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sheet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sheet_Order_By>>;
  where?: InputMaybe<Sheet_Bool_Exp>;
};


export type Subscription_RootSheet_By_PkArgs = {
  companyId: Scalars['Int'];
  year: Scalars['Int'];
};


export type Subscription_RootSheet_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Sheet_Stream_Cursor_Input>>;
  where?: InputMaybe<Sheet_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  email: Scalars['String'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  /** An object relationship */
  country: CountryCode;
  countryCode: CountryCode_Enum;
  email: Scalars['String'];
  /** An array relationship */
  favoriteCompanies: Array<FavoriteCompany>;
  /** An aggregate relationship */
  favoriteCompanies_aggregate: FavoriteCompany_Aggregate;
  /** An array relationship */
  favoriteLists: Array<FavoriteList>;
  /** An aggregate relationship */
  favoriteLists_aggregate: FavoriteList_Aggregate;
  firstName: Scalars['String'];
  hasBacktest: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  lastLoginAt?: Maybe<Scalars['timestamptz']>;
  lastName: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  /** An object relationship */
  paymentMethod?: Maybe<PaymentMethod>;
  /** An array relationship */
  portfolios: Array<Portfolio>;
  /** An aggregate relationship */
  portfolios_aggregate: Portfolio_Aggregate;
  registeredAt?: Maybe<Scalars['timestamptz']>;
  role: Role_Enum;
  /** An array relationship */
  savedFilters: Array<SavedFilter>;
  /** An aggregate relationship */
  savedFilters_aggregate: SavedFilter_Aggregate;
};


/** columns and relationships of "user" */
export type UserFavoriteCompaniesArgs = {
  distinct_on?: InputMaybe<Array<FavoriteCompany_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteCompany_Order_By>>;
  where?: InputMaybe<FavoriteCompany_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserFavoriteCompanies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FavoriteCompany_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteCompany_Order_By>>;
  where?: InputMaybe<FavoriteCompany_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserFavoriteListsArgs = {
  distinct_on?: InputMaybe<Array<FavoriteList_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteList_Order_By>>;
  where?: InputMaybe<FavoriteList_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserFavoriteLists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FavoriteList_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FavoriteList_Order_By>>;
  where?: InputMaybe<FavoriteList_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserPortfoliosArgs = {
  distinct_on?: InputMaybe<Array<Portfolio_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Portfolio_Order_By>>;
  where?: InputMaybe<Portfolio_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserPortfolios_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Portfolio_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Portfolio_Order_By>>;
  where?: InputMaybe<Portfolio_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserSavedFiltersArgs = {
  distinct_on?: InputMaybe<Array<SavedFilter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SavedFilter_Order_By>>;
  where?: InputMaybe<SavedFilter_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserSavedFilters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<SavedFilter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SavedFilter_Order_By>>;
  where?: InputMaybe<SavedFilter_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  country?: InputMaybe<CountryCode_Bool_Exp>;
  countryCode?: InputMaybe<CountryCode_Enum_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  favoriteCompanies?: InputMaybe<FavoriteCompany_Bool_Exp>;
  favoriteCompanies_aggregate?: InputMaybe<FavoriteCompany_Aggregate_Bool_Exp>;
  favoriteLists?: InputMaybe<FavoriteList_Bool_Exp>;
  favoriteLists_aggregate?: InputMaybe<FavoriteList_Aggregate_Bool_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  hasBacktest?: InputMaybe<Boolean_Comparison_Exp>;
  isActive?: InputMaybe<Boolean_Comparison_Exp>;
  lastLoginAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  paymentMethod?: InputMaybe<PaymentMethod_Bool_Exp>;
  portfolios?: InputMaybe<Portfolio_Bool_Exp>;
  portfolios_aggregate?: InputMaybe<Portfolio_Aggregate_Bool_Exp>;
  registeredAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  role?: InputMaybe<Role_Enum_Comparison_Exp>;
  savedFilters?: InputMaybe<SavedFilter_Bool_Exp>;
  savedFilters_aggregate?: InputMaybe<SavedFilter_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint on columns "email" */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  country?: InputMaybe<CountryCode_Obj_Rel_Insert_Input>;
  countryCode?: InputMaybe<CountryCode_Enum>;
  email?: InputMaybe<Scalars['String']>;
  favoriteCompanies?: InputMaybe<FavoriteCompany_Arr_Rel_Insert_Input>;
  favoriteLists?: InputMaybe<FavoriteList_Arr_Rel_Insert_Input>;
  firstName?: InputMaybe<Scalars['String']>;
  hasBacktest?: InputMaybe<Scalars['Boolean']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastLoginAt?: InputMaybe<Scalars['timestamptz']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<PaymentMethod_Obj_Rel_Insert_Input>;
  portfolios?: InputMaybe<Portfolio_Arr_Rel_Insert_Input>;
  registeredAt?: InputMaybe<Scalars['timestamptz']>;
  role?: InputMaybe<Role_Enum>;
  savedFilters?: InputMaybe<SavedFilter_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastLoginAt?: Maybe<Scalars['timestamptz']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  registeredAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastLoginAt?: Maybe<Scalars['timestamptz']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  registeredAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  country?: InputMaybe<CountryCode_Order_By>;
  countryCode?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  favoriteCompanies_aggregate?: InputMaybe<FavoriteCompany_Aggregate_Order_By>;
  favoriteLists_aggregate?: InputMaybe<FavoriteList_Aggregate_Order_By>;
  firstName?: InputMaybe<Order_By>;
  hasBacktest?: InputMaybe<Order_By>;
  isActive?: InputMaybe<Order_By>;
  lastLoginAt?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  paymentMethod?: InputMaybe<PaymentMethod_Order_By>;
  portfolios_aggregate?: InputMaybe<Portfolio_Aggregate_Order_By>;
  registeredAt?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  savedFilters_aggregate?: InputMaybe<SavedFilter_Aggregate_Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  email: Scalars['String'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CountryCode = 'countryCode',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  HasBacktest = 'hasBacktest',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  LastLoginAt = 'lastLoginAt',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Password = 'password',
  /** column name */
  RegisteredAt = 'registeredAt',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  countryCode?: InputMaybe<CountryCode_Enum>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  hasBacktest?: InputMaybe<Scalars['Boolean']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastLoginAt?: InputMaybe<Scalars['timestamptz']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  registeredAt?: InputMaybe<Scalars['timestamptz']>;
  role?: InputMaybe<Role_Enum>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  countryCode?: InputMaybe<CountryCode_Enum>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  hasBacktest?: InputMaybe<Scalars['Boolean']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastLoginAt?: InputMaybe<Scalars['timestamptz']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  registeredAt?: InputMaybe<Scalars['timestamptz']>;
  role?: InputMaybe<Role_Enum>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CountryCode = 'countryCode',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  HasBacktest = 'hasBacktest',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  LastLoginAt = 'lastLoginAt',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Password = 'password',
  /** column name */
  RegisteredAt = 'registeredAt',
  /** column name */
  Role = 'role'
}

export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetCompaniesByTickersQueryVariables = Exact<{
  tickers: Array<Scalars['String']> | Scalars['String'];
}>;


export type GetCompaniesByTickersQuery = { __typename?: 'query_root', company: Array<{ __typename?: 'company', name?: string | null, ticker: string, currency?: string | null, sector?: string | null, dividendYieldTTM?: number | null, stockPrice?: number | null, country?: { __typename?: 'countryCode', continent?: { __typename?: 'country', countryCode: CountryCode_Enum, continentCode: ContinentCode_Enum } | null } | null }> };

export type GetPortfolioQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPortfolioQuery = { __typename?: 'query_root', portfolio: Array<{ __typename?: 'portfolio', id: number, name: string, portfolioAllocations: Array<{ __typename?: 'portfolioAllocation', allocation: number, company: { __typename?: 'company', name?: string | null, ticker: string, currency?: string | null, sector?: string | null, marketCapSize?: MarketCapSize_Enum | null, dividendYieldTTM?: number | null, stockPrice?: number | null, country?: { __typename?: 'countryCode', continent?: { __typename?: 'country', countryCode: CountryCode_Enum, continentCode: ContinentCode_Enum } | null } | null } }> }> };
