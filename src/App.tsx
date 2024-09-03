import { createRoot } from "react-dom/client";
import Clock from "./clock";
import 'bootstrap/dist/css/bootstrap.css';

const root = createRoot(document.body);
root.render(
  <div>
    <Clock />
  </div>
);
