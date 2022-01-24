import Form from "react-jsonschema-form";
function App({ onSubmit }) {
//const Form = JSONSchemaForm.default;
const schema = {
  title: "A simple form",
  type: "object",
  properties: {
    Name: {
      type: "string"
    },
    Age: {
      type: "number"
    },
    Address:{
      type: "string"
    },
    Published: {
      type: "string",
      format: "date-time"
    },
    Content: {
      type: "string"
    }
  },
  required: ["Name", "Age","Address","Published", "Content"]
};
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6">
        <Form onSubmit={onSubmit} schema={schema} />
        </div>
      </div>
    </div>
  );
}

export default App;
