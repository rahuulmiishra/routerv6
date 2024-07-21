/* eslint-disable react/react-in-jsx-scope */

import { Form, useActionData, useNavigation } from "react-router-dom";

function Contact() {
  const navigation = useNavigation();
  const formActionData = useActionData();
  console.log("asd", formActionData);

  if (navigation.state === "submitting") {
    return <h1>Submitting...</h1>;
  }
  return (
    <Form method="post" action="/contact">
      <input name="firstName" type="text"></input>
      <button>Submit</button>
    </Form>
  );
}

export const formAction = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());

  return "Not a valid Name";

  console.log(data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Error");
    }, 3000);
  });
};

export default Contact;
