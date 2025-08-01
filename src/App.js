// import logo from './logo.svg';
// import './App.css';
// import Welcome from './component/welcome';
// import Mylist from './component/mylist';
// import Myheader from './component/header';
// import Students from './component/students';
// import ImageWithProps from './component/imagewithprops';
// import Counter from './component/counter';
// import QuoteGenerator from './component/QuoteGenerator';
// import TodoList from './component/todo-list';

// function App() {
//   // Original student data
//   // const simpleStudent = {
//   //   name: "M.Waqas Chohan",
//   //   roll: "23F-3041"
//   // };

//   // Enhanced student data
//   const students = [
//     {
//       name: "Alice Johnson",
//       roll: "CS2021001",
//       department: "Computer Science",
//       email: "alice@university.edu",
//       year: "2024",
//       gpa: "3.8",
//       isActive: true
//     },
//     {
//       name: "M Waqas Chohan",
//       roll: "ENG2021002",
//       department: "Software Engineering",
//       email: "Fast@cfd.nu.edu.pk",
//       year: "2025",
//       gpa: "3.6",
//       isActive: true
//     },
//     {
//       name: "Carol Davis",
//       roll: "MATH2021003",
//       department: "Mathematics",
//       email: "carol@university.edu",
//       year: "2024",
//       gpa: "3.9",
//       isActive: false
//     }
//   ];

//   const handleViewDetails = (student) => {
//     alert(`Viewing details for ${student.name}`);
//   };

//   return (
//     <div className="App">
//       <Myheader/>
//       {/* Original simple student component */}
//       {/* <Students name={simpleStudent.name} roll={simpleStudent.roll} /> */}
//       {/* New enhanced student cards section */}
//       <div style={{
//         padding: '20px',
//         backgroundColor: '#f8fafc',
//         marginTop: '20px'
//       }}>
//         <h2 style={{
//           textAlign: 'center',
//           color: '#1e293b',
//           marginBottom: '20px'
//         }}>
//           Enhanced Student Cards
//         </h2>
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//           gap: '20px',
//           maxWidth: '1200px',
//           margin: '0 auto'
//         }}>
//           {students.map((student, index) => (
//             <Students
//               key={index}
//               name={student.name}
//               roll={student.roll}
//               department={student.department}
//               email={student.email}
//               year={student.year}
//               gpa={student.gpa}
//               isActive={student.isActive}
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>
//       </div>
//       <Welcome/>
//       <Mylist/>
//       <h1>Hello React</h1>
//       <p>This is my first react app</p>
// <ImageWithProps
//   width={1200}
//   height={675}
// />
// <Counter/>
// <TodoList/>
// <QuoteGenerator/>
//     </div>
//   );
// }

// export default App;

// state hooks routing
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
// import Home from "./Home";
// import StudentsPage from "./StudentsPage";
// import QuotesPage from "./QuotesPage";
// import TodoPage from "./TodoPage";
// import CounterPage from "./CounterPage";
import Home from "./pages/Home"
import StudentsPage from "./pages/StudentsPage"
import QuotesPage from "./pages/QuotesPage"
import TodoPage from "./pages/TodoPage"
import CounterPage from "./pages/CounterPage"
import FormPage from "./pages/FormPage"

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <BrowserRouter basename="/Anonymouso">
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="students" element={<StudentsPage />} />
              <Route path="quotes" element={<QuotesPage />} />
              <Route path="todo" element={<TodoPage />} />
              <Route path="counter" element={<CounterPage />} />
              <Route path="form" element={<FormPage />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
