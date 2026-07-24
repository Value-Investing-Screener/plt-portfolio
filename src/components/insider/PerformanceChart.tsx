"use client";

import { useRef, useState } from "react";

import { colors, MONO } from "@/design/tokens";
import { fmt } from "@/lib/format";
import type { Performance } from "@/lib/performance";

const VIEW_W = 1000;
const VIEW_H = 380;

/**
 * Courbe de valeur cumulée avec repère au survol : une ligne verticale sur le
 * mois pointé, un point par portefeuille, et une infobulle listant chaque
 * valeur. Le repère se cale sur le point le plus proche du curseur.
 */
export const PerformanceChart = ({
  series,
  chartGeometry,
  monthLabels,
}: Pick<Performance, "series" | "chartGeometry" | "monthLabels">) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const pointCount = series[0]?.coords.length ?? 0;

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const box = wrapper.current?.getBoundingClientRect();
    if (!box || pointCount === 0) return;

    // Position du curseur ramenée dans le repère du SVG, puis mois le plus proche.
    const svgX = ((event.clientX - box.left) / box.width) * VIEW_W;
    let nearest = 0;
    let best = Infinity;
    series[0].coords.forEach((point, index) => {
      const distance = Math.abs(point.x - svgX);
      if (distance < best) {
        best = distance;
        nearest = index;
      }
    });
    setActive(nearest);
  };

  const guideX = active !== null ? series[0].coords[active].x : 0;
  // L'infobulle bascule à gauche du repère au-delà de la moitié du graphe.
  const tooltipLeftPct = (guideX / VIEW_W) * 100;
  const flip = tooltipLeftPct > 58;

  return (
    <div
      ref={wrapper}
      onMouseMove={handleMove}
      onMouseLeave={() => setActive(null)}
      style={{ position: "relative", cursor: "crosshair" }}
    >
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        style={{ width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label="Valeur mensuelle cumulée des portefeuilles"
      >
        {chartGeometry.yTicks.map((tick) => (
          <g key={tick.y}>
            <line
              x1={chartGeometry.left}
              x2={chartGeometry.right}
              y1={tick.y}
              y2={tick.y}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth={1}
            />
            <text
              x={chartGeometry.left - 8}
              y={tick.y}
              textAnchor="end"
              dy=".32em"
              fill={colors.muted2}
              fontFamily="var(--font-mono), monospace"
              fontSize="10.5"
            >
              {tick.label}
            </text>
          </g>
        ))}

        <line
          x1={chartGeometry.left}
          x2={chartGeometry.right}
          y1={chartGeometry.baselineY}
          y2={chartGeometry.baselineY}
          stroke="rgba(255,255,255,0.16)"
          strokeWidth={1}
          strokeDasharray="4 4"
        />

        {chartGeometry.xTicks.map((tick) => (
          <text
            key={tick.x}
            x={tick.x}
            y={360}
            textAnchor="middle"
            fill={colors.muted2}
            fontFamily="var(--font-mono), monospace"
            fontSize="10.5"
          >
            {tick.label}
          </text>
        ))}

        {/* Repère vertical au survol */}
        {active !== null && (
          <line
            x1={guideX}
            x2={guideX}
            y1={chartGeometry.yTicks[0]?.y ?? 24}
            y2={338}
            stroke="rgba(255,255,255,0.28)"
            strokeWidth={1}
          />
        )}

        {series.map((serie) => (
          <polyline
            key={serie.key}
            points={serie.points}
            fill="none"
            stroke={serie.color}
            strokeWidth={2.2}
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity={active === null ? 1 : 0.85}
          />
        ))}

        {/* Fin de série (état au repos) */}
        {active === null &&
          series.map((serie) => (
            <g key={`end-${serie.key}`}>
              <circle
                cx={serie.endX}
                cy={serie.endY}
                r={3.6}
                fill={serie.color}
              />
              <text
                x={serie.endLabelX}
                y={serie.endY}
                dy=".32em"
                fill={serie.color}
                fontFamily="var(--font-mono), monospace"
                fontSize="11"
                fontWeight={500}
              >
                {serie.endValueShort}
              </text>
            </g>
          ))}

        {/* Points sur le mois survolé */}
        {active !== null &&
          series.map((serie) => (
            <circle
              key={`dot-${serie.key}`}
              cx={serie.coords[active].x}
              cy={serie.coords[active].y}
              r={4}
              fill={serie.color}
              stroke={colors.bg}
              strokeWidth={1.5}
            />
          ))}
      </svg>

      {/* Infobulle HTML superposée */}
      {active !== null && (
        <div
          style={{
            position: "absolute",
            top: 8,
            left: `${tooltipLeftPct}%`,
            transform: flip ? "translateX(-100%)" : "none",
            marginLeft: flip ? -12 : 12,
            pointerEvents: "none",
            background: colors.bar,
            border: `1px solid ${colors.borderStrong}`,
            borderRadius: 6,
            padding: "10px 12px",
            minWidth: 168,
            boxShadow: "0 8px 28px rgba(0,0,0,0.45)",
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontFamily: MONO,
              fontSize: 11,
              color: colors.muted2,
              letterSpacing: ".04em",
              marginBottom: 8,
            }}
          >
            {monthLabels[active]}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {series.map((serie) => (
              <div
                key={serie.key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 14,
                  fontSize: 12,
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    color: colors.text2,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      background: serie.color,
                      flex: "none",
                    }}
                  />
                  {serie.name.replace(/^Portefeuille\s+/i, "")}
                </span>
                <span style={{ fontFamily: MONO, color: colors.textHi }}>
                  {fmt(serie.values[active])} €
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
