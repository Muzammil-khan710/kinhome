import { useEffect, useState, useRef } from 'react';
import { onFCP, onLCP, onCLS, onFID, onTTFB, Metric } from 'web-vitals';

type MetricData = {
  id: string;
  name: string;
  value: number;
};

const PerformanceMetrics = () => {
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState<MetricData[]>([]);
  const data = useRef<MetricData[]>([]);

  useEffect(() => {
    Promise.all([
      new Promise(resolve => onCLS(resolve)),
      new Promise(resolve => onFID(resolve)),
      new Promise(resolve => onFCP(resolve)),
      new Promise(resolve => onLCP(resolve)),
      new Promise(resolve => onTTFB(resolve)),
    ]).then(values => {
      const metricsData = values.map((value:any, index) => ({
        id: METRICS_NAMES[index],
        name: value.name,
        value: value.value,
      }));

      setMetrics(metricsData);
      setLoading(false);
    });

    return () => {
      data.current = [];
    };
  }, []);

  const METRICS_NAMES = ['CLS', 'FID', 'FCP', 'LCP', 'TTFB'];

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2>Performance Metrics:</h2>
          <ul>
            {metrics.map(metric => (
              <li key={metric.id}>
                <strong>{metric.name}:</strong> {metric.value.toFixed(2)}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default PerformanceMetrics;
