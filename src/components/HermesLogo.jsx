export default function HermesLogo() {
  return(
    // agregar logo de hermes ubicado en los assets
    <picture>
      <source srcSet="../assets/hermes.webp" type="image/webp" />
      <source srcSet="../assets/hermes.png" type="image/png" />
      <img src="../assets/hermes.svg" className="img-fluid" alt="Hermes" />
    </picture>
  )
}
