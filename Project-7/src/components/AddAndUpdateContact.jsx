import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import Modal from "./Modal"
import {Formik, Form, Field, ErrorMessage} from "formik";
import {db} from "../config/firebase";
//toast use for suscess msg 
import { toast } from "react-toastify";
//yup use for validation 
import * as Yup from "yup";

const contactSchemaValidation =Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("email is required"),
} );
const AddAndUpdateContact = ({isOpen, onClose, isUpdate, contact}) => {

  const addContact=async(contactData)=>{
    try {
      const contactRef=collection(db, "contacts");
      await addDoc(contactRef, contactData);
      onClose();toast.success("Contact Added Successfully")
    } catch (error) {
      console.log(error);
    }
  }

  const updateContact=async(contactData, id)=>{
    try {
      const contactRef=doc(db, "contacts",id);
      await updateDoc(contactRef, contactData);
      onClose();
      toast.success("Contact Updated Successfully")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
     <Modal isOpen={isOpen} onClose={onClose}>
       <Formik
       validationSchema={contactSchemaValidation}
        initialValues={
          isUpdate?
          {name:contact.name, email:contact.email}:
          {name:"", email:""}
        }
        onSubmit={(values)=>{
          console.log(values);
          isUpdate? updateContact(values, contact.id):
          addContact(values);

        }}
        >
      
        <Form className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Field name="name" className="h-10 border"/>
            <div className="text-xs text-red-500">
              <ErrorMessage name="name"/>
            </div>
            </div>
            
            <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <Field name="email" className="h-10 border"/>
            <div className="text-xs text-red-500">
              <ErrorMessage name="email"/>
            </div>
            </div>
            
            <button className="bg-orange-500 px-3 py-1.5 border self-end">
              {isUpdate? "update" : "add"} contact
            </button>
        </Form>
       </Formik>
     </Modal>
    </div>
  )
}

export default AddAndUpdateContact