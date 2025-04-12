"use client";

import { createContext, useContext } from "react";

export type UserType = {
  name: string;
  email: string;
  avatar: string;
};

export const UserContext = createContext<UserType>({
  name: "Guest",
  email: "guest@example.com",
  avatar: "/avatars/default.jpg",
});

export const useUser = () => useContext(UserContext);
