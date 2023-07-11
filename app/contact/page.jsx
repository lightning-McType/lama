import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

export const metadata = {
  title: "cReddit Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&#39;s keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <div className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
