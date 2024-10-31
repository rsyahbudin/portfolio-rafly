import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter space-y-4">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <a
            href="https://wa.me/6281804040684"
            target="_blank"
            rel="noopener noreferrer"
            className="block my-4" // block class ensures items stack vertically
          >
            {CONTACT.phoneNo}
          </a>
          <a
            href="mailto:{CONTACT.email}"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b"
          >
            {CONTACT.email}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
