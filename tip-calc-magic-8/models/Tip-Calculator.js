module.exports = function tipCalcuator(total, percent) {
    const newTotal =  Number(total) * (100 + Number(percent)) / 100
    const tip = newTotal - Number(total)
    return tip.toString()
}