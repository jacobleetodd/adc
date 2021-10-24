import React, { useState } from 'react'
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'

import { getUniqueValues } from '../utils'

import AnalyticsProductOnAPlatform from '../components/AnalyticsProductOnAPlatform'
import AnalyticsProductByPlatform from '../components/AnalyticsProductByPlatform'
import AnalyticsPlatformByProduct from '../components/AnalyticsPlatformByProduct'

import analyticsData from '../data/data.json'

const Analytics = () => {
  const views = {
    PRODUCT_BY_PLATFORM: 'productByPlatform',
    PLATFORM_BY_PRODUCT: 'platformByProduct',
    PRODUCT_ON_A_PLATFORM: 'productOnAPlatform',
  }

  const [currentView, setCurrentView] = useState(views.PRODUCT_BY_PLATFORM)

  const products = getUniqueValues(analyticsData.map(({ product }) => product))

  const platforms = getUniqueValues(analyticsData.map(({ platform }) => platform))

  const boxStyles = {
    borderColor: 'lightGray',
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: 'solid',
    padding: 4,
  }

  return (
    <Box
      sx={{
        margin: 8,
      }}
    >
      <Box
        sx={{
          ...boxStyles,
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginBottom: 4,
        }}
      >
        <Typography color='gray' sx={{ marginBottom: 4 }} variant='h2'>
          Analytics
        </Typography>
        <ToggleButtonGroup exclusive onChange={(e) => setCurrentView(e.target.value)} size='small' value={currentView}>
          <ToggleButton value={views.PRODUCT_BY_PLATFORM}>Product by Platform</ToggleButton>
          <ToggleButton value={views.PLATFORM_BY_PRODUCT}>Platform by Product</ToggleButton>
          <ToggleButton value={views.PRODUCT_ON_A_PLATFORM}>Product on a Platform</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {currentView === views.PRODUCT_BY_PLATFORM && (
        <AnalyticsProductByPlatform analyticsData={analyticsData} boxStyles={boxStyles} products={products} />
      )}
      {currentView === views.PLATFORM_BY_PRODUCT && (
        <AnalyticsPlatformByProduct analyticsData={analyticsData} boxStyles={boxStyles} platforms={platforms} />
      )}
      {currentView === views.PRODUCT_ON_A_PLATFORM && (
        <AnalyticsProductOnAPlatform
          analyticsData={analyticsData}
          boxStyles={boxStyles}
          products={products}
          platforms={platforms}
        />
      )}
    </Box>
  )
}

export default Analytics
