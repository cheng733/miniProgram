import fetch from "./fetch";
export declare namespace queryNews {
    interface news {
        date: string;
        weiyu: string;
        image: string;
        news: string[];
    }
  interface response {
    status: number;
    data: news
  }
}

export const queryNews = async (): Promise<queryNews.response> => {
  const raw = await fetch.get("/news");
  return raw as any
};
