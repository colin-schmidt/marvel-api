import React from "react";
import "./NoHeroFound.css";

const NoHeroFound = ({ noResults }) => {
  if (noResults) {
    return (
      <div className="error-screen">
        <img
          className="hulk"
          src="images\confused-hulk.jpg"
          alt="Confused Hulk"
        ></img>
        <div>
          <h2 className="hero-name-error">
            Sorry! We weren't able to find your hero. <br />
            Please verify that you spelled your hero's name right ( i.e.
            M.O.D.O.K. instead of MODOK )
          </h2>
        </div>
      </div>
    );
  } else return null;
};

export default NoHeroFound;

/* PSEUDO CODE:
if search no work ? return (
        <div>
    <h2>Superhero not found!</h2>
    <div>Check the spelling of the character name.</div>
    <img alt ="Confused Hulk"src="confusedhulk.jpg"/>
    <button onClick={}/>
    </div>
)
*/