import { check, sleep } from "k6";
import { SharedArray } from "k6/data";
import papaparse from "https://jslib.k6.io/papaparse/5.1.1/index.js";
import { login } from "../services/login-service.js";
import { loginLoadConfig } from "../config/login-config.js";

export const options = loginLoadConfig;

const loginData = new SharedArray("loginData", function () {
  return papaparse.parse(open("../../data/login-data.csv"), { header: true })
    .data;
});

export default function () {
  const credentials = loginData[__VU % loginData.length];

  const res = login(credentials.user, credentials.passwd);

  let body = {};
  try {
    body = JSON.parse(res.body);
  } catch (_) {
    body = {};
  }

  check(res, {
    "Response code === 201": (r) => r.status === 201,
    "Response body contains token": (r) =>
      body.token !== undefined && body.token.length > 0,
    "Response time < 1.5s": (r) => r.timings.duration < 1500,
  });

  sleep(1);
}
