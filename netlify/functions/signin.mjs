export default async (req, context) => {

  console.log("Request received");
  console.log(req);

  console.log(process.env.URL);


  return new Response("Hello, world!");
};
