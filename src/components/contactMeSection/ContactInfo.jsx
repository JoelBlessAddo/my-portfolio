import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="addojoel283@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+233 (0) 594191838" Image={FiPhone} />
      <SingleInfo text="Accra, Ghana" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
