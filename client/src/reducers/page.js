const initialState = {
  page: ["NEWS", "NHL", "NBA", "NFL", "MLB"],
  active: null,
};

const page = (state = initialState, action) => {
  switch (action.type) {
    case "NHL":
      return {
        page: ["NHL", "SCORES", "NEWS", "STANDINGS", "LEADERS"],
        active: true,
      };
    case "NBA":
      return { page: ["NBA", "SCORES", "NEWS", "STANDINGS", "LEADERS"] };
    case "NFL":
      return { page: ["NFL", "SCORES", "NEWS", "STANDINGS", "LEADERS"] };
    case "MLB":
      return { page: ["MLB", "SCORES", "NEWS", "STANDINGS", "LEADERS"] };
    case "home":
      return { page: ["NEWS", "NHL", "NBA", "NFL", "MLB"] };
    default:
      return state;
  }
};

export default page;
