import * as React from "react";
import HorizontalTree from "./HorizontalTree";
import Layout from "./Layout";

const App = () => {
  return (
    <Layout>
      <HorizontalTree width={1200} height={400} />
    </Layout>
  );
};

export default App;
