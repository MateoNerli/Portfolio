export const Maps = () => {
  return (
    <div className="p-1 w-full h-[300px] md:h-[450px] flex flex-col">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13330.9273304196!2d-60.19949785!3d-33.3519551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1706120075996!5m2!1ses!2sar"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};
