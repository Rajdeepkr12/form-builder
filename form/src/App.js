import Form from "react-jsonschema-form";
function App() {
//const Form = JSONSchemaForm.default;
const schema = {
  title: "Test form",
  type: "object",
  properties: {
    name: {
      type: "string"
    },
    age: {
      type: "number"
    },
    address:{
      type: "string"
    }
  }
};
  return (
    <div className="App">
      <Form schema={schema} />
    </div>
  );
}

export default App;
