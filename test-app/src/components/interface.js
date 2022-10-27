import Login from "./form.js";
import Navigation from "./nav-bar.js";
import Form from "./form.js";

function Interface() {
  return (
    <div>
      <Navigation />
      <div dangerouslySetInnerHTML={{ __html: "<h3>Log in</h3>" }} />
      <Form />
    </div>
  );
}

export default Interface;
