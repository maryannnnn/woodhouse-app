import './block-architect.scss'

const BlockArchitect = (props) => {

  return (
    <div className='architect'>
      <h3 className='architect__title'>{props.title}</h3>
      <img className='architect__image' src={props.architectImage} alt={props.architectName} />
      <h4 className='architect__name'>{props.architectName}</h4>
      <div className='architect__Info'>
        {props.architectInfo}
      </div>
    </div>

  )
}

export default BlockArchitect
