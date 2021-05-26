import commentStyles from './Comment.module.css';

const Comment = (props) => {
  return (
    <div className={commentStyles.comment}>
      <img src="/images/batman.png" className={commentStyles.icon} alt="batman" />
      <div className={commentStyles.contents}>
        <div className={commentStyles.name}>{ props.name }</div>
        <div className={commentStyles.email}>{ props.email }</div>
        <div className={commentStyles.body}>{ props.body }</div>
      </div>
    </div>
  )
}

export default Comment;
