import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";


export default function ModalForm() {
  const [showModal, setShowModal] = useState(false);
  const [emailDone, setEmailDone] = useState(false);
  const form = useRef();

  const sendEmail = (event) => {
       
    event.preventDefault();


    emailjs
      .sendForm(
        "service_8l8qe9k",
        "template_sry8hwe",
        form.current,
        "QiMzqkCxqMFl1k2pH"
      )
      .then((res) => {
        console.log(res);
        setEmailDone(true);
        setTimeout(() => {
          setEmailDone(false);
        }, 5000);
      })
      .catch((error) => console.log(error));
    event.target.reset();
  };

  return (
    <>
      <div className="pt-8 pb-10 flex justify-center">
        <button
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-white bg-transparent active:bg-red hover:bg-red text-red font-semibold font-fontFamily-paragraph hover:text-white py-2 px-12 border border-red hover:border-transparent rounded-lg focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Contact Me
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-bglight outline-none focus:outline-none">
                <div className="text-colortitle font-paragraph flex items-start justify-between p-5 ">
                  <h3 className="text-3xl font-semibold">Get in touch</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>

                <div className="relative p-6 flex-auto">
                  <form
                    onSubmit={sendEmail}
                    ref={form}
                    className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4"
                  >
                    <div className="mb-6">
                      <label className="block mb-2 font-title text-sm text-colorparagraph">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Your name"
                        required
                        className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-red dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block mb-2 font-title text-sm text-colorparagraph">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        placeholder="you@company.com"
                        required
                        className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="text-sm font-title text-colorparagraph">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="user_phone"
                        placeholder="+57 (320) 1234-567"
                        required
                        className="w-full px-3 py-2 font-title placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red focus:border-red dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block mb-2 font-title text-sm text-colorparagraph">
                        Your Message
                      </label>

                      <textarea
                        rows="5"
                        name="user_message"
                        placeholder="Your Message"
                        className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-red dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                        required
                      ></textarea>
                    </div>

                    {emailDone && (
                      <div className="bg-red text-white h-10 font-title text-center rounded-xl  items-center align-middle p-2">
                        Message sent successfully!
                      </div>
                    )}

                    <div className="flex items-center justify-end p-4">
                      <button
                        className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red font-title text-red-500 background-transparent font-bold  px-6 py-2 text-base outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-colortitle"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 font-title bg-red text-white active:bg-bglight font-normal  text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit" onClick={() => setShowModal(false)}
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
