export const getUniqueValues = (values) =>
  values.reduce((previousValue, currentValue) => {
    if (previousValue.indexOf(currentValue) === -1) {
      previousValue.push(currentValue)
    }
    return previousValue
  }, [])

export const sumValues = (values, sumValue) =>
  values.reduce((previousValue, currentValue) => previousValue + currentValue[sumValue], 0)
