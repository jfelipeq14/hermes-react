export default function HermesLogo() {
  return (
    // agregar logo de hermes ubicado en los assets
    <picture>
      <source srcSet="/hermes.svg" type="image/webp" />
      <source srcSet="/hermes.svg" type="image/png" />
      <img src="/hermes.svg" className="img-fluid" alt="Hermes" />
    </picture>
  );
}
