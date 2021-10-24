import React, { useMemo, useState } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'

import { getUniqueValues, sumValues } from '../../utils'

import LineChart from '../LineChart'
import Select from '../Select'

const AnalyticsProductOnAPlatform = ({ analyticsData, boxStyles, platforms }) => {
  const metrics = ['clicks', 'impressions']

  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0])
  const [selectedMetric, setSelectedMetric] = useState(metrics[0])

  const transformData = () => {
    const selectedData = analyticsData.filter(({ platform }) => platform === selectedPlatform)
    const dates = getUniqueValues(selectedData.map(({ date }) => date))
    const products = getUniqueValues(selectedData.map(({ product }) => product))

    return products.map((product) => ({
      id: product,
      data: dates.map((date) => ({
        x: date,
        y: sumValues(
          selectedData.filter((data) => data.date === date && data.product === product),
          selectedMetric
        ),
      })),
    }))
  }

  const transformedData = useMemo(() => transformData(), [selectedPlatform, selectedMetric])

  return (
    <Box sx={boxStyles}>
      <Typography color='gray' sx={{ marginBottom: 4 }} variant='h5'>
        View Each Platform by Product
      </Typography>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Select
              handleChange={(e) => setSelectedPlatform(e.target.value)}
              label='Platforms'
              selectedValue={selectedPlatform}
              values={platforms.map((platform) => ({ label: platform, value: platform }))}
            />
          </Grid>
          <Grid item xs={4}>
            <Select
              handleChange={(e) => setSelectedMetric(e.target.value)}
              label='Metrics'
              selectedValue={selectedMetric}
              values={metrics.map((metric) => ({ label: metric, value: metric }))}
            />
          </Grid>
          <Grid item style={{ width: '100%', height: 400 }} xs={12}>
            <LineChart data={transformedData} legendX='date' legendY={selectedMetric} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AnalyticsProductOnAPlatform
