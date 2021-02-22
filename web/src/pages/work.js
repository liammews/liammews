import React from "react"
import Layout from "../components/constants/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <div>
      <Seo image={'https://cdn.sanity.io/images/hdetr6ej/production/7bf363db800c48f6cfcab9c430e193d733312aad-770x420.jpg?w=2000&h=2000&fit=max'} ></Seo>

      </div>
    </Layout>
  );
};

export default IndexPage
