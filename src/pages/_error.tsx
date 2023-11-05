import { NextPageContext } from 'next';

type MyErrorProps = {
  statusCode: number;
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

MyError.getInitialProps = async ({ res, err }: NextPageContext) => {
  let statusCode;

  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  } else {
    statusCode = 404;
  }

  return { statusCode };
};
