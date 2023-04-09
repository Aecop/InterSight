import styled from 'styled-components'

const Wrapper = styled.main`
  text-align: center;
  div {
    
  }
  
  img {
    max-width: 600px;
    display: block;
    justify-content:center;
    align-items: center;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`

export default Wrapper