import React from "react";

const FailedSearch = ({ characterName }) => {
  const apiCall = !characterName ? null : characterName.data.results[0];

  return (
    <div>
      <img
        src="../../public/images/confused-hulk.jpg"
        alt="Confused Hulk"
      ></img>
      {apiCall}
    </div>
  );
};

export default FailedSearch;

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
