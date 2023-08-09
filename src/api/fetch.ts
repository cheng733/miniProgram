import Fetch from "../packages/Fetch";

const createFetch = () => {
  return new Fetch({
    baseURL: "https://cheyou.xyz/api",
    interceptorsReqSuccessHandle: (config) => {},
    interceptorsReqErrorHandle: (e) => {},
    interceptorsResSuccessHandle: (config) => {},
    interceptorsResErrorHandle: (e) => {},
  });
};
const fetch = createFetch();
export default fetch;
