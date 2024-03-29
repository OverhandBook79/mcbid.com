import { auth, firestore } from '../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

const useSignUpWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const signup = async (inputs) => {
        if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullName){
            console.log("Please fill all the feilds");
            return;
        }
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email,inputs.password)
            if(!newUser && error){
                console.log(error);
                return;
            }
            if(newUser){
                const userDoc = {
                    uid:newUser.user.uid,
                    email:inputs.email,
                    username:inputs.username,
                    fullName:inputs.fullName,
                    desc:"",
                    profilePicURL:"",
                    followers:[],
                    following:[],
                    posts:[],
                    createdAt: Date.now(),
                }
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
            }
        } 
        catch (error) {
            console.log(error)
        }
    }
    return { loading, error, signup };
}

export default useSignUpWithEmailAndPassword