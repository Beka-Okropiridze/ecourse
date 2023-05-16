

export const Raiting = ({raiting}) => {
                                                            // raiting if = 3
    let raitingArray = Array(5).fill(false);               // [true, true, true, false, false]
    
    for(let i=0; i<raiting; i++) {
        raitingArray[i] = true
    }

  return (
    <>
        {
            raitingArray.map((value,index) => ( 
                value ? ( 
                    <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                ) : (
                    <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
                )
            ))
        }
    </>
    )
};





