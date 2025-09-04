import Home from "./Home";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Guinea Energy – Spécialiste en infrastructures électriques</title>
        <meta
          name="description"
          content="Spécialiste en infrastructures électriques, systèmes solaires, technologies énergétiques, formation et fournitures de matériels électriques."
        />
      </Helmet>
      <Home />
    </>
  );
};

export default Index;
