import { Atom } from "lucide-react";
import { Input, InputLabel } from "../components/Input";

function Solid() {
  return (
    <div>
      <h1>⚛️ Open-Closed Principle</h1>
      {/* Example 1: */}
      {/* <Input label="Username" id="example" placeholder="You username" showLeftIcon={true} /> */}

        {/* Example 2: */}
      <Input id="example-two" placeholder="You username" >
        <InputLabel>Example 2 - With children</InputLabel>
      </Input>

      <Input id="example-two-" placeholder="You username two" >
        <InputLabel>Example 2.1 - With children <Atom /></InputLabel>
      </Input>
    </div>
  );
}
export { Solid };
