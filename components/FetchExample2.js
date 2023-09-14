import { Button } from "react-native";

function FetchExample2() {
   const postData= fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
});
    return ( 
        <Button onPress={postData} />
     );
}

export default FetchExample2;