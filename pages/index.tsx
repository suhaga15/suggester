import React from "react";
import Divider from "../components/Divider/divider";
import Form from "../components/Form/form";
import Header from "../components/header";
import Layout from "../components/Layout/layout";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Divider />
      <Form />
      {/* Table */}
    </Layout>
  );
}
