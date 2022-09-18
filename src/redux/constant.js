// export const base_url = "http://65.2.127.123:3006"
// export const base_url = "http://192.168.0.112:3006"\
// export const base_url = "http://192.168.29.201:3006";
// "proxy": "http://43.205.206.37:3006",
export const base_url = ""
// export const base_url = "http://192.168.43.159:3006"
// export const base_url = "http://43.205.206.37:3006"


//------------- Student --------------
export const STUDENT_GET_REQ_URL = '/request/getRequestStudent/'
export const STUDENT_GET_HEADING = '/heading/getAllHeadingSchool/' // +id
export const STUDENT_POST_REQ_URL = '/request/add'
export const STUDENT_GET_PROFILE = '/student/getStudent'
export const STUDENT_DELETE_REQUEST = '/request/deleteRequest/' //+id
export const STUDENT_PATCH_REQ_URL = '/request/update'
export const STUDENT_PATCH_PASSWORD_REQ_URL = '/student/resetPassword'



// ----------- Faculty ---------------------

// GET PROFILE
export const FACULTY_GET_PROFILE = '/faculty/getFaculty/'
// GET REQ BY CLASS
export const FACULTY_GET_REQ_BY_CLASS = '/request/getRequestClass/'
// POST REQ CHNAGE STATUS
export const FACULTY_PATCH_REQ_STATUS_CHNAGE = '/request/changeRequestStatus'


//------------- SubAdmin (APC) --------------

// MANAGE  -  Create (POST) Class
export const APC_CREATE_CLASS = '/class/addClass'
// MANAGE - GET class
export const APC_GET_CLASS = '/class/getClassSchool/'
// MANAGE - DELETE class
export const APC_DELETE_CLASS = '/class/delete/' //+_id
// MANAGE - PATCH ASSIGN Class
export const APC_PATCH_ASSIGN_CLASS = '/faculty/assignClass'
// MANAGE - UNASSIGN Class
export const APC_UNASSIGN_CLASS = '/faculty/unassignClass'
// MANAGE - Update Class
export const APC_UPDATE_CLASS = '/class/updateClass'


//MANAGE - GET CC
export const APC_GET_CC = '/faculty/getAllFaculty/'
// MANAGE - Create (POST) CC
export const APC_CREATE_CC = '/faculty/addFaculty'
// MANAGE - Update (PATCH) CC
export const APC_UPDATE_CC = '/faculty/updateFaculty'
// Upload CSV CC
export const APC_UPLOAD_CSV_CC = '/faculty/addFacultyCSV'
//DELETE CC
export const APC_DELETE_CC = '/faculty/deleteFaculty/' //+username

// APC PROFILE
export const APC_PROFILE = '/subadmin/getSubAdmin'

// APC GET REQ BY SCHOOL
export const APC_GET_REQ_BY_SCHOOL = '/request/getREquestSchool/'
// APC Chnage Status
export const APC_PATCH_REQ_STATUS_CHNAGE = '/request/changeRequestStatus'


//--------Subadmin (STUDENT)-------------
// Manage Student (GET ALL STUDENT)
export const APC_GET_ALL_STUDENT = '/student/getStudentSchool/'
// Upload CSV STUDENT
export const APC_UPLOAD_CSV_STUDENT = '/student/addStudentCSV'
// ADD Student
export const APC_CREATE_STUDENT = '/student/add'
//DELETE Student
export const APC_DELETE_STUDENT = '/student/deleteStudent/' // +enrollment no
// Update Student
export const APC_UPDATE_STUDENT = '/student/updateStudent'


//APC change password
export const APC_PATCH_PASSWORD_REQ_URL = '/subAdmin/resetPassword'







// -------------- Inst-Admin (Admin) --------------

// Manage - GET APC Data
export const INSTADMIN_GET_APC_MANAGE = '/subAdmin/getAllSubAdmin/'
// manage - POST APC Data
export const INSTADMIN_POST_APC_MANAGE = '/subAdmin/add/'
//manage - PATCH APC
export const INSTADMIN_PATCH_APC_MANAGE = '/subAdmin/update'
//manage - DELETE APC 
export const INSTADMIN_DELETE_APC_MANAGE = '/subAdmin/delete/'
// Instadmin profile
export const INSTADMIN_GET_PROFILE = '/admin/getAdmin'
//  PATCH - selection Activity (Assgn to school)
export const INSTADMIN_SLECTION_ACTIVITY = '/heading/assignHeadingToSChool'
// PATCH - de Assign selection activity
export const INSTADMIN_DEASSIGN_ACTIVITY = '/heading/deAssignHeadingToSChool'
//  GET -selection activity
export const INSTADMIN_SLECTION_ACTIVITY_GET = '/heading/getAllHeadingSchool/' // +_id

//heading
export const INSTADMIN_GET_ACTIVITY_MANAGE = '/heading/getSchoolActivity/' //+school id

export const INSTADMIN_CREATE_ACTIVITY = '/heading/addHeading'
// DELETE HEADING
export const INSTADMIN_DELETE_HEADING = '/heading/deleteHeading/'


//INSTADMIN change password
export const INSTADMIN_PATCH_PASSWORD_REQ_URL = '/admin/resetPassword'


// Manage - GET CLASS Data
export const INSTADMIN_GET_CLASS_MANAGE = '/class/getClassConst/' //+school id
// manage - POST CLASS Data
export const INSTADMIN_POST_CLASS_MANAGE = '/class/addClassConst'
//manage - PATCH CLASS
export const INSTADMIN_PATCH_CLASS_MANAGE = '/subAdmin/update'
//manage - DELETE CLASS 
export const INSTADMIN_DELETE_CLASS_MANAGE = '/class/deleteClassConst'








// ------------- LOGIN ----------------------------

// Student
export const STUDENT_LOGIN = '/student/login'
// faculty
export const FACULTY_LOGIN = '/faculty/login'
// Subadmin (APC)
export const APC_LOGIN = '/subAdmin/login'
// Admin 
export const ADMIN_LOGIN = '/admin/login'
// Coe
export const COE_LOGIN = '/mainAdmin/login'


//--------------------coe----------------------

export const COE_GET_SCHOOL_MANAGE = '/school/getAllSchool'
export const COE_CREATE_SCHOOL = '/school/addSchool'
export const COE_DELETE_SCHOOL = '/school/deleteSchool/' //+id
export const COE_PATCH_SCHOOL = '/school/updateSchool'

//heading
export const COE_GET_HEADING_MANAGE = '/heading/getAllHeading'
export const COE_CREATE_HEADING = '/heading/addHeading'

//manage dean
export const COE_GET_DEAN = '/admin/getAllAdmin'
export const COE_CREATE_DEAN = '/admin/add'
export const COE_DELETE_DEAN = '/admin/delete/' //+username
export const COE_PATCH_DEAN = '/admin/update'


//COE change password
export const COE_PATCH_PASSWORD_REQ_URL = '/mainAdmin/resetPassword'


// COE profile
export const COE_GET_PROFILE = '/mainAdmin/getAdmin'

//COE - DElete Activity
export const COE_DELETE_ACTIVITY = ''