export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ result: 'Test is passed...Yeaa!' }),
  };
};
