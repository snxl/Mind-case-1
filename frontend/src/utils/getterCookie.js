import Cookie from "js-cookie"

export default function getterCookie() {
    
    const cookie = Cookie.get("token")

    return cookie? true : false
}