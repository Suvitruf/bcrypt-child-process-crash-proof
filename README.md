# bcrypt crashes in child process

If you are trying to load bcrypt in child process:

    const bcrypt = require('bcrypt');

it will fail with the error:
~~~
Error: Module did not self-register.
    at Object.Module._extensions..node (internal/modules/cjs/loader.js:779:18)
    at Module.load (internal/modules/cjs/loader.js:630:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:570:12)
    at Function.Module._load (internal/modules/cjs/loader.js:562:3)
    at Module.require (internal/modules/cjs/loader.js:667:17)
    at require (internal/modules/cjs/helpers.js:20:18)
    at Object.<anonymous> (O:\Texts\Sources\my\bcrypt-shild-process\node_modules\bcrypt\bcrypt.js:6:16)
    at Module._compile (internal/modules/cjs/loader.js:738:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:749:10)
    at Module.load (internal/modules/cjs/loader.js:630:32)
~~~

Info:
-
 - Node v11.10.0
 - bcrypt v3.0.4