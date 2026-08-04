import StudentCard from "./components/StudentCard";
function App() {
    const students = [
        { id: 1, name: "Harmandeep Singh", age: 20, course: "CSE", grade: "A" },
        { id: 2, name: "Azadpreet Singh", age: 19, course: "IT", grade: "A" },
        { id: 3, name: "Sahilpreet Singh", age: 22, course: "ME", grade: "A+" },
        { id: 4, name: "Shehbaaz Singh", age: 20, course: "CE", grade: "A" },
        { id: 5, name: "Dilwinder Singh", age: 19, course: "EE", grade: "B+" },
    ];
    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ textAlign: "center" }}>Student List</h1>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px",
                }}
            >
                {students.map((student) => (
                    <StudentCard
                        key={student.id}
                        name={student.name}
                        age={student.age}
                        course={student.course}
                        grade={student.grade}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;