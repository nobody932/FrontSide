const BannerComponent = () => {
  return (
    <ParallaxBanner
      layers={[{ image: "/static/banner.jpg", speed: -15 }]}
      className="aspect-[2/1]"
    />
  );
};
export default BannerComponent;
