import { createRoot } from "react-dom/client";
import Clock from "./clock";

const root = createRoot(document.body);
root.render(
  <div>
    <Clock />
  </div>
);
