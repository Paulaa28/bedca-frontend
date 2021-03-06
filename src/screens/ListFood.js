import { useState, useEffect } from 'react';
import { NavBar, TableFood } from '../components'
import API_BEDCA from '../services/bedcaApi'

function ListFood() {
    const [food, setFood] = useState([])
    useEffect(async () => {
        const food = await API_BEDCA.get('food')
        setFood(food.results)
    }, [])

    return (
        <div className="list-food-container">
            <NavBar />
            <TableFood food={food} />
        </div>
    )
}

export default ListFood
