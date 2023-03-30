import './header.scss'
import Button from "../../shared/ui/btn/Button";
import { MessageBox, LoadingBox } from '../../shared/ui/box/boxes'

const Header = (props) => {

  const headers = props.headerListDto.array;
  const isLoading = props.headerListDto.isLoading;
  const error = props.headerListDto.error;

  const clickHandlerDesign = () => {

  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          {console.log("headerListDto props.headers Header", headers)}
          {isLoading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="errorVariant">{error}</MessageBox>}
          {headers.filter(item => item.id === 0)
            .map(item => (
              <div className="header__info" key={item.id}>
                <h1 className="header__info-title">{item.title}</h1>
                <Button
                  type="submit"
                  className="button-1"
                  onClick={clickHandlerDesign}
                  name={item.subtitle}
                />
                <p className="header__info-text">
                  {item.text}
                </p>
              </div>
           ))}
        </div>
      </div>
    </div>
  )
}

export default Header