import CategoryCard from "../CategoryCard";
import PropTypes from "prop-types";
import { Wrapper } from "./styles";
import NewCategory from "../NewCategory";

function CategoriesList({ data, onCategoryClick, onNewCategoryClick}) {
  return (
    <Wrapper>
      {data.map(({ ...data }) => (
        <CategoryCard
          key={data.id}
          onCategoryClick={onCategoryClick}
          {...data}
        />
      ))}
       <NewCategory onNewCategoryClick={onNewCategoryClick}/>
    </Wrapper>
  );
}

CategoriesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default CategoriesList;
