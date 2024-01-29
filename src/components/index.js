import Header from "./Header/Header";
import Footer from "./Footer/Footer"
import Container from "./container/Container";
import Logo from "./Logo";
import LogoutBtn from "./Header/LogoutBtn";
import RTE from "./RTE";
import PostForm from "./Post-Form/PostForm";
import AuthLayout from "./AuthLayout";
import Button from "./Button";
import Input from "./Input";
import Login from "./Login";
import PostCard from "./PostCard";
import Select from "./Select";
import Signup from "./Signup";

export {
  Header,
  Footer,
  Container,
  Logo,
  LogoutBtn,
  RTE,
  PostForm,
  AuthLayout,
  Button,
  Input,
  Login,
  PostCard,
  Select,
  Signup,
};
// jaise humne export kiya hai eg:{ Header, Footer } app.jsx me import bhi aise hi krna hoga.
// otherwise error aayehga.ki app.jsx ka render sahi nahi hai thet they expected function and got object.
// kyuki humne yaha pe isko object me export kiya hai and waha pe normal import kiya hai.
// humko waha pe bhi usko object me hi import kena hoga eg:{ Header, Footer } like this
