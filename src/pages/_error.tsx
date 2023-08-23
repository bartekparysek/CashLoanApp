type MyErrorProps = {
  statusCode: number;
  hasGetInitialPropsRun: boolean;
  err: Error;
};

export default function MyError({ statusCode }: MyErrorProps) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
}

MyError.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
