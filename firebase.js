import { getDatabase } from "firebase/database"
export const database = getDatabase(app);
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";
const handleSubmit = () =>{
    let obj = {
            Name : Name,
            email:email,
            password:password,
            Bio:Bio,
            Job role:Job role,
            Intrest:Intrest
        }       
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = obj
    return update(ref(database), updates);
}