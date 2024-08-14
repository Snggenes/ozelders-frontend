import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <img
      alt="logo"
      className="cursor-pointer hidden md:block"
      width={200}
      src="/logo.png"
      onClick={() => navigate("/")}
    />
  );
}
