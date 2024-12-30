import { certificate, person, skills } from "./utils";
import PageTitle from "@/components/pageTitle";
import Bar from "../../components/bar";
import Image from "next/image";

function SectionTitle({ title }: { title: string }) {
  return (
    <div
      style={{
        paddingBottom: 4,
        borderBottom: "1px solid var(--Basic-900)",
        marginBottom: 10,
      }}
    >
      <h3 className="h3">{title}</h3>
    </div>
  );
}

export default function Profile() {
  return (
    <div className="modal-layer">
      <Bar />
      <div className="modal-container">
        <PageTitle name="Profile" />
        <div style={{ padding: 10 }}>
          <div style={{ marginBottom: 40 }}>
            <SectionTitle title="인적사항" />
            <ul>
              {person.map((item) => (
                <li key={item} style={{ marginBottom: 8 }}>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <span
                      style={{
                        display: "block",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: "var(--Basic-900)",
                      }}
                    />
                    <p className="body1">{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ marginBottom: 40 }}>
            <SectionTitle title="자격증" />
            <ul>
              {certificate.map((item) => (
                <li key={item.name} style={{ marginBottom: 8 }}>
                  <div
                    className="body1"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>{item.name}</p>
                    <p style={{ color: "var(--Basic-400)" }}>{item.period}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ marginBottom: 40 }}>
            <SectionTitle title="기술" />
            <ul>
              {skills.map((item) => (
                <li key={item.name} style={{ marginBottom: 10 }}>
                  <div
                    style={{ display: "flex", gap: 10, alignItems: "center" }}
                  >
                    <Image width={24} src={item.image} alt={item.name} />
                    <p className="h4">{item.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
