import ErrorMessage from "../components/errorMessage.js"

const ErrorPage = () => (
    <ErrorMessage statusCode={418} title={"I'm a teapot"} message={"You were trying to brew coffee to a teapot."} />
)

export default ErrorPage;