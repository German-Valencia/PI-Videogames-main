import {
  filterCreated,
  filterGenre,
  orderName,
  orderRating,
} from "../actions/index";

describe("Actions", () => {
  it('Debería retornar una action con las propiedades type "FILTER_GENRE" y payload, su valor lo recibe por argumento:', () => {
    expect(filterGenre("Action")).toEqual({
      type: "FILTER_GENRE",
      payload: "Action",
    });
  });
  it('Debería retornar una action con las propiedades type "filterCreated" y payload, su valor lo recibe por argumento:', () => {
    expect(filterCreated("8cd1483d-ae09-4ace-9695-e38f8f1cc51b")).toEqual({
      type: "FILTER_CREATED",
      payload: "8cd1483d-ae09-4ace-9695-e38f8f1cc51b",
    });
  });
  it('Debería retornar una action con la propiedad type "orderName" y el payload, su valor lo recibe por argumento:', () => {
    expect(orderName("Grand")).toEqual({
      type: "ORDER_NAME",
      payload: "Grand",
    });
  });
  it('Debería retornar una action con la propiedad type "orderRating" y el payload, su valor lo recibe por argumento:', () => {
    expect(orderRating("asc")).toEqual({
      type: "ORDER_RATING",
      payload: "asc",
    });
  });
});
