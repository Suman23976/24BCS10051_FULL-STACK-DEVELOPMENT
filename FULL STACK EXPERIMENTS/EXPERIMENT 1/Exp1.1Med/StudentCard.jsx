// function StudentCard({ student }) {
// return (
// <div style={{
// border: "1px solid gray",
// borderRadius: "10px",
// padding: "15px",
// margin: "10px",
// backgroundColor: "#fafafa",
// color: "#060606",
// }}>
// <h3>{student.name}</h3>
// <p><strong>Age:</strong> {student.age}</p>
// <p><strong>Course:</strong> {student.course}</p>
// <p><strong>Grade:</strong> {student.grade}</p>
// </div>
// );
// }
// export default StudentCard;

function StudentCard({ name, age, course, grade }) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        padding: "15px",
        width: "250px",
        backgroundColor: "#1e1e1e",
        textAlign: "center",
      }}
    >
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Grade:</strong> {grade}</p>
    </div>
  );
}

export default StudentCard;