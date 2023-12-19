import { MdDelete } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { TbEditCircle } from "react-icons/tb";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclose from "../CustomHooks/useDisclose";
import { toast } from "react-toastify";
const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div
      key={contact.id}
      className="bg-yellow flex  justify-between
          items-center p-2 rounded-lg"
    >
      <div className="flex gap-2">
        <FaRegUserCircle className="text-4xl text-orange-500" />
        <div>
          <h2 className="font-medium">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>
      </div>
      <div className="flex  text-3xl">
        <TbEditCircle onClick={onOpen} className="cursor-pointer" />
        <MdDelete
          onClick={() => deleteContact(contact.id)}
          className=" text-orange-500 cursor-pointer"
        />
      </div>
    </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    
    </>
  );
};

export default ContactCard;
