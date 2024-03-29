import React from "react";
import Head from "next/head";
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

// Fetch API
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return { props: { ninjas: data } };
};

const index = (props) => {
  const { ninjas } = props;
  return (
    <>
      <Head>
        <title>Ninja List | Ninja Listings</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja) => (
          <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default index;
