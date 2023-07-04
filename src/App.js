import logo from './logo.svg';
import './App.css';

import PageHeader from './components/PageHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Options from './pages/Options';
import OptionCreate from './pages/OptionPages/OptionCreate';
import OptionUpdate from './pages/OptionPages/OptionUpdate';
import ProfessorIndex from './pages/ProfessorPage/ProfessorIndex';
import ProfessorCreate from './pages/ProfessorPage/ProfessorCreate';
import ProfessorCourse from './pages/ProfessorPage/ProfessorCourse';
import ProfessorUpdate from './pages/ProfessorPage/ProfessorUpdate';
import CourseCreate from './pages/CoursesPages/CourseCreate';
import StudentIndex from './pages/StudentPages/StudentIndex';
import StudentCreate from './pages/StudentPages/StudentCreate';
import StudentUpdate from './pages/StudentPages/StudentUpdate';
import StudentFilterPage from './pages/StudentPages/StudentFilterPage';
import CourseListe from './pages/CoursesPages/CourseListe';
import CourseUpdate from './pages/CoursesPages/CourseUpdate';
function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Options/>}/>
          <Route path='/option' element={<OptionCreate/>}/>
          <Route path='/option_update/:id' element={<OptionUpdate/>}/>

          <Route path='/professor' element={<ProfessorIndex/>}/>
          <Route path='/professor_create' element={<ProfessorCreate/>}/>
          <Route path='/professor_update/:id' element={<ProfessorUpdate/>}/>
          <Route path='/professor_course/:id' element={<ProfessorCourse/>}/>


          <Route path='/course' element={<CourseListe/>}/>
          <Route path='/course/:id' element={<CourseCreate/>}/>
          <Route path='/course_update/:id' element={<CourseUpdate/>}/>
          
          <Route path='/student' element={<StudentIndex/>}/>
          <Route path='/student_create' element={<StudentCreate/>}/>
          <Route path='/student_update/:id' element={<StudentUpdate/>}/>
          <Route path='/student_filter' element={<StudentFilterPage/>}/>

        </Routes>
        </BrowserRouter>
  );
}

export default App;
