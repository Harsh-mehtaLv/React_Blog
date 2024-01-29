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

---

# Building authentication service with appwrite and ***vender lockin*** concept

Yaha pe hum authentication system iss tarha se likhenge ki taki if hum isko appwrite se bahar to bhi hmari application chal paye.

To yaha pe use hoti hai 'services'. jo ek class banti hai jo ki har language me banti hai. ye kuch iss traha se bnai jati hai ki waha se kuch method hum export krte hai unn method  ke andar kya ho rha hai iss se kisi ko koi matlab nahi hota hai. bas kya data chahiye vo mujhe btao and mera method use kro thats it. Ab mai appwrite se baat kr rha hu ya mere apne database se baat kr rha hu iska mri application se koi matlab hi nahi hota hai. 

Now src me appwrite name ka folder bnao and uske andar "auth_service.js" name ki file bnao. 

1. now isme conf file import kro then appwrite ka cliend,account,id bhi import kro like this `import { Client, Account, ID } from "appwrite";` you can also copy this import from their website. and make createAccount, login, getCurrentUser, logout there.

---

# Appwrite database, file upload and custom queries.

create a new file named config.js in appwrite folder and import Client, Databases, Storage, Query and ID there.

ab class bnao in config.js 

Ab sara config compelete ho gay ahai in config.js

---

# Redux toolkit setting store

State management and setting store and reducers using redux/toolkit in big projects.

Store ka configuration one new practice file rakhne ki file structure process. 

make new folder in src named store and create a file in it 'store.js'

make one more store named 'authSlice.js' in same folder to track authentication isssi tarha se aap post ke liye bhibana skte hai. aap features name ke folder me bhi slice bana skte hai. ye authentication ko track krne k liye hai ki user authenticated hai ya nahi jo hum har baar user se puchenge. 

Now stores ban gaye hai and ab hum components bnayuenge.

---

# Making components 

Create new components folder in src and create 'header' and 'footer' components in their named folder. and also make an . file in components folder to import and then export components.

#### app.jsx

Now go to 'app.jsx'. hmara main kaam yaha pe hi hoga ki user loged in hai ya nahi and iss si hisaab se hum user ko uska data show karange. 

Now hum loading state bnayenge yaha pe ki if loading ho rahi hai to loading ka icon dikhana hai else data show karna hai.

#### main.jsx

Now 'main.jsx' me Provider me app.jsx ko wrap krna hai. iske liye humko Provider ki import krna hoga from react-router-dom and fir uss provider me hume store paramiter pass krna hai jiske liye hume usko 'store.js' se import krna hoga. now everything is done. 


Ab hume zada time apne components me bitana padega ans kai new components bhi bnane padenge.

Ab hmare paas ek new directory milegi "Pages" name ki. Ab isme hum signup vala login wala component call krana hai.

Abhi *functionality* almost design ho chuki hai hmari. Appwrite , store puri tarha se configured hai. Routing aage hum components ke sath dekhenge.

Abhi hmara next target components pe kaam krna hai usme hum zada classes and design and functionality me kaam karenge.

---

# Production grade react components

Now create new folder named pages in src folder. Ab hum isme kuch components call kerenge like signup, login etc.

Hmara '*header*' bhi two parts me hoga ek hoga basic header and ek hoga uska logout button. 

Ab hum form me input field ka ek alag component bnayenge jisko hum abbad me signup form login form jaha pe bhi zarurat ho use kr sake.

##### Container.jsx making 

Ab components me component bnao first component hai 'Container.jsx' in container folder. ye hmari properties accept krta hai as a children. isme hum height, width , styling properties define krte hai and uske andar jo bhi values hoti hai as it is display krva lete hai hai. now go there. 

Ab agar hume kisi component me width 80% hi chahiye to hum sirf container change kr skte hai and hume is container wali width mil jayegi. 

#### Footer.jsx making

Ab footer me code copy paste karo chai-aur-code reactjs github ke footer se apne footer me. 

Agar aap chaho to footer ko apne hissab se design kr skte ho. 

Isme sara *html* and *css* hi hai billkul *js* nahi hai. and iss me *Link* tag bhi hai jiske liye hume Link ko react-router-dom se import krna hoga.

***Logo.jsx*** => And isme Logo bhi hai iske liye hum `Logo.jsx` name ka new component banayenge direct components me and usme Logo add kr denge. and isme hum peramiter me iski width bhi denge.

Ab hume iss 'Logo.jsx' ko bhi 'Footer.jsx' me import kena hoga nahi to error ayega kyuki hume iss component me Logo ko us ekiya hai.

And abb footer and logo ho gaya. ab hum header me jayenge.

#### Header.jsx making

Ab ye header ek tarha se optional sa hai hum ek hi baar me sari values dikhana nahi chahte and specially Login kisko dikhana hai and Logout kisko dikhana hai ye hum koi login hai ya nahi hai us ke basses pe judge karenge.

Now 'Header.jsx' me ek new file bnao 'LogoutBtn.jsx' name ki.

##### LogoutBtn.jsx

Ab logout ke baad hume kuch na kuch action lena padega kuch dispatch krna hoga to logout ke liye hume store se Slice bhi lana hoga or reducer lana hoga and useDispatch bhi lana hoga react-redux se. 

Now useDispatch and Slice ko import karo yaha pe and authService bhi jisko import kro appwrite/config me se and logout ko bhi store me se import kro. now go to logoutbtn.jsx.

Ab logout ho gaya hai yaha pe.

##### back to Header.jsx 

Ab yaha pe hum sare links rakhenge but logout dikhana ki nahi dikhana ye hum conditionally render karenge means ki check karenge ki user logged in hai ya nahi hai if vologged in hai to hi logout button show hoga. Now header.jsx me jao.

- 1: import Container, Logo, LogoutBtn, from index.

- 2: ab import link from react-router-dom.

- 3: ye bhi lagega taki store me se check kr sake ki user logged in hai ya nahi.

- 4: kabhi bhi kisi ko forcefully kahi pe navigate krna hai to isko use krete hai.

- nanoid: te hum li tag ki key ke liya use kr rhe hai

- 5: ab hume state me se nikalna hoga ki authenticate hai ya nahi.

- 6: useSelector me humko ek callBack milta hia and yaha pe humko state ka access mil jayega. Ye status hum authSlice me se initialState ke status se access kr rahe hai and yaha pe state.auth kyuki ye auth ke under hai and uske andar status.

- 7: ab hum isko dispatch ki jagha useNavigate se bana lete hai ye useDispatch ke tarha hi hai.

- 8: iss tarha ki navigation bar jab banti hai to ek array bna ke uske upar loop krte hai and ye usually ek array hi rehta hai and iss array me objects hote hai.

   - 8.1: Agar hum ek ek value likhenge to har baar ek new button ayega to us button ko humko lagana padega but "production" me hum sidha iss tarha se ek object bnate hai to is object me ek aur value addkr do and bas navigation bar me add ho jati hai.

#### Login input, button component and designing common UI

A common component jisko hum jaha bhi chahe vaha pe use kr sake.

##### Button.jsx

Now create 'Button.jsx' file in component folder now go there.

Ab button me hum kya kya parameter accept kr rahe hai and unko use krne ka tarika is interesting.

Isme hum sabse pehle children paramiter pass krte hai. iska sabse easy use hai ki hum isko button me pass kr se {children} like this. to jo bhi text pass hoga vo text yaha pe aaaye ga isko hum text ya btnText bhi bol skte hai and yaha pe render kr sktehai.

 - 1:  ye sari defult values hai means agar user deta hai to usko use karenge if nahi ti isko

```Button.jsx
children, // or btnTxt
type = 'button',
bgcolor = 'bg-blue-600',
textColor = 'text-white',
className = '', 
...props
```

- 2: className blank and props spresd kyu hai. button me sabse pehle hai className kuch classes hum add krte ho ab classes jo hai vo iss tarha se add nahi hoti hai sabse prhle single quote ko hata ke backticks lagao ab isko use aise kr nahi skte kyuki ye to JavaScript hai to isko hum curlybraces `{``}` me likhenge ab ye string hai ab hum isme class add kr skte hai. Ab ye to ho gati hamari classes jo hum likh rahe hai lekin kuch classes hum chahte hai ki user bhi pass kr le.

     - (means jaha pe hum iss button ko use kr rahe hai jis bhi component me waha pe jo bhi class hum uss saperate component me dena chahe vo de sake and ye jo classes hai vo default classes hai means har is button me ye classes to hone hi chahiye chaye hum isko kisi aur component me use krte time new class de ya na de) 

 - 3: Ab iske liye humne isko `${className}` me pass kiya hai. Ab agar user ko koi aur bhi attribute pass krna ho like placeholder to uske liye humne yaha pe `...props` spread krke pass kr diya hai means ab user agar koi aur attribute bhi dena chahe to vo de sakta hai 

 Ab hum input vale component me bhi same hi karenge. But usme ek new hook use hoga forward reference. 

 ##### Input.jsx

 Ab 'Button.jsx' wala syntex hi hum 'Input.jsx' me repeat karne vale hai but waha pe ek new hook use hoga `forwardRef` from react.dev.

 `forwardRef` ab ye jo hook hai kai baar advanced react ke interviews me iss tarha ka question pucha jata hai ki forwardRef ka koi example btao and iska best explanation hai ki hum ek login form bna rahe hai apna uss login form me hmare pass input field ek alag component hai to vo hi same input field hum signup me logout me bhi sab jagah use karenge aur yaha pe jaha apka login page hai lekin input ki state ka access to hume login page me chahiye na to uska reference dena hoga hume login page me to waha pe hmare paas react ka hookj forwardRef kaam me aata hai. 

 Ab 'Input.jsx' name ka component bnao components folder me. pehle button iss liye bnaya kyuki 90% kaam hum button ka karenge 10% input ka. 

Ab yaha pe humko kai baar ids bhi lagti hai iss liye hum  `useId` import karenge react se isko hum as a input id use karenge.

 - 1: hum yaha pe sab kuch forwardRef me wrapup kar denge. Ab isme hum ek function define kr denge. Ab is input me hum kya lenge vo isme hai.

 - 2: yaha pe jo bhi isko use karega vo ek reference bhi pass karega 'ref' ke zariye like this: 

 ```Input.jsx
 const Input = React.forwardRef(function Input(
  { lable, type = "text", className = "", ...props },
  ref
)
```
-
    - 2.1: ye reference bahut hi important hai. Ab isko hum aage jab input use karenge tab bnayenge ki aise reference pass kiya jata hai. Ye hmari reference me use aayega.

- 3: id bnao useId() se like this: `const id = useId();`

- 4 Ab yaha pe hum pehle div lenge then apni js start karenge.

- 5 input starts.

- 6 Ab ek interesting cheez sabse pehle ki ye jo ref hai reference jo humne user se liya hai as a prop usko yaha pe pass kr do. yahi vo cheez hai jo humko reference degi hmare parent component ke andar. Issi k liye humne forwardRef ka use kiya hai Ki input ka component alag hai lekin reference waha chahiye to reference waha se pass bhi kiya jayega aur yaha se fir state ka access liya jayega tabhi to input me jo bhi fill ho rha hai wo sab loge verna to onClick vagera to lagega kaha onChange kaha se lagega ha isski tarha se likha jata hai. Ye apko kai jagha production grade code me dikhega.

- 7 ab jo bhi values hai jo user ne extra pass kari hai uske liye ...props yaha likh denge like this: `{...props}`.

- 8 iske alava hum yaha pe bhi ek id pass ke dete hai like this : `id={id} ` ab kya hoga ki jo bhi id generate hui hai vi apke lable me bhi lag gayi hai and input me bhi. taki koi agar waha pe koi click kare uss label pe to usi input pe hilight ho jaye aur cursor waha pe chala jaye tako wo likh paye.

An more components nest video me hai.

# React hook form in production

Aaj hum last time wale production grade components ki revision krte hue. first component bnayenge 'SelectBtn' component jaya pe dropdown me active or deactive hoga.

##### Select.jsx

Now make a new component named 'Select.jsx' in components folder. baki sab Select.jsx me hai.

##### PostCard.jsx 

Now make a new component in components folder named 'PostCard.jsx'. Ye vo post hai jispe click krne pe hume uss post ka data next page pe show hota hai. This is easy component. baki component me jao.

##### React hook form Login.jsx component

Now make 'Login.jsx' component and useState, usenavigate, Link inko import kro and authSlice me se Login bhi import kro. baki iss page me hai.

##### Signup.jsx

Create a new component 'Signup.jsx' name ka isme hum 'Login.jsx' ki revision karenge. ye ho gya hai 

##### Authentication layout AuthLayout.jsx

Ab 'AuthLayout.jsx' name ka ek component create kro. Ye ek mechanasim hai ki kis tarha se pages ko ya routes ko protect kiya jata hai. Ye ek protected container hai. Ab protected name is liye de rahe hai kyuki hum conditionally render karenge ki kya uske children ko render krna hai ya nahi 


# Adding form and slug values

##### RTE.jsx (tinymce Editor)

R.T.E Real Time Editor. iska saperate componet bnao "Rte.jsx"

##### PostForm.jsx 

Editor ka control lene k liye.

Ab is Editor ka control kaise lete hai for that make Post-form folder and isme 'PostForm.jsx' file bnao.


# Building pages 

Ab pages name ka ek folder src me bnao and usme 'Signup.jsx' name ki file bnao.

##### Signup.jsx

Yaha pe signup component import kro baki vahi hai .

##### Login.jsx

Isme bhi same hi krna hai sirf login component ko import krkr call krna hai.

##### AddPost.jsx

Same here like last time yaha bas hume PostForm and Container import krne hai.

##### AllPost.jsx 

Sare pages dikhane k liye. yaha pe hume ek appwrite ki services call krni hogi.

##### EditPost.jsx

isme humko kuch data fetch bhi kra hoga baki vaha pe hai.

##### Home.jsx

isme hume conditional render kiya hai.

##### Post.jsx

iska code github se copy pase kro


#### Routing

Ab hum routing karenge go to 'main.jsx'


# CORS and debugging in Reat project

***First error*** : signup krne pe 
"Appwrite serice :: getCurrentUser :: error TypeError: Cannot read properties of undefined (reading 'get')" ye error aa rha tha from "auth_service.js".

Hmare paas CORS error aaya hai CORS: iska means ki apka server kisi aur port pr hai and apha frontend kisi aur port pe hai to ye dono interact nahi kr sakte hai kyuki browser ye kehta hai ki browser ko kaise pata ki ye vo hi trusted source hai ki jaha se apke paas sara traffice aa rha hai to uske kiye
course origin policy lgai jati hai jo aise cheezo ko rokti hai. ye mainly backend pe solve kri jati hai backend me shayad hmara url hai vo white listed nahi hai ya uski entry nahi hai. 

Isko solve krne k liye aap aoowrite ki website pe jao and jaha pe apka project hai waha pe apko ek platform add krna hota hai jo bhi apko krna hai like web now is platform ka name hum apne mega app wala name hi rakhenge. iska name aap kuch bhi rakh sket ho. and ab app host name rakho like yaha pe hum abhi localhost pe hai to hum ye hi likhenge iske baad hume apna pplatform bana mil jayega \








```config.jsx
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage; // or bucket

  // =============================== cunstructor =================================

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  //=============================== Post services =============================

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug, // or ID.unique() bhi use kr skte hai iss se slug me jo hoga vo iski id ban jayegi
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  // yaha pe pehla peremiter slug hoga jiss se hum document id le sakenge and second me object pass ho. ye slug se hi uniquelt identify hoga if uniqueID hota ho hum usko mangte yaha pe
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
    }
  }

  //  yaha pe ise sirf slug documentId chahiye iss se ye post delete kr dega
  async deletePost({ slug }) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost ::error", error);
      return false;
    }
  }

  // to get single post
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost ::error", error);
      return false;
    }
  }

  // to get all posts. ab isme quries kaam me ayengi
  // Ab humko vo posts chahiye jinke andar jo querry hai vo  active hai
  async getPosts(queries = [Query.equal("status", "active")]) {
    // status yaha pe key ahai jo ki database article me hai in index
    try {
      return await this.databases.listDocuments( // error solved 'listDocument' to 'listDocuments'
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        // [
        //   Query.equal("status", "active")
        // ] isko hum yaha bhi de skte hai but ab hum yaha pe quries likhenga
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);
      return false;
    }
  }

  // ================== file upload service baad me isko saperate file me lagana ==================

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  // delete file
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile ::error", error);
      return false;
    }
  }

  // prewiew file
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();

export default service;

```


```auth_services.jsx
import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";



export class AuthService {
  client = new Client();
  account;

  cunstructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method . account ban ne ke baad sidha user ko login krana. yaha pe hum niche vala login denge
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // async getCurrentUser() {
  //   try {
  //     return await this.account.getCurrentUser();
  //   } catch (error) {
  //     // throw error; // iss error ko aap console log bhi kr skte hai
  //     console.log("Appwrite service :: getCurrentUser :: error", error);
  //   }
  //   return null;
  // }
  async getCurrentUser() {
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite serice :: getCurrentUser :: error", error);
    }

    return null;
}

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite servoce :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;

```
















 


