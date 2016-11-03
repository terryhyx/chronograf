import {proxy} from 'utils/queryUrlGenerator';

export function getAlerts(proxyLink) {
  return proxy({
    source: proxyLink,
    query: "select * from alerts order by time desc limit 100",
    db: "chronograf",
  });
}
