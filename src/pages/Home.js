import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { BrowserView, MobileView } from 'react-device-detect'

import { PositionDispatchContext } from '../context/PositionProvider'
import { DataDispatchContext } from '../context/DataProvider'
import { LoadingDispatchContext } from '../context/LoadingProvider'

import { 
  Container, 
  Header, 
  Form, 
  Input,
  ErrorInput, 
  SearchContainer, 
  InputContainer, 
  MobileContainer, 
  MobileSearchContainer, 
  MobileHeader, 
  MobileForm, 
  MobileInputContainer, 
  MobileInput, 
  MobileErrorInput 
} from '../styles/Home'


function Home() {
  const setPosition = useContext(PositionDispatchContext)
  const setData = useContext(DataDispatchContext)
  const setLoading = useContext(LoadingDispatchContext)

  const [search, setSearch] = useState("")
  const [placeholder, setPlaceholder] = useState("search for a show here")
  const { register, handleSubmit, errors } = useForm()
  
  const onSubmit = async (data) => {
    document.activeElement.blur()
    setLoading(true)
    // setData([])
    setPosition('-100vw')
    setTimeout(() => setLoading(false), 3000)
    // let show = data.show
    // let addDashes = show.replaceAll(" ", "-")
    // let cleanString = addDashes.replaceAll(/[^0-9a-zA-Z-]/g, "").toLowerCase()
    // const showRes = await fetch(`../../.netlify/functions/showFetch?show=${cleanString}`)
    // const showJSON = await showRes.json()
    // setData(showJSON)
    // setLoading(false)
  }

  const handleFocus = () => {
    if(search === "" && placeholder === ""){
      setPlaceholder("search for a show")
    } else {
      setPlaceholder("")
    }
  }
  
  const handleBlur = () => {
    if(search === "" && placeholder === ""){
      setPlaceholder("search for a show")
    } else {
      setPlaceholder("")
    }
  }

  return (
    <>
      <BrowserView>
        <Container>
          <SearchContainer>
            <Header style={{ marginBottom: '3rem' }}>
              can't decide on an <span className="logo">episode.</span>
            </Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                  <Input 
                    name="show"
                    placeholder={ placeholder }
                    ref={ 
                      register({
                        required: 'this is required',
                        pattern: {
                          value: /^[0-9a-zA-Z\s':]*$/,
                          message: "no special characters",
                        } 
                      })
                    }
                    onFocus={ handleFocus }
                    onBlur={ handleBlur }
                    onChange={ (e) => setSearch(e.target.value) }
                  />
                  <ErrorInput>
                    {errors.show && errors.show.message}
                  </ErrorInput>
                </InputContainer>
            </Form>
            <Header style={{ marginTop: '2rem' }}>
              and get a random episode
            </Header>
          </SearchContainer>
        </Container>
      </BrowserView>
      
      <MobileView>
        <MobileContainer>
          <MobileSearchContainer>
            <MobileHeader style={{ marginBottom: '2rem' }}>
              can't decide on an <span className="logo">episode.</span>
            </MobileHeader>
            <MobileForm onSubmit={handleSubmit(onSubmit)}>
                <MobileInputContainer>
                  <MobileInput 
                    name="show"
                    placeholder={ placeholder }
                    ref={ 
                      register({
                        required: 'this is required',
                        pattern: {
                          value: /^[0-9a-zA-Z\s':]*$/,
                          message: "no special characters",
                        } 
                      })
                    }
                    onFocus={ handleFocus }
                    onBlur={ handleBlur }
                    onChange={ (e) => setSearch(e.target.value) }
                  />
                  <MobileErrorInput>
                    {errors.show && errors.show.message}
                  </MobileErrorInput>
                </MobileInputContainer>
            </MobileForm>
            <MobileHeader style={{ marginTop: '2rem' }}>
              and get a random episode
            </MobileHeader>
          </MobileSearchContainer>
        </MobileContainer>
      </MobileView>
    </>
  )
}

export default Home
