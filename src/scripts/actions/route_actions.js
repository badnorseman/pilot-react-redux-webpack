export const ROUTE_CHANGE_REQUEST = "ROUTE_CHANGE_REQUEST";
export const ROUTE_CHANGE_RESPONSE = "ROUTE_CHANGE_RESPONSE";
export const ROUTE_CHANGE_ERROR = "ROUTE_CHANGE_ERROR";

export function changeRoute(data) {
  return dispatch => dispatch(changeRouteRequest(data));
}

function changeRouteRequest(data) {
  return {
    type: ROUTE_CHANGE_REQUEST,
    prevRoute: data.prevRoute,
    nextRoute: data.nextRoute
  };
}

// function changeRouteResponse(response) {
//   return {
//     type: ROUTE_CHANGE_RESPONSE,
//     data: response
//   };
// }

// function changeRouteError(error) {
//   return {
//     type: ROUTE_CHANGE_ERROR,
//     error: error
//   };
// }
