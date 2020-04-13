module.exports = macro => {
    let i = 0

    const next = () => {
        require('./actions/' + macro[i].action.toLowerCase().replace(' ', '-') + '.js')(macro[i]).then(() => {
            i++
            if (i < macro.length) {
                next()
            }
        }).catch(err => console.log(err))
    }

    next()
}