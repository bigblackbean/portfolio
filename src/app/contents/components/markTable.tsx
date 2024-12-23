import { Role } from "../utils";

export default function MarkTable({ roles }: { roles: Role[] }) {
  const score: number[] = [1, 2, 3, 4, 5];

  return (
    <div>
      <h5 style={{ marginBottom: 8, fontSize: 14, fontWeight: 700 }}>
        프로젝트 참여도
      </h5>
      <table>
        <tbody>
          {roles.map((item) => (
            <tr key={item.id}>
              <th
                style={{
                  width: 48,
                  padding: "4px 0",
                  textAlign: "left",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {item.header}
              </th>
              <td>
                <div style={{ display: "flex", gap: 8 }}>
                  {score.map((num, index) => (
                    <span
                      key={num}
                      style={{
                        display: "block",
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        backgroundColor:
                          item.score > index ? "#000" : "#cdcdcd",
                      }}
                    />
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
