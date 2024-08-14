const BASE_URL = "https://api.airtable.com/v0/appu8vBIuCtiZtbwl/Table%201";

const HEADERS = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_BACKEND_HEADER_AUTH}`,
};

export const getData = async () => {
  try {
    const response = await fetch(BASE_URL, {
      headers: HEADERS,
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.records.map((record) => {
      return {
        id: record.id,
        ...record.fields,
      };
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const getReviewsById = async (imdbID) => {
  const appendQuery = `?filterByFormula=imdbID%3D%22${imdbID}%22`;
  try {
    const response = await fetch(BASE_URL + appendQuery, {
      headers: HEADERS,
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.records.map((record) => {
      return {
        id: record.id,
        ...record.fields,
      };
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const createReview = async (formData) => {
  const payload = { fields: { ...formData } };
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: HEADERS,
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return { id: json.id, ...json.fields };
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteReview = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: HEADERS,
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
    // return json.records.map((record) => {
    //   return {
    //     id: record.id,
    //     ...record.fields,
    //   };
    // });
  } catch (error) {
    console.error(error.message);
  }
};
