import axios from "axios";
import scss from "./UserAuth.module.scss";
import { useEffect, useState } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  auth: string;
  login: string;
  password: string;
  isActive: boolean;
  photo: string;
  phone: string;
  isPhoneVerified: boolean;
  traffic: string;
  createdAt: string;
  updatedAt: string;
}

const api = import.meta.env.VITE_URL;

const UserAuth = () => {
  const [user, setUser] = useState<User>();

  const googleLogin = () => {
    window.open(`${api}/api/v1/auth/login/google`, "_self");
  };

  const getMe = async () => {
    const { data } = await axios(`${api}/api/v1/auth/user`, {
      withCredentials: true,
    });

    console.log(data);
    setUser(data.user);
  };

  const logOut = () => {
    window.open(`${api}/api/v1/auth/logout`, "_self");
  };

  useEffect(() => {
    getMe();
  }, []);

  return (
    <div className={scss.User_auth}>
      <h1>User Auth</h1>
      <button onClick={googleLogin}>Auth With Google</button>
    </div>
  );
};

export default UserAuth;
