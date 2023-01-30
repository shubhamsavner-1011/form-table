import { RegisterSchema } from "@/validation";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, Grid, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { DynamicTextfield } from "../TextField";
import Error from "./errorMessage";
import { useStyles } from "./style";

const DynamicForm = ({setData, data}) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const [showIcon, setShowIcon] = useState(true);
  const initialValues = {
    email: "",
    password: "",
    about: "",
  };
  console.log(data, '>>>>data')
   const onSubmit = async (values) => {
   const date = new Date()    
   const  newItems = {...values,createdDate:date.toLocaleDateString(),createdTime: date.toLocaleTimeString()}
    setData([newItems, ...data])
  };
  return (
    <>
      <div style={{ margin: "30px" }}>
        <ClearIcon className={classes.icon} />
      </div>
      <>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={4} lg={4} className={classes.grid}>
            <Formik
              initialValues={initialValues}
              validationSchema={RegisterSchema}
              onSubmit={onSubmit}
            >
              {({ errors, touched }) => (
                <Form className="formBody" autoComplete="off">
                  <Field
                    component={DynamicTextfield}
                    error={errors.email && touched.email}
                    placeholder="Email"
                    name="email"
                    type="email"
                  />
                  <Error name="email" />
                  <Field
                    component={DynamicTextfield}
                    error={errors.password && touched.password}
                    placeholder="Password"
                    name="password"
                    type="password"
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
                    type="text"
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
                       backgroundColor: 'black'
    }
                    } 
                    }
                  >
                    Create Account
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
