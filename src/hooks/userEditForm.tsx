import { useState } from "react";

// type FormState = {
//   [key: string]: string;
// };

// type FormEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

const useEditBookForm = (initialState: any) => {
  const [state, setState] = useState(initialState);

  const handleOnChange: any = (e) => {
    console.log(e);
    setState((prev: any) => ({
      ...prev,
      [e.target?.name]: e.target?.value,
    }));
  };

  return [state, handleOnChange];
};

export default useEditBookForm;
