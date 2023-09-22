import Sincronia from "./3.1-sincronia.js"
import Asincronia from "./3.2-asincronia.js"
import Callback from "./3.2.1-callback.js"
import Promises from "./3.2.2-promises.js"
import Async from "./3.2.3-async-await.js"

console.log("TAREA");

import CallbackRegalo from "./4.1-Regalo-Callback.js"
import PromiseRegalo from "./4.1.2-Regalo-Promise.js"
import AsyncGift from "./4.1.3-Regalo-Async.js"

Sincronia.ejecucion()  //* Callback
Asincronia.ejecucion()
Callback.ejecucion()
Promises.ejecucion()
Async.ejecucion()

console.log("______________________");


console.log("Tarea Callack/ Promise/ Async");

CallbackRegalo.ejecucion()
PromiseRegalo.ejecucion()
AsyncGift.ejecucion()
