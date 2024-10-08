import React, { useEffect, useState } from 'react';



const Watch = () => {


    const [allBike, setAllBike] = useState([])

    useEffect(() => {
        fetch('bike.json')
            .then(res => res.json())
            .then(data => setAllBike(data))
    }, []);


    return (
        <div>
            {
                allBike.map(bike =><>
                  <h2>Bike Model: {bike.model}</h2>
                    <h3>Price ${bike.price}</h3>
                    <h3>Type: {bike.type}</h3>

                </>
                  
                )
            }
        </div>
    );
};

export default Watch;