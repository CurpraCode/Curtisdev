import React from "react";
import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import Layout from "../layouts";
import dynamic from "next/dynamic";

const ContactForm = dynamic(()=> import("../components/contact/ContactForm"),{
    suspense:true,
    ssr:true
})
const contact = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <ContactForm />
      </Layout>
    </div>
  );
};

export default contact;
