export const Maps = () => {
  return (
    <div className="p-1 w-full h-[300px] md:h-[450px] flex flex-col">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.464789763558!2d-58.57338368476974!3d-34.61546198044836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaea670d5dc9%3A0x2198c0c4e022b4a2!2sObelisco!5e0!3m2!1ses-419!2sar!4v1638829341506!5m2!1ses-419!2sar"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};
