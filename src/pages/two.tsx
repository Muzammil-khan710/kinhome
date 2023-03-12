import React from 'react'
import PerformanceMetrics from '../components/Perf'

type Props = {}

const two = (props: Props) => {
  return (
    <section>
        <h1>Page two</h1>
        <PerformanceMetrics/>
    </section>
  )
}

export default two