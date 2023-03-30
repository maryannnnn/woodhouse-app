import './header-anons.scss'
import { MessageBox, LoadingBox } from '../box/boxes'

const HeaderAnons = (props) => {

  const headers = props.headerListDto.array;
  const isLoading = props.headerListDto.isLoading;
  const error = props.headerListDto.error;

  return (
    <>
      {isLoading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant="errorVariant">{error}</MessageBox>}
      {headers.filter(item => item.id === 1)
        .map(item => (
          <div className="header-anons" key={item.id}>
            <div className="header-anons__left">
              <h2 className="header-anons__left-title">{item.title}</h2>
              <div className="header-anons__left-subtitle">{item.subtitle}</div>
            </div>
            <p className="header-anons__right">
            {item.text}
            </p>
          </div>
      ))}
    </>
  )
}

export default HeaderAnons;