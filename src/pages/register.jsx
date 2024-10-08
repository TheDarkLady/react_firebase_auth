import Common_form from '../components/Common_form'
import {AuthContext} from '../Context'
import { registerFormControls } from '../config'
import { useContext } from 'react'
// import {registerFormData} from '../Context'
export default function Register() {
  const {registerFormData , setRegisterFormData, registerOnSubmit} = useContext(AuthContext);
  console.log(registerFormData, "registerFormData");
  
  return (
    <>
      <div className='w-full max-w-sm mx-auto rounded-lg shadow-md '>
        <div className='px-6 py-4'>
          <h3>Welcome Back</h3>
          <p>Register Page</p>
          <Common_form
            formControls={registerFormControls}
            formData={registerFormData}
            setFormData={setRegisterFormData}
            onSubmit={registerOnSubmit}
            buttonText={"Register"}
          />
        </div>
      </div>
    </>
  )
}
