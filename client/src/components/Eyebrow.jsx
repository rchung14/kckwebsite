// Gold eyebrow label with leading line (and trailing line when centered).
export default function Eyebrow({ children, centered = false }) {
  return (
    <div className={centered ? 'eyebrow eyebrow-centered' : 'eyebrow'}>
      <span className="eyebrow-line" />
      <span className="eyebrow-text">{children}</span>
      {centered && <span className="eyebrow-line" />}
    </div>
  );
}
