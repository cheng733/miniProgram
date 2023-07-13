import { action, observable } from "mobx";

class TabStore {
  @observable state = {
    selected: 0,
    list: [
      {
        pagePath: "/pages/news/index",
        text: "早报",
      },
      {
        pagePath: "/pages/weather/index",
        text: "天气",
      },
      {
        pagePath: "/pages/my/index",
        text: "我的",
      },
    ],
  };
  @action.bound
  updateSelected(idx) {
    this.state.selected = idx;
  }
}

export default new TabStore()
