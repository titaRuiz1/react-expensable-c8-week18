import CategoryCard from "../CategoryCard";
import PropTypes from "prop-types";
import { Wrapper } from "./styles";

function CategoriesList({ data, onCategoryClick }) {
  return (
    <Wrapper>
      {data.map(({ id, ...data }) => (
        <CategoryCard key={id} onCategoryClick={onCategoryClick} {...data} />
      ))}
    </Wrapper>
  );
}

CategoriesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default CategoriesList;
