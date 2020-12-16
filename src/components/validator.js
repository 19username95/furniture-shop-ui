import _ from 'lodash'

const regexp = {
    email: new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$'),
    password: new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$'),
    fullName: new RegExp('(?=^.{0,40}$)^[a-zA-Z-]+\\s[a-zA-Z-]+$')
}
const regexpError = {
    email: 'Please make sure your email format is correct',
    password: 'Please enter min 6 char and has at least one letter and one number',
    fullName: 'Please enter your full name'
}

export const validate = (fieldName, value) => {
    if (!value || !value.length) {
        return {
            ok: false,
            message: `${_.startCase(fieldName)} should not be empty`
        }
    }
    if (!regexp[fieldName].test(value)) {
        return {
            ok: false,
            message: regexpError[fieldName]
        }
    }

    return { ok: true }
}
