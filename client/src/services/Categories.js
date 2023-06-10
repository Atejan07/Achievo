const URL = "http://localhost:3001";

export async function getCategories() {
  const res = await fetch(URL + "/categories");
  const json = await res.json();
  return json;
}

export async function postCategory(item, userId) {
  const res = await fetch(URL + "/categories", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({item, userId}),
  });
  const title = await res.json();
  return title;
}

export async function deleteCategory(id) {
  const res = await fetch(URL + "/categories/" + id, {
    method: "DELETE",
  });
  const json = await res.json();
  return json;
}
