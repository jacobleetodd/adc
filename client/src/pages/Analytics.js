import React, { useEffect, useState } from 'react'

import axios from 'axios'

const Analytics = () => {
  const [allNumbers, setAllNumbers] = useState()

  useEffect(() => {
    const getAllNumbers = async () => {
      const response = await axios.get('/api/values/all')
      console.log({ data: response.data })
      setAllNumbers(response)
    }

    getAllNumbers()
  }, [])

  return (
    <div>
      TEST
      {/* {
        allNumbers?.map(number => <div key={number}>{`Here is a the number: ${number}`}</div>)
      } */}
    </div>
  )
}

export default Analytics
