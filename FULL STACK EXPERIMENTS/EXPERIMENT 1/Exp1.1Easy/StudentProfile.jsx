function StudentProfile() {
    const name = "Harmandeep  Singh";
    return (
        <div style={{
            border: "2px solid #333",
            padding: "20px",
            width: "250px",
            borderRadius: "10px",
            textAlign: "center",
            margin: "20px auto",
        }}> 
            <h2>Student Profile</h2>
            <p>{name}</p>
            <p><strong>Course:</strong> Computer Science Engineering</p>
            <p><strong>Age:</strong> 20</p>
        </div>
    );
}
export default StudentProfile;