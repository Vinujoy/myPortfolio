import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn min-h-[56px] w-full shrink-0"
      disabled={pending}
    >
      {pending ? (
        <span
          className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-label="Sending"
        />
      ) : (
        "Send message"
      )}
    </button>
  );
}
