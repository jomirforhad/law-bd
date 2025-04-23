
export const getStoredAppointment = ()=>{
    const storedData = localStorage.getItem('cart-data');
    if(storedData) return JSON.parse(storedData);
    else return [];
}

export const setStoredAppointment =(lawyer)=>{
    const storedData = getStoredAppointment();
    const isExistData = storedData.find( appoinmentData => appoinmentData?.id === lawyer.id )
    if(isExistData) return console.log('Already Added data')
    storedData.push(lawyer);
    localStorage.setItem('cart-data',JSON.stringify(storedData))
}

export const removeStoredAppointment =(id)=>{
    const storedData = getStoredAppointment();
    const remainingData = storedData.filter(appointmentData => appointmentData.id !== id)
    localStorage.setItem('cart-data',JSON.stringify(remainingData));
}