import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedData(formData);
  }

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "45px",
          marginBottom: "30px",
        }}
      >
        Student Registration Form
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          width: "300px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        <label style={{ fontWeight: "bold" }}>Name</label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        <label style={{ fontWeight: "bold" }}>Email</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        <label style={{ fontWeight: "bold" }}>Course</label>
        <br />
        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={formData.course}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        <label style={{ fontWeight: "bold" }}>Age</label>
        <br />
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        <button
          type="submit"
          style={{
            display: "block",
            margin: "20px auto",
            padding: "10px 30px",
            backgroundColor: "#2563EB",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Register
        </button>
      </form>

      {submittedData && (
        <div
          style={{
            width: "350px",
            margin: "30px auto",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundColor: "#EAF2FF",
            textAlign: "left",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#1E40AF",
              marginBottom: "20px",
            }}
          >
            Submitted Data
          </h2>

          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>

          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>

          <p>
            <strong>Course:</strong> {submittedData.course}
          </p>

          <p>
            <strong>Age:</strong> {submittedData.age}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;