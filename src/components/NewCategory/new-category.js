import * as Styled from "./styles";

function NewCategory({onNewCategoryClick}){
  return(
    <Styled.Wrapper
    onClick={() => onNewCategoryClick()}>

     <Styled.New>+</Styled.New>
    </Styled.Wrapper>
  )
}

export default NewCategory