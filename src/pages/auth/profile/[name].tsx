import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../../store/slices/auth";
import { RootState } from "../../../store";

export const Account: React.FC = () => {
  const dispatch = useDispatch();
  const accountDetails = useSelector((state: RootState) => state.userSession);
  
  const handleLogout = () => {
    dispatch(signIn({}));
  };
  
  return (
    <div>
      <h1>Welcome to Home</h1>
      <p>Account Details</p>
      <h5>FullName: {accountDetails.userObj.userName}</h5>
      <h5>Email: {accountDetails.userObj.email}</h5>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
