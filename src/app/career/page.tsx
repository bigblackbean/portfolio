import { careers } from "./utils";
import Bar from "../../components/bar";
import PageTitle from "@/components/pageTitle";
import IdCard from "./components/IdCard";

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
                <IdCard data={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
