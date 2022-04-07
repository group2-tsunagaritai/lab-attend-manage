import { useEffect, useState } from "react";

export function useUser(id) {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch(`http://localhost:8000/api/users/${id}/`).then((res) => {
      res.json().then((data) => {
        setUser(data);
      });
    });
  }, [setUser]);
  return user
}

