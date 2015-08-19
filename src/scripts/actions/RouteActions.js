export const ROUTE_CHANGE_REQUEST = "ROUTE_CHANGE_REQUEST";

function changeRouteRequest(data) {
  const { route, id } = data;
  return {
    type: ROUTE_CHANGE_REQUEST,
    route: route,
    id: id
  };
}

export function changeRoute(data) {
  return dispatch => dispatch(changeRouteRequest(data));
}
