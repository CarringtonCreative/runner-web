import React, { useState, useEffect, MouseEventHandler } from "react";

import Image from "next/image";
import styles from "../styles/Home.module.css";
import data from "../app/utils/data";
import MainMenu from "../app/components/mainMenu/MainMenu";

Home.getInitialProps = async () => {
  const companies = Object.values(data.matches.companies);
  return { data, companies };
};

const onCandidateClicked = (data: any) => {
  console.log(data);
};

/* const getCandidateScore = (candidateSkills: any, companySkills: any) => {
  const companyMatrix: any = {};
  for (let skill of companySkills) {
    if (!companyMatrix[skill.nameKey]) {
      companyMatrix[skill.nameKey] = skill.levelValue;
    }
  }
  companySkills.map((skill: any) => {});
}; */

const sortCandidateSkills = (candidates: any) => {
  return candidates.sort((a: any, b: any) => {
    if (a.skills.length < b.skills.length) {
      return 1;
    } else if (a.skills.length > b.skills.length) {
      return -1;
    } else {
      console.log("a", Object.values(a.skills));
      const aSkills = Object.values(a.skills);
      const aScore = aSkills.reduce(
        (acc: any, val: any) => acc + val.levelValue,
        0
      );
      const bSkills = Object.values(b.skills);
      const bScore = bSkills.reduce(
        (acc: any, val: any) => acc + val.levelValue,
        0
      );

      if ((aScore as number) < (bScore as number)) {
        return 1;
      }
      if ((aScore as number) > (bScore as number)) {
        return -1;
      } else {
        return 0;
      }
    }
  });
};

const sortCandidateSkillLevel = (skills: any) => {
  return skills.sort((a: any, b: any) => {
    if (a.levelValue < b.levelValue) {
      return 1;
    } else if (a.levelValue > b.levelValue) {
      return -1;
    } else {
      return 0;
    }
  });
};

const sortCompanySkills = (skills: any) => {
  return skills.sort((a: any, b: any) => {
    if (a.levelValue < b.levelValue) {
      return 1;
    } else if (a.levelValue > b.levelValue) {
      return -1;
    } else {
      return 0;
    }
  });
};

const renderRoles = (skills: any) => {
  const data: any = {};
  if (skills.length == 0)
    return (
      <div className={styles.roleSkills}>
        <h3>Roles</h3>
        <h4>N/a</h4>
      </div>
    );
  return (
    <div className={styles.companyRoles}>
      <h3>Roles</h3>
      <ul>
        {skills.map((skill: any, index: number) => {
          if (!data[skill.roleKey]) {
            data[skill.roleKey] = true;
            return <li key={index}>{skill.roleValue}</li>;
          }
        })}
      </ul>
    </div>
  );
};

const renderCompanySkills = (skills: any, showOrder: boolean = false) => {
  const data: any = {};
  if (skills.length == 0)
    return (
      <div className={styles.companySkills}>
        <h3>Skills</h3>
        <h4>N/a</h4>
      </div>
    );

  return (
    <div className={styles.companySkills}>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill: any, index: number) => {
          if (!data[skill.nameKey]) {
            data[skill.nameKey] = true;
            return (
              <li key={index}>
                <span className={styles.companySkillPriority}>
                  {skill.levelValue}
                  {getPriorityIcon()}
                  {skill.nameValue}
                </span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

const renderSkills = (skills: any, showIcons: boolean = false) => {
  const data: any = {};
  if (skills.length == 0)
    return (
      <div className={styles.roleSkills}>
        <h3>Skills</h3>
        <h4>N/a</h4>
      </div>
    );

  return (
    <div className={styles.roleSkills}>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill: any, index: number) => {
          let icons = [];
          if (showIcons) {
            for (let i = 0; i < skill.levelValue; i++) {
              icons.push(
                <div key={i} className={styles.runnerIcon}>
                  {getRunnerIcon()}
                </div>
              );
            }
          }
          if (!data[skill.nameKey]) {
            data[skill.nameKey] = true;
            return (
              <li key={index}>
                <span className="flex flex-row">
                  {skill.nameValue}
                  <span className={styles.runnerIcons}>{icons}</span>
                </span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

const renderCompanies = (
  companies: any,
  onCompanyClicked: MouseEventHandler
) => {
  const companyComponents = companies.map((company: any, index: number) => {
    let skills = sortCompanySkills(Object.values(company.skills));
    return (
      <div
        key={index}
        className={styles.company}
        onClick={() => {
          onCompanyClicked(company);
        }}
      >
        <div className={styles.companyTitle}>
          <Image
            className={styles.companyAvatar}
            src={company.avatar}
            alt=""
            height={100}
            width={100}
          />
          <div className={styles.companyDetails}>
            <h2 className={styles.companyName}>{company.name}</h2>
            <h3 className={styles.companyDescription}>{company.description}</h3>
            <div className="flex flex-row justify-between w-full mt-2">
              <span className="flex flex-row">
                {getPinIcon()}
                <h4 className={styles.companyDescription}>{company.address}</h4>
              </span>
              <span className="flex flex-row">
                {getPhoneIcon()}
                <h4 className={styles.companyDescription}>{company.phone}</h4>
              </span>
            </div>
          </div>
        </div>
        {renderRoles(skills)}
        {renderCompanySkills(skills, true)}
      </div>
    );
  });
  return (
    <div className={styles.companies}>
      <div className={styles.companySectionContainer}>
        <h1 className={styles.companySectionTitle}>Companies</h1>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Ranked</button>
          <div className={styles.dropdownContent}>
            <div>- Select Matching Algorithm -</div>
            <div>Ranked</div>
            <div>Minimized Maximized</div>
            <div>Weighted</div>
          </div>
        </div>
      </div>
      {companyComponents}
    </div>
  );
};

const renderCandidates = (candidates: any) => {
  if (!candidates)
    return (
      <div className={styles.candidates}>
        <h1 className={styles.companySectionTitle}>Candidates</h1>
      </div>
    );

  let sortedCandidates = sortCandidateSkills(Object.values(candidates));
  console.log("sortCandidateSkills", sortedCandidates);
  const candidatesComponents = sortedCandidates.map(
    (candidate: any, index: number) => {
      let skills = sortCandidateSkillLevel(Object.values(candidate.skills));
      console.log("sortCandidateSkillLevel", skills);

      return (
        <div
          key={index}
          className={styles.candidate}
          onClick={() => {
            onCandidateClicked(candidate);
          }}
        >
          <div className={styles.candidateDetails}>
            <h2 className={styles.candidateName}>{candidate.name}</h2>
            <h3 className={styles.candidateEmail}>{candidate.email}</h3>
          </div>
          {renderSkills(skills, true)}
        </div>
      );
    }
  );
  return (
    <div className={styles.candidates}>
      <h1 className={styles.companySectionTitle}>Candidates</h1>
      {candidatesComponents}
    </div>
  );
};

const getPriorityIcon = () => {
  return (
    <Image
      className="ml-1 mr-1"
      src={"/badge.png"}
      alt=""
      height={25}
      width={25}
    />
  );
};

const getRunnerIcon = () => {
  return <Image src={"/sneakers-logo.png"} alt="" height={25} width={25} />;
};

const getPinIcon = () => {
  return (
    <Image className="mr-1" src={"/pin.png"} alt="" height={25} width={25} />
  );
};

const getPhoneIcon = () => {
  return (
    <Image className="mr-1" src={"/phone.png"} alt="" height={25} width={25} />
  );
};

export default function Home(props: any) {
  const [company, setCompany] = useState();
  const [candidates, setCandidates] = useState<[]>();

  const onCompanyClicked = (data: any) => {
    let selectedCanidates = Object.values(data.candidates) as any;
    setCompany(data);
    setCandidates(selectedCanidates);
  };

  useEffect(() => {
    setCompany(props.companies[0]);
  }, [props.companies]);

  // return (
  //   <div className={styles.container}>
  //     <div className={styles.header}>
  //       <h2 className={styles.logoText}>Runner</h2>
  //     </div>
  //     <main className={styles.main}>
  //       {renderCompanies(props.companies, onCompanyClicked)}
  //       {renderCandidates(candidates)}
  //     </main>
  //   </div>
  // );

  return <MainMenu />;
}
