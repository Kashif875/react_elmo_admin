import Checkbox from '@mui/material/Checkbox';
import "component/Auth/Login/style.scss";
import FormErrorMessage from "component/common/ErrorMessage";
import InputBox from "component/common/InputBox/InputBox";
import NormalButton from "component/common/NormalButton/NormalButton";
import PasswordInputBox from "component/common/PasswordInput/PasswordInputBox";
import { history } from "helpers";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { request } from "service";
import endponts from "service/endponts";
import { strings } from "service/helpers/Constants";

const LoginComp = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [mailId, setmainId] = useState("");
  const [password, setpassword] = useState("");




  const onSubmit = (inputs) => {
    console.log(inputs);
    request({
      url: endponts.Endpoints.login,
      method: endponts.APIMethods.POST,
      data: {
        "email": inputs.mailId,
        "password": inputs.password
      },
      isLoader : true
    }).then(res => {
      let {data} = res.data;
      localStorage.setItem('token',data.token)
      let userData = {
          ...data.userData
      }
      localStorage.setItem('userData',JSON.stringify(userData))
      history.push("/admin/dashboard");
    })
  };



  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };




  return (
    <div>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-7 bg-image"></div>
          <div className="col-md-8 col-lg-5 bg_color">
            <div className="login d-flex align-items-center py-3">
              <div className="container">
                <div className="row py-5 text-center">
                  <div className="col-md-9 col-lg-8 mx-auto"></div>
                </div>
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading">
                      <span className="title_elmo">{strings.elmo}</span>
                      <span className="title_admin">Admin</span>
                    </h3>
                    <p className="mb-4 text-muted discription">
                      Please provide the valid informations for a<br />
                      seamless sign in process
                    </p>
                    <div className="blank mt-3 mb-3" />
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mt-5">
                        <label className="font-bold-16">E-mail ID *</label>
                        {/* <div className="input_field"> */}
                        <InputBox
                          errors={errors}
                          type={"text"}
                          value={mailId}
                          placeholder="test@gmail.com"
                          name="mailId"
                          register={register({
                            required: true,
                            pattern: /\S+@\S+\.\S+/,
                          })}
                        />
                        {/* <div className="tick_icon"><BsCheck size={25} /></div>
                        </div> */}

                        <FormErrorMessage
                          error={errors.mailId}
                          messages={{
                            required: "Please enter mail id",
                            pattern: "Please enter a valid mail id",
                          }}
                        />
                      </div>
                      <div className="mt-4">
                        <label className="font-bold-16">Password *</label>
                        {/* <div className="input_field"> */}
                        <PasswordInputBox
                          errors={errors}
                          value={password}
                          placeholder="Enter Password"
                          type="password"
                          name="password"
                          register={register({
                            required: true,
                          })}
                        />
                        {/* <div><label className="show" >Show</label></div>
                        </div> */}
                        <FormErrorMessage
                          error={errors.password}
                          messages={{
                            required: "Please enter password",
                          }}
                        />
                      </div>
                      <div className="forgot">
                        <div><Checkbox {...label} defaultChecked color="success" />
                          <span className="small">Remember Me</span></div>
                        <div>
                          <Link to="/auth/forgot-password">
                            <span className="small" href="#">
                              Forgot password?
                            </span></Link></div>
                      </div>
                      <div className="mt-5">
                        <NormalButton loginButton label="Login" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
