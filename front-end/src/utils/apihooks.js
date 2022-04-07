import { useEffect, useState } from "react";

export function useUser(id) {
  const [user, setUser] = useState();

  useEffect(() => {
    if(!id){
      return;
    }
    fetch(`http://localhost:8000/api/users/${id}/`).then((res) => {
      res.json().then((data) => {
        setUser(data);
      });
    });
  }, [setUser, id]);
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

export function useUsers(lid) {
  const [users, setUsers] = useState([]);
  const fetchData = () => {
    fetch(`http://localhost:8000/api/users?laboratory=${lid}/`).then((res) => {
      res.json().then((data) => {
        setUsers(data);
      });
    });
  };
  useEffect(() => fetchData(), [setUsers]);
  return users;
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

export const useLabSchedules = (lid) => {
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:8000/api/Schedule/?${new URLSearchParams({
        Labid: lid,
      })}`
    ).then((res) => {
      res.json().then((data) => {
        setSchedules(data);
      });
    });
  }, [setSchedules]);
  return schedules;
};

export const useSchedules = (uid, lid) => {
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:8000/api/Schedule/?${new URLSearchParams({
        Labid: lid,
        Userid: uid,
      })}`
    ).then((res) => res.json().then((data) => setSchedules(data)));
  }, [setSchedules]);
  return schedules;
};
