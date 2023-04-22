export default function SideAds({ img, link, children }) {
  return (
    <a href={link}>
      <img src={img.url} alt="" />
      {children}
    </a>
  );
}