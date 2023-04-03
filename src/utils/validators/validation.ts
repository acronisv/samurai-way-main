export const loginValidation = {
    required: 'Login is required',
    validate: (value: string) => {
        if(value.match(/[а-яА-Я]/)) {
            return 'Invalid format'
        }
        return true
    }
}

export const passwordValidation = {
    required: 'Password is required',
    validate: (value: string) => {
        if (value.length < 5) {
            return 'Password too short'
        }
        if(value.match(/[а-яА-Я]/)) {
            return 'English please'
        }
        return true
    }
}

export const addMessageFormValidation = {
    maxLength: {
        value: 50,
        message: 'Too many symbols'
    }
}

export const addPostFormValidation = addMessageFormValidation