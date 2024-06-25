export const fetchStats = async () => {
  const resp = await fetch("http://localhost:3001");
  const data = await resp.json();
  console.log(data);
  return data;
};
