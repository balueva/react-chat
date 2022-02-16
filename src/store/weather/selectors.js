export const getWeatherFromReduser = (state) => state.weatherReducer;

export const getWeatherData = (state) => getWeatherFromReduser(state).data;
export const getWeatherError = (state) => getWeatherFromReduser(state).error;
export const getWeatherIsLoading = (state) => getWeatherFromReduser(state).isLoading;
