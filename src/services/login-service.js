import http from "k6/http";
import { ENDPOINT } from "../utils/endpoints.js";

const loginUrl = `${ENDPOINT.BASE_URL}${ENDPOINT.LOGIN}`;

const loginParams = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function login(username, password) {
  const payload = JSON.stringify({ username, password });
  return http.post(loginUrl, payload, loginParams);
}
