import moment from "moment";
import filtersReducer from "../../reducers/filtersReducer";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const textFilter = "This is my filter";
  const action = {
    type: "SET_TEXT_FILTER",
    textFilter
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(textFilter);
});

test("should set startDate filter", () => {
  const startDateFilter = moment();
  const action = {
    type: "SET_START_DATE",
    startDateFilter
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDateFilter);
});

test("should set endDate filter", () => {
  const endDateFilter = moment();
  const action = {
    type: "SET_END_DATE",
    endDateFilter
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDateFilter);
});
