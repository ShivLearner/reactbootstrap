import React from "react";
import PlaceholderBlock from "./PlaceholderBlock";

const Placeholder = () => {
    const phBlock = 8;
    return (
        <>
            <div className="container-fluid mt-3 mb-5">
                <div className="row row-cols-sm-2 row-cols-md-4 g-3">
                    {[...Array(phBlock)].map((e, i) => <PlaceholderBlock key={i} />)}
                </div>
            </div>
        </>
    );
}

export default Placeholder;


