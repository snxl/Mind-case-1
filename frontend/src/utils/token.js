import Cookie from "js-cookie"

export default function getterToken() {

    return Cookie.get("token")
}