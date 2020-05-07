export const required = (value) => {
    if(value) {
        return undefined
    }
    return 'Поле не заполнено!'
}

export const maxLengthCreator = (maxLength) =>  (value) => {
    if (value.length > maxLength) {
        return `Вы ввели больше ${maxLength} символов!`
    }
    return undefined
}