import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import {db} from "./config/firebase";
import ContactCard from "./components/ContactCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclose from "./CustomHooks/useDisclose";
import NotFoundContact from "./components/NotFoundContact";
const App = () => {

const [contacts, setContacts]=useState([]);
const {isOpen, onClose, onOpen}=useDisclose();

useEffect(()=>{
  const getContacts=async()=>{
    try{
        const contactsCollection =collection(db, "contacts");
        
        onSnapshot(contactsCollection,(snapshot)=>{
          const contactLists=snapshot.docs.map((doc)=>{
            return{
             id: doc.id,
             ...doc.data(),
           };
         });
         setContacts(contactLists);
         return contactLists;
        } )
       
    
    }
    catch(error){
     console.log(error);
    }
  }
  getContacts();
},[]);

const filterContacts=(e)=>{
  const value=e.target.value;

  const contactsCollection =collection(db, "contacts");
        
      onSnapshot(contactsCollection,(snapshot)=>{
          const contactLists=snapshot.docs.map((doc)=>{
            return{
             id: doc.id,
             ...doc.data(),
           };
         });
         const filterContacts=contactLists.filter(contact=>
          contact.name.toLowerCase().includes(value.toLowerCase()))
         setContacts(filterContacts)
         return filterContacts;
        } )
}

  return (
<>
    <div className="max-w-[370px] mx-auto px-4">
    
      <Navbar/>
      <div className="flex gap-2">
      <div className="flex relative items-center">
      <FiSearch className="text-white text-3xl absolute m-2 " />
        <input onChange={filterContacts}
        type="text" className="border bg-transparent
         border-white rounded-md h-10 flex-grow pl-10 text-white" />
         
      </div>
      <FaPlusCircle onClick={onOpen} className="text-5xl text-white cursor-pointer" />
    </div> 
      <div className="mt-4 gap-4 flex flex-col">
        
        {contacts.length <= 0? <NotFoundContact/>:
        contacts.map((contact)=>(
         
        <ContactCard key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>
  <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
  <ToastContainer 
  position="bottom-center"
  />
  </>
  )
}

export default App;