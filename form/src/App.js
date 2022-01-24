import Form from "react-jsonschema-form";
function App() {
//const Form = JSONSchemaForm.default;
const schema = {
  title: "Test form",
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
      title: "Published",
      type: "string",
      format: "date-time"
    },
    Content: {
      title: "Content",
      type: "string"
    }
  }
};
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6">
        <Form schema={schema} />
        </div>
      </div>
    </div>
  );
}

export default App;
