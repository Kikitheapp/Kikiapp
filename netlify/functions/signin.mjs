export default async (req, context) => {

  console.log("Request received");
  console.log(req);

  console.log(process.env.URL);

  let resp = new Response({status: 200, body: "Hello World!"});
  
  return resp;
};


export const config = {
  path: "/account"
}
