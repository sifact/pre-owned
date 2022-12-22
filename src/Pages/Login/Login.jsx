import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const { signIn, googleProviderLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                const identity = "buyer";
                const currentUser = {
                    email: user.email,
                };
                console.log(currentUser);

                // jwt

                fetch("https://assignment-12-server-brown.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        localStorage.setItem("resellerToken", data.token);
                        // navigate(from, { replace: true });
                        navigate(from, { replace: true });
                    });
                saveUser(user.displayName, user.email, identity);
            })
            .catch((e) => console.log(e.message));
    };

    const saveUser = (name, email, identity) => {
        const user = { name, email, identity };
        fetch("https://assignment-12-server-brown.vercel.app/buyers", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("save user", data);
                // setCreatedUserEmail(email);
            });
    };

    const onSubmit = (data) => {
        setLoginError("");
        signIn(data.email, data.password)
            .then((res) => {
                const user = res.user;
                // setLoginUserEmail(data.email);
                const currentUser = {
                    email: user.email,
                };
                // jwt

                fetch("https://assignment-12-server-brown.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        localStorage.setItem("resellerToken", data.token);
                        // navigate(from, { replace: true });
                        navigate(from, { replace: true });
                    });

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
                        <h1 className="font-semibold text-3xl text-center text-white">
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
                        <div className="divider">OR</div>
                    </form>
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-accent "
                    >
                        Continue with google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
