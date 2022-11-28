import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";

import { useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
// import useToken from "../../hooks/useToken";

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");
    // const [createdUserEmail, setCreatedUserEmail] = useState("");
    // const [token] = useToken(createdUserEmail);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    // if (token) {
    //     navigate("/");
    // }

    const onSubmit = (data) => {
        setSignUpError("");

        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                // console.log(data.identity);
                toast.success("User Created Successfully", {
                    // icon: "👏",
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });

                const currentUser = {
                    email: user.email,
                };
                // jwt

                fetch("http://localhost:5000/jwt", {
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
                        navigate("/");
                    });
                const userInfo = {
                    displayName: data.name,
                    photoURL: data.identity,
                };

                updateUser(userInfo)
                    .then(() => {
                        if (data.identity === "seller") {
                            saveUser(data.name, data.email, data.identity);
                        }
                    })
                    .catch((err) => console.log(err));
            })
            .catch((e) => {
                setSignUpError(e.message);
                // console.log(e);
            });
    };

    const saveUser = (name, email, identity) => {
        const user = { name, email, identity };
        fetch("http://localhost:5000/sellers", {
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

    return (
        <div className="my-16">
            <div className="hero">
                <div className="card-body border w-[386px] bg-base-200">
                    <form onSubmit={handleSubmit(onSubmit)} className=" ">
                        <h1 className="font-semibold text-3xl text-center">
                            Register
                        </h1>
                        {signUpError && (
                            <p className="text-red-400">{signUpError}</p>
                        )}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="name"
                                // defaultValue="test"
                                {...register("name")}
                                placeholder="name"
                                // name="name"
                                className="input input-bordered"
                            />
                            {/* {errors.name && (
                                <span className="text-red-400">
                                    Email is required
                                </span>
                            )} */}
                        </div>
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
                                <span className="label-text">Pick one</span>
                            </label>
                            <select
                                name="identity"
                                {...register("identity", { required: true })}
                                className="select w-full input-bordered mb-6"
                            >
                                <option value="user" selected>
                                    user
                                </option>
                                <option value="seller">seller</option>
                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Sign up</button>
                        </div>

                        <p>
                            Already Have an Account?{" "}
                            <Link className="text-primary" to="/login">
                                Log in
                            </Link>{" "}
                        </p>
                        <div className="divider">OR</div>
                    </form>
                    <button className="btn btn-accent ">
                        Continue with google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
