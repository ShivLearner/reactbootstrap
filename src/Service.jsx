import React from "react";
import Card from "./Card";
import CardData from './CardData';

const Service = () => {
     
    return (
        <>
            <div className="container-fluid mt-3 mb-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                {CardData.map((CurrVal, index) => {
                    return <Card 
                        key={index}
                        imgsrc={CurrVal.imgsrc}
                        title={CurrVal.title}
                    />
                })}
                    
                </div>
            </div>
        </>
    );
}


export default Service;