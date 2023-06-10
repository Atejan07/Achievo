const URL = "http://localhost:3001";

export async function getGoals() {
  const res = await fetch(URL + "/goals");
  const json = await res.json();
  return json;
}


//TODO-> categoryId
export async function postGoal(item, categoryId) {
  const res = await fetch(URL + "/goals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({item, categoryId}),
  });
  const title = await res.json();
  return title;
}

export async function deleteGoal(id) {
  const res = await fetch(URL + "/goals/" + id, {
    method: "DELETE",
  });
  const json = await res.json();
  return json;
}
