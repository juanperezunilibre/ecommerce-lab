function formatoMoneda(numero) {
    const formatter = Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        currencyDisplay: 'code',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
    return formatter.format(numero)
}


export {
    formatoMoneda
}