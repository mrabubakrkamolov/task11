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
        studentId="202537259"
        major="Computer Science"
        year={2}
        gpa={4.2}
      />

      <StudentProfileCard
        name="XUSHNUDBEK"
        studentId="202537260"
        major="Computer Science"
        year={3}
        gpa={4.5}
      />      
      
      <StudentProfileCard
        name="NODIRBEK ORZIKULOV"
        studentId="2025223412"
        major="Bussiness"
        year={2}
        gpa={4.0}
      />
    </div>
  );
}

export default App;