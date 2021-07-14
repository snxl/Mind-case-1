import jwt from "jsonwebtoken"
import Cookie from "js-cookie"

export default function dataToken(){

    const cookie = Cookie.get("token")

    return jwt.verify(cookie, "46edbcb9da85c8e2aa977de76b20d659c85517bf4435643008d3615f075eb22f")
}