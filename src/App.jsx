import StudentProfileCard from "./StudentProfileCard";

function App() {
  return (
    <div>
      <h1>Student Directory</h1>

      <StudentProfileCard
        name="KAMOLOV ABU BAKR"
        studentId="202537262"
        major="Computer Science"
        year={2}
        gpa={4.5}
      />

      <StudentProfileCard
        name="ABDULKHAKIMOV BISYORBEK"
        studentId="CLASSMATE_ID_1"
        major="Computer Science"
        year={2}
        gpa={4.2}
      />

      <StudentProfileCard
        name="CLASSMATE NAME 2"
        studentId="CLASSMATE_ID_2"
        major="Computer Science"
        year={3}
        gpa={4.5}
      />
    </div>
  );
}

export default App;