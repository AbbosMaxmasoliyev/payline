const reducer = (state, action) => {
    switch (action.type) {
        case "SET_COUNTRY_SHOW":
            return { ...state, countryShow: action.payload };
        case "SET_COUNTRY_NAME":
            return { ...state, countryName: action.payload };
        case "SET_COUNTRY_PHONE_CODE":
            return { ...state, countryPhoneCode: action.payload };
        case "SET_COUNTRY":
            return { ...state, country: action.payload };
        case "SET_COUNTRIES":
            return { ...state, countries: action.payload };
        case "SET_ACTIVE_INPUT":
            return { ...state, activeInput: action.payload };
        case "SET_PHONENUMBER":
            return { ...state, phoneNumber: action.payload };
        case 'SET_LOAN_VALUE':
            return { ...state, loanValue: action.payload };
        case 'SET_COUNTRY':
            return { ...state, country: action.payload };
        case 'TOGGLE_CURRENCY_MODAL':
            return { ...state, showCurrencyModal: !state.showCurrencyModal };
        case 'SET_LOAN_VALUE':
            return { ...state, loanValue: state.loanValue += state.payload };
        case 'CURRENCY_VALUE':
            return { ...state, currencyvalue: action.payload };
        case 'MAIN_CURRENCY':
            return { ...state, mainCurrency: action.payload };
        case 'SET_CURRENCIES':
            return { ...state, currencies: action.payload };
        case 'SET_CURRENCIES_COUNTRY':
            return { ...state, currencies_country: action.payload };
        case 'CURRENCY':
            return { ...state, currency: action.payload };
        case 'CURRENCIES_DATA':
            return { ...state, currencies_data: action.payload };

        case 'FILTER_COUNTRY':
            return { ...state, filter_country: action.payload };
        case 'SET_SHOWKEYBOARD':
            return { ...state, showKeyboard: action.payload };
        case 'SET_CURRENCYVALUE':
            return { ...state, currencyValue: action.payload };
        default:
            return state;
    }
};


export default reducer