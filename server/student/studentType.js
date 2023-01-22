import { ValidationError } from "../errors"

export const StudentProps = {
    user_name: 'user_name',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    phone_number: 'phone_number'
}

export function studentTypeVal(student) {
    if (!(typeof(student.user_name) === String)) {
        return ValidationError("Incorrect user_name type");
    }
    if (!(typeof(student.first_name) === String)) {
        return ValidationError("Incorrect first_name type");
    }
    if (!(typeof(student.last_name) === String)) {
        return ValidationError("Incorrect last_name type");
    }
    if (!(typeof(student.email) === String)) {
        return ValidationError("Incorrect email type");
    }
    if (!(typeof(student.password) === String)) {
        return ValidationError("Incorrect password type");
    }
    if (!(typeof(student.phone_number) === Number)) {
        return ValidationError("Incorrect phone_number type");
    }
}