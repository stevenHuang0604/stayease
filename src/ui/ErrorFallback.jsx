import Button from "./Button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <Button
        variant="outline"
        color="primary"
        size="medium"
        onClick={() => resetErrorBoundary()}
      >
        Try again!
      </Button>
    </div>
  );
}

export default ErrorFallback;
