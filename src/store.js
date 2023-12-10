import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './lib/auth';
import mapsReducer from './lib/maps';
import recordsReducer from './lib/record';
import cityReducer from "@/lib/cityReducer";
import provinceReducer from "@/lib/provinceReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import sectionReducer from "@/lib/sectionReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    maps: mapsReducer,
    records: recordsReducer,
    data: combineReducers({
        city: cityReducer,
        province: provinceReducer,
        sectionData: sectionReducer,
    })
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;