import { useState } from "react";

function MyRecipesComponent({ label, calories, image, ingridients, nutrients }) {
    const [showMore, setShowMore] = useState(false);
    const [showIngr, setShowIngr] = useState(false);

    const iconImg = "https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png";

    const ingr = ingridients.map((item, index) => (
        <li key={index} style={{ padding: "10px" }}>
            <img src={iconImg} width={"23px"} alt="tick"/>
            {item}
        </li>
    ));

    const nutrientLabels = ["CA", "VITB6A", "VITB12", "VITC", "VITD", "ZN"];

    const nutrientElements = nutrientLabels.map((nutrientLabel, index) => (
        <div key={index}>
        <p className="nutr" key={nutrientLabel}>
            {nutrients[nutrientLabel].label}: {nutrients[nutrientLabel].quantity.toFixed(2)} {nutrients[nutrientLabel].unit}
        </p>
        </div>
    ));

    return (
        <div className="recipes">
            <h2>{label}</h2>
            <h4>Calories: {Math.round(calories)} kkal</h4>
            <img className="recipeImage" src={image} alt="recipe" />
            <ul className="ingridients">
                <p className="ingridientsTitle">
                    {showMore ? "ingridients" : "show ingridients"}
                    <button onClick={() => setShowMore(!showMore)}>
                        {showMore ? "▲" : "▼"}
                    </button>
                </p>
                {showMore ? ingr : null}
            </ul>
                <p className="ingridientsTitle">
                    {showIngr ? "nutrients" : "show nutrients"}
                    <button onClick={() => setShowIngr(!showIngr)}>
                        {showIngr ? "▲" : "▼"}
                    </button>
                </p>
            <div className="nutrients">
                {showIngr ? nutrientElements : null}
            </div>
        </div>
    );
}

export default MyRecipesComponent;