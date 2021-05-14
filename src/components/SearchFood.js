import { useState, useEffect } from 'react';
import API_BEDCA from '../services/bedcaApi'
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Input, Button } from "./";

export default function SearchFood() {
  const [item, setItem] = useState('')
  const [food, setFood] = useState([])
  useEffect(async () => {
      const food = await API_BEDCA.get('food')
      setFood(food.results)
  }, [])

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
                onChange={setItem}
              />
            )}
          </FormattedMessage>
          <FormattedMessage id="button.search" defaultMessage="Search">
            {(value) => <Button id="btn-search" value={value} />}
          </FormattedMessage>
        </div>
       {food ? food.filter((val) => item.length > 0 ? val.es_description.toLowerCase().includes(item) : '')
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

