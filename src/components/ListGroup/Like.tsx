import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

interface OnclickProps {
    OnClick: () => void;
}

const Like = ({ OnClick }: OnclickProps) => {
    const [status, setStatus] = useState(false);

    const handleClick = () => {
        setStatus(!status);
        OnClick();
    };

    if (status)
        return <AiFillHeart size={30} color="purple" onClick={handleClick} />;
    return <FaRegHeart size={30} color="purple" onClick={handleClick} />;
};

export default Like;
