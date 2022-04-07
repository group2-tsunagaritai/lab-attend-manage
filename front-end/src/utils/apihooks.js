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
  return user;
}

export function usePollLaboratory(id) {
  const [laboratory, setLaboratory] = useState();
  const [members, setMembers] = useState();

  const fetchData = () => {
    fetch(`http://localhost:8000/api/labratory/${id}/`).then((res) => {
      res.json().then((data) => {
        setLaboratory(data);
      });
    });
  };
  const fetchMembers = async () => {
    if (laboratory) {
      console.log(laboratory.member);
      const tmp = [];
      for (let i = 0; i < laboratory.member.length; i++) {
        const res = await fetch(
          `http://localhost:8000/api/users/${laboratory.member[i]}/`
        );
        const data = await res.json();
        tmp.push(data);
      }
      console.log(tmp);
    }
  };
  useEffect(() => {
    fetchMembers();
  }, [laboratory]);
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  });
  return laboratory;
}
