import Cookie from "js-cookie"

export default function getterCookie() {

    return Cookie.get("token")? true : false
}