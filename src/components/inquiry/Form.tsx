import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import FormInput from "@/components/inquiry/FormInput";
import FormTextArea from "@/components/inquiry/FormTextArea";
import FormButton from "@/components/inquiry/FormButton";

import type { Index } from "@/types/index";
import type { FormData } from "@/types/inquiry";

const Form = ({ index }: { index: Index }) => {
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
    <div className="fade-in-second mb-10 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full">
        <FormInput
          label="Email"
          value={email}
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <FormInput
          label="Name"
          value={name}
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
        <FormInput
          label="Subject"
          value={subject}
          type="text"
          onChange={(event) => setSubject(event.target.value)}
        />
        <FormTextArea
          label="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <FormButton label="Submit" type="submit" />
      </form>
    </div>
  );
};

export default Form;
