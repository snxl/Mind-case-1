import Cookies from "js-cookie";

export default function setCookie(JWT){

    Cookies.set(
        "token",
        JWT,{
            expires: 7,
            secure: true
        }
    )

}