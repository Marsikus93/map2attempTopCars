import React from 'react';

type TopCarsType = {
    cars: Array<CarType>
}
type CarType = {
    manufacturer: string,
    model: string
}
export const TopCars = (props: TopCarsType) => {
    return (
        <div>
            {props.cars.map((ObjectFromCars, index) => {
                return (
                    <div>
                        <span>{ObjectFromCars.manufacturer}</span>

                    </div>

                )

            })}
        </div>

    )
}