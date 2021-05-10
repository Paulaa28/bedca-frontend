import React from "react";
import { FormattedMessage } from "react-intl";

function List(props) {
  return (
    <div className="options">
      <ul>
        <li>
          <FormattedMessage id="option1.api" defaultMessage="Contact">
            {(value) => <a href="#Option1">{value}</a>}
          </FormattedMessage>
        </li>
        <li>
        <FormattedMessage id="option2.api" defaultMessage="Contact">
            {(value) => <a href="#Option2">{value}</a>}
          </FormattedMessage>
        </li>
        <li>
        <FormattedMessage id="option3.api" defaultMessage="Contact">
            {(value) => <a href="#Option3">{value}</a>}
          </FormattedMessage>
        </li>
        <li>
        <FormattedMessage id="option4.api" defaultMessage="Contact">
            {(value) => <a href="#Option4">{value}</a>}
          </FormattedMessage>
        </li>
      </ul>
    </div>
  );
}

export default List;
