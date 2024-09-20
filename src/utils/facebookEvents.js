/**
 * @description This file contains the code for tracking events using Facebook Pixel
 * @namespace facebookEvents
 * @exports facebookPageView
 * @exports facebookEvent
 * @exports facebookCustomEvent
 * @exports facebookSubmitFormEvent
 */

/**
 * @description This function is used to track page view event
 * @memberof facebookEvents
 * @function facebookPageView
 */
export const facebookPageView = () => {
  window.fbq("track", "PageView");
};

/**
 * @description This function is used to track events which is already defined in facebook
 * @memberof facebookEvents
 * @function facebookEvent
 * @param {string} eventName - The name of the event
 * @param {object} [eventOptions] - The options of the event
 */
/*
  --------------
  export const facebookEvent = (eventName, eventOptions) => {
    window.fbq("track", eventName, eventOptions);
  }
  --------------
*/

/**
 * @description This function is used to track custom events
 * @memberof facebookEvents
 * @function facebookCustomEvent
 * @param {string} eventName - The name of the event
 * @param {object} [eventOptions] - The options of the event
 */
/*
  --------------
  export const facebookCustomEvent = (eventName, eventOptions) => {
    window.fbq("trackCustom", eventName, eventOptions);
  };
  -------------
*/

/**
 * @description This function is used to track the event of submitting a form
 * @memberof facebookEvents
 * @function facebookSubmitFormEvent
 */
export const facebookSubmitFormEvent = () => {
  window.fbq("trackCustom", "SubmitForm"); // in the thirst parameter you can get the form details also
};
