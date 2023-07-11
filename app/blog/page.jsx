import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const Blog = ({ data }) => {
  return (
    <div className={styles.mainContainer}>
      {data?.map((item) => (
        <Link
          key={item.id}
          href={`/blog/${item._id}`}
          className={styles.container}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.image}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  const data = await res.json();

  return { props: { data } };
};

export default Blog;
