import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex h-[3.5rem] w-full items-center justify-center gap-2 rounded-[10px] border-none bg-[var(--accent)] text-[15px] font-medium text-white outline-none transition-all duration-200 hover:translate-y-[-1px] hover:bg-[var(--accent-bright)] hover:shadow-[0_0_32px_rgba(99,102,241,0.3)] disabled:opacity-70"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
