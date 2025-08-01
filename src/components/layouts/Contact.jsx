import React from 'react';

const Contact = ({children}) => {
    return (
      <section
        id="contact"
        className="flex flex-col md:flex-row py-10 px-7 gap-14 sm:py-15 md:py-20 lg:gap-14 lg:px-20 xl:px-24 lg:py-20 bg-white"
      >
        {children}
      </section>
    );
}

export default Contact;
