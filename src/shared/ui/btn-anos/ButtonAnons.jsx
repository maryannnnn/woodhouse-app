import './button-anons.scss'
import Button from "../btn/Button"
import {useNavigate} from 'react-router-dom'

const ButtonAnons = (props) => {
    const navigate = useNavigate();

    const onLinkClick = (e) => {
        e.preventDefault();
        navigate(props.link);
    }

    return (
        <div className="button-anons">
            <Button
                type="submit"
                className="button-see"
                onClick={onLinkClick}
                name="see more"
            />
        </div>
    )
}

export default ButtonAnons