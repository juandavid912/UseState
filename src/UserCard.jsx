import "./UserCard.css"


function UserCard (props) {

    return (
        <div>
            <div className="">

                <div className="">
                    <div className="card bg-primary pt-3 border-radius">
                        <div className="card-body ">
                             <div className="rounded-circle border border-white w-25" style={{backgroundImage: `url(${props.imagen})`, backgroundRepeat:"no-repeat" ,backgroundSize:"contain", borderRadius: 1000, width:"100px", height:"70px"  }} ></div> 
                             {/* <img src="" className="rounded-circle border border-white w-25" style={{backgroundImage: `(${props.imagen})` }} alt="" />  */}
                            <p className="card-text fs-6 text-white opacity-50">Repor for</p>
                            <p className="card-text fs-1 text-white">{/* Jeremy Robson */} {props.nombre} </p>
                        </div>
                    </div>


                </div>

                <div className="">
                    <div className=" bg-primary-subtle rounded mt-6  p-4">
                        <p className="text-white opacity-50">
                            Daily
                        </p>

                        <strong className="">
                            <p className="text-white">
                                Weekly
                            </p>

                        </strong>

                        <p className="text-white opacity-50">
                            Monthly
                        </p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default UserCard