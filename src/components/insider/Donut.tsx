import { colors, MONO } from "@/design/tokens";
import { DONUT_RADIUS, type DonutSegment } from "@/lib/allocation";
import { pct } from "@/lib/format";
import { Dot, Label } from "./ui";

type DonutChartProps = {
  title: string;
  segments: DonutSegment[];
  /** Libellé sous le compteur central — « secteurs », « zones »… */
  unit: string;
};

export const DonutChart = ({ title, segments, unit }: DonutChartProps) => (
  <div>
    <Label size={10.5} spacing=".16em" style={{ marginBottom: 16 }}>
      {title}
    </Label>

    <div
      style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}
    >
      <div
        style={{ position: "relative", width: 120, height: 120, flex: "none" }}
      >
        <svg
          viewBox="0 0 120 120"
          style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}
        >
          <circle
            cx="60"
            cy="60"
            r={DONUT_RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="11"
          />
          {segments.map((segment) => (
            <circle
              key={segment.label}
              cx="60"
              cy="60"
              r={DONUT_RADIUS}
              fill="none"
              stroke={segment.color}
              strokeWidth="11"
              strokeDasharray={segment.dash}
              strokeDashoffset={segment.offset}
            />
          ))}
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: MONO, fontSize: 20, color: colors.text }}>
            {segments.length}
          </span>
          <span
            style={{
              fontSize: 8.5,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: colors.muted2,
            }}
          >
            {unit}
          </span>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          minWidth: 150,
          display: "flex",
          flexDirection: "column",
          gap: 7,
        }}
      >
        {segments.map((segment) => (
          <div
            key={segment.label}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
              fontSize: 12,
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: colors.text2,
                minWidth: 0,
              }}
            >
              <Dot color={segment.color} />
              <span
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {segment.label}
              </span>
            </span>
            <span style={{ fontFamily: MONO, color: colors.muted, flex: "none" }}>
              {pct(segment.pct)}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
