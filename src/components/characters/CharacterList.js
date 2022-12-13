import CharacterCard from "./CharacterCard";

const CharacterList = ({ dataCharacters, filterByName = "" }) => {
  //Fución para pintar en el HTML la lista de personajes.
  const renderCharacterCards = dataCharacters
    //filter: recibe por parametro cada elemento, retornará los personajes que cumplan con la condición.
    .filter((characters) => {
      return characters.name.toLowerCase().includes(filterByName.toLowerCase());
    })

    //map: por cada elemento del array,retornaré un LI con los valores variables de cada personaje.
    .map((characters) => {
      return (
        <>
          <li key={characters.id}>
            <CharacterCard character={characters} />
          </li>
        </>
      );
    });

  return (
    <section className="section">
      <ul className="section__ul">
        {renderCharacterCards.length > 0
          ? renderCharacterCards
          : "We couldn't find any character named " + filterByName + "."}
      </ul>
    </section>
  );
};

export default CharacterList;