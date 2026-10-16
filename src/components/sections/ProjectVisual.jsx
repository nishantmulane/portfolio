function NetworkVisual() {
  return <div className="network-visual">
    <div className="network-route" aria-hidden="true"><span/></div>
    {["Sender", "Router 01", "Router 02", "Gateway", "Receiver"].map((node, index) => <div className="network-node" key={node}>
      <span className={`network-node-mark ${index === 0 || index === 4 ? "is-endpoint" : ""}`}/>
      <span>{node}</span>
    </div>)}
    <p>MESSAGE ROUTE <span>·</span> 05 NODES</p>
  </div>;
}

function StoreVisual() {
  return <div className="store-visual">
    <div className="store-heading"><span>SHOPEO / COLLECTION</span><span>PRODUCTS</span></div>
    <div className="store-content">
      <div className="store-copy"><span>LIVE PRODUCT DATA</span><strong>Product listings</strong><span>OPEN PRODUCT DETAIL&nbsp; ↗</span></div>
      <div className="store-products" aria-hidden="true">
        <span/><span/><span/><span/>
      </div>
    </div>
  </div>;
}

function CubeVisual() {
  return <div className="cube-visual">
    <div className="cube-scene" aria-hidden="true"><div className="cube-object">
      <span className="cube-face cube-front"/><span className="cube-face cube-back"/>
      <span className="cube-face cube-right"/><span className="cube-face cube-left"/>
      <span className="cube-face cube-top"/><span className="cube-face cube-bottom"/>
    </div></div>
    <div className="cube-caption"><span>SCENE 01</span><span>GEOMETRY / LIGHT</span></div>
  </div>;
}

const visualComponents = {
  network: NetworkVisual,
  storefront: StoreVisual,
  cube: CubeVisual,
};

export default function ProjectVisual({ project, active = false, mobile = false }) {
  const Visual = visualComponents[project.visual];
  const className = `project-preview-panel${active ? " is-active" : ""}${mobile ? " is-mobile" : ""}`;

  return <div className={className} aria-hidden="true">
    <div className="browser-frame">
      <div className="browser-chrome">
        <span className="browser-dots"><i/><i/><i/></span>
        <span className="browser-address">{project.title}</span>
        <span className="browser-menu-mark">···</span>
      </div>
      <div className={`project-visual project-visual--${project.visual}`}>
        <Visual/>
      </div>
    </div>
  </div>;
}
