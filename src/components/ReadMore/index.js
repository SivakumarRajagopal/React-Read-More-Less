import {useState} from 'react'
import {
  AppContainer,
  Heading,
  SubHeading,
  CustomButton,
  ImgElement,
  ContentElement,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [isMore, setMore] = useState(false)

  const onChangeMore = () => {
    setMore(prevState => !prevState)
  }

  console.log(isMore)
  return (
    <AppContainer>
      <Heading>React Hooks</Heading>
      <SubHeading>Hooks are a new addition to React</SubHeading>
      <ImgElement
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <ContentElement>
        {isMore ? reactHooksDescription : reactHooksDescription.slice(0, 170)}
      </ContentElement>
      <CustomButton type="button" onClick={onChangeMore}>
        {isMore ? 'Read Less' : 'Read More'}
      </CustomButton>
    </AppContainer>
  )
}

export default ReadMore
