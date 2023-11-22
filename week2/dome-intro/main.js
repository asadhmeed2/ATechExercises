const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }

let input = ''

function onInputChange(e){
   input = e.target.value
}
const checkReservation = ()=>{
    
    if(!input){
        return;
    }
    
    const lowercaseNameReservations = {};

    for (let alfabet in reservations) {
        lowercaseNameReservations[alfabet.toLowerCase()] = reservations[alfabet];
    }

    if (lowercaseNameReservations[input.toLowerCase()]) {
        if (!lowercaseNameReservations[input.toLowerCase()].claimed) {
            lowercaseNameReservations[input.toLowerCase()].claimed = true;
            console.log(`Welcome, ${input}`);
        } else {
            console.log("Hmm, someone already claimed this reservation");
        }
    } else {
    lowercaseNameReservations[input.toLowerCase()] = { claimed: true };
    }
}

