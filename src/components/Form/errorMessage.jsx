import { ErrorMessage } from "formik";

const Error = ({name}) => {
  return (
    <>
      <ErrorMessage name={name}>
        {(msg) => (
          <div
            style={{
              color: "red",
              fontSize: "14px",
              marginTop: "5px",
            }}
          >
            {msg}
          </div>
        )}
      </ErrorMessage>
    </>
  );
};
export default Error;
