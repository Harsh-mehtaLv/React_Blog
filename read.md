# Envioenment variables

Ye hume kyu chahiye kyuki hum jab database use karenge ya koi na koi service use karenge jaha pe sirf hamri application hi baat krni chahiye. 

Hmara jo bhi database hai usme unique client id's honge secrets honge id passwords bhi honge vo yaha pe use krne se problem hogi kyuki react front-end library hai jo bhi yaha pe likha jata hai vo JavaScript se browser pe ship hota hai jisko uss browser se uss javascript ko nikalne k tarike hote hai. Jiss se hmari **sencitive** leak ho skti hai.

Iss liye kuch variables aise hote hai jo system variables bnai jate hai jinko rakhne ka tarika bhi alag hota hai and jab aap apni application ko *production* me deploy krte hai to vaha pe jiss bhi system pe hum deploy kr rhe ho "versal, netlify, aws" pe waha pe unka ek secret manager hota hai and vaha pe hume ye as it is variable ka name and value copy paste krni hoti hai.

Ab application iss tarha se design hoti hai ki yaha pe bhi hum enviornment variables ko alag rakhte hai and waha pe to vo alag hote hi hai. To jiss tarha yaha pe access karenge vahape bhi ussi tarha se access hogha. 

And ye accessability depend krti hai thora sa framework pe or library pe ki aap "create-react-app" use kr rhe ho "vite" use kr rhe ho "nextjs" kr rhe ho ya "vue" use kr rhe ho sabke alag alag tarike hote hai. 

---

First sabse common tarika **Jab bhi is env variable ko bnao uto vo project ki root hona chahite same jaha pe src folder hai project ke main folder me.**

Ab project ke root folder me new file bnao ***.env*** name ki isme start me dot "." lagana bahut zaruri hai. Ab is env file me variable likho like this. first variable and then its name : 

```.env
REACT_APP_APPWRITE_URL = "test enviornment"
```

- Iss enviornment variable ko hum kabhi bhi github and production me ship nahi krte hai gitignore me isko add krna jruri hai agar aap is repo ko push kr rhe ho. but if apko ye file github me chahiye to app iska code .env.sample me copy kr skte hai but waha pe sirf empty env variable hi copy krna hai and isko ship krna hai.

- Ab iss env ka hum access kaise leskte hai is env variable ka access front-end me alag tarike se lete hai and backend me alag se. Ye "create-react-app" me "vite" me "nextjs" me sab me alag se lete hai.

    - *env variable* file ek hi baar load hoti hai. to iss liye jab bhi hum isme changes krte hai to hamesha hume project ke server ko close krke again chalana padta hai.

## iski access lene ka method 

### React app me

React app me "create-react-app" me iska access aise lete hai: 
```app.jsx
console.log(process.env.REACT_APP_APPWRITE_URL)
```
isme humko env variable me "REACT_APP_" start me dena hi hoga then hum iska name de skte hai like "APPWRITE_URL" and access krna hai "process.env"

### Vite app me

Vite me "create vite@latest" me hume iska access lene k liye "VITE_" name ke aage ye lagana padega like this iska access lene k liye hume ye code use krna hoga:
```app.jsx
console.log(import.meta.env.VITE_APPWRITE_URL)
```
isme humko env variable me "VITE_" start me dena hi hoga then hum iska name de skte hai like "APPWRITE_URL" and access krna hai "import.meta.env"

#### baki sab .env me hai

## After .env

env ka access lene ka better method jo ki prodection me use hota hai. For this src me conf or configure name ka folder bnao and ek file create kro 'conf.js' is file ka name aap 'config.js'
bhi rakh sakte hai.

Ab is conf.js file me conf name ka variable bnao and usko export kr do. 

<!-- # Ye env variable sara string me hona chahiye nahi to error ata hai -->

Iss variable me object bnake usme key value pair ko export karenge. iss object me hum 



## Building authentication service with appwrite and ***vender lockin*** concept



