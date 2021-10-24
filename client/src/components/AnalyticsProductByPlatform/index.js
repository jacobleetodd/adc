import React, { useMemo, useState } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'

import { getUniqueValues, sumValues } from '../../utils'

import LineChart from '../LineChart'
import Select from '../Select'

const AnalyticsProductByPlatform = ({ analyticsData, boxStyles, products }) => {
  const metrics = ['clicks', 'impressions']

  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [selectedMetric, setSelectedMetric] = useState(metrics[0])

  const transformData = () => {
    const selectedData = analyticsData.filter(({ product }) => product === selectedProduct)
    const dates = getUniqueValues(selectedData.map(({ date }) => date))

    const platforms = getUniqueValues(selectedData.map(({ platform }) => platform))

    return platforms.map((platform) => ({
      id: platform,
      data: dates.map((date) => ({
        x: date,
        y: sumValues(
          selectedData.filter((data) => data.date === date && data.platform === platform),
          selectedMetric
        ),
      })),
    }))
  }

  const transformedData = useMemo(() => transformData(), [selectedProduct, selectedMetric])

  return (
    <Box sx={boxStyles}>
      <Typography color='gray' sx={{ marginBottom: 4 }} variant='h5'>
        View Each Product by Platform
      </Typography>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Select
              handleChange={(e) => setSelectedProduct(e.target.value)}
              label='Products'
              selectedValue={selectedProduct}
              values={products.map((product) => ({ label: product, value: product }))}
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

export default AnalyticsProductByPlatform
