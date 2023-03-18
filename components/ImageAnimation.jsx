import Image from 'next/image';


function ImageAnimation({image, alt, width, right, bottom, position}) {
  return (
    <div>
        <Image
          style={{ width, position: 'absolute', bottom, right, animation: 'slide-up 1s forwards' }}
          src={image}
          alt={alt}
        />

        {
          position === 'bottom' 
          ? (
            <style jsx>{`
              @keyframes slide-up {
                0% {
                  bottom: -400px;
                }
                100% {
                  bottom: -260px;
                }
              }
            `}</style>
            
          ) 
          : (
            <style jsx>{`
              @keyframes slide-up {
                0% {
                  right: -400px;
                }
                100% {
                  right: 70px;
                }
              }
            `}</style>
          )
        }
    </div>
  );
}
export default ImageAnimation;