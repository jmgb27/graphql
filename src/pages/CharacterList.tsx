import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";

function CharacterList() {
    const { loading, error, data } = useCharacters();

    return (
        <>
            {error && "Something Went Wrong :<"}
            {!loading &&
                data.characters.results.map((x: any) => {
                    return (
                        <div>
                            <Link to={`/${x.id}`}>
                                <img src={x.image} alt="" />
                                <h1>{x.name}</h1>
                            </Link>
                        </div>
                    );
                })}
        </>
    );
}

export default CharacterList;
