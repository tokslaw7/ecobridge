function getCustomTime(dateStr) {
    let date = new Date(dateStr);
    
    if(isNaN(date)){
        return '00:00'
    }
    const hours = date.getHours()
    const minutes = date.getMinutes()

    return `${hours}:${minutes} ${hours >= 12  ? 'PM' : 'AM'}`
  }
  
    export default getCustomTime