import React from "react";
import Navigation from "../components/Navigation";
import Languages from "../components/knowledges/Languages";
import Experience from "../components/knowledges/Experience";
import OtherSkills from "../components/knowledges/OtherSkills";
import Hobbies from "../components/knowledges/Hobbies";

const Knowledges = () => {
  return (
    <div className="Knowledges">
      <Navigation />
      <div className="KnowledgesContent">
        <Languages />
        <Experience />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledges;
