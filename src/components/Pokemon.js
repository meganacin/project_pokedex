import { useState } from "react";
import "./Pokemon.css";
import { index } from "./DexInfo";
import { genderColor, statColor, typeColor } from "./Colors";

const Pokemon = () => {
  const [counter, setCounter] = useState(0);
  const [shiny, setShiny] = useState(false);
  function decrease() {
    if (counter > 0) setCounter(counter - 1);
  }
  function increment() {
    if (counter < 150) setCounter(counter + 1);
  }

  function setField(type) {
    switch (type) {
      //case "Normal":
      //return "normal";
      case "Fogo":
        return "fire";
      case "Água":
        return "water";
      case "Elétrico":
        return "eletric";
      case "Grama":
        return "grass";
      case "Gelo":
        return "ice";
      //case "Lutador": return "";
      case "Veneno":
        return "poison";
      //case "Terra": return "ground";
      //case "Voador": return "fly";
      case "Psíquico":
        return "psychic";
      case "Inseto":
        return "grass";
      //case "Pedra": return "";
      //case "Fantasma": return "";
      //case "Dragão": return "";
      //case "Sombrio": return "";
      //case "Metal": return "";
      case "Fada":
        return "fairy";
      default:
        return "normal";
    }
  }

  return (
    <body>
      <h2>Pokedex</h2>

      {index[counter] ? (
        <div>
          <div className="selector">
            <div className="btn" onClick={() => decrease()}>
              <img
                src={require("../icons/previous.png")}
                alt="back"
                className="btn_image"
              />
            </div>
            <div className="container">
              <div className="imageContainer" onClick={()=>shiny? setShiny(false):setShiny(true)}>
                <img
                  src={require("../fields/" +
                    setField(index[counter].type[0]) +
                    ".png")}
                  alt="field"
                  className="image"
                />
                {shiny ? (
                  <>
                  <img
                    src={require("../sprites/shiny/" + (counter + 1) + ".png")}
                    alt="Imagem"
                    width={200}
                    className="image_pokemon"
                  />
                  <img
                    src={require("../icons/shiny_icon.png")}
                    alt="shiny_icon"
                    className="shiny_icon"
                  />
                  </>
                ) : (
                  <img
                    src={require("../sprites/" + (counter + 1) + ".png")}
                    alt="Imagem"
                    width={200}
                    className="image_pokemon"
                  />
                )}
              </div>

              <div className="info_container">
                <div className="select_container">
                  <b>N°{index[counter].number}: </b>
                  <select
                    value={counter + 1}
                    onChange={(e) => setCounter(e.target.value - 1)}
                  >
                    {index.map((e) => (
                      <option key={e} value={e.number}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <b>Tipo: </b>
                  <span
                    className="type"
                    style={{
                      backgroundColor: typeColor(index[counter].type[0]),
                    }}
                  >
                    {index[counter].type[0]}{" "}
                  </span>
                  {index[counter].type[1] ? (
                    <span
                      className="type"
                      style={{
                        backgroundColor: typeColor(index[counter].type[1]),
                      }}
                    >
                      {" "}
                      {index[counter].type[1]}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
                <p>
                  {" "}
                  <b>Altura:</b> {index[counter].height}m
                </p>
                <p>
                  <b>Peso:</b> {index[counter].weight}kg
                </p>

                <p>
                  <b>Genero:</b>{" "}
                  {index[counter].Gender.map((e) => (
                    <span
                      className="type"
                      style={{
                        backgroundColor: genderColor(e),
                      }}
                    >
                      {e}
                    </span>
                  ))}
                </p>

                <p>
                  <b>Categoria: </b>
                  {index[counter].category}
                </p>
              </div>
            </div>
            <div className="btn" onClick={() => increment()}>
              <img
                src={require("../icons/next.png")}
                alt="back"
                className="btn_image"
              />
            </div>
          </div>

          <div className="second_container">
            <b>Descrição:</b>
            <div className="descriptionContainer">
              <p>{index[counter].description}</p>
            </div>

            <h4>Habilidades: </h4>
            <div className="hability_container">
              {index[counter].Abilities.map((e) => (
                <p>{e}</p>
              ))}
            </div>

            <h4>Status:</h4>
            <div className="stats">
              <table>
                <tbody>
                  <tr>
                    <th>HP:{index[counter].baseStats.hp}</th>
                    <td>
                      {" "}
                      <div
                        style={{
                          width: index[counter].baseStats.hp,
                          height: 15,
                          borderRadius: 5,
                          backgroundColor: statColor(
                            index[counter].baseStats.hp
                          ),
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Atk:{index[counter].baseStats.attack}</th>
                    <td>
                      {" "}
                      <div
                        style={{
                          width: index[counter].baseStats.attack,
                          height: 15,
                          borderRadius: 5,
                          backgroundColor: statColor(
                            index[counter].baseStats.attack
                          ),
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Def:{index[counter].baseStats.defense}</th>
                    <td>
                      {" "}
                      <div
                        style={{
                          width: index[counter].baseStats.defense,
                          height: 15,
                          borderRadius: 5,
                          backgroundColor: statColor(
                            index[counter].baseStats.defense
                          ),
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>SpAtk:{index[counter].baseStats.spAtk}</th>
                    <td>
                      {" "}
                      <div
                        style={{
                          width: index[counter].baseStats.spAtk,
                          height: 15,
                          borderRadius: 5,
                          backgroundColor: statColor(
                            index[counter].baseStats.spAtk
                          ),
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>SpDef:{index[counter].baseStats.spDef}</th>
                    <td>
                      {" "}
                      <div
                        style={{
                          width: index[counter].baseStats.spDef,
                          height: 15,
                          borderRadius: 5,
                          backgroundColor: statColor(
                            index[counter].baseStats.spDef
                          ),
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Speed:{index[counter].baseStats.speed}</th>
                    <td>
                      {" "}
                      <div
                        style={{
                          width: index[counter].baseStats.speed,
                          height: 15,
                          borderRadius: 5,
                          backgroundColor: statColor(
                            index[counter].baseStats.speed
                          ),
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <p>Not Fond</p>
      )}
    </body>
  );
};
export default Pokemon;
