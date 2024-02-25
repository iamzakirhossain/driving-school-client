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

const Update = () => {
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
      <UpdateStudentProfile/>
        </>
    )
}
else if(userType === "teacher"){
    return(
        <>
<TeacherAppBar/>
<UpdateTeacherProfile/>
        </>
    )
}
else{
    return(<>
        <Loading/>
    </>);
}


};

export default Update;
