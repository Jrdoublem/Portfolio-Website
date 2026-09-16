const nodes = [
  [8, 18, 0], [20, 72, 1.4], [34, 34, 2.8], [48, 82, .8],
  [62, 22, 2], [74, 62, 3.2], [88, 14, 1], [94, 78, 2.4],
];

export default function TechBackdrop() {
  return <div className="tech-backdrop" aria-hidden="true">
    <div className="tech-grid" />
    <div className="tech-scan" />
    <div className="tech-orbit tech-orbit-a"><i /><i /><i /></div>
    <div className="tech-orbit tech-orbit-b"><i /><i /></div>
    <div className="tech-circuit tech-circuit-a" />
    <div className="tech-circuit tech-circuit-b" />
    <div className="tech-nodes">
      {nodes.map(([x,y,delay], index) => <i key={index} style={{'--x':`${x}%`,'--y':`${y}%`,'--delay':`${delay}s`}} />)}
    </div>
    <div className="tech-readout readout-a">SYS / ONLINE<br />0101.1100</div>
    <div className="tech-readout readout-b">LATENCY 08MS<br />NODE_07</div>
  </div>;
}
