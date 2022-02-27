export const formatCurrencyString = (value) => {
    const currencyFormatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    })

    return currencyFormatter.format(value)
}
