import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function NavBar() {
  // const url = "http://127.0.0.1:8000/api/users/";
  const url = "http://127.0.0.1:8000/api/food/";

  const [data, setData] = useState([]);
  const [item, setItem] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.status);
    const responseJson = await response.json();
    setData(responseJson.results);
    // console.log(responseJson);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="content">
      <div className="searchFood">
        <FormattedMessage id="title.search" defaultMessage="Bedca">
          {(placeholder) => <h2>{placeholder}</h2>}
        </FormattedMessage>
        <FormattedMessage id="subTitle.search" defaultMessage="Write any food:">
          {(placeholder) => <h4>{placeholder}</h4>}
        </FormattedMessage>
        <div className="searchTool">
          <FormattedMessage
            id="input.search"
            defaultMessage="Write your search"
          >
            {(placeholder) => (
              <Input
                type="text"
                name="search"
                id="search"
                placeholder={placeholder}
                onChange={(e) => setItem(e.target.value)}
              />
            )}
          </FormattedMessage>
          <FormattedMessage id="button.search" defaultMessage="Search">
            {(value) => <Button id="btn-search" value={value} />}
          </FormattedMessage>
        </div>
       {console.log(data)}
       {data ? data.filter((val) => {
                if (item === "") {
                  return "";
                } else if (val.es_description.toLowerCase().includes(item)) {
                  return val;
                }
              })
              .map((datos, key) => (
                <div className="foods" key={key}>
                <Link to={`/food/${datos.id}`}>
                  <span className="id">
                    <a href={datos.id}>{datos.es_description}</a>
                  </span>
                  </Link>
                </div>
              ))
          : "cargando"}
      </div>
    </div>
  );
}
