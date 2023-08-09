export default defineAppConfig({
  pages: ["pages/news/index", "pages/weather/index", "pages/my/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: true,
    color: "#000000",
    // selectedColor: "#000000",
    // backgroundColor: "#000000",
    list: [
      {
        pagePath: "pages/news/index",
        text: "早报",
      },
      {
        pagePath: "pages/weather/index",
        text: "天气",
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
      },
    ],
  },
  usingComponents: {},
  lazyCodeLoading: "requiredComponents",
  enableShareAppMessage: true,
  enableShareTimeline:true
});
