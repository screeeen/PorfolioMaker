import React, { useEffect, useState } from "react";
import { Image } from "../Styles";
function MockUp(props) {
  const [data, setData] = useState(props.data);
  const { profile, projects } = props.data;
  console.log(profile, projects);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  const renderProjects = () => {
    console.log("here", data);

    return (
      projects.length &&
      projects.map((project) => (
        <div key={project.projectName + project.subtitle}>
          {project.file && <Image src={project.file} alt="" />}
          {project.projectName && <p>project name: {project.projectName} </p>}
          {project.subtitle && <p>project subtitle: {project.subtitle}</p>}
          {project.challengeDescription && (
            <p>project challenge: {project.challengeDescription}</p>
          )}
        </div>
      ))
    );
  };

  return (
    <>
      {/* <p>preview</p> */}
      {profile.file && <Image src={profile.file} alt="" />}
      {profile.name && <p>name: {profile.name} </p>}
      {profile.profession && <p>{profile.profession}</p>}
      {profile.description && <p>{profile.description}</p>}
      {renderProjects()}
    </>
  );
}

export default MockUp;
