// ./app/vitals.ts

import type {Metric} from 'web-vitals'

function getConnectionSpeed() {
  const isSupported = !!(navigator as any)?.connection?.effectiveType

  return isSupported ? (navigator as any)?.connection?.effectiveType : ''
}

export function sendToVercelAnalytics(metric: Metric) {

  const body = {
    id: metric.id,
    page: window.location.pathname,
    href: window.location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed(),
  }
  console.log(body)
}