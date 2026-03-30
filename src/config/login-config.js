export const loginLoadConfig = {
  stages: [
    { duration: "15s", target: 10 },
    { duration: "30s", target: 25 },
    { duration: "15s", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(95)<1500"],
    http_req_failed: ["rate<0.03"],
  },
};
