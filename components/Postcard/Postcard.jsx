import postcardStyles from './Postcard.module.css';
import Link from 'next/link';

const PostCard = (props) => {
  return (
    <div className={postcardStyles.postcard}>
      <Link href={`/posts/${props.id}`}>
        <a>
          <img className={postcardStyles.icon} src="/images/bitmap.png" alt="example image" />
        </a>
      </Link>
      <Link href={`/posts/${props.id}`}>
        <a>
          <p className={postcardStyles.title}>{ props.title }</p>
        </a>
      </Link>
    </div>
  )
}

export default PostCard;
