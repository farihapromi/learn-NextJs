
//  const username="farihapromi";
//  const password="uzjK9epNTUrshDHB";
//  console.log(username,password)

// const{username,password}=process.env
// console.log(username)

//  export const connectionSrt = `mongodb+srv://"${username}:${password}@cluster0.u7yariw.mongodb.net/productDB?retryWrites=true&w=majority`;

//  export const connectionSrt ="mongodb+srv://farihapromi:${password}@cluster0.zqcjx3v.mongodb.net/?retryWrites=true&w=majority"
//  console.log(connectionSrt)


 // src/lib/db.js

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

if (!MONGODB_USERNAME || !MONGODB_PASSWORD) {
  console.error('MongoDB credentials are missing!');
  process.exit(1);
}

export const connectionSrt = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.zqcjx3v.mongodb.net/projectDB?retryWrites=true&w=majority`;

// Other database-related configurations or exports...
