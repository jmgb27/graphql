import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";

function Character() {
    const { id } = useParams();
    const { error, loading, data } = useCharacter(id);
    console.log({ error, loading, data });
    return (
        <>
            {error && "Something Went Wrong :<"}
            {!loading ? (
                <div>
                    <img src={data.character.image} alt={data.character.name} />
                    {data.character.name}
                </div>
            ) : (
                "Loading..."
            )}
        </>
    );
}

export default Character;
