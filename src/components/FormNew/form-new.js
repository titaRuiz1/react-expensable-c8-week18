import styled from "@emotion/styled";
import { colors, typography } from "../../styles";
import { categoryColors } from "../Categories/utils";
import { categoryIcons } from "../Categories/utils";
import { custom } from "../CircleIcon/circle-icon";
import { GrClose } from "react-icons/gr";
import { useState } from "react";



function FormNew({onCloseForm, onCreateCategory}){
  // const [toke, setToke] = useState(0)
  const [data, setData] = useState({
    name:"",
    color:"",
    transaction_type:"expense",
    icon:"",
  });

  function handleChangeName(event){
    event.preventDefault();
    setData({...data, "name" : event.target.value})
  }

  function handleClickColor(event){
    setData({...data, "color" : Object.keys(categoryColors)[+event.target.id]})
  }

  function handleClickIcon(event){
    setData({...data, "icon" : Object.keys(categoryIcons)[+event.target.dataset.id]})
  }

  const Form =styled.form`
  background-color: ${colors.white};
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  border-radius: 8px;
  `
  const OptionColor =styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  background-color:${({color})=>color}
  `;

  const OptionsContainer =styled.div`
  display:grid;
  grid-template-columns: repeat(4, 40px);
  grid-gap: 24px;
  `;

  const OptionIcon =styled.div`
  width:40px;
  height:40px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  `;

  const NewTitle = styled.h1`
  ${typography.head.sm}
  `
  const Label = styled.label`
  ${typography.text.xs}
  `
  const HeaderForm = styled.div`
  display: flex;
  justify-content: space-between;
  gap:3rem;
  align-items:center;

  `
  const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  `
  const InputContainer = styled.input`
  border: 1px solid ${colors.stone[400]};
  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  `
  const Button = styled.button`
  background-color: ${colors.pink[600]};
  border: 1px solid ${colors.pink[600]};
  color: ${colors.white};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 240px;
  height: 32px;
  `
  
  return (
    <Form onSubmit={(event)=>onCreateCategory(data,event)}>
      <HeaderForm>
        <NewTitle>New category</NewTitle>
        <GrClose
          style={{
            cursor: "pointer",
            height: "18px",
            width: "18px",
        }}
        onClick = {onCloseForm}/>
      </HeaderForm>
      <DivContainer>
        <Label>NAME:</Label>
        <input name="name" type="text" onChange={handleChangeName} value={data.name}/>
      </DivContainer>
      <DivContainer>
        <Label>COLOR:</Label>
        <OptionsContainer>
          {
            Object.values(categoryColors).map((color, index) =>{
              return <OptionColor key={index} color={color} id={index} onClick={handleClickColor}/>
            })
          }
        </OptionsContainer>
      </DivContainer>
      <DivContainer>
        <Label>ICONS:</Label>
        <OptionsContainer>
          {
            Object.values(categoryIcons).map((Icon, index) =>{
            return <OptionIcon key={index} data-id={index} onClick={handleClickIcon}>
                    <Icon data-id={index} size={custom.iconSize.md} style={{pointerEvents: 'none'}}/>
                    </OptionIcon>
            })
          }
        </OptionsContainer>
      </DivContainer>
      <Button type="submit">Create</Button>
    </Form>
  )

  

}

export default FormNew;