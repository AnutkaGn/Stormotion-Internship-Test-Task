type Properties = {
  width?: number;
  height?: number;
};

const MatchstickIcon = ({
  width = 30,
  height = 90,
}: Properties): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 80"
      width={width}
      height={height}
    >
      <rect x="11" y="12" width="2" height={height} fill="#F4A460" />
      <defs>
        <radialGradient
          id="matchHead"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" style={{ stopColor: '#FFA07A', stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: '#CD5C5C', stopOpacity: 1 }}
          />
        </radialGradient>
      </defs>
      <rect
        x="11"
        y="12"
        width="2"
        height={height}
        fill="#DEB887"
        fillOpacity="0.5"
      />
      <ellipse cx="12" cy="8" rx="3.5" ry="5" fill="url(#matchHead)" />
      <ellipse
        cx="11"
        cy="6"
        rx="1"
        ry="1.5"
        fill="#FFFACD"
        fillOpacity="0.7"
      />
    </svg>
  );
};

export { MatchstickIcon };
