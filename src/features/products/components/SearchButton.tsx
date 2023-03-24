import { useState, useRef } from "react";
import styled from "styled-components";
import { Box } from '@mui/material';

const Form: styled.form = styled.form`
position: relative;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
background-color: black;
padding: 2rem;
height: 2rem;
border-radius: 10rem;
transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
margin: 0 auto;
width: ${props => (props.barOpened ? "30rem" : "2rem")};
cursor: ${props => (props.barOpened ? "auto" : "pointer")};
`;
const Input: styled.input = styled.input`
float: right;
font-size: 14px;
line-height: 1;
background-color: transparent;
width: 100%;
border: none;
color: white;
transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

&:focus,
&:active {
  outline: none;
}
&::placeholder {
  color: white;
}
margin-left: ${props => (props.barOpened ? "1rem" : "0rem")};
`;

const StyledButton: styled.button = styled.button`
line-height: 1;
background-color: transparent;
border: none;
outline: none;
color: white;
pointer-events: ${props => (props.barOpened ? "auto" : "none")};
cursor: ${props => (props.barOpened ? "pointer" : "none")};
`;

const SearchButton = ({ setOffset, setSearch }) => {
    const [barOpened, setBarOpened] = useState(false);
    const formRef = useRef();
    const inputFocus = useRef<HTMLInputElement>(null);
    return (<Form barOpened={barOpened}
        onClick={() => {
            setBarOpened(true);
            inputFocus.current && inputFocus.current.focus();

        }}

        onFocus={() => {
            setBarOpened(true);
            inputFocus.current && inputFocus.current.focus();
        }}

        onBlur={() => {
            setBarOpened(false);
        }}

        ref={formRef} data-testid="form">
        <Box sx={{ display: 'flex', paddingLeft: '10px' }}>
            <StyledButton type="submit" barOpened={barOpened}>
                <i className="search icon"></i>
            </StyledButton>
            <Input
                ref={inputFocus}
                placeholder="Search here for Products... "
                onChange={(e) => { setSearch(e.target.value); setOffset(12); }}
                alt="Search here for Products..."
            /></Box>
    </Form>);
};

export default SearchButton;