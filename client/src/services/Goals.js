const URL = "http://localhost:3001";

export async function getGoals(categoryId) {
  const res = await fetch(URL + "/goals/" + categoryId);
  const json = await res.json();
  return json;
}

export async function postGoal(item, categoryId) {
  const res = await fetch(URL + "/goals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item, categoryId }),
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

export async function getAllImportant(userId) {
  const importantGoal = await fetch(URL + "/goals/important/" + userId);
  const result = await importantGoal.json();
  return result;
}

export async function updateCompleted(goal) {
  const res = await fetch(URL + "/completed", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(goal),
  });
  const updatedGoal = await res.json();
  return updatedGoal;
}


