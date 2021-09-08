import React from "react";

const LoadingSpinner = ({loading}) => {
  if (!loading) {
    return null;
  } else {
    return (
      <div className="ui active inverted dimmer">
        <div className="ui massive indeterminate text loader">Avengers assemble!</div>
      </div>
    );
  }
};

export default LoadingSpinner;

/*This component needs conditional rendering a la NoHeroFound

could use useEffect to trigger loading = false when hero card renders

*/
