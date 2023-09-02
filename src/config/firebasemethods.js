import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebaseconfig";
import { getDatabase, set, ref , get, onValue , push, remove} from "firebase/database";

const auth = getAuth(app);
const db = getDatabase(app);



let signUpUser = (obj) => {
    
    return new Promise((resolve,reject) => {
        createUserWithEmailAndPassword(auth, obj.email,obj.password)
        .then((res) => {
            obj.id = res.user.uid;
            const reference = ref(db, `user/${obj.id}`);
    
    set(reference, obj)
    .then(()=>{
        resolve("Database send succseffuly and user created");
        
    })
    .catch((err) => {
        reject(err.message);
    });


        })
        .catch((err) => {
            reject(err.message);

        })

    }) 
}
let LoginUser = (obj) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then((res) => {
            const reference = ref(db, `user/${res.user.uid}`)
            onValue(reference, (data) => {
                if(data.exists()){
                    resolve(data.val());
                }
                else{
                    reject("Data Not Foundd!")
                }
            })
        })
        .catch((err) => {
            reject(err.message);
        })
    })
}

let PostingOfData = (nodeName,obj) => {
    
        if(obj.id){
            return new Promise( (resolve,reject) =>{
                let refer = ref(db,`${nodeName}/`)
                
                
          
                const referenc = ref(db,`${nodeName}/${obj.id}`)
                set(referenc,obj)
                .then((succ) =>{
                    resolve("data send successfully")
                })
                .catch((err) =>{
                    reject(err.message)
                })
            })
        }
        else{
            return new Promise( (resolve,reject) =>{
                let refer = ref(db,`${nodeName}/`)
                obj.id  = push(refer).key
                
          
                const referenc = ref(db,`${nodeName}/${obj.id}`)
                set(referenc,obj)
                .then((succ) =>{
                    resolve("data send successfully")
                })
                .catch((err) =>{
                    reject(err.message)
                })
            })
        }
    
    
  };

  let DeleteDataById = (nodeName,obj) => {
    return new Promise ((resolve,reject)=>{
      const taskreference = ref(db,`${nodeName}/${obj.id}`)
      remove(taskreference)
      .then(function(e){
        resolve("data delete successfully")
      })
    .catch(function(err){
      reject(err.message)
    })
    })
      };
  let GetDataById = (nodeName) => {
    return new Promise( (resolve,reject) =>{
      let refer = ref(db,`${nodeName}/`)
      onValue(refer, (dt) =>{
          if(dt.exists()){
              let a  = Object.values(dt.val()) 
              // console.log(dt.val())
              resolve(a)
          }
      })
  })                                    
  };

  let formDataDelete = (nodeName)=>{

    return new Promise ((resolve,reject)=>{
      const taskreference = ref(db,`${nodeName}`)
      remove(taskreference)
      .then(function(e){
        resolve("data delete successfully")
      })
    .catch(function(err){
      reject(err.message)
    })
    })

  }
let signOutUser = () => {}
let fbGet = () => {}
let fbGetById = () => {

}
let fbEdit = () => {}
let fbDelete = () => {}

let upload = async () => {
    

}

export {signUpUser,LoginUser,signOutUser,fbGet,fbGetById,fbEdit,fbDelete,PostingOfData,GetDataById, formDataDelete, DeleteDataById}
