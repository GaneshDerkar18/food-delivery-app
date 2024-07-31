import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="text-center mb-4">
                <h1 className="text-2xl font-bold mb-2">Oops!!!!</h1>
                <h2 className="text-xl mb-4">Something went wrong</h2>
                {err && <h3 className="text-lg text-red-600">{err.status}: {err.statusText}</h3>}
            </div>
            <div className="box-border border-4 border-t-gray-700 border-r-gray-800 h-16 w-16 rounded-full border-t-transparent border-r-transparent animate-spin" />
        </div>
    );
};

export default Error;
