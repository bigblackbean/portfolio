import { careers } from "./utils";
import Bar from "../../components/bar";
import PageTitle from "@/components/pageTitle";

export default function Career() {
  return (
    <div className="modal-layer">
      <Bar />
      <div className="modal-container">
        <PageTitle name="Career" />
        <div style={{ padding: 10 }}>
          <ul>
            {careers.map((item) => (
              <li key={item.id} style={{ marginBottom: 10 }}>
                <h3 className="h3">{item.company}</h3>
                <p>{item.position}</p>
                <p>{item.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
