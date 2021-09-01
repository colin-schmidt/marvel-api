import React from "react";
import "./HeroGrid.css";
import NoHeroFound from "./NoHeroFound";

const HeroGrid = ({ characterName, setCharacter }) => {
  const apiCall = !characterName ? null : characterName.data.results[0];

  return !apiCall ? (
    <NoHeroFound />
  ) : (
    <div className="ui link cards">
      <div className="ui card">
        <div className="image">
          <img
            alt="heroimg"
            src={`${apiCall.thumbnail.path}.${apiCall.thumbnail.extension}`}
          />
        </div>
        <div className="content">
          <a className="ui header massive">{apiCall.name}</a>
          <div className="appeared">
            <span>
              📚Has appeared in {apiCall.comics.available} comic books{" "}
            </span>
          </div>
          <div className="heroBio">
            {apiCall.description
              ? `🦸‍♂️${apiCall.description}`
              : "🦸‍♂️No bio available."}
          </div>
          <button className="ui button red" onClick={() => setCharacter(null)}>
            Remove hero
          </button>
        </div>
      </div>
    </div>
  );
};
export default HeroGrid;

//Previously returned:

//   return !characterName ? null : (
//     <div className="ui link cards">
//       <div className="ui card">
//         <div className="image">
//           <img
//             alt="heroimg"
//             src={`${apiCall.thumbnail.path}.${apiCall.thumbnail.extension}`}
//           />
//         </div>
//         <div className="content">
//           <a className="ui header massive">{apiCall.name}</a>
//           <div className="appeared">
//             <span>
//               📚Has appeared in {apiCall.comics.available} comic books{" "}
//             </span>
//           </div>
//           <div className="heroBio">
//             {apiCall.description ? `🦸‍♂️${apiCall.description}` : "🦸‍♂️No bio available."}
//           </div>
//           <button className="ui button red" onClick={() => setCharacter(null)}>
//             Remove hero
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
