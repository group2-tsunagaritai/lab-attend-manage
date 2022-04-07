import { createContext } from "react";

export const AuthContext = createContext({ jwt: "", uid: "", lid: "" });
