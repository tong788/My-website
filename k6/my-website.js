import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: "1m", target: 20 },
    { duration: "1m", target: 100 },
    { duration: "2m", target: 300 },
    { duration: "1m", target: 0 },
  ],
};

const baseUrl = __ENV.BASE_URL || 'http://host.docker.internal:5173';

export default function () {
  const response = http.get(baseUrl);

  check(response, {
    'website returns HTTP 200': (res) => res.status === 200,
    'website returns HTML': (res) =>
      res.headers['Content-Type']?.includes('text/html'),
  });

  sleep(0.5);
}
