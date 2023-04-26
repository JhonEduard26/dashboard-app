import { useNavigate } from "react-router-dom";

type PropsType = {
  icon: JSX.Element;
  text: string;
  path: string;
};

export const Item = ({ icon, text, path }: PropsType) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(path);
  };

  return (
    <div
      className="flex items-center gap-2 mb-4 p-2 rounded-md bg-gray-700 cursor-pointer"
      onClick={onClick}
    >
      <span>{icon}</span>
      <li className="">
        <span className="text-sm">{text}</span>
      </li>
    </div>
  );
};
