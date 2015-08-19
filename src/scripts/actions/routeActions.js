export const ROUTE_CHANGE_REQUEST = "ROUTE_CHANGE_REQUEST";

function changeRouteRequest(route, id) {
  // const { route, id } = data;
  return {
    type: ROUTE_CHANGE_REQUEST,
    route: route,
    id: id
  };
}

export function changeRoute(route, id) {
  return dispatch => dispatch(changeRouteRequest(route, id));
}
