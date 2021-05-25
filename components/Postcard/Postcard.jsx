import postcardStyles from '../../styles/Postcard.module.css';
import Link from 'next/link';

const PostCard = (props) => {
  return (
    <div className={postcardStyles.post}>
      <Link href={`/posts/${props.id}`}>
        <img src="/images/bitmap.png" alt="laptop icon" />
      </Link>
      <p>{ props.title }</p>
    </div>
  )
}

export default PostCard;
