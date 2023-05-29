import  "./TimeCard.css";

function TimeCard (props){

return(
    <div>
          <div className="">
            <div className=" color rounded">

            </div>
            <div className="bg-primary rounded hrs p-4">
              <div className='d-flex justify-content-between'>

                <strong>
                  <p className="text-white">
                    {props.activity}
                  </p>
                </strong>

                <p className=" text-white">
                  ...
                </p>
              </div>


              <h2 className="fs-9 text-white">
                {/* 32hrs */}
                {props.horas}
              </h2>

              <p className="text-white opacity-50">
                {/* Last Week - 36hrs */}
                {props.nose}
              </p>
            </div>
          </div>
    </div>
)
}

export default TimeCard 