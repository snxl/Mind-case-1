import Header from "../../components/header"
import Main from "../../components/main"

import * as s from "./styled"

export default function Profile(props){

    return (
        <>
            <s.header>
                <Header
                    adm={true}
                />
            </s.header>
            <s.main>
                <Main />
            </s.main>
            <footer>

            </footer>
        </>
    )
}