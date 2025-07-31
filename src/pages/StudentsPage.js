// src/pages/StudentsPage.js
import StudentCard from '../component/students'; // Adjust path if needed

const StudentsPage = () => {
  // Student data array
  const students = [
    {
      name: "Alice Johnson",
      roll: "CS2021001",
      department: "Computer Science",
      email: "alice@university.edu",
      year: "2024",
      gpa: "3.8",
      isActive: true
    },
    {
      name: "M Waqas Chohan",
      roll: "ENG2021002", 
      department: "Software Engineering",
      email: "Fast@cfd.nu.edu.pk",
      year: "2025",
      gpa: "3.6",
      isActive: true
    },
    {
      name: "Carol Davis",
      roll: "MATH2021003",
      department: "Mathematics", 
      email: "carol@university.edu",
      year: "2024",
      gpa: "3.9",
      isActive: false
    }
  ];

  const handleViewDetails = (student) => {
    alert(`Viewing details for ${student.name}`);
  };

  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: '#f8fafc'
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        color: '#1e293b',
        marginBottom: '20px'
      }}>
        Student Cards
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {students.map((student, index) => (
          <StudentCard
            key={index}
            {...student}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;