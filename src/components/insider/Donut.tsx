"use client";

import { useState } from "react";

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

/**
 * Donut avec survol : pointer un segment (sur l'anneau ou dans la légende)
 * l'épaissit, atténue les autres, et affiche son libellé et sa part au centre.
 */
export const DonutChart = ({ title, segments, unit }: DonutChartProps) => {
  const [active, setActive] = useState<number | null>(null);
  const focus = active !== null ? segments[active] : null;

  return (
    <div>
      <Label size={10.5} spacing=".16em" style={{ marginBottom: 16 }}>
        {title}
      </Label>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap",
        }}
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
            {segments.map((segment, index) => (
              <circle
                key={segment.label}
                cx="60"
                cy="60"
                r={DONUT_RADIUS}
                fill="none"
                stroke={segment.color}
                strokeWidth={active === index ? 14 : 11}
                strokeDasharray={segment.dash}
                strokeDashoffset={segment.offset}
                opacity={active === null || active === index ? 1 : 0.35}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                style={{ cursor: "pointer", transition: "opacity .12s ease" }}
              >
                <title>
                  {segment.label} · {pct(segment.pct)}
                </title>
              </circle>
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
              padding: "0 14px",
              textAlign: "center",
            }}
          >
            {focus ? (
              <>
                <span
                  style={{ fontFamily: MONO, fontSize: 18, color: focus.color }}
                >
                  {pct(focus.pct)}
                </span>
                <span
                  style={{
                    fontSize: 8,
                    letterSpacing: ".04em",
                    color: colors.muted,
                    lineHeight: 1.2,
                    marginTop: 2,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {focus.label}
                </span>
              </>
            ) : (
              <>
                <span
                  style={{ fontFamily: MONO, fontSize: 20, color: colors.text }}
                >
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
              </>
            )}
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
          {segments.map((segment, index) => (
            <div
              key={segment.label}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
                fontSize: 12,
                cursor: "pointer",
                opacity: active === null || active === index ? 1 : 0.45,
                transition: "opacity .12s ease",
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
              <span
                style={{ fontFamily: MONO, color: colors.muted, flex: "none" }}
              >
                {pct(segment.pct)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
