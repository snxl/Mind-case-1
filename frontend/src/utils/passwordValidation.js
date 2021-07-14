
export default function passwordValidation(password){

    let obj = {
        Length: undefined,
        Small:undefined,
        Capital:undefined,
        Number:undefined
    }


    if(password.length < 8) obj.length = "Deve conter 8 caracteres"

    if(!password.match(RegExp('(.*[a-z].*)')))  obj.Small = "Deve conter 1 mininúsculo"

    if(!password.match(RegExp('(.*[A-Z].*)'))) obj.Capital = "Deve conter 1 maiúsculo"

    if(!password.match(RegExp('(.*\\d.*)'))) obj.Number = "Deve conter 1 número"

    return obj
}