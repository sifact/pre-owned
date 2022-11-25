import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
// import { AuthContext } from "../../Contexts/AuthProvider";
// import useToken from "../../hooks/useToken";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");
    // const [loginUserEmail, setLoginUserEmail] = useState("");
    // const [token] = useToken(loginUserEmail);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // if (token) {
    //     navigate(from, { replace: true });
    // }

    const onSubmit = (data) => {
        setLoginError("");
        signIn(data.email, data.password)
            .then((res) => {
                const user = res.user;
                // setLoginUserEmail(data.email);
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch((e) => {
                console.log(e.message);
                setLoginError(e.message);
            });
    };

    return (
        <div className="my-16">
            <div className="hero">
                <div className="card-body border w-[386px] h-[480px] bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className=" ">
                        <h1 className="font-semibold text-3xl text-center">
                            Login
                        </h1>
                        <p className="text-red-400">{loginError}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                // defaultValue="test"
                                {...register("email", { required: true })}
                                placeholder="email"
                                // name="email"
                                className="input input-bordered"
                            />
                            {errors.email && (
                                <span className="text-red-400">
                                    Email is required
                                </span>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Password must be 6 character or longer",
                                    },
                                })}
                                // defaultValue="password"
                                type="password"
                                placeholder="password"
                                // name="password"
                                className="input input-bordered"
                            />
                            {errors.password && (
                                <span className="text-red-400">
                                    {errors.password?.message}
                                </span>
                            )}
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Login</button>
                        </div>

                        <p>
                            New to Doctors portal?{" "}
                            <Link className="text-primary" to="/register">
                                Create new account
                            </Link>{" "}
                        </p>
                    </form>
                    <button className="btn btn-outline btn-accent">
                        Continue with google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
