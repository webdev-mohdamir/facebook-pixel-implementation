/**
 * @description This hook is used to implement the Facebook Pixel in the pages that need tracking.
 * You can use it in the pages where you want to use the Facebook Pixel and/or use it on the global file like app or layout.
 * @returns {void} Nothing
 */

import { useEffect } from "react";
import { pixelId } from "../config";

const useFacebookPixel = () => {
  useEffect(() => {
    // Check if Facebook Pixel script is already present
    if (!window.fbq) {
      // Dynamically inject the Facebook Pixel script into the page
      (function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );

      // Initialize Facebook Pixel with the provided Pixel ID
      window.fbq("init", pixelId);
    }
  }, [pixelId]); // Re-run the effect only if pixelId changes
};

export default useFacebookPixel;
