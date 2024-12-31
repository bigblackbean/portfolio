import { Role } from "../variants";

export default function MarkTable({ roles }: { roles: Role[] }) {
  const score: number[] = [1, 2, 3, 4, 5];

  return (
    <div>
      <h4 className="h4" style={{ marginBottom: 8 }}>
        프로젝트 참여도
      </h4>
      <table>
        <tbody>
          {roles.map((item) => (
            <tr key={item.id}>
              <th
                className="body1"
                style={{
                  width: 48,
                  padding: "4px 0",
                  textAlign: "left",
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
                          item.score > index
                            ? "var(--Basic-900)"
                            : "var(--Basic-300)",
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
