import { useState, useRef } from "react";
import styled from "styled-components";

const Form: styled.form = styled.form`
width: ${props => (props.barOpened ? "30rem" : "2rem")};
cursor: ${props => (props.barOpened ? "auto" : "pointer")};
`;
const Input: styled.input = styled.input`
  margin-left: ${props => (props.barOpened ? "1rem" : "0rem")};
`;

const StyledButton: styled.button = styled.button`
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

        ref={formRef}>
        <div className='searchDiv'> <StyledButton type="submit" barOpened={barOpened}>
            <i className="search icon"></i>
        </StyledButton>
            <Input
                ref={inputFocus}
                placeholder="Search here for Products... "
                onChange={(e) => { setSearch(e.target.value); setOffset(12); }}
            /></div>
    </Form>);
};

export default SearchButton;