"use client";

import { useState } from "react";

const Modal = ({ showModal, onClose }) => {
  const [tab, setTab] = useState("Contact Us");

  return (
    <div
      className={`${
        showModal ? "flex" : "hidden"
      } items-center justify-center bg-[#1e1331c9] p-5 fixed top-0 right-0 bottom-0 left-0 z-[999px]`}
      onClick={onClose}
    >
      <div
        className="fixed bg-white md:w-[478px] m-5 p-4 rounded-2xl overflow-hidden z-[99999px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#1A0047] flex justify-between p-1 rounded-xl">
          <button
            className={`text-sm min-[360px]:text-base min-[360px]:flex-1 rounded-lg px-6 py-2 ${
              tab === "Contact Us"
                ? "bg-[#9639F6] text-white"
                : "bg-transparent text-[#ffffffa8]"
            }`}
            onClick={() => setTab("Contact Us")}
          >
            Contact Us
          </button>

          <button
            className={`text-sm min-[360px]:text-base min-[360px]:flex-1 rounded-lg px-6 py-2 ${
              tab === "Book a call"
                ? "bg-[#9639F6] text-white"
                : "bg-transparent text-[#ffffffa8]"
            }`}
            onClick={() => setTab("Book a call")}
          >
            Book a call
          </button>
        </div>

        <form className="mt-4">
          <input
            type="text"
            className="bg-[#e8e8e8] rounded-2xl w-full px-4 py-3 mt-4"
            placeholder="Your name"
            name="title"
          />

          <input
            type="email"
            className="bg-[#e8e8e8] rounded-2xl w-full px-4 py-3 mt-4"
            placeholder="Email Address"
            name="title"
          />

          <textarea
            className="bg-[#e8e8e8] rounded-2xl w-full px-4 py-3 mt-4 resize-none h-40"
            placeholder="Message"
            name="description"
          ></textarea>

          <button
            type="submit"
            className="bg-[#9639F6] hover:bg-blue-600 text-white text-lg rounded-xl px-5 py-2 mt-7 w-full transition-colors"
          >
            Send now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
