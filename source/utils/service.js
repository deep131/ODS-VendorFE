import request from "./fetch";

/**
 * @Register
 */

export const ODSbooking = (networkrequest) =>
    request.get("ODSbooking", networkrequest) 

    export const ODSLoginAPI = (networkrequest) =>
    request.post("ODSLoginAPI", networkrequest);