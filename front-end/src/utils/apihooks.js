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

export function useLaboratory(id) {
  const [laboratory, setLaboratory] = useState();
  const fetchData = () => {
    fetch(`http://localhost:8000/api/labratory/${id}/`).then((res) => {
      res.json().then((data) => {
        setLaboratory(data);
      });
    });
  };
  useEffect(() => {
    fetchData();
  }, [setLaboratory]);
  return laboratory;
}

export function usePollingMembers(lid) {
  const [members, setMembers] = useState();
  const fetchMembers = () => {
    fetch(
      `http://localhost:8000/api/users?` +
        new URLSearchParams({
          laboratory: lid,
        })
    ).then((res) => {
      res.json().then((data) => {
        setMembers(data);
      });
    });
  };
  useEffect(() => {
    const interval = setInterval(fetchMembers, 1500);
    fetchMembers();
    return () => clearInterval(interval);
  }, [setMembers]);
  return members;
}

export function usePollLaboratory(id) {
  const [laboratory, setLaboratory] = useState();

  useEffect(() => {
    const interval = setInterval(() => {}, 2000);
    return () => {
      clearInterval(interval);
    };
  });
  return laboratory;
}
