import { RegisterSchema } from "@/validation";
import { Button, Grid } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { DynamicTextfield } from "../TextField";
import Error from "./errorMessage";
import { useStyles } from "./style";

const DynamicForm = ({ setData, data, edit, setOpen, setEditData }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const { v4: uuidv4 } = require("uuid");
  const [showIcon, setShowIcon] = useState(true);
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    data.forEach((val, ind) => {
      if (val?.id === edit?.id) {setIndex(ind);}
    });
  }, [data, edit?.id]);

  const initialValues = {
    id: edit?.id || "",
    email: edit?.email || "",
    password: edit?.password || "",
    about: edit?.about || "",
  };
  const onSubmit = async (values) => {
    const date = new Date();
    const newItems = {
      ...values,
      id: edit?.id ? edit?.id : uuidv4(),
      createdDate: date.toLocaleDateString(),
      createdTime: date.toLocaleTimeString(),
    };
    if (edit?.id) {
      const result = data;
      result.splice(index, 1, newItems);
      setData([...data]);
      setOpen(false);
      setEditData('')
    } else {
      setData([newItems, ...data]);
      setOpen(false);
      
    }
  };
  return (
    <>
      <>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={4} lg={10} className={classes.grid}>
            <Formik
              initialValues={initialValues}
              validationSchema={RegisterSchema}
              onSubmit={onSubmit}
              enableReinitialize
            >
              {({ errors, touched, setFieldValue }) => (
                <Form className="formBody" autoComplete="false">
                  <Field
                    component={DynamicTextfield}
                    error={errors.email && touched.email}
                    placeholder="Email"
                    name="email"
                    type="email"
                    onChange={(e) =>
                      setFieldValue("email", [...edit.email, e.target.value])
                    }
                  />
                  <Error name="email" />
                  <Field
                    component={DynamicTextfield}
                    error={errors.password && touched.password}
                    placeholder="Password"
                    name="password"
                    type="password"
                    onChange={(e) =>
                      setFieldValue("password", [
                        ...edit.password,
                        e.target.value,
                      ])
                    }
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    showIcon={showIcon}
                    setShowIcon={setShowIcon}
                  />
                  <Error name="password" />
                  <Field
                    component={DynamicTextfield}
                    error={errors.about && touched.about}
                    placeholder="About Us"
                    name="about"
                    type="textarea"
                    onChange={(e) =>
                      setFieldValue("about", [...edit.about, e.target.value])
                    }
                  />
                  <Error name="about" />
                  <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    sx={{
                      backgroundColor: "black",
                      margin: "30px 0",
                      padding: "10px 0",
                      "&:hover": {
                        backgroundColor: "black",
                      },
                    }}
                  >
                    {edit ? "Update" : "Create Account"}
                  </Button>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </>
    </>
  );
};

export default DynamicForm;
