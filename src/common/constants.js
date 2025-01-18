/**APP Constants*/ 
export const APP_NAME = "Measure"
export const APP_VERSION = "Version 3.0"

/**API Constants*/
export const API_ENDPOINT = "https://jasper-sit.jio.com/measureapi/"
export const LOGIN_API = API_ENDPOINT + 'login'
export const LOGINOTP_API = API_ENDPOINT + 'loginotp'
export const UPDATEPASSWORD_API = API_ENDPOINT + 'updatepassword'
export const UPDATEUSERNAME_API = API_ENDPOINT + 'updateusername'
export const GETOTP_API = API_ENDPOINT + 'getotp'
export const GETOTPRESETPW_API = API_ENDPOINT + 'getotpresetpw'
export const GETFILTERS_API = API_ENDPOINT + 'getfilters'
export const GETDATASETS_API = API_ENDPOINT + 'getdatasets'
export const GETCHARTS1_API = API_ENDPOINT + 'getreportsagg1'
export const GETCHARTS2_API = API_ENDPOINT + 'getreportsagg2'
export const GETCHARTS3_API = API_ENDPOINT + 'getreportsagg3'
export const GETCHARTSN1_API = API_ENDPOINT + 'getreportsaggn1'
export const GETCHARTSN2_API = API_ENDPOINT + 'getreportsaggn2'
export const GETCHARTSN3_API = API_ENDPOINT + 'getreportsaggn3'
export const GETACCOUNTS_API = API_ENDPOINT + 'getaccounts'
export const GETSUBSCRIPTIONS_API = API_ENDPOINT + 'getsubscriptions'
export const GETLICENSES_API = API_ENDPOINT + 'getlicenses'
export const ADDACCOUNT_API = API_ENDPOINT + 'createaccount'
export const ADDSUBSCRIPTION_API = API_ENDPOINT + 'createsubscription'
export const ADDLICENSE_API = API_ENDPOINT + 'createlicense'
export const UPDATEACCOUNT_API = API_ENDPOINT + 'updateaccount'
export const UPDATESUBSCRIPTION_API = API_ENDPOINT + 'updatesubscription'
export const UPDATELICENSE_API = API_ENDPOINT + 'updatelicense'
export const TOGGLEACCOUNTACTIVE_API = API_ENDPOINT + 'toggleaccountactive'
export const TOGGLESUBSCRIPTIONACTIVE_API = API_ENDPOINT + 'togglesubscriptionactive'
export const TOGGLELICENSEACTIVE_API = API_ENDPOINT + 'togglelicenseactive'

/**UI Constants */
export const UI_BASE = "/measure/"
export const NAME_REGEX = /^[a-zA-Z]([,._-](?![,._-])|[a-zA-Z0-9 ]){3,18}[a-zA-Z0-9]$/;
export const MAIL_REGEX = /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/;
export const PWD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[#@$])[A-Za-z\d#@$]{8,}$/;
export const OTP_REGEX = /^[0-9]{6}$/;

export const PROFILE_FEATURES = [
    { key: "ManageAccounts", value: "Manage Accounts" },
    { key: "ManageSubscriptions", value: "Manage Subscriptions" },
    { key: "ManageLicenses", value: "Manage Licenses" },
]

export const ROLES = [
    { key: 0, value: "" },
    { key: 1, value: "Admin" },
    { key: 2, value: "User" },
    { key: 3, value: "App" }
]

/**String Helper Functions */
export const getDate = (x) => {
    var dt = new Date(x)
    var fdt = dt.getFullYear() + "-" + ((dt.getMonth() + 1) > 9 ? (dt.getMonth() + 1) : "0" + (dt.getMonth() + 1)) + "-" + (dt.getDate() > 9 ? dt.getDate() : "0" + dt.getDate())
    return fdt
}
export const toHoursMinutes = function (value) {
    var label = value?.dataset?.label
    var num = (typeof value === 'number') ? value : value?.raw ?? 0
    if (typeof num === 'number') {
        const hours = Math.floor(num / 60)
        const minutes = Math.round((num % 60), 0)
        if (label) {
            return label + ": " + (hours > 0 ? (hours + 'h ') : '') + minutes + 'm'
        }
        return (hours > 0 ? (hours + 'h ') : '') + minutes + 'm'
    }
    return value
}

export const toSimpleDecimal = function (value) {
    var label = value?.dataset?.label
    var num = (typeof value === 'number') ? value : value?.raw ?? 0
    if (typeof num === 'number') {
        if (label) {
            return label + ": " + Math.round(num, 2)
        }
        return Math.round(num, 2)
    }
    return value
}

export const toMillionMinutes = function (value) {
    var label = value?.dataset?.label
    var num = (typeof value === 'number') ? value : value?.raw ?? 0
    if (typeof num === 'number') {
        if (label) {
            return label + ": " + toBnMnThousands(num)
        }
        return toBnMnThousands(num)
    }
    return value
}

export const toMillionHours = function (value) {
    return toBnMnThousands(value / 60);
}

export const toBnMnThousands = function (value) {
    var label = value?.dataset?.label
    var num = (typeof value === 'number') ? value : value?.raw ?? 0
    if (typeof num === 'number') {
        if (num >= 1e9) {
            if (label) {
                return label + ": " + (num / 1e9).toFixed(1) + 'B';
            }
            return (num / 1e9).toFixed(1) + 'B'; // Convert to Billions
        } else if (num >= 1e6) {
            if (label) {
                return label + ": " + (num / 1e6).toFixed(1) + 'M';
            }
            return (num / 1e6).toFixed(1) + 'M'; // Convert to Millions
        } else if (num >= 1e3) {
            if (label) {
                return label + ": " + (num / 1e3).toFixed(1) + 'K';
            }
            return (num / 1e3).toFixed(1) + 'K'; // Convert to Thousands
        } else {
            if (label) {
                return label + ": " + Math.round(num, 2);
            }
            return Math.round(num, 2); // Less than 1000
        }
    }
    return value
}

export const toTooltipMinutes = function (value) {
    return toMillionMinutes(value) + " minutes"
}

export const toTooltipHours = function (value) {
    return toMillionHours(value) + " hours"
}

export const toTrimXAxis = function (label) {
    return label ? (label.length > 18 ? label.substring(0, 15) + '...' : label) : ''
}

export const toProperString = (param) => {
    if (param.length > 3) {
        return param.substring(0, 1).toUpperCase() + param.substring(1).toLowerCase()
    }
    else {
        return param.toUpperCase()
    }
}


/**Transformers */
export const transformBignumbers = (data) => {
    const result = []
    Object.keys(data).forEach(universe => {
        const kpis = data[universe]
        Object.keys(kpis).forEach(kpi => {
            const [key, value] = Object.entries(kpis[kpi])[0]
            result.push({
                universe,
                kpi,
                key,
                value
            })
        })
    })
    return result;
}

export const transformCharts = (data) => {
    const result = []
    if (data) {
        Object.keys(data).forEach(universe => {
            const dims = data[universe]
            Object?.keys(dims)?.forEach(dimension => {
                const kpis = dims[dimension]
                Object?.keys(kpis)?.forEach(kpi => {
                    const chart = kpis[kpi]
                    result.push({
                        universe,
                        dimension,
                        kpi,
                        chart
                    })
                })
            })
        })
    }

    return result;
}