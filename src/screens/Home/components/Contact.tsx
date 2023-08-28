import Title from "@/src/components/TitleLayout";
import ContactOption from "./ContactOption";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full h-auto flex flex-col lgl:flex-row justify-center">
        <ContactOption />
      </div>
    </section>
  );
};

export default Contact;
