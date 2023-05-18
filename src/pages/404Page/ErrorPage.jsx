import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="container md:w-4/6 mx-auto md:mt-10 text-center">
            <img src="https://i.ibb.co/YPjHntn/590f418f69.jpg" alt="" />
            <Link to="/" className="btn btn-accent normal-case text-white md:mt-8">Back To Homepage</Link>
        </div>
    );
};

export default ErrorPage;