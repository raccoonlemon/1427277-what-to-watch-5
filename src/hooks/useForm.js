import {useEffect, useState} from "react";
import {extend} from "../utils/common";

export const useForm = (initialValues, validate)=>{
  const [values, setValue] = useState(initialValues);
  const [validation, setValidationInfo] = useState({isFormValid: false, messages: []});

  useEffect(()=>{
    setValidationInfo(validate(values));
  }, [values]);

  const changeValue = (value) => {
    setValue(extend(values, value));
  };

  return {validation, values, changeValue};
};
