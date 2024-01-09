import { useEffect, useState } from "react";

export function FetchCharacters() {
  const [characterName, setCharacterName] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await fetch("https://swapi.dev/api/people");
      const characters = await data.json();
      const firstCharacterName = characters.results.shift().name;
      setCharacterName(firstCharacterName);
    };
    fetchCharacters();
  }, []);

  return <h1>{characterName ? characterName : "loading..."}</h1>;
}
