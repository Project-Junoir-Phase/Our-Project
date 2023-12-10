import { useNavigate } from "react-router-dom";

const ReviewAndSubmit = ({
  startingPoint,
  endingPoint,
  ridesDetails,
  reservationDate,
  reservationTime,
  price,
  onPrevious,
  onSubmit,
}) => {
  let {
    smoking,
    pet,
    backSeat,
    loggage,
    carColor,
    carPlate,
    carType,
    seatsBooked,
    seatsAv,
  } = ridesDetails;
  console.log(ridesDetails,"hello");
  console.log(startingPoint,
    endingPoint,
    ridesDetails,
    reservationDate,
    reservationTime,
    price,"first data");

    const navigate = useNavigate()
    // const handleRedirectAllRides = () => {
    
    //   navigate('/AllRides', { replace: true });
    // };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Review and Submit
        </h2>
        <div>
          <section className="bg-white p-4 rounded">
            <article className="flex justify-between items-center">
              <h3 className="font-semibold">Starting Point</h3>
              <p>{startingPoint}</p>
            </article>
            <article className="flex justify-between items-center">
              <h3 className="font-semibold">Ending Point</h3>
              <p>{endingPoint}</p>
            </article>
            <article className="flex justify-between items-center">
              <h3 className="font-semibold">Reservation Date</h3>
              <p>{reservationDate}</p>
            </article>
            <article className="flex justify-between items-center">
              <h3 className="font-semibold">Reservation Time</h3>
              <p>{reservationTime}</p>
            </article>
            <article className="flex justify-between items-center">
              <h3 className="font-semibold">Price</h3>
              <p>{price}</p>
            </article>
          </section>
          <div className="flex justify-between mt-4">
            <input
              type="button"
              value="Previous"
              onClick={onPrevious}
              className=" text-[19px] p-2 rounded-tr-lg  rounded-br-lg text-white font-semibold  transition-colors cursor-pointer [border:none] py-0 px-[31px] bg-orchid absolute top-[485px] left-[599px] rounded-6xl w-[145px] h-[50px] items-center justify-center box-border hover:bg-mediumorchid-100 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
            ></input>
            <input
              type="button"
              value="Submit"
              onClick={() =>
                {onSubmit(
                  startingPoint,
                  endingPoint,
                  reservationDate,
                  reservationTime,
                  price,
                  smoking,
                  pet,
                  backSeat,
                  loggage,
                  carColor,
                  carPlate,
                  carType,
                  seatsBooked,
                  seatsAv,
                   )
                   navigate('/LandingPage', { replace: true });
                  }}
              className="text-[19px] p-2 rounded-l-lg  text-white font-semibold transition-colors cursor-pointer [border:none] py-0 px-[31px] bg-orchid absolute top-[487px] left-[989px] rounded-6xl w-[145px] h-[50px] items-center justify-center box-border hover:bg-mediumorchid-100 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewAndSubmit;
