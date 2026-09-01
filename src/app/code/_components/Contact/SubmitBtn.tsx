import React from "react";
import { FaPaperPlane } from "react-icons/fa";
//@ts-ignore
import { useFormStatus } from "react-dom";
export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="h-[3rem] dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 focus:scale-110 hover:scale-110 active:scale-105 group items-center gap-2 justify-center flex w-[8rem] bg-gray-900 hover:bg-gray-950 text-white rounded-full outline-none transition-all"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
      ) : (
        <>Submit</>
      )}

      <FaPaperPlane className="text-sx opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1  " />
    </button>
  );
}
