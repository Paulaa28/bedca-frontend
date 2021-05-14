import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components";
import { Translate } from "../components";

import Title from '../components/Title'
import Text from '../components/Text'


function Food() {
  const { id } = useParams();

  const url = `http://127.0.0.1:8000/api/food/${id}/profile/`;

  const [data, setData] = useState([]);

  console.log(url);
  console.log(data);

  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.status);
    const responseJson = await response.json();
    setData(responseJson.components);
  };

  useEffect(() => {
    fetchApi();
  });

  return (
    <div className="background-food">
      <NavBar />
    <div className="details-food">
      {data.map((food) => (
        <div  className="element" key={food.id}>
        <Title className="composition-title-food" value={food.type.es_description}/>
        <Text className="composition-value-food" value={food.value+food.meassure}/>
        </div>
      ))}
      <Translate />
      </div>
    </div>
  );
}

export default Food;
