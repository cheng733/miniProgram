import Fetch from "../packages/Fetch";

const createFetch = () => {
  return new Fetch({
    baseURL: "http://localhost:8080",
    interceptorsReqSuccessHandle: (config) => {},
    interceptorsReqErrorHandle: (e) => {},
    interceptorsResSuccessHandle: (config) => {},
    interceptorsResErrorHandle: (e) => {},
  });
};
const fetch = createFetch();
export default fetch;
