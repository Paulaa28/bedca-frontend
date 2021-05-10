import React from 'react'
import Title from "../components/Title";
// import SubTitle from "../components/SubTitle";
import List from "../components/List";
import { FormattedMessage } from "react-intl";
function Aside(props) {
    return (
        <div className="aside">
        <FormattedMessage id="title.api" defaultMessage="Api Guide">
          {(value) =>  <Title className="title" value={value}/>}
        </FormattedMessage>
        
        <List />
        </div>
    )
}

export default Aside
