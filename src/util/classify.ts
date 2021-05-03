 const mergeClasses = (defaultClasses: any={}, otherClasses: any ={}) => {
    return Object.assign({}, defaultClasses, otherClasses)
}

export default mergeClasses