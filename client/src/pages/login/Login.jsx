import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [login, setLogin] = useState('');
  const [register, setRegister] = useState('');
  const [move, setMove] = useState(0);
  const handleRegister = () => {
      setLogin(-400);
      setRegister(50);
      setMove(110);
  }
  const handleLogin = () => {
      setLogin(50);
      setRegister(450);
      setMove(0);
  }
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const [credentialsRegister, setCredentialsRegister] = useState({
    username: undefined,
    email:undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleChangeRegister = (e) => {
    setCredentialsRegister((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    console.log(credentials)
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  const handleClickRegister = async (e) => {
        e.preventDefault();
        console.log(credentialsRegister)
        try {
            
          const res = await axios.post("http://localhost:8800/api/auth/register", credentialsRegister);
          navigate("/")
          
        } catch (err) {
            console.log("Loi")
        }
  };


  return (
    <div className="log-reg">
      <div className="form-box">
        <div className="button-box">
          <div style={{ left: `${move}px` }} id="btn"></div>
          <button type="button" className="toggle-btn" onClick={handleLogin}>Đăng nhập</button>
          <button type="button" className="toggle-btn" onClick={handleRegister}>Đăng ký</button>
        </div>
        <form style={{ position: "absolute", left: `${login}px` }} id="login" className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="Tên đăng nhập"
            id="username"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            className="input-field"
            placeholder="Mật khẩu"
            id="password"
            required
            onChange={handleChange}
          />
          <button disabled={loading} onClick={handleClick} className="submit-btn">Đăng nhập</button>
          {error && <span>{error.message}</span>}
        </form>
        <form style={{ position: "absolute", left: `${register}px` }} id="register" className="input-group">
          <input type="text" className="input-field" placeholder="Tên người dùng"  id="username" required onChange={handleChangeRegister}/>
          <input type="text" className="input-field" placeholder="Email" id="email" required onChange={handleChangeRegister} />
          <input type="password" className="input-field" placeholder="Mật khẩu" id="password" required onChange={handleChangeRegister}/>
          <input type="password" className="input-field" placeholder="Xác nhận mật khẩu" id="cpassword" required onChange={handleChangeRegister}/>
          <button type="submit" className="submit-btn"  onClick={handleClickRegister}>Đăng ký</button>
        </form>
      </div>
    </div>
  );
};

export default Login;