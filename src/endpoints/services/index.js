import { getHistory, requestInit } from ".."


export const api = {
    getHistory: (city, beginDate, endDate) => fetch(getHistory(city, beginDate, endDate), requestInit)
}