export default function AdsBlock({ ads }) {
  return (
    <a href={ads.url}>
      <img src={ads.img} alt="" />      
    </a>
  );
}