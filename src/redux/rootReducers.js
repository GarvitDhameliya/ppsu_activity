// This file is for combine all reducer

import { combineReducers } from "redux";

// Student Activity Req Reducer
import studentReducer from "./student/reducer/activityReq/reducer";
// Faculty
import facultyReducer from "./faculty/reducer/reducer"
// Student Login
import studentLogin from "./login/student/reducer"
// faculty Login
import facultyLogin from "./login/faculty/reducer";
// APC Login 
import apcLogin from "./login/subAdmin/reducer";
// ADMIN (INSTADMIN) Login
import adminLogin from "./login/subAdmin/reducer";
// APC (Subamdin)
import apcReducer from "./subAdmin/reducer/reducer";
// COE
import coeReducer from "./coe/reducer/reducer";
// COE Login
import coeLogin from "./login/coe/reducer";

// Admin (Inst-admin)
import instAdminReducer from "./admin/reducer/reducer";

const rootReducers = combineReducers({
    studentReducer,
    facultyReducer,
    studentLogin,
    facultyLogin,
    apcReducer,
    apcLogin,
    coeLogin,
    adminLogin,
    instAdminReducer,
    coeReducer,
})

export default rootReducers