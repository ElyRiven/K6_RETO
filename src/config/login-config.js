export const loginLoadConfig = {
  stages: [
    { duration: "10s", target: 20 },
    { duration: "40s", target: 40 },
    { duration: "10s", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(95)<1500"],
    http_req_failed: ["rate<0.03"],
  },
};
