import React from "react";
import studentInfo from "../data/students";
import Flag from "./Flag";

// techinaly same as an embedded map
/*
let studentsArrayAsElement = [];
function studentsLoop(student) {
  return (
    <li key={student.firstName}>
      <span>the name is {student.firstName} </span>
      <Flag country={student.country} />
      <span> The github username is {student.githubUsername}</span>
    </li>
  );
}

studentInfo.forEach(student => {
  studentsArrayAsElement.push(studentsLoop(student));
});
// lab will loop over an array of elemen
*/

function SectionStudents(props) {
  let githuburl = "https://github.com/";

  return (
    <div className="student-section-wrapper">
      <h1 className="student-section-title">Students</h1>
      <ul className="student-section-list">
        <li className="student-section-headers">
          <span>Name</span>
          <span>Country</span>
          <span>Github</span>
        </li>
        {studentInfo.map((element, i) => (
          <li key={i} className="student">
            {/* My element {i} is: {JSON.stringify(element)} */}
            <span>{element.firstName} </span>
            <div className="flag-container">
              <Flag country={element.country} />
            </div>
            <a href={`${githuburl}/${element.githubUsername}`}>
              {element.githubUsername}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SectionStudents;
