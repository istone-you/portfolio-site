import React, { useState } from "react";
import { indexClient } from "../libs/client";
import Back from "@/components/common/Back";
import PageTitle from "@/components/common/PageTitle";

import type { Index } from "@/types/index";

interface FormData {
  email: string;
  name: string;
  subject: string;
  message: string;
}

const Inquiry = ({ index }: { index: Index }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isConfirmed = window.confirm("この内容で送信しますか?");

    const formData: FormData = {
      email,
      name,
      subject,
      message,
    };

    if (isConfirmed) {
      try {
        const response = await fetch(index.inquiry, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          window.alert("送信されました！");

          setEmail("");
          setName("");
          setSubject("");
          setMessage("");
        } else {
          window.alert("送信に失敗しました。");
        }
      } catch (error) {
        window.alert("送信に失敗しました。");
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2">
        <Back />
        <PageTitle title="Inquiry Form" />
        <div className="fade-in-second mb-10 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mt-10">
              <label className=" flex items-center justify-center mb-6 font-bold text-gray-900">
                <div className="px-4 py-1 button-shadow border border-black ">
                  Email
                </div>
              </label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="border border-black text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mt-10">
              <label className="flex items-center justify-center mb-6 font-bold text-gray-900">
                <div className="px-4 py-1 button-shadow border border-black ">
                  Name
                </div>
              </label>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="border border-black text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mt-10">
              <label className="flex items-center justify-center mb-6 font-bold text-gray-900">
                <div className="px-4 py-1 button-shadow border border-black ">
                  Subject
                </div>
              </label>
              <input
                type="text"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                required
                className="border border-black text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mt-10">
              <label className="flex items-center justify-center mb-6 font-bold text-gray-900">
                <div className="px-4 py-1 button-shadow border border-black ">
                  Message
                </div>
              </label>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
                className="h-40 border border-black text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mt-6 flex items-center justify-center">
              <button
                type="submit"
                className="bg-gray-300 px-4 py-1 font-bold border border-black button-shadow hover:shadow-none hover:translate-y-1 hover:translate-x-1"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const index = await indexClient.get({ endpoint: "index" });

  return {
    props: {
      index,
    },
  };
};

export default Inquiry;
