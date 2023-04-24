import './user-element.scss'
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userDetailsAction} from "../actions/userActions";

const UserElement = (props) => {

    const dispatch = useDispatch();

    const userDetail = useSelector((state) => state.userDetailsReducer);
    const {isLoadingUser, errorUser, user} = userDetail;

    const projects = user.projects

    useEffect(() => {
        dispatch(userDetailsAction(props.userId));
    }, [dispatch, props.userId]);

    return (
        <div className="user">
            <NavLink
                className="user__link"
                to={`/user/${user.id}`}
            >
                <h3 className="user__profession">{user.profession}</h3>
            </NavLink>
            <img
                className="user__img"
                src={user.thumbnail}
                alt={user.profession}
            />
            <NavLink
                className="user__link"
                to={`/user/${user.id}`}
            >
                <span className="user__name"><strong>{user.name} {user.family}</strong></span>
            </NavLink>
            <div className="user__anons">
                {user.anons}
            </div>
            <div className="projects">
                <h4 className="projects__name">Projects of {user.name} {user.family}</h4>
                {Array.isArray(projects) && projects.length !== 0 ? (
                    <div className="projects__items">
                        {projects.map(item => (
                            <NavLink className="projects__link" key={item.id} to={`/portfolio/${item.id}`}>
                                <span className="projects__title">{item.title}</span>
                            </NavLink>
                        ))
                        }
                    </div>
                ) : (
                    <p>No projects available.</p>
                )
                }
            </div>
        </div>
    )
}

export default UserElement