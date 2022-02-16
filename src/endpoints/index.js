export const getAPIEndpoint = () => 'https://weatherapi-com.p.rapidapi.com';

export const getHistoryPath = () => [getAPIEndpoint(), 'history.json'].join('/');

export const getHistory = (city, beginDate, endDate) =>
    [getHistoryPath(), `q=${city}&dt=${beginDate}&end_dt=${endDate}&lang=en`].join('?')

export const requestInit = {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key": "7c3497b962msh3e6eeb88c0269f1p1eb65fjsnc4b525560ab2"
    }
}

// https://rapidapi.com/weatherapi/api/weatherapi-com/

// https://weatherapi-com.p.rapidapi.com/history.json?q=${city}&dt=${beginDate}&end_dt=${endDate}&lang=en`,

