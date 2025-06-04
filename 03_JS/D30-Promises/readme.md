<!-- Promise -->

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

* A Promise is an js Object to handle asynchronous opration and (should be) any opration complite or files that can be 
represents a future result. and there are three possible states for handle promises.

* Improved Definition
A Promise is an js Object that represents the eventual completion (or failure) of an asynchronous operation. It allows you to handle asynchronous results in a structured way, with three possible states:

  1) pending (initial state, neither fulfilled nor rejected).
  
  2) fulfilled (operation completed successfully).
  
  3) rejected (operation failed).

  * Key Features of Promises
✔ Asynchronous Handling: Better than callbacks for managing async flow.
✔ Chaining: Supports .then() and .catch() for sequential operations.
✔ Immutable State: Once resolved/rejected, cannot change.

 * Best Simplified Definition:
"A Promise is a JavaScript object that represents an async operation’s eventual success (with a value) or failure (with an error)."


3. Promise Object की Internal Structure
एक Promise Object के अंदर ये चीज़ें होती हैं:

[[PromiseState]]

"pending" → "fulfilled" या "rejected"

[[PromiseResult]]

resolve(data) या reject(error) से मिला डेटा

Prototype Methods

.then(), .catch(), .finally()

4) निष्कर्ष:
Promise एक Object है, लेकिन विशेष रूप से Async Operations के लिए डिज़ाइन किया गया।

यह एक विशेष प्रकार का Object है जो Asynchronous Code को Manage करने के लिए बनाया गया है।"

यह Normal Objects की तरह Properties/Values स्टोर नहीं करता, बल्कि Future Results को ट्रैक करता है।

*** Promise creat 
  ** Promise consume 

Cart
order
foodDetails
droplocation

Promises: 

1: pending
2: resolve
3: reject



Promise JavaScript में एसिंक्रोनस (Asynchronous) ऑपरेशन्स को हैंडल करने का एक तरीका है। यह एक ऑब्जेक्ट है जो किसी ऑपरेशन के पूरा होने (या फेल होने) का भविष्य में मिलने वाला रिजल्ट रिप्रेजेंट करता है।


Promise के 3 मुख्य स्टेटस:
Pending (लंबित): ऑपरेशन अभी चल रहा है (न तो पूरा हुआ, न ही फेल)

Fulfilled (पूर्ण): ऑपरेशन सफलतापूर्वक पूरा हो गया

Rejected (अस्वीकृत): ऑपरेशन में कोई एरर आया


Promise के फायदे:
कॉलबैक हेल (Callback Hell) से बचाता है

कोड को ज्यादा पठनीय (Readable) बनाता है

एसिंक्रोनस कोड को मैनेज करना आसान होता है



<!-- fetch () -->

 * fetch() एक बिल्ट-इन JavaScript फंक्शन है जो नेटवर्क request (API कॉल्स) करने के लिए उपयोग किया जाता है। यह न तो ऑब्जेक्ट है और न ही मेथड, बल्कि एक ग्लोबल फंक्शन है।

* Ye Promise return karta hai, jisse hum async code easily handle kar pate hain

* fetch() Web APIs का part है (जो JavaScript के साथ browsers में available होते हैं)

* यह JavaScript language specification (ECMAScript) का official part नहीं है, बल्कि WHATWG/W3C standards का part है

* fetch is part of Web APIs, not core JavaScript
JavaScript by itself (the core language, called ECMAScript) does not include fetch.

* nfetch is provided by the browser environment (like Chrome, Firefox) or by Node.js (with experimental or polyfilled support).

4. Historical Context
2015 में Fetch API को browsers में introduce किया गया

ECMAScript (JavaScript Language) का official part नहीं बना

लेकिन de-facto standard बन गया क्योंकि सभी browsers ने implement किया

Final Verdict:
"Web Development में" → ✅ हां, fetch JavaScript ecosystem का ही part है

"Pure JavaScript Language में" → ❌ नहीं, यह Web API है

Node.js में → ❌ नहीं (लेकिन आसानी से add किया जा सकता है)
