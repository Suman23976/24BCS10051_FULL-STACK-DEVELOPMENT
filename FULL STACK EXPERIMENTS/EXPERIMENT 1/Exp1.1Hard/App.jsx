
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";
function App() {
const students = [
{
id: 1, name: "Harmandeep Singh", age: 20, course: "Computer Science Engineering", grade:
"A"},
{
id: 2, name: "Sahilpreet Singh", age: 21, course: "Electronics Engineering", grade: "B+"
},
{
id: 3, name: "Shehbaaz Singh", age: 19, course: "Information Technology", grade: "A+"
}
];
const showStudents = true;
return (
<div>
<Header />
<div style={{ display: "flex" }}>
<Sidebar />
<StudentList
students={students}
showStudents={showStudents}
/>
</div>
<Footer />
</div>
);
}
export default App;

