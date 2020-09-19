import React from "react";
import CustomButton from "./CustomButton";

const CategoriesBtns = (props) => {
  const handleBtnClick = (e) => {
    const category = e;
    props.onClick(category);
  };
  const buttonsElementsArray = props.categoriesList.map((value, i) => {
    return (
      <CustomButton
        key={i}
        type="button"
        value={value}
        content={value}
        onClick={handleBtnClick}
      />
    );
  });

  return <div className="categoriesBtns padding20">{buttonsElementsArray}</div>;
};

export default CategoriesBtns;
