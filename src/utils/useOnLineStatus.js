import { useEffect, useState } from "react";

const useOnLineStatus = () => {
    const [ onLineStatus, setOnLineStatus ] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnLineStatus(false);
        });
        window.addEventListener("online", () => {
            setOnLineStatus(true);
        });
    })
    return onLineStatus;
};
export default useOnLineStatus;