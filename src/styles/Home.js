import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffd500;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  padding-left: 25vw;
`

export const Header = styled.h1`
  font-family: 'DM Mono', monospaced;
  font-size: 2rem;
  color: rgba(27,27,27,0.5);
  margin-left: 1rem;

  .logo { 
    font-family: 'DM Mono', monospaced;
    font-size: 2rem;
    color: #1b1b1b;
    font-weight: 500;
  }

  .logo-dot {
    margin-bottom: 5rem;
    font-family: 'DM Mono', monospaced;
    font-size: 2rem;
    color: #fff;
    font-weight: 500;
  }

  .tag-line { 
    font-family: 'DM Mono', monospaced;
    font-size: 2rem;
    font-style: italic;
    color: #1b1b1b;
  }
`

export const Form = styled.form`
  width: 100%;
`
export const InputContainer = styled.div`
  display: grid;
  grid-template-rows: 80% 20%;
  flex-direction: column;
`

export const Input = styled.input`
  grid-row: 1;
  background-color: rgba(0,0,0,0);
  border: none;
  border-bottom: 1px solid rgba(27,27,27,0.5);
  font-family: 'DM Mono', monospaced;
  font-style: italic;
  font-size: 2rem;
  color: #1b1b1b;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  border-radius: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #1b1b1b;
    opacity: 100%;
  }
`

export const ErrorInput = styled.p`
  grid-row: 2;
  height: 2rem;
  font-family: 'DM Mono', monospaced;
  font-style: italic;
  font-size: 1.5rem;
  color: #e03616;
  margin-top: .25rem;
`









export const MobileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: -webkit-fill-available;
  overflow-x: hidden;
  background-color: #ffd500;
`

export const MobileSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 3rem;
`

export const MobileHeader = styled.p`
  font-size: 1.6rem;
  font-family: 'DM Mono', monospaced;
  color: rgba(27,27,27,0.5);

  .logo {
    font-size: 1.6rem;
    color: #1b1b1b;
    font-weight: 500;
  }
`

export const MobileForm = styled.form`
  width: 100%;
`
export const MobileInputContainer = styled.div`
  display: grid;
  grid-template-rows: 80% 20%;
  flex-direction: column;
`

export const MobileInput = styled.input`
  grid-row: 1;
  background-color: rgba(0,0,0,0);
  border: none;
  border-bottom: 1px solid rgba(27,27,27,0.5);
  font-family: 'DM Mono', monospaced;
  font-style: italic;
  font-size: 1.6rem;
  color: #1b1b1b;
  border-radius: 0;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #1b1b1b;
    opacity: 100%;
  }
`

export const MobileErrorInput = styled.p`
  grid-row: 2;
  height: 2rem;
  font-family: 'DM Mono', monospaced;
  font-style: italic;
  font-size: 1.5rem;
  color: #e03616;
  margin-top: .25rem;
`