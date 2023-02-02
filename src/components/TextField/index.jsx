import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";

import React from "react";

export const DynamicTextfield = ({
  type,
  variant,
  showIcon,
  field,
  showPassword,
  setShowPassword,
  error,
  placeholder,
}) => {
  const [isPassword, setIsPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    if (setShowPassword) {
      setIsPassword(!isPassword);
      setShowPassword(!showPassword);
    }
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return type === "textarea" ? (
    <TextField
      margin="dense"
      placeholder={placeholder}
      variant={variant}
      error={error}
      fullWidth
      multiline
      rows={4}
      type={isPassword ? "text" : type}
      sx={{
        "& fieldset": { border: "none", borderRadius: "50px" },
      }}
      InputProps={{
          style: error
            ? {
                borderRadius: "16px",
                border: "2.5px solid rgb(255 131 131)",
                marginTop: "8px",
                height: 120,
              }
            : {
                borderRadius: "16px",
                background: "#f7f7f7",
                border: "2.5px solid #e5e5e5",
                marginTop: "8px",
                height: 120,
              },
      }}
      {...field}
    />
  ) : (
    <>
      <TextField
        margin="dense"
        placeholder={placeholder}
        variant={variant}
        error={error}
        fullWidth
        type={isPassword ? "text" : type}
        sx={{
          "& fieldset": { border: "none", borderRadius: "50px" },
        }}
        InputProps={{
          style: error
            ? {
                borderRadius: "16px",
                border: "2.5px solid rgb(255 131 131)",
                marginTop: "8px",
                height: 50,
              }
            : {
                borderRadius: "16px",
                background: "#f7f7f7",
                border: "2.5px solid #e5e5e5",
                marginTop: "8px",
                height: 50,
              },
          endAdornment: showIcon && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? (
                  <Visibility sx={{ color: "black" }} />
                ) : (
                  <VisibilityOff sx={{ color: "black" }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        {...field}
      />
    </>
  );
};
