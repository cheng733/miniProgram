import fetch from "./fetch";

export declare namespace queryWeather {
  interface params {
    province: string;
    city: string;
  }

  interface weather {
    date: string;
    province: string;
    city:string
    sunrise:string
    sunset:string
    visibility:string
    wind:string
    wind_scale:string
    wind_speed:string
    rain:string
    rain_24h:string
    humidity:string
  }

  interface response {
    status: number;
    data:weather
  }
}
export const queryWeather = async (
  params: queryWeather.params
): Promise<queryWeather.response> => {
  const raw = await fetch.get("/weather", { params });
  return raw as any;
};
