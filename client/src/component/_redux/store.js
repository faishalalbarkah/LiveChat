import { createStore, combineReducers, applyMiddleware } from "redux";
import loginr from "../_reducers/loginr"
import departmentr from "../_reducers/departmentr"
import userr from "../_reducers/userr"
import profiler from "../_reducers/profiler"
import offlinemessagesR from "../_reducers/offlinemessagesR"
import administrationR from "../_reducers/administrationR"
import dashboardR from "../_reducers/dashboardR"
import GuestR from "../_reducers/GuestR"
import ChatR from "../_reducers/ChatR"
import offlinemodeR from "../_reducers/offlinemodeR"

import { logger, promise } from "./middleware";
const reducers = combineReducers({
    loginr,
    departmentr,
    userr,
    profiler,
    offlinemessagesR,
    administrationR,
    dashboardR,
    GuestR,
    ChatR,
    offlinemodeR
});

const store = createStore(reducers, applyMiddleware(logger, promise));

export default store;