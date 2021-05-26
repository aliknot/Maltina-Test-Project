import homeStyles from '../styles/Home.module.css';
import postcardStyles from '../components/Postcard/Postcard.module.css';
import PostCard from '../components/Postcard/Postcard';


export default function Home({ data }) {
  return (
		<main className='main'>
			<div className={homeStyles.notify}>
				<img src='/images/combined-shape.svg' alt='Notify Icon' />
				<p>
					تغییر وضعیت کالا ممکن هست با تاخیر انجام گردد اما مراحل خرید و ارسال طبق زمان تخمینی اعلام شده انجام خواهد شد.
				</p>
      </div>
      {data &&
        <div className={postcardStyles.container}>
          {data?.map((post) => (
            <PostCard title={post.title} id={post.id} />
          ))}
        </div>
      }
		</main>
	);
}

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await res.json();
	
	return {
		props: { data },
	};
};