import React from "react";
import StudentCalendar from "./components/student/StudentCalendar";
import StudentAppBar from "./components/student/StudentAppBar";
import UpcomingStudentClass from "./components/student/UpcomingStudentClass";
import StudentProfile from "./components/student/StudentProfile";
import UpdateStudentProfile from "./components/student/UpdateStudentProfile";
import StudentClassHistory from "./components/student/StudentClassHistory";
import StudentHistory from "./components/student/StudentHistory";

import TeacherAppBar from "./components/teacher/TeacherAppBar";
import UpcomingTeacherClass from "./components/teacher/UpcomingTeacherClass";
import TeacherCalendar from "./components/teacher/TeacherCalendar";
import TeacherProfile from "./components/teacher/TeacherProfile";
import UpdateTeacherProfile from "./components/teacher/UpdateTeacherProfile";
import TeacherHistory from "./components/teacher/TeacherHistory";

import Login from "./components/auth/Login";

const App = () => {

  return (
    <>
    {/* Student Start */}

    {/* <StudentAppBar/>
    <UpcomingStudentClass/>
      <StudentCalendar/> */}
{/* <StudentProfile/> */}
{/* <UpdateStudentProfile/> */}
{/* <StudentHistory/> */}

{/* Student End */}

{/* Teacher Start */}

{/* <TeacherAppBar/> */}
{/* <UpcomingTeacherClass/>
<TeacherCalendar/> */}
{/* <TeacherProfile/> */}
{/* <UpdateTeacherProfile/> */}
{/* <TeacherHistory/> */}

{/* Teacher End */}

{/* Auth Start */}
{/* <Login/> */}
{/* Auth End */}
    </>
   
  );
};

export default App;
