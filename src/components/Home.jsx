import React,{useState, useEffect} from "react";
import StudentCalendar from "./student/StudentCalendar";
import StudentAppBar from "./student/StudentAppBar";
import UpcomingStudentClass from "./student/UpcomingStudentClass";
import StudentProfile from "./student/StudentProfile";
import UpdateStudentProfile from "./student/UpdateStudentProfile";
import StudentClassHistory from "./student/StudentClassHistory";
import StudentHistory from "./student/StudentHistory";

import TeacherAppBar from "./teacher/TeacherAppBar";
import UpcomingTeacherClass from "./teacher/UpcomingTeacherClass";
import TeacherCalendar from "./teacher/TeacherCalendar";
import TeacherProfile from "./teacher/TeacherProfile";
import UpdateTeacherProfile from "./teacher/UpdateTeacherProfile";
import TeacherHistory from "./teacher/TeacherHistory";

import Login from "./auth/Login";
import Loading from "./Loading";
console.log("UserType Is");
const Home = () => {
let [userType, setUserType] = useState();


useEffect(()=>{
    
    try {
        let user = sessionStorage.getItem("userType");
        if(user != null || user != undefined){
            setUserType(user);
        }
    } catch (error) {
        sessionStorage.setItem("userType","student");
        setUserType("student");
    }
   
},[userType,setUserType])


if(userType==="student"){
    return(
        <>
      <StudentAppBar/>
    <UpcomingStudentClass/>
      <StudentCalendar/>
        </>
    )
}
else if(userType === "teacher"){
    return(
        <>
<TeacherAppBar/>
<UpcomingTeacherClass/>
<TeacherCalendar/>
        </>
    )
}
else{
    return(<>
        <Loading/>
    </>);
}

};

export default Home;
