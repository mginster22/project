import queryString from "query-string";
import config from "./../configs/index";
export const getRandomUsers = (options = {}) => {
  const defaultOption = {
    page: 1,
    results: config.DEFAULT_AMOUNT,
    seed: config.API_KEY,
    nat: config.DEFAULT_NUT,
  };
  const finallyOption = { ...defaultOption, ...options };
  const queryOption = queryString.stringify(finallyOption);
  return fetch(`${config.API_BASE}?${queryOption}`).then((response) =>
    response.json()
  );
};

export const loadNames = () => {
  return fetch("/names.json").then((res) => res.json());
};
export const loadPhones = () => {
  return fetch("/phones.json").then((res) => res.json());
};
export const loadChat=()=>{
  return fetch("/chat.json").then((res)=>res.json())
}