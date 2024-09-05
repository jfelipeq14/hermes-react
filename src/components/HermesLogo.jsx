export default function HermesLogo() {
  return(
    // agregar logo de hermes ubicado en los assets
    <picture>
      <source srcSet="../../public/hermes.svg" type="image/webp" />
      <source srcSet="../../public/hermes.svg" type="image/png" />
      <img src="../../public/hermes.svg" className="img-fluid" alt="Hermes" />
    </picture>
  )
}
