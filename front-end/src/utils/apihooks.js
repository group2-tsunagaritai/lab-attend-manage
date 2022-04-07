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

export function usePollLaboratory (id) {
  const [laboratory, setLaboratory] = useState();
  useEffect(`http://localhost:8000/api/laboraotry/${id}/`).then((res)=>{
    res.json().then((data)=>{
      setLaboratory(data);
    })
  })
  return laboratory
}

export function useLaboratories (ids) {
  const [laboratory, setLaboratory] = useState();
  useEffect(``).then((res)=>{
    res.json().then((data)=>{
      setLaboratory(data);
    })
  })
  return laboratory
}