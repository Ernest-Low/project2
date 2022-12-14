import { Recipetype } from "../interfaces";
import { useNavigate } from "react-router-dom";


//  Try to learn usecontext to push displaylist & setrecipe to displaylist directly
//* Currently prop drilling from Favoritepage and Mealsearch

const Displaylist = (props: {
  displaylist: Recipetype[];
  setrecipe: (type: Recipetype) => void;
}) => {
  const { displaylist, setrecipe } = props;
  const navigate = useNavigate();

  // <img src={`${recipe.strMealThumb}/preview`} style={{ margin: "1rem" }} ></img>

  return (
    // Encompassing Div for page
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexFlow: "row wrap",
        gap: "2rem",
        margin: "2rem",
      }}
    >
      {displaylist.map((obj, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor: "#F0FFFF",
              border: "2px solid #00FFFF",
              borderRadius: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0.3rem 0.3rem #6495ED",
              width: "18rem",
            }}
          >
            <div
              style={{
                height: "70%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "1rem 1rem 0 1rem",
              }}
            >
              <img
                src={`${obj.strMealThumb}`}
                onClick={() => {
                  setrecipe(structuredClone(obj));
                  navigate("/mealdisplay");
                }}
                style={{
                  margin: "1rem",
                  width: "100%",
                  display: "inline-block",
                }}
              ></img>
            </div>
            <h2
              onClick={() => {
                setrecipe(structuredClone(obj));
                navigate("/mealdisplay");
              }}
              className="text-1xl font-bold"
              style={{ margin: "1rem", fontFamily: "Yeseva" }}
            >
              {obj.strMeal}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Displaylist;
