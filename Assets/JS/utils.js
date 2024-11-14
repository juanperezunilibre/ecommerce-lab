function formatoMoneda(numero) {
    const formatter = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        currencyDisplay: 'code',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
    return formatter.format(numero)
}

export{formatoMoneda

}