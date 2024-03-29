import Styled from 'styled-components';

export const ButtonContainer = Styled.button `
text-transform: capitallize;
font-size: 1.4rem;
background: transparent ;
border :0.05rem solid var (--LightBlue);
color:var(--lightBlue);
border-radius:0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out.
&:hover{
    background: var (--lightBlue);
    color:var(--mainBlue);
}
&focus{
    outline: none;
}


`;
